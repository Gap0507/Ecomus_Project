const verifyJWT = (req, res, next) => {
    const token = req.cookies.token; // Retrieve token from cookies
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Token missing" });
    }

    // Verify the token
    jwt.verify(token, "jwt-secret", (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Invalid or expired token" });
        }        

        req.user = decoded; // Attach decoded user data to the request object
        next(); // Proceed to the next middleware or route
    });
};