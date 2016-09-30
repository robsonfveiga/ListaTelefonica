var collection = db.get("operator");

module.exports = {
    get: function(req, res, next) {
        collection.find({}, function (err, values) {
            if (err) {
                res.status(500).send({ msg: 'error:' + err })
            } else {
                res.status(200).json(values);
            }
        });
    }
}