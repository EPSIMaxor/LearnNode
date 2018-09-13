module.exports = function(req, res, next) {

    console.log(req.session.flash)

    if(req.session.flash) {
        res.locals.flash = req.session.flash
        req.session.flash = undefined
    }

    req.flash = function (type, content) {
        if( req.session.flash === undefined) {
            req.session.flash = {}
        }
        req.session.flash[type] = content
    }
    next();
}