from flask_script import Manager
from utils.config import create_app
from flask_cors import *


"""
管理启动主接口
"""
app = create_app()
manager = Manager(app)
CORS(app, supports_credentials=True)

if __name__ == '__main__':
    manager.run()

 
# if __name__ == '__main__':
#     app.run(host='127.0.0.1', port=8080)

