import { Request, Response, NextFunction } from "express";
import jwt ,{ Secret,JwtPayload} from "jsonwebtoken";

const SECRET_KEY: Secret =  process.env.JWT_SECRET || "fallbacksecret";


interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ error: "Access Denied: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY , { algorithms: ["HS256"] } );
    (req as CustomRequest).token = decoded;
    next();
  } catch (error) {
    console.log( error);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};
