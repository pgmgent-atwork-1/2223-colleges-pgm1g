(() => {
  const persons = [
    {
      name: "Pardoel",
      firstName: "Gers",
      nickName: null,
    },
    {
      name: "D'Hollander",
      firstName: "Stien",
      nickName: "S10",
    },
    {
      name: "Van Persie",
      firstName: "Robin",
      nickName: null,
    },
    {
      name: "Van Adriaan",
      firstName: "Bassie",
      nickName: null,
    },
    {
      name: "Kroes",
      firstName: "Doutzen",
      nickName: null,
    },
    {
      name: "Van Dijk",
      firstName: "Virgil",
      nickName: "Aquaman",
    },
    {
      name: "Duterloo",
      firstName: "Mila",
      nickName: "Mila van Duterloo Digital",
    },
  ];

  const app = {
    initialize() {
      this.cacheElements();
      this.buildUI();
    },
    cacheElements() {
      this.$list = document.getElementById("list");
    },
    buildUI() {
      this.$list.innerHTML = this.generateHTMLForList();
    },
    generateHTMLForList() {
      return persons
        .map((person) => {
          return `
          <li>
            <h2>${person.firstName} ${person.name}</h2>
            ${person.nickName ? `<span>${person.nickName}</span>` : ""}
          </li>
        `;
        })
        .join("");
    },
  };

  app.initialize();
})();
