var app = new Vue({
  el: "#usuarios",
  data: function () {
    return {
      users: [],
    };
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    loadUsers() {
      fetch("https://reqres.in/api/users?per_page=10")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.users = data.data;
        })
        .catch((error) =>
          console.error("Erro ao carregar os usuários:", error)
        );
    },
  },
});
