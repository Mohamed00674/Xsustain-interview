import jwt from "jsonwebtoken";
const SECRET_KEY = process.env.JWT_SECRET || "fallbacksecret";
export const authenticate = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        return res.status(401).json({ error: "Access Denied: No token provided" });
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY, { algorithms: ["HS256"] });
        req.token = decoded;
        next();
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({ error: "Invalid or expired token" });
    }
};
//# sourceMappingURL=authMiddleware.js.map