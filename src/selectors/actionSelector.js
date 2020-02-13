import { 
  drinkCoffee, 
  eatSnack, 
  takeNap, 
  toStudy 
} from '../actions/moodActions';

const actions = [
  drinkCoffee(),
  eatSnack(),
  takeNap(),
  toStudy()
];

export const getActions = (state) => {
  return actions.map(action => ({
    ...action,
    count: state[action.stateName]
  }));
};
