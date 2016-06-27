'use strict';




const db = require('../config/db');
const uuid = require('uuid');
const moment = require('moment');

// db.query('drop table if exists items');

db.query(`CREATE TABLE IF NOT EXISTS items(
  id TEXT,
  name TEXT,
  description TEXT,
  value NUMERIC(15,2),
  room INT,
  createdAt TEXT
  )`);




exports.getAll = () => {

  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM items', (err, items) => {
      if (err) {
        reject(err);
      } else {
        resolve(items);
      }
    });
  });

};


exports.addItem = (itemObj) => {

  itemObj.id = uuid();
  itemObj.createdAt = moment().toISOString();
  // console.log(itemObj);

  return new Promise((resolve, reject) => {
    db.query('INSERT INTO items SET ?', itemObj, (err) => {
      if (err) {
        reject(err);
      } else {

        db.query('SELECT * FROM items ORDER BY createdAt DESC limit 1', (err, items) => {
          if (err) {
            reject(err);
          } else {
            resolve(items[0]);
          }

        });
      }
    });
  });
};


exports.delete = (id) => {

  return new Promise((resolve, reject) => {
    db.query('DELETE FROM items WHERE id=?', id, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};




exports.updateItem = (id, updatedItem) => {

  updatedItem.createdAt = moment().toISOString();
  // console.log('in update',updatedItem);

  return new Promise((resolve,reject) => {
    console.log('in promise');
    db.query(`UPDATE items SET createdAt = ?, name = ?, 
      description = ?, value = ?, room = ? WHERE id = ?`, [updatedItem.createdAt, updatedItem.name, updatedItem.description, updatedItem.value, updatedItem.room, id],
      (err) => {
        
        if(err) {
          
          reject(err);
        }else {
          resolve();
        }

      })




  })
}
