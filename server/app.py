from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)

app.config.from_pyfile('config.py')

# instantiate the db and LoginManager
db = SQLAlchemy()
login_manager = LoginManager()

# Set up extensions
db.init_app(app)
login_manager.init_app(app)

from routes import *

if __name__ == '__main__':
    app.run()
