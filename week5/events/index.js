(() => {
  const $list = document.getElementById("list");
  const day = "20";

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://www.pgm.gent/data/gentsefeesten/categories.json"
      );
      const categories = await response.json();

      response = await fetch(
        "https://www.pgm.gent/data/gentsefeesten/events_500.json"
      );
      const events = await response.json();

      renderEvents(categories, events);
    } catch (error) {
      // todo
    }
  };

  fetchData();

  const renderEvents = (categories, events) => {
    const html = categories
      .map((category) => {
        const filteredEvents = events.filter((event) => {
          return event.day === day && event.category.includes(category);
        });

        return `
      <h2 id="${category}">${category}</h2>
      <ul>
        ${filteredEvents
          .map((event) => {
            return `
              <li>${event.title}</li>
            `;
          })
          .join("")}
      </ul>
    `;
      })
      .join("");

    $list.innerHTML = html;
  };
})();
