module.exports = {


    create : (req, res, next) => {
        const dbInstance = req.app.get("db");

        dbInstance.create_product([req.body.name, req.body.description, req.body.price, req.body.image_url])
        .then(result => {
            res.status(200).json(result)

        })
        .catch(err => {
        res.status(500).send({errorMessage: "Something went wrong"})
        console.log(err)
        })
    } ,


    getOne : (req,res,next) => {
        const dbInstance = req.app.get("db");

        dbInstance.read_product([req.params.id])
        .then(result => {
            res.status(200).json(result)
        .catch(err => {
            res.status(500).send({errorMessage: "Something went wrong"})
            console.log(err)
        })
        })
    },


    getAll : (req, res, next) => {
        const dbInstance = req.app.get("db");

        dbInstance.read_products()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).send({errorMessage: "Something went wrong"})
            console.log(err)
        })
    },


    update: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.update_product([req.params.id, req.query.desc])
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).send({errorMessage: "Something went wrong"})
            console.log(err)
        })

    
    },


    Delete: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.delete_product([req.params.id])
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).send({errorMessage: "Something went wrong"})
            console.log(err)
        })
    }
}