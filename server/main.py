""" Main Controller """

import re
from flask import request, redirect, session, flash, render_template, Response, jsonify
from app import app, db
from models import User
from hashutils import make_pw_hash, check_pw_hash

"""
@app.route('/test', methods=['GET'])
def testing():
    sample_data = {
        'hello' : 'world',
    }
    resp = jsonify(sample_data)
    resp.status_code = 200
    return resp

@app.before_request
def require_login():
   #Lists pages that require user to be logged in to view.
    allowed_routes = ['login', 'signup', 'test']
    if request.endpoint not in allowed_routes and 'email' not in session:
        return redirect('/login')
"""

# TODO : Add error handlers

@app.route('/login', methods=['GET'])
def login():
   # Checks user login information against the DB and logs them in if it's correct. 
    data = {
        'status' : 403, 
        'message' : 'User not logged in.',
        'verified' : False
    }
    resp = jsonify(data)
    resp.status_code = 403
    return resp

@app.route('/login', methods=['POST'])
def new_user():
    email = request.form['email']
    password = request.form['password']
    print(password)
    user = User.query.filter_by(email=email).first()
    if user:
        print("user exists")
    else:
        print("no user")
    # print(check_pw_hash(password, user.pwd_hash))
    # vs_pw = user.pwd_hash
    if user and check_pw_hash(password, user.pwd_hash):
        data = {
            'email' : email,
            'status' : 200,
            'verified' : True
        }
        resp = jsonify(data)
        resp.status_code = 200
        return resp

    elif user and not check_pw_hash(password, user.pwd_hash):
        data = {
            'status' : 401,
            'message' : 'Password is incorrect.',
            'verified' : False
        }
        resp = jsonify(data)
        resp.status_code = 401
        return resp

    else:
        data = {
            'status' : 401,
            'message' : 'Email does not exist, please sign up.',
            'verified' : False
        }
        resp = jsonify(data)
        resp.status_code = 401
        return resp

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    #Allows the user to create an accout -- we can add to this later.
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        verify = request.form['verify']
        # Validate user data
        # TODO: Check on signup error messages - right now only getting not valid no matter what
        email_check = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")  # sourced from http://emailregex.com
        result = email_check.match(email)
        if not result:
            data = {
                'status' : 401,
                'message' : 'That is not a valid email.',
                'verified' : False
            }
            resp = jsonify(data)
            resp.status_code = 401
            return resp

        elif len(password) < 3 or len(password) > 20 or " " in password:
            data = {
                'status' : 401,
                'message' : 'That is not a valid password.',
                'verified' : False
            }
            resp = jsonify(data)
            resp.status_code = 401
            return resp

        elif password != verify:
            data = {
                'status' : 401,
                'message' : 'Passwords do not match.',
                'verified' : False
            }
            resp = jsonify(data)
            resp.status_code = 401
            return resp
        
        else:  # Check if user already exists
            if User.query.filter_by(email=email).first() is not None:
                data = {
                    'status' : 401,
                    'message' : 'That email is already in use.',
                    'verified' : False
                }
                resp = jsonify(data)
                resp.status_code = 401
                return resp
                
            else:  # Create new user
                new_user = User(email=email, pwd_hash=make_pw_hash(password))
                db.session.add(new_user)
                db.session.commit()
                session['email'] = email

                data = {
                    'email' : new_user.email, 
                    'status' : 200,
                    'id' : new_user.id,
                    'verified' : True
                    # 'location' : url for user if we wanna add this later
                }
                resp = jsonify(data)
                resp.status_code = 200
                return resp
    data = {
        'status' : 403, 
        'message' : 'User not logged in.',
        'verified' : False
    }
    resp = jsonify(data)
    resp.status_code = 403
    return resp

@app.route('/logout', methods=['GET'])
def logout():
   # Logs the user out / ends the session.
    del session['email']

    data = {
        'status' : 403, 
        'message' : 'User sucessfully logged out.',
        'verified' : False
    }
    resp = jsonify(data)
    resp.status_code = 403
    return resp

@app.route('/home')
def index1():
    return "Comtraya!!"

if __name__ == "__main__":
    app.run()
