from flask import jsonify
from flask import render_template, Blueprint, redirect, request, url_for, session, make_response
from app.models import db, user_database, post_database, floor_database, like_database, like_history_database, accuse_database
# from utils.check import is_login

user_blueprint = Blueprint('user', __name__)


@user_blueprint.route('/login', methods=['POST','GET'])
def login():
    data = request.get_json(silent=True)
    username = data['username']
    password = data['password']
    user = user_database.query.filter_by(
        username=username, password=password).first()
    if user:
        print("OKK")
        return make_response(jsonify('true'))
    else:
        return make_response(jsonify('false'))


@user_blueprint.route('/add_post', methods=['GET'])
def add_post_data():
    data = request.get_json(silent=True)
    user_id = data['user_id']
    category = data['category']
    content = data['content']
    new_post = post_database(user_id, category, content)
    post_database.save(new_post)


@user_blueprint.route('/delete_post', methods=['GET'])
def delete_post_data():
    data = request.get_json(silent=True)
    post_id = data['post_id']
    delete_post(post_id)


@user_blueprint.route('/show_post', methods=['GET', 'POST'])
def show_post_data():
    post = post_database.query.all()
    count = post_database.query.count()
    return_data = {"post_id": [], "user_id": [], "category": [],
                   "reply_count": [], "content": [], "like_count": []}
    for i in range(0, count):
        return_data["post_id"].append(post[i].post_id)
        return_data["user_id"].append(post[i].user_id)
        return_data["category"].append(post[i].category)
        return_data["reply_count"].append(post[i].reply_count)
        return_data["content"].append(post[i].content)
        return_data["like_count"].append(post[i].like_count)
    return make_response(jsonify(return_data))


@user_blueprint.route('/register', methods=['GET', 'POST'])
def register():
    """
    注册
    :return: 注册视图
    """
    data = request.get_json(silent=True)
    id_card = data['id_card']
    username = data['username']
    password = data['password']
    email = data['email']
    role = 'user'
    # 查询用户
    user = user_database.query.filter_by(
        email=email, id_card=id_card).first()
    # 判断用户是否存在
    if user:
        # 向session中写入相应的数据
        return make_response(jsonify('false'))
    else:
        new_user = user_database(id_card, username, password, email, role)
        user_database.save(new_user)
        return make_response(jsonify('true'))


@user_blueprint.route('/add_floor', methods=['GET'])
def add_floor_data():
    data = request.get_json(silent=True)
    user_id = data['user_id']
    content = data['content']
    new_floor = floor_database(user_id, content)
    floor_database.save(new_floor)


@user_blueprint.route('/delete_floor', methods=['GET'])
def delete_floor_data():
    """
    delete_floor
    :return: 增加新楼
    """
    data = request.get_json(silent=True)
    id = data['id']
    delete_floor(id)


@user_blueprint.route('/show_floor', methods=['GET', 'POST'])
def show_floor_data():
    floor = floor_database.query.all()
    count = floor_database.query.count()
    return_data = {"post_id": [], "floor_id": [], "user_id": [],
                   "content": []}
    for i in range(0, count):
        return_data["post_id"].append(floor[i].post_id)
        return_data["floor_id"].append(floor[i].floor_id)
        return_data["user_id"].append(floor[i].user_id)
        return_data["content"].append(floor[i].content)
    return make_response(jsonify(return_data))


@user_blueprint.route('/add_like', methods=['GET'])
def add_like_data():
    data = request.get_json(silent=True)
    user_id = data['user_id']
    post_id = data['post_id']
    liked_user_id = data['liked_user_id']
    new_like = like_database(user_id, post_id, liked_user_id)
    like_database.save(new_like)
    new_liked = like_history_database(liked_user_id, post_id, user_id)
    like_history_database.save(new_liked)


@user_blueprint.route('/delete_like', methods=['GET'])
def delete_like_data():
    data = request.get_json(silent=True)
    user_id = data['user_id']
    post_id = data['post_id']
    liked_user_id = data['liked_user_id']
    delete_like(liked_user_id, post_id, user_id)


