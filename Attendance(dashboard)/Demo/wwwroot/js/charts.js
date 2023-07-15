var labels = "";
var data = "";
var data1 = "";
var options = "";
var userrollid = "";
var rollUSERID = [];
function EngWiseData(id, data) {
    var ctx = document.getElementById(id);
    //var data1 = JSON.parse(data);

    var labels = data.map(function (e) {
        return e.currentSDUser;
    });
    var count = data.map(function (e) {
        return e.column1;
    });
    var userid = data.map(function (e) {
        rollUSERID = e.currentSDRollID;
        return rollUSERID;
    });
    

    data = {
        labels: labels,
        datasets: [
            {

                backgroundColor: ["#90ADC6", "#D0B49F", "#6BA364", "#4A6F89", "#78ccba", "#E5B299", "#39918C", "#AB6B51", "#A47786", "#E3C340"],
                data: count,
                data1: userid,
            }
        ],
    };
    //console.log(data);
   options = {
        responsive: true,
        legend: { display: false },
        scales: {
            xAxes: [{
                barThickness: 40

            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }],
        },

    };
    var TOp10Engineer = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
    //alert(ctx);
    ctx.onclick = function (evt) {
        alert(11);
        var activePoint = TOp10Engineer.getElementAtEvent(evt);
        //debugger;
        if (activePoint[0]) {
            //console.log(activePoint[0]);
            var labels = data.labels[activePoint[0]._index];
            var ENGID = data.datasets[0].data1[activePoint[0]._index];
            //var ENGID = data.datasets[0].data1;
            //console.log("USER id",ENGID)
            engineerModalshow(labels, ENGID);

            //var datasetIndex = activePoint[0]._datasetIndex;
            //ShowDataLeakageDetails(chartType, labels);
            //datasetIndex = null;
        }
        alert(ENGID);
    };
}

//status wise data
function StatusData(id, data) {

    try {
        //alert(id);
        var ctx = document.getElementById(id);

        var labels = data.map(function (e) {
            if (e.currentStatus == "0") {
                statusCurrent = "Open";
            } else if (e.currentStatus == "1") {
                statusCurrent = "Active";
            } else if (e.currentStatus == "10") {
                statusCurrent = "Assign";
            } else if (e.currentStatus == "20") {
                statusCurrent = "Hold";
            } else if (e.currentStatus == "30") {
                statusCurrent = "WIP";
            } else if (e.currentStatus == "40") {
                statusCurrent = "Completed";
            } else if (e.currentStatus == "100") {
                statusCurrent = "Close";
            } else {
                statusCurrent = "NULL";
            }
            return statusCurrent;
            //return e.currentStatus;
        });
        var count = data.map(function (e) {
            return e.column1;
        });
    }
    catch (err) {
    }
    data = {
        labels: labels,
        datasets: [
            {
                backgroundColor: ["#FFE15D", "#0dcaf0", "#fd7e14", "#6c757d", "#dc3545", "#6f42c1", "#20c997"],
                data: count,
                fontFamily: "system-ui",
            }
        ],
    };
    var options = {
        responsive: true,
        legend: { display: false },
        scales: {
            xAxes: [{
                barThickness: 20

            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }],
        },

    };
    var statusWiseData = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
    //alert(ctx);
    ctx.onclick = function (evt) {
        //alert(11);
        var activePoint = statusWiseData.getElementAtEvent(evt);
        if (activePoint[0]) {
            //  var labels = data.labels[activePoint[0]._view.label]; 
            var labels = activePoint[0]._view.label;
            console.log(labels);
            if (labels == "Open") {
                labels = "0"
            } else if (labels == "Active") {
                labels = "1"
            } else if (labels == "Assign") {
                labels = "10"
            } else if (labels == "Hold") {
                labels = "20"
            } else if (labels == "WIP") {
                labels = "30"
            } else if (labels == "Completed") {
                labels = "40"
            } else if (labels == "Close") {
                labels = "100"
            } else {
                labels = ""
            }
            //alert(labels);
            //console.log(labels);
            // var datasetIndex = activePoint[0]._datasetIndex;
            ShowStatusWiseData(labels);
            datasetIndex = null;
        }
    };
}





