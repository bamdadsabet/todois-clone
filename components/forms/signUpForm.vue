<template>
  <div class="container">
    <a href="/" class="logo">
      <img src="https://d3ptyyxy2at9ui.cloudfront.net/logo-e7e40b.svg" alt="logo">
    </a>
    <div class="mover-container">
      <div class="mover">
        <div class="step-one">
          <baseForm type="signUp" />
          <form >
            <inputField @bind="setter" type="email" >Email</inputField>
            <button @click.prevent="nextStep">Sign up with Email</button>
          </form>
          <div class="form-info info-box">
            By continuing with Google, Apple, or Email, you agree to Todoist's <a href="https://todoist.com/terms" target="_blank">Terms of Service </a> and <a href="https://todoist.com/privacy" target="_blank">Privacy Policy</a>.
          </div>
        </div>
        <div class="step-two">
          <span id="backLink" @click="scroll(-1)">
            <svg width="17" height="24" style="transform: rotate(90deg);">
              <path fill="none" stroke="currentColor" d="M16 10l-4 4-4-4">x</path>
            </svg>
            {{this.email}}
          </span>
          <h1>Almost there</h1>
          <inputField @bind="setter" type="text">Your name</inputField>
          <inputField @bind="setter" type="password">Password</inputField>
          <div class="form-info">
            Your password must be at least 8 characters long. Avoid common words or patterns.
          </div>
          <button @click.prevent="submit">Sign up now</button>
          <label class="stay-logIn" for="stay-logIn">
             <input type="checkbox" name="stay-logIn" id="stay-logIn">
              Keep me logged in
          </label>
        </div>
      </div>
    </div>
    <div class="separator"></div>
    <div class="form-info center">
      Already signed up?
      <a href="/Users/showLogin">Go to login</a>
    </div>
  </div>
</template>

<script>
  import inputField from "./inputField";
  import baseForm from "./baseForm";
  export default {
    name: "signUpForm",
    components:{
      inputField,
      baseForm
    },
    data(){
      return{
        name: '',
        email: '',
        password: ''
      }
    },
    computed:{
      emailValid(){
        return /\S+@\S+\.\S+/.test(this.email)
      }
    },
    methods:{
      scroll(direction = 1){
        document.querySelector('div.mover-container').scrollTo({
          top: 0,
          left: direction * 900,
          behavior: "smooth"
        });
      },
      setter(val, type){
        if (type === 'email') this.email = val;
        else if (type === 'password') this.password = val;
        else this.name = val;
      },
      submit(){
        let newUser = {
          email: this.email,
          name: this.name,
          password: this.password,
        };
        this.$store.commit('register', newUser);
        newUser = JSON.stringify({...newUser, id:this.$store.state.latestId});
        sessionStorage.setItem('login', newUser);
        this.$router.push('/app')
      },
      nextStep(){
        let email = this.email;
        let exist = this.$store.state.users.find(item => item.email === this.email);
        if (email !==''&& this.emailValid && !exist) this.scroll();
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "asset/forms";
  div.mover-container{
    overflow-x: hidden;
    div.mover{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 900px;
      div[class^=step]{
        width: 390px;
      }
    }
    #backLink{
      font-size: 14px;
      cursor: pointer;
      padding: 5px 5px 5px 0;
      box-sizing: border-box;
      border-radius: 3px;
      transition: all .2s;
      svg{
        position: relative;
        top: 5px;
      }
      &:hover{
        background-color: #EEEEEE;
      }
    }
  }
</style>
