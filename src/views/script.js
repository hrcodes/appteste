
function mesliteral(num){
    let month = [];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December"
    return month[num];
}

function carregar() {
    let data = new Date();
    let txtdate = `${mesliteral(data.getMonth())} ${data.getDay()} - ${data.getFullYear()}`;
    document.getElementById('data').innerText = txtdate;
}