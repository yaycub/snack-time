import { getActions } from './actionSelector';
import { drinkCoffee, eatSnack, takeNap, toStudy } from '../actions/moodActions';

describe('Get Actions', () => {
  it('should select all actions', () => {
    const state = {};
    const actionsArray = getActions(state);

    expect(actionsArray).toEqual([
      { ...drinkCoffee(), count: undefined },
      { ...eatSnack(), count: undefined },
      { ...takeNap(), count: undefined },
      { ...toStudy(), count: undefined }
    ]);
  });
});
