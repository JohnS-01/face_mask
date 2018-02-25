## Face Mask

##Steps to run front-end:

1. npm install
2. npm start

## Steps to run back-end:

1. pip/conda install flask
2. pip/conda install flask-sqlalchemy
3. pip/conda install pymysql
4. python server/app.py
5. localhost:xxxx/hello

#### If you add any packages to this project type, please update the requirements.txt
  ```bash
  $ pip freeze > requirements.txt
  ```
  #### With conda
  ```bash
  conda list -e > requirements.txt
  ```
1. To run the app locally, first clone this repository and `cd` into it.
2. Create new virtual environment.

  ```bash
  $ virtualenv venv
  $ source venv/bin/activate
  ```
  #### With conda
  ```bash
  conda create --name <environment-name>
  activate <environment-name>
  ```
3. Install the requirments.

  ```bash
  $ pip install -r requirments.txt
  ```
  #### With conda
  ```bash
  conda install --yes --file requirements.txt
  ```
4. Run the server

  ```bash
  $ python server/app.py
  ```
5. Go to 127.0.0.1:5000/hello
  Note: This is a python endpoint.
