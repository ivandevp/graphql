import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Getting JWT Secret from environment
const APP_JWT_SECRET = process.env.APP_JWT_SECRET;

const Mutation = {
  signup: async (parent, { input }, { pubsub }) => {
    const { email, password, name, lastName } = input;

    const user = await User.findOne({ email });
    if (user) {
      throw new Error('This email is already in use');
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      lastName,
      email,
      password: encryptedPassword,
    });
    newUser.save();

    pubsub.publish('user-added', { newUser });
    const token = jwt.sign({ userId: newUser._id }, APP_JWT_SECRET);
    return {
      token,
      user: newUser,
    };
  },
  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email }).exec();
    if (!user) {
      throw new Error('Unauthorized');
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Unauthorized');
    }

    const token = jwt.sign({ userId: user._id }, APP_JWT_SECRET);
    return {
      token,
      user,
    };
  },
};

export default Mutation;
