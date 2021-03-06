const Item = require('../models/Item');


const itemController = {
    index: (req, res) => {
        Item.find({}).then(items => {
            // console.log("These are the items in my database: " + items)
            res.send(items);
        })

    },
    create: (req, res) => {
        Item.create({
            name: req.body.name, 
            description: req.body.description, 
            image_url: req.body.image_url, 
            category: req.body.category, // Want to make into an enum
            price: req.body.price, 
        }).then(() => Item.find({}).then(items => {
            // console.log("These are the items in my database: " + items)
            res.send(items);
        }))
    },

    edit: (req, res) => {
        let id = req.params.id;
        // console.log("The id received: " + id);
        Item.findById(id).then( item => {
            res.render('shop/editItem', {item})
        })
    },

    update: (req, res) => {
        let id = req.params.id;
        console.log("Editing: " + id);
        Item.findByIdAndUpdate(id, req.body, {new: true}).then(item => res.redirect('/'))
    },

    delete: (req, res) => {
        let id = req.params.id;
        console.log("Deleting: " + id);
        Item.findByIdAndDelete(id).then(items => {
            console.log("HEY YOU! items found: " + items)
            res.send(items)
        })
    },
}

module.exports = itemController