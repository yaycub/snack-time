import { 
  drinkCoffee, 
  eatSnack, 
  takeNap, 
  toStudy 
} from '../actions/moodActions';
import reducer from './moodReducer';

describe('Mood Reducer', () => {
  it('should set coffees with drink coffee action', () => {
    const action = drinkCoffee();
    const state = { coffees: 0 };

    const newState = reducer(state, action.name);

    expect(newState).toEqual({ coffees: 1 });
  });

  it('should set snacks with eat snack action', () => {
    const action = eatSnack();
    const state = { snacks: 0 };

    const newState = reducer(state, action.name);

    expect(newState).toEqual({ snacks: 1 });
  });

  it('should set naps with take nap action', () => {
    const action = takeNap();
    const state = { naps: 0 };
    
    const newState = reducer(state, action.name);

    expect(newState).toEqual({ naps: 1 });
  });

  it('should set studies with study action', () => {
    const action = toStudy();
    const state = { studies: 0 };

    const newState = reducer(state, action.name);

    expect(newState).toEqual({ studies: 1 });
  });

  it('should set back state with an unknown action', () => {
    const action = { name: 'BOUGIE' };
    const state = { studies: 2, naps: 1, snacks: 4 };

    const newState = reducer(state, action);

    expect(newState).toEqual({ studies: 2, naps: 1, snacks: 4 });
  });
});
