function showComponent(componentNum) {
  var components = document.getElementsByClassName("component-section");
  for (var i = 0; i < components.length; i++) {
    components[i].classList.add("hidden");
  }
  document.getElementById("component" + componentNum).classList.remove("hidden");
  
  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  document.getElementsByTagName("button")[componentNum-1].classList.add("active");
}