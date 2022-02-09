"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
function auth(req, res, next) {
    console.log(req.session);
    if (!req.session.user) {
        console.log(req.session.user);
        let err = new Error('You are not authenticated!');
        return next(err);
    }
    else {
        if (req.session.user === 'authenticated') {
            next();
        }
        else {
            let err = new Error('You are not authenticated!');
            return next(err);
        }
    }
}
exports.auth = auth;
;
//# sourceMappingURL=auth.js.map