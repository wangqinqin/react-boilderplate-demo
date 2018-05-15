import { createSelector } from 'reselect';

/**
 * Direct selector to the testWqq state domain
 */
const selectTestWqqDomain = (state) => state.get('testWqq');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TestWqq
 */

const makeSelectTestWqq = () => createSelector(
  selectTestWqqDomain,
  (substate) => substate.toJS()
);

export default makeSelectTestWqq;
export {
  selectTestWqqDomain,
};
