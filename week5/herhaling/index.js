(() => {
  const $services = document.getElementById("services");

  // get data-type
  const type = $services.dataset.type;

  /* 
  optie 1
  let html = "";
  SERVICES.forEach((service) => {
    if (service.type === type) {
      html += `
        <li class="item">
          <img src="${service.image}" />
          <h2>${service.title}</h2>
          <p>${service.description}</p>
        </li>
      `;
    }
  });
  */

  /*
  optie 2
  let html = "";

  for (const service of SERVICES) {
    if (service.type === type) {
      html += `
        <li class="item">
          <img src="${service.image}" />
          <h2>${service.title}</h2>
          <p>${service.description}</p>
        </li>
      `;
    }
  }
  */

  // optie 3
  const filteredServices = SERVICES.filter((service) => {
    return service.type === type;
  });

  const html = filteredServices
    .map((service) => {
      return `
      <li class="item">
        <img src="${service.image}" />
        <h2>${service.title}</h2>
        <p>${service.description}</p>
      </li>
    `;
    })
    .join("");

  $services.innerHTML = html;
})();
