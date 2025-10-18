from flask import Flask
from .config import Config

app = Flask(__name__)
app.config.from_object(Config)

# Import views after app is created to avoid circular imports
from app import views

