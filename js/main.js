const collapsables = document.querySelectorAll(".collapsible");
collapsables.forEach(item => {
  item.addEventListener("click", function() {
    this.classList.toggle("collapsible--expanded");
  });
});
