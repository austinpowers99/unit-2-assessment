const groceriesData = require('../data/groceries');

module.exports = {
    create, 
    index
};

function create(req, res) {
    const newGrocery = {
        grocery: req.body.grocery,
        need: req.body.model
    };
    groceriesData.push(newGrocery);
    res.redirect('/groceries');
}

function index(req, res) {
    res.render('index', { title: 'Grocery List', groceries: groceriesData});
}