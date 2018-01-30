""" Main Controller """

import re
from flask import request, redirect, session, flash, render_template
from app import app, db
from models import User
from hashutils import make_pw_hash, check_pw_hash

@app.before_request
def require_login():
    """ Lists pages that require user to be logged in to view. """
    allowed_routes = ['login', 'signup']
    if request.endpoint not in allowed_routes and 'email' not in session:
        return redirect('/login')

@app.route('/login', methods=['GET','POST'])
def login():
    """ Checks user login information against the DB and logs them in if it's correct. """
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        user = User.query.filter_by(email=email).first()
        if user and check_pw_hash(password, user.pwd_hash):
            session['email'] = email
            return redirect('/home')
        elif user and not check_pw_hash(password, user.pwd_hash):
            flash("Password is incorrect!", 'error')
        else: 
            flash("Email does not exist, please sign up!", 'error')
    
    return render_template('/login.html')

@app.route('/signup', methods=['GET','POST'])
def signup():
    """ Allows the user to create an accout -- we can add to this later. """
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        verify = request.form['verify']
        # Validate user data
        # TODO: Check on signup error messages - right now only getting not valid no matter what
        email_check = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")  # sourced from http://emailregex.com
        result = email_check.match(email)
        if not result:
            flash("That is not a valid email.", 'error')
        elif len(password) < 3 or len(password) < 20 or " " in password:
            flash("That is not a valid password.", 'error')
        elif password != verify:
            flash("Passwords do not match.", 'error')
        else:  # Check if user already exists
            existing_user = User.query.filter_by(email=email).first()

            if existing_user:
                flash("That email is already in use.", 'error')
            else:  # Create new user
                new_user = User(email, make_pw_hash(password))
                db.session.add(new_user)
                db.session.commit()
                session['email'] = email
                return redirect('/home')  
    return render_template("/signup.html")              

@app.route('/logout', methods=['GET'])
def logout():
    """ Logs the user out / ends the session. """
    del session['email']
    return redirect('/login')

@app.route('/home')
def index1():
    return "Comtraya!!"

if __name__ == "__main__":
    app.run()