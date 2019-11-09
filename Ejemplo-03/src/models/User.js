import mongoose, { Schema } from 'mongoose';

// Mongoose Schema
const UserSchema = new Schema({
  name: String,
  lastName: String,
  email: String,
  dateBirth: String,
  password: String,
}, {
  timestamps: true,
});

// Mongoose Model
const UserModel = mongoose.model('User', UserSchema);
export default UserModel;
