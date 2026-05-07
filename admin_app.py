from flask import Flask, render_template, request, redirect, url_for
import json
import os

app = Flask(__name__)

DATA_FILE = 'resource_data.json'

# 默认数据（首次自动生成）
DEFAULT = {
    "official_links": [
        {"name": "留学中国网（教育部留学服务中心）", "url": "https://www.campuschina.org"},
        {"name": "中国政府奖学金系统（CSC）", "url": "https://www.csc.edu.cn"},
        {"name": "国家移民管理局", "url": "https://www.nia.gov.cn"},
        {"name": "中国外交部", "url": "https://www.fmprc.gov.cn"},
        {"name": "中国教育部", "url": "https://www.moe.gov.cn"}
    ],
    "templates": [
        {"name": "JW201/JW202签证申请表", "url": "/static/files/jw201-jw202-guide.pdf"},
        {"name": "外国人体格检查表", "url": "/static/files/physical-exam-form.pdf"},
        {"name": "住宿登记证明模板", "url": "/static/files/accommodation-template.pdf"},
        {"name": "在学证明/在读证明模板", "url": "/static/files/enrollment-cert-template.pdf"}
    ],
    "tools": [
        {
            "category": "翻译",
            "items": [
                {"name": "Google 翻译", "url": "https://translate.google.com"},
                {"name": "DeepL", "url": "https://www.deepl.com/translator"},
                {"name": "百度翻译", "url": "https://fanyi.baidu.com"}
            ]
        },
        {
            "category": "地图导航",
            "items": [
                {"name": "高德地图", "url": "https://www.amap.com"},
                {"name": "百度地图", "url": "https://map.baidu.com"},
                {"name": "滴滴出行", "url": "https://www.didi.com"}
            ]
        },
        {
            "category": "支付",
            "items": [
                {"name": "支付宝", "url": "https://www.alipay.com"},
                {"name": "微信支付", "url": "https://www.weixin.qq.com"}
            ]
        },
        {
            "category": "中文学习",
            "items": [
                {"name": "Pleco 词典", "url": "https://www.pleco.com"},
                {"name": "HSK Online", "url": "https://www.hskonline.com"},
                {"name": "Duolingo", "url": "https://www.duolingo.com"},
                {"name": "Skritter", "url": "https://www.skritter.com"}
            ]
        },
        {
            "category": "外卖/生活",
            "items": [
                {"name": "美团", "url": "https://www.meituan.com"},
                {"name": "饿了么", "url": "https://www.ele.me"},
                {"name": "淘宝", "url": "https://www.taobao.com"},
                {"name": "京东", "url": "https://www.jd.com"}
            ]
        },
        {
            "category": "出行购票",
            "items": [
                {"name": "12306（火车票）", "url": "https://www.12306.cn"},
                {"name": "携程", "url": "https://www.ctrip.com"}
            ]
        }
    ],
    "policies": [
        {"name": "留学中国网 — 外国留学生来华须知", "url": "https://www.campuschina.org"},
        {"name": "教育部 — 留学政策文件", "url": "http://www.moe.gov.cn/jyb_xxgk/"},
        {"name": "中国高等教育专业目录", "url": "http://www.moe.gov.cn/s78/A08/"},
        {"name": "历年留学生数据报告", "url": "http://www.moe.gov.cn/jyb_sjzl/"},
        {"name": "国家移民管理局 — 签证与居留政策", "url": "https://www.nia.gov.cn"}
    ]
}

def load_data():
    if not os.path.exists(DATA_FILE):
        save_data(DEFAULT)
        return DEFAULT
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_data(data):
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

# ========== 前台：资源中心 ==========
@app.route('/resources')
def resources():
    data = load_data()
    return render_template('resources.html',
                           official_links=data['official_links'],
                           templates=data['templates'],
                           tools=data['tools'],
                           policies=data['policies'])

# ========== 后台首页 ==========
@app.route('/admin')
def admin_dashboard():
    return render_template('admin_dashboard.html')

# ========== 通用列表管理（官方链接、模板、政策） ==========
@app.route('/admin/<category>')
def admin_list(category):
    data = load_data()
    if category not in data:
        return "类别不存在", 404
    title_map = {
        'official_links': '官方网站管理',
        'templates': '表格与模板管理',
        'policies': '政策与数据查询管理'
    }
    return render_template('admin_list.html',
                           title=title_map.get(category, category),
                           items=data[category],
                           category=category)

@app.route('/admin/<category>/save', methods=['POST'])
def admin_list_save(category):
    data = load_data()
    new_items = []
    i = 0
    while True:
        name = request.form.get(f'name_{i}')
        url = request.form.get(f'url_{i}')
        if name is None:  # 没有更多行了
            break
        if name.strip() and url.strip():
            new_items.append({'name': name.strip(), 'url': url.strip()})
        i += 1
    data[category] = new_items
    save_data(data)
    return redirect(url_for('admin_list', category=category))

@app.route('/admin/<category>/delete/<int:index>', methods=['POST'])
def admin_list_delete(category, index):
    data = load_data()
    items = data.get(category, [])
    if 0 <= index < len(items):
        items.pop(index)
        save_data(data)
    return redirect(url_for('admin_list', category=category))

# ========== 工具管理（二级嵌套） ==========
@app.route('/admin/tools')
def admin_tools():
    data = load_data()
    return render_template('admin_tools.html', tools=data['tools'])

@app.route('/admin/tools/save', methods=['POST'])
def admin_tools_save():
    new_tools = []
    i = 0
    while True:
        category = request.form.get(f'category_{i}')
        if category is None or category.strip() == '':
            break
        items_str = request.form.get(f'items_{i}', '')
        items = []
        if items_str.strip():
            for pair in items_str.split(';'):
                pair = pair.strip()
                if '|' in pair:
                    name, url = pair.split('|', 1)
                    name = name.strip()
                    url = url.strip()
                    if name and url:
                        items.append({'name': name, 'url': url})
        new_tools.append({
            'category': category.strip(),
            'items': items
        })
        i += 1
    data = load_data()
    data['tools'] = new_tools
    save_data(data)
    return redirect(url_for('admin_tools'))

if __name__ == '__main__':
    app.run(debug=True, port=5000)
