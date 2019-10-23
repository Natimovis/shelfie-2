module.exports = {

    getAll: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory()
        .then( get_inventory => res.status(200).json( get_inventory ) )
    },
        
    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const { test_name, test_price, test_image_url } = req.body
        dbInstance.create_product([ test_name, test_price, test_image_url])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "errorMessage: 500 for real though, this is not working correctly"});
            console.log(err)
        } );
    },

};