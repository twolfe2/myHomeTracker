//API for item data

'use strict';

const express = require('express');

let router = express.Router();

let Item = require('../models/item');




//get all of the house items
router.get('/', (req,res) => {

  Item.getAll()
    .then(items => {
      res.send(items);

    }).catch(err => {
      res.status(400).send(err);
    });

});

// router.get()

//post a new item and send the posted item back
router.post('/', (req,res) => {

  let itemObj = req.body;
  // console.log(itemObj)
  Item.addItem(itemObj)
    .then(item => {
      res.send(item);
    }).catch(err => {
      res.status(400).send(err);
    });
});

//delete item with specified id
router.delete('/:id',(req,res) => {
  let id = req.params.id;

  Item.delete(id)
    .then(() => {
      res.send();
    }).catch(err => {
      res.status(400).send(err);
    });
});


//update item with specified id
router.put('/:id', (req,res) => {
  let updatedItem = req.body;
  console.log(req.body);
  let id = req.params.id;
  console.log(id);
  Item.updateItem(id, updatedItem)
    .then(()=> {
      console.log('done');
      res.send('updated');
    }).catch(err => {
      console.log('errrorojeioj')
      res.status(400).send(err);
    });


})









module.exports = router;