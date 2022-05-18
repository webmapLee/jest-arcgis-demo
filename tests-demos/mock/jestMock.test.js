import fn1, {fn2} from './mockModule'

jest.mock('./test',()=>{
    return jest.fn(() => 42);
})
const mockFn = require('./test')
test('mock test',()=>{
    expect(mockFn()).toBe(42)
})

jest.mock('./mockModule',()=>{
    return {
        __esModule:true,
        default:jest.fn(()=>'fn1'),
        fn2:jest.fn(()=>'fn2')
    }
})

test('mock test2',()=>{
    expect(fn1()).toBe('fn1')
    expect(fn2()).toBe('fn2')
})