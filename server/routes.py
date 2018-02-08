""" Main Controller """

from flask import jsonify, redirect, url_for
from flask_login import LoginManager, login_required, logout_user, current_user
from werkzeug.security import generate_password_hash, check_password_hash

from app import app, db
from models import User

login_manager = LoginManager()
login_manager.init(app)
#login_manager.login_view = 'login'

@login_manager.unauthorized_handler
def unauthorized_callback():
    return redirect('/login?next=' + request.path)

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

@app.errorhandler(400)
def bad_request(error):
    return make_response(jsonify({'error': 'Bad request'}), 400)

@app.route('/hello')
def hello():
    return "Hello World" #Python test endpoint

@app.route('/', methods=['GET'])
def index():
    return render_template("index.html") # React Home

@app.route('/login', methods=['GET', 'POST'])
def login():
    pass
    """
    if request.method == 'POST':
        usr = request.args.get("username")
        pwd = request.args.get("password")
    """

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    pass

@app.route('/dashboard')
@login_required
def dashboard():
    pass

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))
