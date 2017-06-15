import sqlite3

connection = sqlite3.connect('data.db')
cursor = connection.cursor()

create_table = "CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY, done text, description text)"

cursor.execute(create_table)
connection.close()