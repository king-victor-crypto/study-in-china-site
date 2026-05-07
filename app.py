from flask import Flask, render_template, request, redirect, url_for, jsonify
import mysql.connector
import json
import os
from datetime import datetime
import logging

app = Flask(__name__)
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

DB_CONFIG = {
    'host': 'localhost',
    'database': 'study_in_china',
    'user': 'root',
    'password': '你的数据库密码',
    'charset': 'utf8mb4'
}

def get_db():
    try:
        return mysql.connector.connect(**DB_CONFIG)
    except mysql.connector.Error as e:
        logger.error(f"数据库连接失败: {e}")
        return None

# 资源中心数据文件
RESOURCE_DATA_FILE = 'resource_data.json'

def load_resource_data():
    if not os.path.exists(RESOURCE_DATA_FILE):
        default = {"official_links": [], "templates": [], "tools": [], "policies": []}
        with open(RESOURCE_DATA_FILE, 'w', encoding='utf-8') as f:
            json.dump(default, f, ensure_ascii=False, indent=2)
        return default
    with open(RESOURCE_DATA_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_resource_data(data):
    with open(RESOURCE_DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

# ========== 前台页面 ==========
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/programs')
def programs():
    degree = request.args.get('degree', '')
    major = request.args.get('major', '')
    language = request.args.get('language', '')
    tuition_max = request.args.get('tuition_max', '')
    city = request.args.get('city', '')
    scholarship = request.args.get('scholarship', '')
    halal = request.args.get('halal', '')
    dorm = request.args.get('dorm', '')
    sort = request.args.get('sort', 'recommend')
    page = int(request.args.get('page', 1))
    per_page = 12
    offset = (page - 1) * per_page

    conn = get_db()
    if not conn:
        return "数据库连接失败", 500
    cursor = conn.cursor(dictionary=True)

    sql = "SELECT * FROM programs WHERE is_active = 1"
    count_sql = "SELECT COUNT(*) as total FROM programs WHERE is_active = 1"
    params = []
    conditions = []

    if degree:
        conditions.append("degree_level = %s"); params.append(degree)
    if major:
        conditions.append("(major_cn LIKE %s OR major_en LIKE %s)"); params += [f'%{major}%', f'%{major}%']
    if language:
        conditions.append("teaching_language = %s"); params.append(language)
    if tuition_max:
        conditions.append("tuition_amount <= %s"); params.append(float(tuition_max))
    if city:
        conditions.append("uni_city = %s"); params.append(city)
    if scholarship:
        conditions.append("scholarship_type LIKE %s"); params.append(f'%{scholarship}%')
    if halal:
        conditions.append("halal_canteen_available = %s"); params.append(int(halal))
    if dorm:
        conditions.append("dormitory_available = %s"); params.append(int(dorm))

    if conditions:
        where = " AND " + " AND ".join(conditions)
        sql += where; count_sql += where

    if sort == 'tuition_asc':
        sql += " ORDER BY tuition_amount ASC"
    elif sort == 'tuition_desc':
        sql += " ORDER BY tuition_amount DESC"
    elif sort == 'ranking':
        sql += " ORDER BY uni_qs_rank ASC"
    else:
        sql += " ORDER BY uni_qs_rank ASC"

    sql += " LIMIT %s OFFSET %s"; params += [per_page, offset]

    cursor.execute(count_sql, params[:-2])
    total = cursor.fetchone()['total']
    cursor.execute(sql, params)
    programs = cursor.fetchall()
    cursor.close(); conn.close()

    return render_template('programs.html',
                           programs=programs, total=total, page=page,
                           total_pages=(total + per_page - 1) // per_page,
                           degree=degree, major=major, language=language,
                           tuition_max=tuition_max, city=city, scholarship=scholarship,
                           halal=halal, dorm=dorm, sort=sort)

@app.route('/schools')
def schools():
    city = request.args.get('city', '')
    province = request.args.get('province', '')
    tier = request.args.get('tier', '')
    uni_type = request.args.get('type', '')
    halal = request.args.get('halal', '')
    dorm = request.args.get('dorm', '')
    sort = request.args.get('sort', 'ranking')

    conn = get_db()
    if not conn: return "数据库连接失败", 500
    cursor = conn.cursor(dictionary=True)

    sql = """
    SELECT uni_name_cn, MAX(uni_name_en) as uni_name_en, MAX(uni_city) as uni_city,
           MAX(uni_province) as uni_province, MAX(uni_tier) as uni_tier,
           MAX(uni_type) as uni_type, MIN(uni_qs_rank) as uni_qs_rank,
           MAX(halal_canteen_available) as halal_canteen_available,
           MAX(dormitory_available) as dormitory_available,
           MAX(uni_has_gym) as uni_has_gym, MAX(uni_has_pool) as uni_has_pool,
           MAX(uni_english_program_count) as uni_english_program_count,
           COUNT(*) as program_count
    FROM programs WHERE is_active = 1
    """
    having = []; params = []

    if city: having.append("MAX(uni_city) = %s"); params.append(city)
    if province: having.append("MAX(uni_province) = %s"); params.append(province)
    if tier: having.append("MAX(uni_tier) LIKE %s"); params.append(f'%{tier}%')
    if uni_type: having.append("MAX(uni_type) = %s"); params.append(uni_type)
    if halal: having.append("MAX(halal_canteen_available) = %s"); params.append(int(halal))
    if dorm: having.append("MAX(dormitory_available) = %s"); params.append(int(dorm))

    sql += " GROUP BY uni_name_cn"
    if having: sql += " HAVING " + " AND ".join(having)
    sql += " ORDER BY MIN(uni_qs_rank) ASC" if sort == 'ranking' else " ORDER BY uni_name_cn ASC"

    cursor.execute(sql, params)
    universities = cursor.fetchall()
    cursor.close(); conn.close()

    return render_template('schools.html', universities=universities)

@app.route('/guide')
def guide(): return render_template('guide.html')

@app.route('/life')
def life(): return render_template('life.html')

@app.route('/resources')
def resources():
    data = load_resource_data()
    return render_template('resource.html',
                           official_links=data.get('official_links', []),
                           templates=data.get('templates', []),
                           tools=data.get('tools', []),
                           policies=data.get('policies', []))

@app.route('/consult')
def consult(): return render_template('consult.html')

@app.route('/api/consult', methods=['POST'])
def consult_submit():
    data = request.get_json()
    if not data or not data.get('name') or not data.get('email'):
        return jsonify({'error': '必填字段缺失'}), 400
    conn = get_db()
    if not conn: return jsonify({'error': '服务器错误'}), 500
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO leads (name, email, phone, nationality, current_education, gpa,
                           language_level, budget_range, interested_major, interested_degree,
                           target_city, source_page, message)
        VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
    """, (data.get('name'), data.get('email'), data.get('phone'), data.get('nationality'),
          data.get('current_education'), data.get('gpa'), data.get('language_level'),
          data.get('budget_range'), data.get('interested_major'), data.get('interested_degree'),
          data.get('target_city'), data.get('source_page'), data.get('message')))
    conn.commit(); cursor.close(); conn.close()
    return jsonify({'success': True}), 201

# ========== 后台管理 ==========
@app.route('/admin/leads')
def admin_leads():
    conn = get_db(); cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM leads ORDER BY created_at DESC LIMIT 200")
    leads = cursor.fetchall(); cursor.close(); conn.close()
    return render_template('admin_leads.html', leads=leads)

@app.route('/api/leads/<int:lead_id>', methods=['PUT'])
def update_lead(lead_id):
    data = request.get_json()
    conn = get_db(); cursor = conn.cursor()
    cursor.execute("UPDATE leads SET status=%s WHERE id=%s", (data.get('status'), lead_id))
    conn.commit(); cursor.close(); conn.close()
    return jsonify({'success': True})

@app.route('/admin/resources')
def admin_resources():
    data = load_resource_data()
    return render_template('admin_resources.html', data=data)

@app.route('/admin/resources/save', methods=['POST'])
def admin_resources_save():
    links = []
    i = 0
    while True:
        name = request.form.get(f'name_{i}')
        url = request.form.get(f'url_{i}')
        if name is None: break
        if name and url: links.append({'name': name, 'url': url})
        i += 1
    data = load_resource_data(); data['official_links'] = links
    save_resource_data(data)
    return redirect('/admin/resources')

if __name__ == '__main__':
    app.run(debug=True, port=5002)
