var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
    } else if(ev.target.tagName === "SPAN") {
        var div = ev.target.parentNode;
        div.remove();
    }
}, false);

function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == "") {
        alert("Enter your task!");
    } else {
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value = "";
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}


show_hide.addEventListener("click",function (event) {
    const button = document.getElementById("show_hide").textContent;
    console.log(button);
    if (button === "show") {
        document.getElementById("text").classList.remove("task_text_show");
        document.getElementById("text").classList.add("task_text_hide");
        document.getElementById("to-do_elements").classList.remove("to-do_elements_hide");
        document.getElementById("to-do_elements").classList.add("to-do_elements_show");
        document.getElementById("show_hide").classList.remove("show");
        document.getElementById("show_hide").classList.add("hide");
        document.getElementById("show_hide").textContent = "hide";
        var button_h = document.querySelector(".hide");
    }
    if (button === "hide") {
        document.getElementById("text").classList.remove("task_text_hide");
        document.getElementById("text").classList.add("task_text_show");
        document.getElementById("to-do_elements").classList.remove("to-do_elements_show");
        document.getElementById("to-do_elements").classList.add("to-do_elements_hide");
        document.getElementById("show_hide").classList.remove("hide");
        document.getElementById("show_hide").classList.add("show");
        const button = document.getElementById("show_hide").textContent;
        document.getElementById("show_hide").textContent = "show";
        var button_s = document.querySelector(".show");
    }
});
