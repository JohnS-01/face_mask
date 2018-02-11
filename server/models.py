""" Model Classes """

from flask_login import UserMixin
from app import db

class User(UserMixin, db.Model):
    """ This will be the User class and will hold information regarding user accounts. """
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True)  # will not allow a user to register twice with the same email address
    password = db.Column(db.String(300))
