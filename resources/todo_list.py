import sqlite3
from flask_restful import Resource
from db_connection import query_db

class TodoList(Resource):
    def get(self):
        select_query = "SELECT * FROM todos"
        result = query_db(select_query)
        
        todos = []
        for row in result:
            print(row)
            todos.append({'id': row[0], 'done': row[1], 'description': row[2]})

        return {'todos': todos}
