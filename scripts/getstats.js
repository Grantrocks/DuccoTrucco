function getbalance(){
    $.get("https://grantm.pythonanywhere.com/getfaucetbal", function(data, status){
        alert("Data: " + data.message + "\nStatus: " + status);
    });
}
getbalance()