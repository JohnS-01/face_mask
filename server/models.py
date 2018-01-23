""" Model Classes """

from app import db
from hashutils import make_pw_hash

class User(db.Model):
    """ This will be the User class and will hold information regarding user accounts. """
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True)  # will not allow a user to register twice with the same email address
    pwd_hash = db.Column(db.String(300))

    def __init__(self, email, password):
        self.email = email
        self.pwd_hash = make_pw_hash(password)

    def __repr__(self):
        return f'(self.email)'

""" Test user was created in the db
    Email:  test@test.com
    Password:  cheese
"""