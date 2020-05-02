function openMenu() {
    let lista = document.getElementById("list");
  
    if (lista.className === "navbar-list") {
      lista.className = "navbar-list-clicked";
    } else {
      lista.className = "navbar-list";
    }
}