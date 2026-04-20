from flask import Flask, render_template, send_from_directory
import os

# We set static_folder to '.' so it looks in the current directory for CSS/JS
app = Flask(__name__, template_folder='.', static_folder='.')

@app.route('/')
def home():
    return render_template('TrangChu.html')

# This extra route ensures that if a file isn't found, 
# Flask tries to find it in your root directory
@app.route('/<path:filename>')
def send_static(filename):
    return send_from_directory(app.static_folder, filename)

if __name__ == '__main__':
    app.run(debug=True, port=5000)