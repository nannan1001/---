# from datetime import datetime

from flask_sqlalchemy import SQLAlchemy

"""
model模块
orm映射类
"""
db = SQLAlchemy()


class post_database(db.Model):
    # 帖子类
    post_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.Integer)
    category = db.Column(db.String(10))
    reply_count = db.Column(db.Integer, default=0)
    content = db.Column(db.Text)
    like_count = db.Column(db.Integer, default=0)

    def __init__(self, user_id, category, content):
        self.user_id = user_id
        self.category = category
        self.content = content

    # def add_reply(self):
    #     self.reply_count += 1

    # def add_like(self):
    #     self.like_count += 1

    # def delete_reply(self):
    #     self.reply_count -= 1

    # def delete_like(self):
    #     self.like_count -= 1

    def save(self):
        db.session.add(self)
        db.session.commit()


class floor_database(db.Model):
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    post_id = db.Column(db.Integer)
    floor_id = db.Column(db.Integer)
    user_id = db.Column(db.Integer)
    content = db.Column(db.Text)

    def __init__(self, user_id, content):
        self.user_id = user_id
        self.content = content

    def save(self):
        db.session.add(self)
        db.session.commit()


class user_database(db.Model):
    user_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    id_card = db.Column(db.String(18), unique=True)
    username = db.Column(db.String(10), unique=True)
    password = db.Column(db.String(20))
    email = db.Column(db.String(50))
    role = db.Column(db.String(10))

    def __init__(self, id_card, username, password, email, role):
        self.id_card = id_card
        self.username = username
        self.password = password
        self.email = email
        self.role = role

    def save(self):
        db.session.add(self)
        db.session.commit()


class like_database(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer)
    post_id = db.Column(db.Integer)
    liked_user_id = db.Column(db.Integer)

    def __init__(self, user_id, post_id, liked_user_id):
        self.user_id = user_id
        self.post_id = post_id
        self.liked_user_id = liked_user_id

    def save(self):
        db.session.add(self)
        db.session.commit()


class like_history_database(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    liked_user_id = db.Column(db.Integer)
    post_id = db.Column(db.Integer)
    user_id = db.Column(db.Integer)

    def __init__(self, liked_user_id, post_id, user_id):
        self.liked_user_id = liked_user_id
        self.post_id = post_id
        self.user_id = user_id

    def save(self):
        db.session.add(self)
        db.session.commit()


class accuse_database(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    accuse_id = db.Column(db.Integer)  # 举报者
    post_id = db.Column(db.Integer)
    floor_id = db.Column(db.Integer)
    beaccused_id = db.Column(db.Integer)  # 被举报者

    def __init__(self, accuse_id, post_id, floor_id, beaccused_id):
        self.accuse_id = accuse_id
        self.post_id = post_id
        self.floor_id = floor_id
        self.beaccused_id = beaccused_id

    def save(self):
        db.session.add(self)
        db.session.commit()
