(() => {
  const cheeses = [
    {
      id: "camembert",
      name: "Camembert",
      country: "Frankrijk",
      shape: "cirkel",
    },
    {
      id: "brie",
      name: "Brie",
      country: "Frankrijk",
      shape: "driehoekig",
    },
    {
      id: "gouda",
      name: "Gouda",
      country: "Nederland",
      shape: "bol",
    },
    {
      id: "schimmelkaas",
      name: "Schimmelkaas",
      country: "Frankrijk",
      shape: "trapezium",
    },
    {
      id: "geitenkaas",
      name: "Geitenkaas",
      country: "Spanje",
      shape: "piramide",
    },
    {
      id: "mozzarella",
      name: "Mozzarella",
      country: "Italië",
      shape: "bol",
    },
  ];

  const $navigation = document.getElementById("navigation");
  const $detail = document.getElementById("detail");

  const generateHTMLForNavigation = () => {
    return cheeses
      .map((cheese) => {
        return `
          <li>
            <a href="index.html?id=${cheese.id}">${cheese.name}</a>
          </li>`;
      })
      .join("");
  };

  const generateHTMLForDetail = () => {
    const params = new URLSearchParams(window.location.search);

    if (!params.has("id")) {
      return "<p>Kies een kaas</p>";
    }

    // als we hier geraken zijn we zeker dat er een parameter id is
    const id = params.get("id");
    const cheese = cheeses.find((cheese) => {
      return cheese.id === id;
    });

    if (!cheese) {
      return `<h2>Kon de kaas niet terug vinden</h2>`;
    }

    return `
      <div>
        <h2>${cheese.name}</h2>
        <p>Country: ${cheese.country}</p>
      </div>
    `;
  };

  const initialize = () => {
    $navigation.innerHTML = generateHTMLForNavigation();
    $detail.innerHTML = generateHTMLForDetail();
  };

  initialize();
})();
