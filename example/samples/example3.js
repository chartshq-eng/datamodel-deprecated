/* eslint-disable */

const DataTable = window.DataTable.default;
let dt;
d3.json('./data/cars.json', (data) => {
    const jsonData = data,
        schema = [{
            name: 'Name',
            type: 'dimension',
            
        }, {
            name: 'Miles_per_Gallon',
            type: 'measure',
            unit:'hello',
            defAggFn:'avg'
        }, {
            name: 'Cylinders',
            type: 'dimension'
        }, {
            name: 'Displacement',
            type: 'measure'
        }, {
            name: 'Horsepower',
            type: 'measure',
            defAggFn:'avg'
        }, {
            name: 'Weight_in_lbs',
            type: 'measure',
        }, {
            name: 'Acceleration',
            type: 'measure'
        }, {
            name: 'Year',
            type: 'dimension',
        }, {
            name: 'Origin',
            type: 'dimension'
        }];

    
    dt = new DataTable(jsonData, schema)
    DataTable.Reducers.defaultReducer('min');
    
    const grouped = dt.groupBy(['Year']);
    grouped = dt.groupBy(['Year'],{
    },true,grouped);
    //dt2 = dt.select(fields => fields.Horsepower.value < 150)
    //dt33 = dt.select(fields => fields.Horsepower.value < 75,{},true,dt2)

   // dt2 = dt.project(['Name','Year','Origin','Cylinders']);


    // dt3 = dt.project(['Displacement','Acceleration'])

    // dt4 = dt.calculatedMeasure({
    //     name: 'Efficiency'
    // }, ['Displacement', 'Acceleration'], (Displacement, Acceleration) => Displacement / Acceleration);

    // dt4 = dt.calculatedMeasure({
    //     name: 'UNEfficiency'
    // }, ['Acceleration', 'Displacement'], (Acceleration, Displacement) => Acceleration / Displacement,true,dt4);

    // dt1.dispose()
     dt2.dispose()
    // dt3.dispose()
    // dt4.dispose()
});