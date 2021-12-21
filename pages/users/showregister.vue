<template>
  <div id="formPage">
    <signUpForm />
  </div>
</template>

<script>
  import signUpForm from "../../components/forms/signUpForm";
  export default {
    name: "showregister",
    components:{
      signUpForm
    }
  }
</script>

<style>
  body{
    margin: 0;
    background-color: #FAFAFA;
  }
  div #formPage{
    padding-top: 50px;
    box-sizing: border-box;
  }
</style>
