exports.userSignUpValidator = (req, res, next) => {
    req.check('name', 'Name is required!')
        .notEmpty();
    req.check('email', 'Email is required !')
        .notEmpty()
        .isEmail();
    req.check('password')
        .notEmpty()
        .isLength({min: 8, max: 60})
        .withMessage('Password must between 8 and 60 characters')

    const errors = req.validationErrors();

    if (errors) {
        return res.status(400).json(errors);
    }

    next();
}