""" App setup and database connection """

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, template_folder='../templates')
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://face-mask:interface44#@localhost:8889/face-mask'
app.config['SQLALCHEMY_ECHO'] = True
app.secret_key = 'HmtRej7yaEPB7FZ2'  # This will need to live somewhere else!!

db = SQLAlchemy(app)
