const Subscription = {
  newUser: {
    subscribe: (_, args, { pubsub }) => pubsub.asyncIterator(['user-added'])
  },
};

export default Subscription;
