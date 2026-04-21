from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def TrangChu():
    return render_template('TrangChu.html')
@app.route('/DiaDiem')
def DiaDiem():
    return render_template('DiaDiem.html')
@app.route('/DichVu')
def DichVu():
    return render_template('DichVu.html')
@app.route('/BaiBao')
def BaiBao():
    return render_template('BaiBao.html')
@app.route('/DiChuyen')
def DiChuyen():
    return render_template('DiChuyen.html')
@app.route('/BanDo')
def BanDo():
    return render_template('BanDo.html')
@app.route('/NoiGiaSu')
def NoiGiaSu():
    return render_template('NoiGiaSu.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
