const customResponses = {
    success(data) {
        return this.status(200).json({
            success: true,
            data,
        });
    },

    unauthorized() {
        return this.status(401).json({
            success: false,
            error: 'unauthorized',
        });
    },

    unprocessableEntity(customError) {
        return this.status(422).json({
            success: false,
            error: 'unprocessable_entity',
            data: customError,
        });
    },

    notFound() {
        return this.status(404).json({
            success: false,
            error: 'not_found'
        });
    },

    serverError(data) {
        return this.status(503).json({
            success: false,
            error: 'server_error',
            data
        });
    },

    loginError(user, message) {
        return this.status(400).json({
            success: false,
            error: 'login_error',
            data: {
                message: message,
                user: user
            }
        });
    }
};

module.exports = (req, res, next) => {
    Object.assign(res, customResponses);
    next();
};