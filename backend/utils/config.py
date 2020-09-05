# 注册app, blueprint, database
import os
from flask import Flask
from app.user_view import user_blueprint

from app.models import db

"""
配置App等 在此注册蓝图、数据库等
"""


def create_app():
    BASE_DIR = os.path.dirname(os.path.dirname(__file__))
    static_dir = os.path.join(BASE_DIR, 'static')
    templates_dir = os.path.join(BASE_DIR, 'templates')

    app = Flask(__name__,
                static_folder=static_dir,
                template_folder=templates_dir)

    app.register_blueprint(blueprint=user_blueprint, url_prefix='/user')
    app.config['JSON_AS_ASCII'] = False
    # # 数据库配置
    # DEBUG = True
    
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@127.0.0.1:3306/forum'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    # 两种方式设置secret_key
    app.config["SECRET_KEY"] = 'TPmi4aLWRbyVq8zu9v82dWYW1'

    db.init_app(app=app)

    return app
