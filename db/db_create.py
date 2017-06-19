import sqlite3
from db_connection import query_db

create_table = "CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY, done text, description text)"
query_db(create_table)