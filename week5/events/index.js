(() => {
  const $list = document.getElementById("list");
  const day = "20";

  const fetchCategories = async () => {
    let response = await fetch(
      "https://www.pgm.gent/data/gentsefeesten/categories.json"
    );
    return await response.json();
  };

  const fetchEvents = async () => {
    let response = await fetch(
      "https://www.pgm.gent/data/gentsefeesten/events_500.json"
    );
    return await response.json();
  };

  const fetchData = async () => {
    try {
      const categories = await fetchCategories();
      const events = await fetchEvents();

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
