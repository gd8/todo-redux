import sqlite3

def query_db(query):
    connection = sqlite3.connect('data.db')
    cursor = connection.cursor()

    cursor.execute(query)
    result = cursor.fetchall()
    connection.commit()
    
    if connection:
        connection.close()
    return result
