const path =  require('path')

module.exports = (req, res)=> {
    res.sendFile(path.resolve('./Pages/signUp.html'))
}