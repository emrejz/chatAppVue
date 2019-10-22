<template>
  <div class="hello">
    <form @submit.prevent="signInLocal()">
      <input v-model="username" />
      <input v-model="password" />
      <button type="submit">sign in</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        username: "",
        password: ""
      };
    },
    methods: {
      signInLocal() {
        this.$store.dispatch("signInLocal", {
          username: this.username,
          password: this.password
        });
      }
    },
    created() {
      this.$store.dispatch("connectSocket");
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
