import {
  GraphQLList
} from 'graphql';

import WalkType from '../../types/walk';
import getProjection from '../../getProjection';
import WalkModel from '../../../models/Walk';

export default {
  type: new GraphQLList(WalkType),
  args: {},
  resolve(root, params, options){
    const projection = getProjection(options.fieldASTs[0]);

    return WalkModel
      .find()
      .select(projection)
      .exec();
  }
};
