function showmenu(){
    document.getElementById('side-menu').style.display="block";
    document.getElementById('menu-bar').style.display="none";
    document.getElementById('close-bar').style.display="flex";
}

function hidemenu(){
    document.getElementById('side-menu').style.display="none";
    document.getElementById('menu-bar').style.display="flex";
    document.getElementById('close-bar').style.display="none";
}

function showlog(){
    document.getElementById('form-back').style.display="flex";
}

function closelog(){
    document.getElementById('form-back').style.display="none";
}

function calculate(){
    var hours = parseInt(document.getElementById("hours").value);
    var tax= 7.58;
    document.getElementById('tax').value=tax;
    var location = document.getElementById('select-spot').value;
    var vehicle = document.getElementById('vehicle').value;

    if(location==="Campus3" && vehicle==="2 Wheelers"){
    var fare = 25.22*hours;
    document.getElementById('per-bill').value=fare.toFixed(2);
    var total=tax+fare;
    document.getElementById('pay-amt').value=total.toFixed(2);
    }

    if(location==="Campus6" && vehicle==="2 Wheelers"){
        var fare = 31.22*hours;
        document.getElementById('per-bill').value=fare.toFixed(2);
        var total=tax+fare;
        document.getElementById('pay-amt').value=total.toFixed(2);
    }

    if(location==="Campus8" && vehicle==="2 Wheelers"){
        var fare = 26.26*hours;
        document.getElementById('per-bill').value=fare.toFixed(2);
        var total=tax+fare;
        document.getElementById('pay-amt').value=total.toFixed(2);
    }

    if(location==="Campus12" && vehicle==="2 Wheelers"){
        var fare = 25.32*hours;
        document.getElementById('per-bill').value=fare.toFixed(2);
        var total=tax+fare;
        document.getElementById('pay-amt').value=total.toFixed(2);
    }

    if(location==="Campus15" && vehicle==="2 Wheelers"){
        var fare = 29.22*hours;
        document.getElementById('per-bill').value=fare.toFixed(2);
        var total=tax+fare;
        document.getElementById('pay-amt').value=total.toFixed(2);
    }

    if(location==="Campus3" && vehicle==="Sedan"){
        var fare = 39.22*hours;
        document.getElementById('per-bill').value=fare.toFixed(2);
        var total=tax+fare;
        document.getElementById('pay-amt').value=total.toFixed(2);
    }

    if(location==="Campus6" && vehicle==="Sedan"){
        var fare = 40.72*hours;
        document.getElementById('per-bill').value=fare.toFixed(2);
        var total=tax+fare;
        document.getElementById('pay-amt').value=total.toFixed(2);
    }

    if(location==="Campus12" && vehicle==="Sedan"){
        var fare = 34.32*hours;
        document.getElementById('per-bill').value=fare.toFixed(2);
        var total=tax+fare;
        document.getElementById('pay-amt').value=total.toFixed(2);
    }

    if(location==="Campus8" && vehicle==="Sedan"){
        var fare = 38.71*hours;
        document.getElementById('per-bill').value=fare.toFixed(2);
        var total=tax+fare;
        document.getElementById('pay-amt').value=total.toFixed(2);
    }

    if(location==="Campus15" && vehicle==="Sedan"){
        var fare = 41.79*hours;
        document.getElementById('per-bill').value=fare.toFixed(2);
        var total=tax+fare;
        document.getElementById('pay-amt').value=total.toFixed(2);
    }

    if(location==="Campus3" && vehicle==="SUV"){
        var fare = 42.72*hours;
        document.getElementById('per-bill').value=fare.toFixed(2);
        var total=tax+fare;
        document.getElementById('pay-amt').value=total.toFixed(2);
    }

    if(location==="Campus6" && vehicle==="SUV"){
        var fare = 43.32*hours;
        document.getElementById('per-bill').value=fare.toFixed(2);
        var total=tax+fare;
        document.getElementById('pay-amt').value=total.toFixed(2);
    }

    if(location==="Campus8" && vehicle==="SUV"){
        var fare = 41.12*hours;
        document.getElementById('per-bill').value=fare.toFixed(2);
        var total=tax+fare;
        document.getElementById('pay-amt').value=total.toFixed(2);
    }

    if(location==="Campus12" && vehicle==="SUV"){
        var fare = 43.25*hours;
        document.getElementById('per-bill').value=fare.toFixed(2);
        var total=tax+fare;
        document.getElementById('pay-amt').value=total.toFixed(2);
    }

    if(location==="Campus15" && vehicle==="SUV"){
        var fare = 39.85*hours;
        document.getElementById('per-bill').value=fare.toFixed(2);
        var total=tax+fare;
        document.getElementById('pay-amt').value=total.toFixed(2);
    }


    if(location==="Campus3" && vehicle==="Mid-Size"){
        var fare = 32.72*hours;
        document.getElementById('per-bill').value=fare.toFixed(2);
        var total=tax+fare;
        document.getElementById('pay-amt').value=total.toFixed(2);
    }

    if(location==="Campus6" && vehicle==="Mid-Size"){
        var fare = 33.32*hours;
        document.getElementById('per-bill').value=fare.toFixed(2);
        var total=tax+fare;
        document.getElementById('pay-amt').value=total.toFixed(2);
    }

    if(location==="Campus8" && vehicle==="Mid-Size"){
        var fare = 31.12*hours;
        document.getElementById('per-bill').value=fare.toFixed(2);
        var total=tax+fare;
        document.getElementById('pay-amt').value=total.toFixed(2);
    }

    if(location==="Campus12" && vehicle==="Mid-Size"){
        var fare = 33.25*hours;
        document.getElementById('per-bill').value=fare.toFixed(2);
        var total=tax+fare;
        document.getElementById('pay-amt').value=total.toFixed(2);
    }

    if(location==="Campus15" && vehicle==="Mid-Size"){
        var fare = 29.85*hours;
        document.getElementById('per-bill').value=fare.toFixed(2);
        var total=tax+fare;
        document.getElementById('pay-amt').value=total.toFixed(2);
    }
}

