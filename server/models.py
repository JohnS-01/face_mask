""" Model Classes """

from app import db
from flask_login import UserMixin

class User(UserMixin, db.Model):
    """ This will be the User class and will hold information regarding user accounts. """
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True)  # will not allow a user to register twice with the same email address
    password = db.Column(db.String(300))
