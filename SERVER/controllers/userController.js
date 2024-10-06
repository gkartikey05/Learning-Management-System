import AppError from "../utils/errorUtil.js";
import User from "../models/userModel.js";

const cookieOptions = {
  maxAge: 7 * 24 * 60 * 60 * 1000,
  httpOnly: true,
  secure: true,
};

const register = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return next(new AppError("All fields are required", 400));
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return next(new AppError("Email already registered", 400));
    }

    const user = await User.create({
      fullName,
      email,
      password,
      avatar: {
        public_id: email,
        // secure_url,
      },
    });

    if (!user) {
      return next(
        new AppError(
          "Registration failed, please try again after sometime",
          400
        )
      );
    }

    // TODO: File Uplaod

    await user.save();
    user.password = undefined;

    const token = await user.generateJWTToken();

    res.cookie("token", token, cookieOptions);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new AppError("All fields are required", 400));
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user || !user.comparePassword(password)) {
      return next(new AppError("Invalid Credentials", 400));
    }

    const token = await user.generateJWTToken();
    user.password = undefined;

    res.cookie("token", token, cookieOptions);
    res.status(201).json({
      success: true,
      message: "User logged in successfully",
      user,
    });
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
};

const logout = (req, res) => {
  try {
    res.cookie("token", null, {
      secure: true,
      maxAge: 0,
      httpOnly: true,
    });

    res.status(201).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
};

const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    res.status(201).json({
      success: true,
      message: "User details",
      user,
    });
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
};

export { register, login, logout, getProfile };
