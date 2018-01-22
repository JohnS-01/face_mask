from flask import Flask
from flask-sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://face-mask:interface44#@localhost:8889/face-mask'
app.config['SQLALCHEMY_ECHO'] = True

db = SQLAlchemy(app)

