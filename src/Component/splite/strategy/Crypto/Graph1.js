import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graph1 = () => {
    const options = {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: "Number of iPhones Sold"
        },
        axisY: {
            title: "Number of iPhones (in Million)"
        },
        data: [
            {
                type: "area",
                xValueFormatString: "YYYY",
                yValueFormatString: "#,##0.## Million",
                dataPoints: [
                    { x: new Date(2017, 0), y: 2.11 },
                    { x: new Date(2016, 0), y: 3.10 },
                    { x: new Date(2015, 0), y: 2.66 },
                    { x: new Date(2014, 0), y: 3.25 },
                    { x: new Date(2013, 0), y: 4.67 },
                    { x: new Date(2012, 0), y: 1.23 },
                    { x: new Date(2011, 0), y: 1.56 },
                    { x: new Date(2011, 0), y: 3.46 }
                ]
            }
        ]
    };

    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
}



export default Graph1