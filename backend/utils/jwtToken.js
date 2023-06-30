const jwt = require("jsonwebtoken");

// Create Token and saving in cookie
const JWT_SECRET = "SDLKFFAOVASDKERTERRTERTOSEEJMENDJSFSASGE"
const getJWTToken = (id) => {
    return jwt.sign({ id: id }, JWT_SECRET, {
        expiresIn: "4h",
    });
};

const sendToken = (curruser, user, statusCode, res) => {
    const token = getJWTToken(user.id);

    // options for cookie
    const options = {
        expires: new Date(
            Date.now() + 4 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        curruser,
        user,
        token,
    });
};

module.exports = sendToken;
