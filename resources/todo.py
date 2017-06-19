import sqlite3
from flask import request
from flask_restful import Resource
from resources import db

class Todo(Resource):
    @classmethod
    def find_by_id(cls, _id):
        statement = "SELECT * FROM todos WHERE id = '{}'".format(_id)
        result = db.query(statement)
        return result

    def post(self):
        try:
            data = request.form.to_dict()
            todo = {'done': data['done'], 'description': data['description']}
            statement = "INSERT INTO todos VALUES (NULL, '{}', '{}')".format(todo['done'], todo['description'])
        except:
            return {'message': 'failed to parse request'}, 500, {'Access-Control-Allow-Origin': '*'}
        try:
            result = db.modify(statement)
        except:
            return {'message': 'failed to insert item into DB'}, 500, {'Access-Control-Allow-Origin': '*'}
        
        return todo, 201, {'Access-Control-Allow-Origin': '*'}

    def patch(self):
        try:
            data = request.form.to_dict()
            todo_id = data['id']
            todo_status = data['done']
        except:
            return {'message': 'failed to parse request'}, 500, {'Access-Control-Allow-Origin': '*'}

        if not Todo.find_by_id(todo_id):
            return {'message': 'Todo not found'}, 404, {'Access-Control-Allow-Origin': '*'}
         
        statement = "UPDATE todos SET done = '{}' WHERE id = '{}'".format(todo_status, todo_id)
        try:
            result = db.modify(statement)
        except:
            return {'message': 'failed to insert item into DB'}, 500, {'Access-Control-Allow-Origin': '*'}

        return {'message': 'Todo item successfully updated.'}, 200, {'Access-Control-Allow-Origin': '*'}

    def delete(self):
        try:
            data = request.form.to_dict()
            todo_id = data['id']
        except:
            return {'message': 'failed to parse request'}, 500, {'Access-Control-Allow-Origin': '*'}

        if not Todo.find_by_id(data['id']):
            return {'message': 'Todo not found'}, 404, {'Access-Control-Allow-Origin': '*'}

        statement = "DELETE FROM todos WHERE ID = '{}'".format(todo_id)
        try:
            result = db.modify(statement)
        except:
            return {'message': 'failed to insert item into DB'}, 500, {'Access-Control-Allow-Origin': '*'}

        return {'message': 'Todo item successfully deleted.'}, 200, {'Access-Control-Allow-Origin': '*'}

    def options (self):
        return {'Allow' : 'POST' }, 200, \
        { 'Access-Control-Allow-Origin': '*', \
        'Access-Control-Allow-Methods' : 'POST,PATCH,DELETE,GET' }
