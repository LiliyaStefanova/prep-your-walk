import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import WalkType from '../../types/walk';
import getProjection from '../../getProjection';
import WalkModel from '../../../models/Walk';

export default {
  type: WalkType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return WalkModel
      .findById(params.id)
      .select(projection)
      .exec();
  }
}
