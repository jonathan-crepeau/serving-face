module.exports = (request, response, next) => {
    response.success = function(statusCode, data) {
        const responseObj = {
            status: statusCode,
            data: data,
            length: data.length,
            requestedAt: new Date().toLocaleString(),
        };
        this.status(statusCode).json(responseObj);
    }
}