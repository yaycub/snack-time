import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import reducer from '../reducers/moodReducer';
import { getActions } from '../selectors/actionSelector';
import { getFace } from '../selectors/faceSelector';

export const Moods = () => {
  const [state, dispatch] = useReducer(reducer, {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0
  });
  const controlActions = getActions(state);
  const face = getFace(state);

  const handleSelection = name => {
    dispatch(name);
  };

  return (
    <>
      <Controls actions={controlActions} handleSelection={handleSelection}/>
      <Face emoji={face} />
    </>
  );
};
