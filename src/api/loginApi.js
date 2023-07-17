module.exports = function(app) {
    app.post('/login', async (req, res) => {
        console.log(req.body)
        res.status(200).json({"msg":"ok"})
    })
}