import sqlite3
import os.path

package_dir = os.path.abspath(os.path.dirname(__file__))
database_path = os.path.join(package_dir, 'data.db')

class DBConnection(object):
    def __init__(self):
        self.connection = None
        self.cursor = None

    def query(self, statement):
        self.connection = sqlite3.connect(database_path)
        self.cursor = self.connection.cursor()
        self.cursor.execute(statement)
        result = self.cursor.fetchall()
        self.connection.commit()
        return result
    
    def modify(self, statement):
        self.connection = sqlite3.connect(database_path)
        self.cursor = self.connection.cursor()
        self.cursor.execute(statement)
        self.connection.commit()
        return self.cursor.lastrowid 

    def __del__(self):
        if(self.connection):
            self.connection.close()
