from flask import Flask
from flask_restful import Api

from resources.todo_list import TodoList
from resources.todo import Todo

app = Flask(__name__)
api = Api(app)

api.add_resource(TodoList, '/todos')
api.add_resource(Todo, '/todo')

if __name__ == '__main__':
    app.run(port=5000, debug=True)