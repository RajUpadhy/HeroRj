
function Attendencecard() {
    var data = '{"data":[{"date":"03/03/2023","reason":"Out Of Station","status":"1","leavedetails":"1"},{"date":"21/03/2023","reason":"My health was not good","status":"-1","leavedetails":"2"},{"date":"12/03/2023","reason":"Going to family function","status":"0","leavedetails":"0.50"}]}';
    var jsondata = JSON.parse(data).data;

    for (var i = 0; i < jsondata.length; i++) {
        const main = document.querySelector('.leavecard');
        const card = document.createElement('div');
        card.classList = 'aprlCUS';
        var buttonColor = '';
        var status = jsondata[i].status;
        if (status === "1") {
            status = "Approved";
            buttonColor = 'bg-success text-white';
        }
        else if (status === "-1") {
            status = "Rejected";
            buttonColor = 'bg-danger text-white';
        }
        else if (status==="0") {
            status = "Pending";
            buttonColor = 'bg-warning text-white';
        }

        var leaveDetails = jsondata[i].leavedetails;
        if (leaveDetails === "1") {
            leaveDetails = "Full Day";

        }
        else if (leaveDetails === "0.50") {
            leaveDetails = "Half Day";
        }
        else if (leaveDetails === "0.25") {
            leaveDetails = "2 hours";
        }

        //const viewInformation = '<ul class="Approve"> <li>"' + jsondata[i].date + '"</li><li>"' + jsondata[i].reason + '"</li></ul><button class="btn btn-sm-4 approveBTN btn-block">"' + status + '"</button><br>';
        const viewInformation = "<div><svg  height='2em' viewBox='0 0 448 512' fill='#0E86D4' style='position:absolute; margin-left: 10px; margin-top: 10px;'><path d='M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z'/></svg></div><div><ul class='Approve'><li class='mt-2 ms-5 d-flex justify-content-between'><p class='Approve'><b>Leave Detail</b>: " + leaveDetails + "</p><p class='Approve'><button class='btn approveBTN ms-5 " + buttonColor + " '>" + status + "</button></p></li><li class='mt-2 ms-5'><b>Date</b>: " + jsondata[i].date + "</li><li class='mt-2 ms-5'><b>Reason</b>: " + jsondata[i].reason + "</li></ul></div>";
        card.innerHTML += viewInformation;
        main.appendChild(card);
    }

}
