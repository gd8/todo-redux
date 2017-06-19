import sqlite3
from db_connection import DBConnection

create_table = "CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY, done text, description text)"
db = DBConnection()
db.modify(create_table)