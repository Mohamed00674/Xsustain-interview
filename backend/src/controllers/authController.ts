import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User, { IUser } from '../models/userModel.js';
import jwt from 'jsonwebtoken';


export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser: IUser = await User.create({
      username,
      password: hashedPassword,
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: { newUser },
    });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(400).json({ error: 'Error during user registration' });
  }
};


const SECRET_KEY = process.env.JWT_SECRET || "fallbacksecret";


export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user: IUser | null = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const token = jwt.sign({ id: user._id, username: user.username }, SECRET_KEY, {
      expiresIn: '1h',
       algorithm: "HS256",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during user login:', error);
    res.status(401).json({ error: 'Please Login' });
  }
};
