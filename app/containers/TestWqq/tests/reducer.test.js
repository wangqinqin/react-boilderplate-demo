
import { fromJS } from 'immutable';
import testWqqReducer from '../reducer';

describe('testWqqReducer', () => {
  it('returns the initial state', () => {
    expect(testWqqReducer(undefined, {})).toEqual(fromJS({}));
  });
});
