function click(cbox) {
    if (cbox.checked) {
        var div = document.createElement("div");

        var i = document.createElement("input"); //input element, text
        i.setAttribute('type', "time");
        i.setAttribute('name', "starttime");
        var br = document.createElement("br");

        var newdiv = document.createElement("div");
        var j = document.createElement("input"); //input element, text
        j.setAttribute('type', "time");
        j.setAttribute('name', "endtime");

        div.id = cbox.name;
        div.innerHTML = "Start Time: ";
        div.appendChild(i);
        div.append(br);
        newdiv.innerHTML = "End Time: ";
        newdiv.append(j);

        document.getElementById("insertinputs").appendChild(div);
        document.getElementById("insertinputs").appendChild(newdiv);

    } else {
        document.getElementById(cbox.name).remove();
    }
}