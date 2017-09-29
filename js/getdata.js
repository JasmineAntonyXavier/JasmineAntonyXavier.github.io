function getdata() {


    var firstData = {
        'key1': document.getElementById('starttime').value,
        'key2': document.getElementById('endtime').value
    };
    var myData = [firstData];
    localStorage.setItem('objectToPass', myData);

    var b = document.getElementById('name').value;
       document.getElementById('here').innerHTML = b;
    //document.getElementById("id that gets affected").innerHTML = starttime;
    //document.getElementById("id that gets affected").innerHTML = endtime;
}