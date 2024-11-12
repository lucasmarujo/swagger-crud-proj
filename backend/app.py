from flask import Flask
from flask_cors import CORS
from database import db
from routes import api
from flasgger import Swagger

swagger = Swagger(app)

app = Flask(__name__)
CORS(app)

app.config.from_object('config.Config')
db.init_app(app)

with app.app_context():
    db.create_all()

app.register_blueprint(api)

if __name__ == '__main__':
    app.run(debug=True)