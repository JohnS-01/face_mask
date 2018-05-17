""" Model Classes """

from flask_login import UserMixin
from app import db

class User(UserMixin, db.Model):
    """ This will be the User class and will hold information regarding user accounts. """
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True)  # will not allow a user to register twice with the same email address
    pwd_hash = db.Column(db.String(300))

class Survey(db.Model):
    """ This will hold information about individual survey results. """
    id = db.Column(db.Integer, primary_key=True)
    dryness = db.Column(db.Integer)
    oiliness = db.Column(db.Integer)
    redness = db.Column(db.Integer)
    sensitivity = db.Column(db.Integer)
    acne = db.Column(db.Integer)
    wrinkles = db.Column(db.String(10), default='false') # Might change the survey True/False to 0/1 in front-end
    scarring = db.Column(db.String(10), default='false') # Might change the survey True/False to 0/1 in front-end
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
