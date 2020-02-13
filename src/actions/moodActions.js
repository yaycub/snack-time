export const DRINK_COFFEE = 'DRINK_COFFEE';
export const drinkCoffee = () => ({
  name: DRINK_COFFEE,
  text:'Drink Coffee',
  stateName: 'coffees' 
});

export const EAT_SNACK = 'EAT_SNACK';
export const eatSnack = () => ({ 
  name: EAT_SNACK, 
  text: 'Snack', 
  stateName: 'snacks' }
);

export const TAKE_NAP = 'TAKE_NAP';
export const takeNap = () => ({ 
  name: TAKE_NAP, 
  text: 'Nap', 
  stateName: 'naps' }
);

export const STUDY = 'STUDY';
export const toStudy = () => ({ 
  name: STUDY, 
  text: 'Study', 
  stateName: 'studies' }
);
