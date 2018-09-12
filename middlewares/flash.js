module.exports = function(req, res, next) {

    if(req.session.flash && req.session.flash.error) {
        res.locals.flash = req.session.flash
        req.session.flash = undefined
    }else {
        res.locals.flash = req.session.flash
    }

    req.flash = function (type, content) {
        if( req.session.flash === undefined) {
            req.session.flash = {}
        }
        req.session.flash[type] = content
    }
    next();
}