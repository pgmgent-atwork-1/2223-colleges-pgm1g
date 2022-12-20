(() => {
  const app = {
    initialize() {
      this.cacheElements();
      this.fetchData();
    },
    cacheElements() {
      this.$list = document.getElementById("list");
    },
    async fetchData() {
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
    },
    generateHTMLForEvents(categories, events) {
      const day = "20";

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

      this.$list.innerHTML = html;
    },
  };

  app.initialize();
})();
