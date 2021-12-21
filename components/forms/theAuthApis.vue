<template>
 <div>
   <a href="" class="auth-api" v-for="(src, name) in authApis" :key="name">
     <img width="16" height="16" :src="src">
     Continue with {{name}}
   </a>
 </div>
</template>

<script>
    export default {
        name: "theAuthApis",
        props:{
          authApis: Object
        }
    }
</script>

<style scoped lang="scss">
  $infoGray: #B3B3B3;
  $borderGray: #ddd;
  $border: 1px solid $borderGray;
  a.auth-api{
    cursor: pointer;
    box-sizing: border-box;
    width: 100%;
    font-weight: 400;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    margin-left: 0;
    text-shadow: none;
    padding: 6px;
    line-height: 24px;
    min-width: 273px;
    background: white;
    border: $border;
    border-radius: 5px;
    text-align: center;
    color: black;
    text-decoration: none;
    img{
      margin-right: 10px;
    }
    &:hover{
       border-color: $infoGray;
       background-color: #EEEEEE;
     }
  }
</style>
