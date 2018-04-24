""" Main Controller """

from flask import jsonify, request, redirect, make_response, url_for
from flask_login import login_user, login_required, logout_user, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.exc import IntegrityError

from app import app, db, login_manager
from models import User


#login_manager.login_view = 'login'

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@login_manager.unauthorized_handler
def unauthorized_callback():
    return redirect('/api/login?next=' + request.path)

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

@app.errorhandler(400)
def bad_request(error):
    return make_response(jsonify({'error': 'Bad request'}), 400)

@app.route('/', methods=['GET'])
def index():
    """ Python Test Endpoint """
    return "Hello, You have reached a test endpoint, it would appear you have the backend up and running."

@app.route('/api/login', methods=['GET', 'POST'])
def login():
    """ Login user """
    if request.method == 'POST':
        post_data = request.get_json()
        user = User.query.filter_by(email=post_data["email"]).first()
        if user:
            if check_password_hash(user.pwd_hash, post_data["password"]):
                login_user(user)
                return jsonify({"redirect_url": request.args.get("next") or "api/dashboard"}), 200
        else:
            return jsonify({'error': 'Bad request'}), 400
    else:
        if current_user.is_authenticated:
            return jsonify({"redirect_url": request.args.get("next") or "api/dashboard"})
        else:
            return render_template('index.html')

@app.route('/api/join', methods=['GET', 'POST'])
def signup():
    """ Create a new user """
    post_data = request.get_json()
    hashed_password = generate_password_hash(post_data["password"], method='sha256')
    new_user = User(
        email = post_data["email"],
        pwd_hash = hashed_password
    )
    db.session.add(new_user)

    try:
        db.session.commit()
    except IntegrityError:
        return jsonify(message="User with that email already exists"), 409

    response_object = {
        'status': 'success',
        'message': 'User was added!'
    }
    return jsonify(response_object), 201

@app.route('/api/dashboard', methods=['GET'])
@login_required
def dashboard():
    """ Get single user details, pass survey data back
    response_object = {
        'status': 'fail',
        'message': 'User does not exist'
    }
    try:
        survey_data = Survey.query.filter_by(email=current_user.email).first()
        if not survey_data:
            return jsonify(response_object), 404
        else:
            response_object = {
                'status': 'success',
                'data': {
                    'todo': 'todo'
                }
            }
            return jsonify(response_object), 200
    except ValueError:
        return jsonify(response_object), 404
        """

@app.route('/api/logout')
@login_required
def logout():
    logout_user()
    response_object = {
        'status': 'success',
        'message': 'User has been logged out'
        }
    return jsonify(response_object), 200
