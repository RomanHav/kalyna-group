// src/middleware/errorHandler.js

export const errorHandler = (err, req, res, next) => {
    console.error(`Error occurred during ${req.method} ${req.url}`);
    console.error(err.stack || err);
    res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Server Error',
    });
};
