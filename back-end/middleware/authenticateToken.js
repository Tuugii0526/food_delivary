import jwt from "jsonwebtoken";
export function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader || authHeader == "undefined") {
    return res.status(401).json({
      userId: "",
    });
  }
  try {
    const token = authHeader ?? authHeader?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SESSION_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
