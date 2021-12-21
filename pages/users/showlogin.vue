<template>
    <div id="formPage">
     <loginForm />
    </div>
</template>

<script>
  import loginForm from "../../components/forms/loginForm";
  export default {
    name: "showlogin",
    components:{
      loginForm
    }
  }
</script>

<style>
  body{
    margin: 0;
    background-color: #FAFAFA;
  }
  div #formPage{
    padding-top: 40px;
    box-sizing: border-box;
  }
</style>
