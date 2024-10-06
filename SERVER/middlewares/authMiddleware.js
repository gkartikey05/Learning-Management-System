import AppError from "../utils/errorUtil.js";
import JWT from "jsonwebtoken";

const isLoggedIn = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return next(new AppError("Please login first", 401));

  const userDetails = JWT.verify(token, process.env.JWT_SECRET);
  req.user = userDetails;

  return next();
};

export { isLoggedIn };
