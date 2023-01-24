function moveButton() {
  var button = document.getElementById("myButton");
  var x = Math.floor(Math.random() * window.innerWidth);
  var y = Math.floor(Math.random() * window.innerHeight);
  button.style.left = x + "px";
  button.style.top = y + "px";
}

function addFireworks() {
    for (var i = 0; i < 5; i++) {
      var firework = document.createElement("div");
      firework.classList.add("firework");
      firework.style.left = Math.random() * 100 + "%";
      firework.style.top = Math.random() * 100 + "%";
      document.body.appendChild(firework);

    var heading = document.getElementById("kata");
    var button = document.getElementById("button-wrap")
    var muncul = document.getElementById("muncul");
    heading.style.display = "none";
    button.style.display = "none";
    muncul.style.display = "block";

    }
  }
