"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


api = Blueprint("api", __name__)


@api.route("/hello", methods=["POST", "GET"])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route("/signup", methods=["POST"])
def singupinator():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"message": "no email o contraseña"})
    exists = User.query.filter_by(email=email).first()

    if exists:
        return jsonify({"message": "mail is already registered"})

    to_add = User(password=password, email=email, is_active=True)
    db.session.add(to_add)
    db.session.commit()

    return jsonify({"message": "exito", "userpass": password, "usermail": email})


@api.route("/login", methods=["POST"])
def loginator():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"message": "no email o contraseña"})

    user = User.query.filter_by(email=email, password=password).first()

    if not user:
        return jsonify({"message": "error, datos incorrectos"})

    token = create_access_token(identity=user.id)
    return jsonify({"access_token": token, "message": "exito"})


@api.route("/private", methods=["GET"])
@jwt_required()
def privatinator():
    user_id = get_jwt_identity()
    current_user = User.query.get(user_id)

    return jsonify({"private message": "this is very private"}),200
