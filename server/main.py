""" Main Controller """

from app import app, db
from models import User

class LoginHandler():
    pass

@app.route('/home')
def index1():
    return "Hello!!"

if __name__ == "__main__":
    app.run()