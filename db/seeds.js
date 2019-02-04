const Item = require('../models/Item');
const Review = require('../models/Review');




let initialHomeItems = [
    {
        name: "Button Back Balloon Sleeve Top",
        description: "The softest and the cutest cloud you'll ever lay on.",
        image_url: "/images/yellow_shirt.jpg",
        category: "home_accessories",
        price: 25,
        reviews: []
    },
    {
        name: "Orange You Special",
        description: "80% Cotton, 15% Cotton-blend, 5% Acryllic. Orange Scented.",
        image_url: "/images/green_shirt.jpg",
        category: "home_accessories",
        price: 15,
    },
    {
        name: "Wrap Surplice Neck Solid Blouse",
        description: "It's a Pillow. It's kinda cute too.",
        image_url: "/images/blue_shirt.jpg",
        category: "home_accessories",
        price: 15,
    },
    {
        name: "Zip Back Puff Sleeve Form Fitted Wrap Sweetheart Top",
        description: "It's a plushy, it's a pet.",
        image_url: "/images/black_shirt.jpg",
        category: "home_accessories",
        price: 25,
    },
]

Item.deleteMany().then(() => {
    return Item.deleteMany()
}).then(() => {
    Item.create(initialHomeItems).then(items => {
        console.log("The following items have been saved: ", items);
    }).then(items => {
        Item.findOne({name: 'Chibi Cloud Pillow'}).then( item => {
            Review.create({
                author: "Justin Beezy",
                message: "They make my face feel like a marshmallow"
            }).then( newReview1 => {
                item.reviews.push(newReview1)
                // item.save()
                Review.create({
                    author: "Kenya",
                    message: "This pillow belongs in the trash."
                }).then( newReview2 => {
                    item.reviews.push(newReview2)
                    item.save()
                })
            })
        })
    })
})

// let initialComments = [  
//     {
//         author: "Jirvin",
//         message: "He's a good substitute for my father not being in my life."
//     }    
// ]

// Review.deleteMany().then(() => {
//     return Item.deleteMany()
// }).then(() => {
//     Review.create(initialComments).then(items => {
//         console.log("The following items have been saved: ", items);
//     })
// })
