import sqlite3
from flask_restful import Resource
from resources import db

class TodoList(Resource):
    def get(self):
        select_query = "SELECT * FROM todos"
        try:
            result = db.query(select_query)
        except:
            return {'message': 'failed to insert item into DB'}, 500, {'Access-Control-Allow-Origin': '*'}
        
        todos = []
        for row in result:
            todos.append({'id': row[0], 'done': row[1], 'description': row[2]})

        return {'todos': todos}, 200, {'Access-Control-Allow-Origin': '*'}

    def patch(self):
        update_query = "UPDATE todos SET done = 'true'"
        try:
            result = db.modify(update_query)
        except:
            return {'message': 'failed to insert item into DB'}, 500, {'Access-Control-Allow-Origin': '*'}

        return {'message': 'Todo items successfully updated.'}, 200, {'Access-Control-Allow-Origin': '*'}

    def options (self):
        return {'Allow' : 'PATCH' }, 200, \
        { 'Access-Control-Allow-Origin': '*', \
        'Access-Control-Allow-Methods' : 'PATCH,GET' }

