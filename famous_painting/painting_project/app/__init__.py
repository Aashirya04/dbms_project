from flask import Flask
from flask_mysqldb import MySQL
from config import Config
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
app.config.from_object(Config)
mysql = MySQL(app)

from app import routes
