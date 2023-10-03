const controller = {
    index(req, res) {
        res.render('index');
    },
    login(req, res) {
        res.render('login');
    },
    productCart(req,res){
        res.render('productCart')
    },
    register(req,res){
        res.render('register')
    },
    productDetail(req,res) {
        res.render('productDetail')
    }
};

module.exports = controller;