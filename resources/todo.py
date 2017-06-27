import sqlite3
from flask import request
from flask_restful import Resource, reqparse
from resources import db

class Todo(Resource):
    """ Todo class to contain rest APIs associated with todo resource. """
    @classmethod
    def find_by_id(cls, _id):
        """ Class method to find a todo given an id
            Useful to check before updating/deleting todos
        """
        statement = "SELECT * FROM todos WHERE id = '{}'".format(_id)
        result = db.query(statement)
        if result:
            row = result[0]
            return {'id': row[0], 'done': row[1], 'description': row[2]}
        else:
            return {}

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('done', required=True)
        parser.add_argument('description', required=True)
        args = parser.parse_args()

        todo = {'done': args['done'], 'description': args['description']}
        statement = "INSERT INTO todos VALUES (NULL, '{}', '{}')".format(todo['done'], todo['description'])

        try:
            result = db.modify(statement)
        except:
            return {'message': 'failed to insert item into DB'}, 500

        return Todo.find_by_id(result), 200

    def patch(self):
        parser = reqparse.RequestParser()
        parser.add_argument('id', type=int, required=True)
        parser.add_argument('done', required=True)
        args = parser.parse_args()

        todo_id = args['id']
        todo_status = args['done']

        if not Todo.find_by_id(todo_id):
            return {'message': 'Todo not found'}, 404
         
        statement = "UPDATE todos SET done = '{}' WHERE id = '{}'".format(todo_status.lower(), todo_id)
        try:
            result = db.modify(statement)
        except:
            return {'message': 'failed to update item in DB'}, 500

        return Todo.find_by_id(todo_id), 200

    def delete(self):
        parser = reqparse.RequestParser()
        parser.add_argument('id', type=int, required=True)
        args = parser.parse_args()
        
        todo_id = args['id']

        if not Todo.find_by_id(todo_id):
            return {'message': 'Todo not found'}, 404

        statement = "DELETE FROM todos WHERE ID = '{}'".format(todo_id)
        try:
            result = db.modify(statement)
        except:
            return {'message': 'failed to delete item in DB'}, 500

        return {'id': todo_id}, 200
