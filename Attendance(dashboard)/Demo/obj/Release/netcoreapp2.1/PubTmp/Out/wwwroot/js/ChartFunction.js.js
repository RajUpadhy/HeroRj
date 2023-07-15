function meterChart(parentId, ChildId, jsondata, height,width) {
    if (height == undefined) {
        height = "300"
    };
    if (width == undefined) {
        width = "300"
    };
    var options = {
        series: [jsondata],
        // series: [75],
        chart: {
            type: 'radialBar',
            height: height,
            width: width,
            offsetY: -20,
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#e7e7e7",
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        color: '#999',
                        opacity: 1,
                        blur: 2
                    }
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: -2,
                        fontSize: '22px'
                    }
                }
            }
        },
        grid: {
            padding: {
                top: -10
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91]
            },
        },
        labels: ['Average Results'],
    };

    var chart = new ApexCharts(document.getElementById(parentId), options);
    chart.render();

};

var label = [];
var value = [];
var values = null;
function radialChart(parentId, ChildId, jsondata, height, width) {
    //debugger;
    for (var i = 0; i < jsondata.length; i++) {
        for (var key in jsondata[i]) {
            if (label.indexOf(key) === -1) {
                label.push(key);
            }
        }
    }

    for (var i = 0; i < jsondata.length; i++) {
        for (var j = 0; j < label.length; j++) {
            value.push(jsondata[i][label[j]]);
        }
    }
    var nums = value.map(function (str) {
        return parseInt(str);
    });
    if (height == undefined) {
        height = "300"
    };
    if (width == undefined) {
        width = "300"
    }
    var options = {
        series: nums,
        labels: label,
        chart: {
            height: height,
            width: width,
            type: 'donut',
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270
            }
        },
        dataLabels: {
            enabled: false,
        },
        //xaxis: {
        //    labels: {
        //        rotate: -60
        //    },    
        //},
        fill: {
            type: 'gradient',
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',   
        },  
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                //legend: {
                //    position: 'bottom',
                //   // horizontalAlign:'center',
                //}
            }
        }]

    };
    var chart = new ApexCharts(document.getElementById(parentId), options);
    chart.render();
}

function stackChart(parentId, ChildId, jsondata, height, width) {
    if (height == undefined) {
        height = "300"
    };
    if (width == undefined) {
        width = "300"
    }
    var mainlabels = jsondata.map(function (e) {
        return e.date;
    });
    var working = jsondata.map(function (e) {
        return e.working;
    });
    var EL = jsondata.map(function (e) {
        return e.EL;
    });
    var SL = jsondata.map(function (e) {
        return e.SL;
    });
    var touring = jsondata.map(function (e) {
        return e.touring;
    });
    var wfh = jsondata.map(function (e) {
        return e.wfh;
    });
    var unpaid = jsondata.map(function (e) {
        return e.unpaid;
    });
    var holiday = jsondata.map(function (e) {
        return e.holiday;
    });
    var options = {
        series: [{
            name: 'WORKING',
            data: working,
            color: "#00b4d8",
        },
        {
            name: 'EL',
            data: EL,
            color: "#a7c957",
        },
        {
            name: 'SL',
            data: SL,
            color: "#fdc500",
        },
        {
            name: 'TOURING',
            data: touring,
            color: "#FFA500",
        },
        {
            name: 'WFH',
            data: wfh,
            color: "#41B883",
        },
        {
            name: 'Unpaid',
            data: unpaid,
            color: "#FF0000",
        },
        {
            name: 'Holiday',
            data: holiday,
            color: "#f4e409",
        }
        ],
        chart: {
            type: 'bar',
            height: height,
            width: width,
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 10,
                dataLabels: {
                    total: {
                        enabled: true,
                        style: {
                            fontSize: '13px',
                            fontWeight: 900
                        }
                    }
                }
            },
        },
        xaxis: {
            //type: 'datetime',
            categories: mainlabels,
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
        },
        fill: {
            opacity: 1
        }
    };
    var chart = new ApexCharts(document.getElementById(parentId), options);
    chart.render();
};