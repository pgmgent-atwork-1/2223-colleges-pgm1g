(() => {
  $list = document.getElementById("list");
  $btnGrid = document.getElementById("btn-grid");
  $btnList = document.getElementById("btn-list");

  $btnGrid.addEventListener("click", () => {
    // remove list class on list
    $list.classList.remove("items--list");
    // make sure right button has active class
    $btnGrid.classList.add("active");
    $btnList.classList.remove("active");
  });

  $btnList.addEventListener("click", () => {
    // add list class on list
    $list.classList.add("items--list");
    // make sure right button has active class
    $btnList.classList.add("active");
    $btnGrid.classList.remove("active");
  });
})();
