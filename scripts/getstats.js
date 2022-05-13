$("button").click(function(){
    $.get("https://grantm.pythonanywhere.com/getfaucetbal", function(data, status){
        alert(status)    
        alert("HI")
        alert("Data: " + data.message + "\nStatus: " + status);
    });
    });