@user_blueprint.route('personal_center/like_history', methods=['POST'])
def like_history():
    u_id = request.get_json(silent=True)
    user = like_database.query.filter_by(user_id=u_id).all()
    count = like_database.query.count()

    return_data = {"id": [], "user_id": [], "post_id": [], "liked_user_id": []}
    for i in range(0, count):
        return_data["id"].append(user[i].id)
        return_data["user_id"].append(user[i].user_id)
        return_data["post_id"].append(user[i].post_id)
        return_data["liked_user_id"].append(user[i].liked_user_id)
    return make_response(jsonify(return_data))


@user_blueprint.route('/personal_center/post_history', methods=['POST'])
def post_history():
    u_id = request.get_json(silent=True)
    post = post_database.query.filter_by(user_id=u_id).all()
    count = post_database.query.count()

    return_data = {"post_id": [], "user_id": [], "category": [],
                   "reply_count": [], "content": [], "like_count": []}
    for i in range(0, count):
        return_data["post_id"].append(post[i].post_id)
        return_data["user_id"].append(post[i].user_id)
        return_data["category"].append(post[i].category)
        return_data["reply_count"].append(post[i].reply_count)
        return_data["content"].append(post[i].content)
        return_data["like_count"].append(post[i].like_count)
    return make_response(jsonify(return_data))


@user_blueprint.route('/personal_center/reply_history', methods=['POST'])
def reply_history():
    u_id = request.get_json(silent=True)
    floor = floor_database.query.filter_by(user_id=u_id).all()
    count = post_database.query.count()

    return_data = {"id": [], "post_id": [],
                   "floor_id": [], "user_id": [], "content": []}
    for i in range(0, count):
        return_data["id"].append(floor[i].id)
        return_data["post_id"].append(floor[i].post_id)
        return_data["floor_id"].append(floor[i].floor_id)
        return_data["user_id"].append(floor[i].user_id)
        return_data["content"].append(floor[i].content)
    return make_response(jsonify(return_data))


def change_post_category(p_id, new_category):
    post = post_database.query.filter_by(post_id=p_id).first()
    if post:
        post.category = new_category
        db.session.commit()
        return


def change_post_content(p_id, new_content):
    post = post_database.query.filter_by(post_id=p_id).first()
    if post:
        post.content = new_content
        db.session.commit()
        return


def change_post_reply_count(p_id, new_reply):
    post = post_database.query.filter_by(post_id=p_id).first()
    if post:
        post.content = new_reply
        db.session.commit()
        return


def change_post_like_count(p_id, new_like):
    post = post_database.query.filter_by(post_id=p_id).first()
    if post:
        post.content = new_like
        db.session.commit()
        return


def delete_post(p_id):
    post = post_database.query.filter_by(post_id=p_id).first()
    if post:
        db.session.delete(post)
        db.session.commit()
        return


def change_floor_content(p_id, new_content):
    floor = floor_database.query.filter_by(id=p_id).first()
    if floor:
        floor.content = new_content
        db.session.commit()
        return


def delete_floor(p_id):
    floor = floor_database.query.filter_by(id=p_id).first()
    if floor:
        db.session.delete(floor)
        db.session.commit()
        return


def change_password(p_id, new_password):
    user = user_database.query.filter_by(user_id=p_id).first()
    if user:
        user.password = new_password
        db.session.commit()
        return


def delete_user(p_id):
    user = user_database.query.filter_by(user_id=p_id).first()
    if user:
        db.session.delete(user)
        db.session.commit()
        return


def delete_like(be_liked_id, p_id, u_id):
    not_like = like_database.query.filter_by(
        liked_user_id=be_liked_id, post_id=p_id, user_id=u_id).first()
    not_like_in_history = like_history_database.query.filter_by(
        liked_user_id=be_liked_id, post_id=p_id, user_id=u_id).first()
    if not_like:
        db.session.delete(not_like)
        db.session.delete(not_like_in_history)
        db.session.commit()
        return


def delete_accuse(a_id):
    not_accuse = accuse_database.query.filter_by(id=a_id).first()
    if not_accuse:
        db.session.delete(not_accuse)
        db.session.commit()
        return
