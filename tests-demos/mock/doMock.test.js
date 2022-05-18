beforeEach(() => {
    jest.resetModules();
  });
  
  test('moduleName 1', () => {
    jest.doMock('./mockModule', () => {
      return jest.fn(() => 1);
    });
    const moduleName = require('./mockModule');
    expect(moduleName()).toEqual(1);
  });
  
  test('moduleName 2', () => {
    jest.doMock('./mockModule', () => {
      return jest.fn(() => 2);
    });
    const moduleName = require('./mockModule');
    expect(moduleName()).toEqual(2);
  });