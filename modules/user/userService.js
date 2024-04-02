const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/index");

generateToken = (user) => {
  const payload = {
    id: user.id,
    username: user.username,
    role: user.role,
    status: user.status,
  };
  const options = { expiresIn: "72h" };
  return jwt.sign(payload, JWT_SECRET, options);
};

const createUser = async (body) => {
  const result = {
    status: 0,
    message: "",
    data: null,
  };
  try {
    const { fullName, username, password, role } = body;

    let hashedPassword = null;

    if (password) {
      const saltRounds = 10;
      hashedPassword = await bcrypt.hash(password, saltRounds);
    }

    const checkUser = await User.findOne({
      where: {
        username,
        status: 1,
      },
    });

    if (checkUser) {
      result.message = "UserName already exists";
      return result;
    }

    const createUser = await User.create({
      username,
      fullName,
      password: hashedPassword,
      role,
    });

    const token = generateToken(createUser);

    const resObj = {
      id: createUser.id,
      username: createUser.username,
      role: username.role,
      token,
    };

    result.data = resObj;
    result.status = 1;
    result.message = "User Added Successful";
    return result;
  } catch (error) {
    result.status = error.status;
    result.data = error.message;
  }
};

const login = async (body) => {
  let result = {
    status: 0,
    message: "",
    data: null,
  };
  try {
    const { username, password } = body;
    const user = await User.findOne({
      where: {
        username,
      },
    });
    if (!user) {
      result.data = null;
      result.status = 0;
      result.message = "Uset not found";
    } else {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        user.last_login_at = new Date();
        await user.save();
        const token = generateToken(user);
        const resObj = {
          id: user.id,
          name: user.username,
          role: user.role,
          token,
        };
        result.data = resObj;
        result.status = 1;
        result.message = "Login Successful";
      } else {
        result.message = "Invalid password";
      }
    }
    return result;
  } catch (error) {
    result.status = error.status;
    result.data = error.message;
  }
};

const getUserByIdS = async (userId) => {
  const result = {
    status: 0,
    message: "",
    data: null,
  };
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      result.message = "User not found";
      return result;
    }
    result.data = user;
    result.status = 1;
    result.message = "User Details Show Successful";
    return result;
  } catch (error) {
    result.status = error.status;
    result.data = error.message;
  }
};

const updateUserS = async (userId, newData) => {
  const result = {
    status: 0,
    message: "",
    data: null,
  };
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      result.message = "User not found";
      return result;
    }
    const updatedData = await user.update(newData);
    result.data = updatedData;
    result.status = 1;
    result.message = "User Details Updated Successful";
    return result;
  } catch (error) {
    result.status = error.status;
    result.data = error.message;
  }
};

const deleteUserS = async (userId) => {
  const result = {
    status: 0,
    message: "",
    data: null,
  };
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      result.message = "User not found";
      return result;
    }
    await user.destroy();
    result.status = 1;
    result.message = "User deleted successfully";
    return result;
  } catch (error) {
    result.status = error.status;
    result.data = error.message;
  }
};

module.exports = {
  createUser,
  login,
  getUserByIdS,
  updateUserS,
  deleteUserS,
};
