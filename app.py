from flask import Flask, render_template
from flask_restful import Api

from resources.todo_list import TodoList
from resources.todo import Todo

app = Flask(__name__)
api = Api(app)

api.add_resource(TodoList, '/todos')
api.add_resource(Todo, '/todo')

@app.route('/')
def TodoApp():
  return render_template('index.html')

if __name__ == '__main__':
    app.run(port=5000, debug=True)