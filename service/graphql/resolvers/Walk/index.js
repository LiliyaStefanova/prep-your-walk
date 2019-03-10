import Walk from "../../../models/Walk";

export default {
  Query: {
    walk: (root, args) => {
      return new Promise((resolve, reject) => {
          Walk.findOne(args).exec((err, res) => {
            err ? reject(err): resolve(res);
          });
      });
    },
    walks: () => {
      return new Promise((resolve, reject ) => {
        Walk.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res)
          });
      });
    }
  },
  Mutation: {
    addWalk: (root, { id, name, startLocation, endLocation }) => {
      const newWalk = new Walk({id, name, startLocation, endLocation});

      return new Promise((resolve, reject) => {
        newWalk.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    removeWalk: (root, args) => {
      return new Promise((resolve, reject) => {
        Walk.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res)
        });
      });
    }
  }
};