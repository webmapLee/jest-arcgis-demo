function drinkAll(callback, flavour) {
    if (flavour !== 'octopus') {
      callback(flavour);
    }
  }
  
  describe('drinkAll', () => {
    test('drinks something lemon-flavoured', () => {
      const drink = jest.fn();
      drinkAll(drink, 'lemon');
      expect(drink).toHaveBeenCalled();
    });
  
    test('does not drink something octopus-flavoured', () => {
      const drink = jest.fn();
      drinkAll(drink, 'octopus');
      expect(drink).not.toHaveBeenCalled();
    });
  });

  test('drinkEach drinks each drink', () => {
    const drink = jest.fn();
    drinkEach(drink, ['lemon', 'octopus']);
    expect(drink).toHaveBeenCalledTimes(2);
  });

  test('registration applies correctly to orange La Croix', () => {
    const beverage = new LaCroix('orange');
    register(beverage);
    const f = jest.fn();
    applyToAll(f);
    expect(f).toHaveBeenCalledWith(beverage);
  });

  test('drinks returns', () => {
    const drink = jest.fn(() => true);
    drink();
    expect(drink).toHaveReturned();
  });

  test('drink returns twice', () => {
    const drink = jest.fn(() => true);
    drink();
    drink();
  
    expect(drink).toHaveReturnedTimes(2);
  });

  test('drink returns La Croix', () => {
    const beverage = {name: 'La Croix'};
    const drink = jest.fn(beverage => beverage.name);
  
    drink(beverage);
  
    expect(drink).toHaveReturnedWith('La Croix');
  });

  test('drink returns La Croix (Orange) last', () => {
    const beverage1 = {name: 'La Croix (Lemon)'};
    const beverage2 = {name: 'La Croix (Orange)'};
    const drink = jest.fn(beverage => beverage.name);
  
    drink(beverage1);
    drink(beverage2);
  
    expect(drink).toHaveLastReturnedWith('La Croix (Orange)');
  });

  test('drink returns expected nth calls', () => {
    const beverage1 = {name: 'La Croix (Lemon)'};
    const beverage2 = {name: 'La Croix (Orange)'};
    const drink = jest.fn(beverage => beverage.name);
  
    drink(beverage1);
    drink(beverage2);
  
    expect(drink).toHaveNthReturnedWith(1, 'La Croix (Lemon)');
    expect(drink).toHaveNthReturnedWith(2, 'La Croix (Orange)');
  });