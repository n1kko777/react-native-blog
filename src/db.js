import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("post.db");

export class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, text TEXT NOT NULL, img TEXT, date TEXT, booked INT)",
          [],
          resolve,
          (_, error) => reject(error)
        );
      });
    });
  }

  static getPosts() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          "SELECT * FROM posts",
          [],
          (_, data) => resolve(data.rows._array),
          (_, error) => reject(error)
        );
      });
    });
  }

  static createPost({ title, text, date, img }) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO posts (title, text, date, booked, img) VALUES (?, ?, ?, ?, ?)`,
          [title, text, date, 0, img],
          (_, data) => resolve(data.insertId),
          (_, error) => reject(error)
        );
      });
    });
  }
}
