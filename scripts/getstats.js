function getbalance(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data=xhttp.response
            alert(this.status)
            alert(data)
            alert(data.result)
            document.getElementById("currbalance").innerHTML = `${data.message} ᕲ`;
        }
    };
    xhttp.open("GET", "filename", true);
    xhttp.responseType="json";
    xhttp.send()
}
getbalance()