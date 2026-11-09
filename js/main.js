//==========================================


function convertValue() {
    var dollar = document.getElementById("dollar").value;
    var result = document.getElementById("result");


    if (dollar == "") {
        result.innerHTML = "Enter Value";
        return false;
    } else if (isNaN(dollar)) {
        result.innerHTML = "Enter Number Not Text";
        return false;
    } else if (dollar < 0) {
        result.innerHTML = "Enter Positive Number";
        return false;
    } else if (dollar == 0) {
        result.innerHTML = "Enter Number Rather Than Zero";
        return false;
    } else {
        result.innerHTML = dollar * 50 + " Egyptian Pound";
        return false;
    }
}




//===================================================
document.querySelectorAll(".amira").forEach(function(item) {
    item.onclick = function() {
        var color = item.getAttribute("data-color");
        document.querySelector("#dema").style.color = color;
    }
})


//====================================================

document.querySelector("#myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var works = document.querySelector("#works").value;
    var resultss = document.querySelector("#resultss"); //<ul></ul>

    if (works == "") {
        alert("Enter Data");
        event.stopPropagation();
    } else {
        var myLi = document.createElement("li");
        myLi.style.display = "flex";
        myLi.style.justifyContent = "space-between"
        myLi.style.alignItems = "center";
        myLi.append(document.createTextNode(works));
        var delet = document.createElement("button");
        delet.textContent = "x";
        delet.type = "button";
        delet.style.color = "red";
        delet.style.backgroundColor = "transparent";
        delet.style.border = "none";
        delet.className = "delet-btn ";

        delet.addEventListener("click", function() {
            myLi.remove();
        });
        myLi.append(delet);
        resultss.append(myLi);
        document.querySelector('#works').value = "";



    }



})