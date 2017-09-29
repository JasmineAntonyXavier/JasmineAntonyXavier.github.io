function popupData() {
    alert("hi")
    var myData = localStorage['objectToPass'];
    localStorage.removeItem('objectToPass'); // Clear the localStorage
    var firstData = myData[0];
    var secondData = myData[1];
    alert('firstData: ' + firstData + '\nsecondData: ' + secondData);
}