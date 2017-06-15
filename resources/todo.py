import sqlite3
from flask_restful import Resource, reqparse
from db_connection import query_db
    
class Todo(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('done', required=True, help="done field is required")
        parser.add_argument('description', required=True, help="description is required")

        data = parser.parse_args()
        todo = {'done': data['done'], 'description': data['description']}
        
        query = "INSERT INTO todos VALUES (NULL, '{}', '{}')".format(todo['done'], todo['description'])
        result = query_db(query)

        return todo

    def put(self):
        parser = reqparse.RequestParser()
        parser.add_argument('done', required=True, help="done field is required")
        parser.add_argument('id', required=True, help="id is required")

        data = parser.parse_args()        
        query = "UPDATE todos SET done = '{}' WHERE id = '{}'".format(data['done'], data['id'])
        result = query_db(query)

        return {'message': 'Todo item successfully updated.'}

    def delete(self):
        parser = reqparse.RequestParser()
        parser.add_argument('id', required=True, help="id is required")

        data = parser.parse_args()
        
        query = "DELETE FROM todos WHERE ID = '{}'".format(data['id'])
        result = query_db(query)
        return {'message': 'Todo item successfully deleted.'}
