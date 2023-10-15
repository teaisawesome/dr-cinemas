module.exports = function(app) {
    const movieController = require('../controllers/movieController')
    const multer = require('multer')
    const storage = multer.memoryStorage()
    const upload = multer({ storage: storage })

    app.get('/movies', movieController.findAllMovie)
    app.get('/movie-genres', movieController.findAllMovieGenre)
    // POST - Create new movie
    app.post('/movies', movieController.createMovie)
    app.post('/movies-img', upload.single('imageSource'), (req, res, next) => {
        try {
            if(!req.file) {
                return res.status(400).json({ error: 'No file uploaded!'})
            }

            const imageSource = req.file.buffer
            
            if(imageSource) {
                console.log("Kép feltöltve!")
            }

            next()
        }
        catch(error) {
            res.status(500).json({ error: 'Hiba a kép feltöltése közben!'})
        }
    }, movieController.createMovieImage)
}