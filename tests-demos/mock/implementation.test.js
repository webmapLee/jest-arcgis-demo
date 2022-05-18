const mockFn = jest.fn(scalar => 42 + scalar);

mockFn(0); // 42
mockFn(1); // 43

mockFn.mockImplementation(scalar => 36 + scalar);

test('value',()=>{
    expect(mockFn(2)).toBe(38); // 38
    expect(mockFn(3)).toBe(39);; // 39
})

