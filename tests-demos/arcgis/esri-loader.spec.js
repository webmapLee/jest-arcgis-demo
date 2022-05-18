import { loadModules } from "esri-loader";
import { async } from "regenerator-runtime";
// import regeneratorRuntime from "regenerator-runtime";
import Map from '@arcgis/core/Map'




test('loadModules test', () => {
    const [Map] = await loadModules(['esri/map'])
    console.log('🐻🐻🐻🐻🐻', Map)
    expect(Map).toBeTruthy()
})

test('loadModules test 2', () => {
    loadModules(['esri/map'])
        .then(([Map]) => {
            // create map with the given options at a DOM node w/ id 'mapNode'
            console.log('🐻🐻🐻🐻🐻', Map)
            expect(Map).toBeTruthy()
        })
        .catch(err => {
            // handle any script or module loading errors
            expect(err).toBeTruthy()
            console.error(err);
        });
})


test('async', async () => {
    expect(Map).toBeTruthy()
})