import User from '../models/User';

const Query = {
  status: () => 'Welcome to GraphQL',
  users: (_, { page, limit, sort, sortBy }, { currentUser }) => {
    if(!currentUser) {
      throw new Error('Unauthorized');
    }
    const skip = (page - 1) * limit;
    return User
      .find()
      .skip(skip)
      .limit(limit)
      .sort({
        [`${sortBy}`]: `${sort}`
      })
      .exec();
  },
  user: (_, { id }, { currentUser }) => {
    if(!currentUser) {
      throw new Error('Unauthorized');
    }
    return User.findOne({ _id: id }).exec();
  }
};

export default Query;
