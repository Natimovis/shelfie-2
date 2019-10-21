module.exports = {

    getAll: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory()
        .then( get_inventory => res.status(200).send( get_inventory ) )
    }


};