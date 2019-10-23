module.exports = {

    getAll: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory()
        .then( get_inventory => res.status(200).json( get_inventory ) )
    },
        
    create: (req, res) => {
        console.log(req.body)
        const dbInstance = req.app.get('db');
        const { name, price, imageUrl } = req.body
        dbInstance.create_product([ name, price, imageUrl])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "errorMessage: 500 for real though, this is not working correctly"});
            console.log(err)
        } );
    },

};