const authenticate = (req, res, next) => {
    const token = req.header('Authorization');

    if (token === 'Bearer FSMovies2023') {
        // Valid token
        next();
    } else {
        // Invalid token
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = authenticate;
