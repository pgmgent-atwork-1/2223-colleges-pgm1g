(() => {
  const $title = document.getElementById("title");

  const params = new URLSearchParams(window.location.search);

  // dag op halen
  const day = params.get("day");
  // slug op halen
  const slug = params.get("slug");

  $title.innerHTML = `Dag is ${day} en slug is ${slug}`;
})();
