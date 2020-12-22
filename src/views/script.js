
function mesliteral(num){
    let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
     "November",
     "December"]
    return month[num];
}

function carregar() {
    let data = new Date();
    let txtdate = `${mesliteral(data.getMonth())} ${data.getDay()} - ${data.getFullYear()}`;
    document.getElementById('data').innerText = txtdate;
}