function displayFare(){
    document.getElementById('pseudo-content').style.display="none";
    document.getElementById('fare-calculator').style.display="block";
    document.getElementById('side-menu').style.display="none";
    document.getElementById('parking-spots').style.display="none";
    document.getElementById('vehicle-reg').style.display="none";
    document.getElementById('faqs').style.display="none";
}

function displayHome(){
    document.getElementById('vehicle-reg').style.display="none";
    document.getElementById('pseudo-content').style.display="block";
    document.getElementById('fare-calculator').style.display="none";
    document.getElementById('parking-spots').style.display="none";
    document.getElementById('faqs').style.display="none";
}

function displaySpots(){
    document.getElementById('vehicle-reg').style.display="none";
    document.getElementById('side-menu').style.display="none";
    document.getElementById('pseudo-content').style.display="none";
    document.getElementById('fare-calculator').style.display="none";
    document.getElementById('parking-spots').style.display="block";
    document.getElementById('faqs').style.display="none";
}

function displayVehicle(){
    document.getElementById('side-menu').style.display="none";
    document.getElementById('pseudo-content').style.display="none";
    document.getElementById('vehicle-reg').style.display="block";
    document.getElementById('fare-calculator').style.display="none";
    document.getElementById('parking-spots').style.display="none";
    document.getElementById('faqs').style.display="none";
}

function loginChange(){
    var name=document.getElementById('fn').value;
    var myLog= `<h3>Welcome, ${name} </h3>`
    document.getElementById('login').style.display="none";
    document.getElementById('newlogin').style.display="block";
    document.getElementById('newlogin').innerHTML=myLog;
    document.getElementById('pseudo-content').style.display="block";
    document.getElementById('form-back').style.display="none";
    document.getElementById('vehicle-reg').style.display="none";
    document.getElementById('fare-calculator').style.display="none";
    document.getElementById('parking-spots').style.display="none";

}

function displayFAQ(){
    document.getElementById('faqs').style.display="block";
    document.getElementById('side-menu').style.display="none";
    document.getElementById('pseudo-content').style.display="none";
    document.getElementById('vehicle-reg').style.display="none";
    document.getElementById('fare-calculator').style.display="none";
    document.getElementById('parking-spots').style.display="none";
}

function logOut(){
    document.getElementById('logOut').style.visibility="visible";
}

function backToHome(){
    document.getElementById('vehicle-reg').style.display="none";
    document.getElementById('pseudo-content').style.display="block";
    document.getElementById('fare-calculator').style.display="none";
    document.getElementById('parking-spots').style.display="none";
    document.getElementById('faqs').style.display="none";
    document.getElementById('logOut').style.visibility="hidden";
    document.getElementById('login').style.display="block";
    document.getElementById('newlogin').style.display="none";
}

function sendMsg(){
    document.getElementById('msg-sent').style.visibility="hidden";
    document.getElementById('sended').style.display="block";
}
