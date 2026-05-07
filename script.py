from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# --- Database Model ---
class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    author = db.Column(db.String(100), nullable=False, default='Anonymous')
    text = db.Column(db.Text, nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

# Create the database
with app.app_context():
    db.create_all()

# --- Routes ---
@app.route('/get_comments')
def get_comments():
    comments = Comment.query.order_by(Comment.timestamp.desc()).all()
    return jsonify([{
        'author': c.author,
        'text': c.text,
        'timestamp': c.timestamp.isoformat()
    } for c in comments])

@app.route('/add_comment', methods=['POST'])
def add_comment():
    data = request.get_json()
    
    if not data or not data.get('text'):
        return jsonify({'error': 'Comment text is required'}), 400
        
    new_comment = Comment(
        author=data.get('author', 'Anonymous'),
        text=data.get('text')
    )
    
    db.session.add(new_comment)
    db.session.commit()
    
    return jsonify({'message': 'Comment posted successfully!'}), 201

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
