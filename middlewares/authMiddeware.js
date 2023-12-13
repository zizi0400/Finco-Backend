import { verifyToken } from "../utils/jwt.js";

export const auth = (req, res, next) => {
  try {
    const payload = verifyToken(req.body.token);
    req.payload = payload;
    next();
  } catch (error) {
    res.status(500).end(error.message);
  }
};

//authorisation_ Mojavez
//authenticate_ Ehraze hoviat
