<template>
<div>
  <h1 v-if="isLogin">Log in</h1>
  <h1 v-else >Sign up</h1>
  <!--    auth section-->
  <theAuthApis :authApis="authApis" />
  <!--      separator-->
  <div class="separator"><span>oR</span></div>
</div>
</template>

<script>
  import theAuthApis from "./theAuthApis";
  export default {
    name: "baseForm",
    components:{
      theAuthApis
    },
    props:{
        type:{
          type: String,
          default: 'login'
        }
    },
      data(){
        return{
          authApis: {
              Google: "https://d3ptyyxy2at9ui.cloudfront.net/google-32ae27.svg",
              Facebook: "https://d3ptyyxy2at9ui.cloudfront.net/facebook-fadd25.svg",
              Apple: "https://d3ptyyxy2at9ui.cloudfront.net/apple-728ddf.svg"
          }
        }
      },
    computed:{
        isLogin(){
          return this.type === 'login'
        }
    },
    methods:{
        formSubmit(){
          console.log('works ')
        }
    }
  }
</script>

<style scoped lang="scss">
  /*variables*/
  $infoGray: #B3B3B3;
  $borderGray: #ddd;
  $border: 1px solid $borderGray;
    h1{
      font-size: 26px;
      font-weight: 700;
      color: black;
      margin: 0 0 1.1rem;
    }
    div.separator{
      margin-top: 30px;
      margin-bottom: 30px;
      height: 0;
      border-top: $border;
      border-bottom: 1px solid white;
      position: relative;
      span{
        position: absolute;
        left: calc(50% - 10px);
        top: -10px;
        z-index: 3;
        background-color: white;
        color: #7F828B;
      }
    }
    /*.form-info{*/
    /*  display: block;*/
    /*  width: 100%;*/
    /*  color: #666;*/
    /*  font-size: 14px;*/
    /*  margin-bottom: 12px;*/
    /*  span{*/
    /*    color: #dd4b39;*/
    /*  }*/
    /*  a{*/
    /*    color: #dd4b39;*/
    /*    text-decoration: none;*/
    /*    &:hover{*/
    /*      text-decoration: underline;*/
    /*    }*/
    /*  }*/
    /*  &.info-box{*/
    /*    margin-top: 25px;*/
    /*    line-height: 1.4rem;*/
    /*  }*/
    /*}*/
    /*a.form-info{*/
    /*  text-decoration: none;*/
    /*  padding-left: 3px;*/
    /*  &:hover{*/
    /*    text-decoration: underline;*/
    /*  }*/
    /*}*/
    /*.center{*/
    /*  text-align: center;*/
    /*}*/
</style>
