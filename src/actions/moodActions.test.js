import { 
  DRINK_COFFEE,
  drinkCoffee, 
  EAT_SNACK,
  eatSnack, 
  TAKE_NAP,
  takeNap, 
  STUDY,
  toStudy
} from './moodActions';

describe('Mood Actions', () => {
  it('should create a drink coffee action', () => {
    const action = drinkCoffee();

    expect(action).toEqual({ 
      name: DRINK_COFFEE, 
      text: 'Drink Coffee', 
      stateName: 'coffees' }
    );
  });

  it('should eat a snack', () => {
    const action = eatSnack();
    expect(action).toEqual({ 
      name: EAT_SNACK, 
      text: 'Snack', 
      stateName: 'snacks' }
    );
  });

  it('should take a nap', () => {
    const action = takeNap();
    expect(action).toEqual({ 
      name: TAKE_NAP, 
      text: 'Nap', 
      stateName: 'naps' }
    );
  });

  it('should study ofc', () => {
    const action = toStudy();
    expect(action).toEqual({ 
      name: STUDY, 
      text: 'Study', 
      stateName: 'studies' }
    );
  });
});
