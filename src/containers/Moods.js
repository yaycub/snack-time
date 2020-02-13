import { 
  drinkCoffee, 
  eatSnack, 
  takeNap, 
  toStudy 
} from '../actions/moodActions';
import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import reducer from '../reducers/moodReducer';

const actions = [
  drinkCoffee(),
  eatSnack(),
  takeNap(),
  toStudy()
];

export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '😠';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';

  return '😀';
};

export const Moods = () => {
  const [state, dispatch] = useReducer(reducer, {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0
  });

  const handleSelection = name => {
    dispatch(name);
  };

  
  const face = getFace(state);
  const controlActions = actions.map(action => ({
    ...action,
    count: state[action.stateName]
  }));

  return (
    <>
      <Controls actions={controlActions} handleSelection={handleSelection}/>
      <Face emoji={face} />
    </>
  );
};
