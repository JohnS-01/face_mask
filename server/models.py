""" Model Classes """

from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True)  # will not allow a user to register twice with the same email address
    pwd_hash = db.Column(db.String(300))

    def __init__(self, email, pw):
        self.email = email
        self.pwd_hash = 0 # will set up hashutils next and return to this function

    def __repr__(self):
        return f'(self.email)'