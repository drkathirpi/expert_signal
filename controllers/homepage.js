
module.exports = (req, res) => {
    res.sendFile(path.resolve(__dirname , '/Pages/index.html'))
}