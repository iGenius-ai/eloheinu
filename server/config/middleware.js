const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET;

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extract token from header

  if (!token) {
    return res.status(401).send('Unauthorized. No tokens.');
  }

  try {
    const decodedUser = jwt.verify(token, secretKey);
    req.user = decodedUser; // Attach decoded user data to request object
    next();
  } catch (error) {
    res.status(403).send('Forbidden');
  }
}

module.exports = verifyToken;