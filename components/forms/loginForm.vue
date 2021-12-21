<template>
  <div class="container">
    <a href="/" class="logo">
      <img src="https://d3ptyyxy2at9ui.cloudfront.net/logo-e7e40b.svg" alt="logo">
    </a>
    <div>
      <baseForm />
      <form @submit.prevent="submit">
        <inputField @bind="setter" type="email" >Email</inputField>
        <inputField @bind="setter" type="password">Password</inputField>
        <button>Log in</button>
        <label class="stay-logIn" for="stay-logIn">
          <input type="checkbox" name="stay-logIn" id="stay-logIn">
          Keep me logged in
        </label>
      </form>
    </div>
    <div class="separator"></div>
    <div class="form-info center">Don't have an account?
      <a href="/users/showregister">Sign up</a>
    </div>
    <a href="" class="form-info center">Todoist Support</a>

  </div>
</template>

<script>
  import baseForm from "./baseForm";
  import inputField from "./inputField";
  export default {
    name: "loginForm",
    components:{
      baseForm,
      inputField
    },
    data(){
      return{
        email: '' ,
        password: '',
      }
    },
    methods:{
      submit(){
        // logging in
        let user = this.$store.state.users.find(item => item.email === this.email);
        if (user && user.password === this.password){
          user = JSON.stringify(user);
          sessionStorage.setItem('login', user);
          this.$router.push('/app')
        }
      },
      setter(val, type){
        if (type === 'email') this.email = val;
        else this.password = val;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "asset/forms";
</style>
