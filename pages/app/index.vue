<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
  <div v-if="show">
    <nav-bar @toggleTheme="switchTheme" @collapse="collapseSidebar" />
    <side-bar
      :isCollapse="isCollapsed"
      :showToday="showToday"
      :showInbox="showInbox"
    />
    <div></div>
    <div class="today-task">
      <task-list :id="userId" />
      <add-task-button :id="userId"/>
    </div>
    <!-- <div class="today-task" v-if="showInbox">
      <all-tasks-inbox />
    </div> -->
  </div>
</template>

<script>
  import NavBar from "../../components/app/NavBar";
  import SideBar from "../../components/app/SideBar";
  import AddTaskButton from "../../components/app/AddTaskButton";
  import taskList from "../../components/app/task-list";
  export default {
    name: "app",
    components: {
      NavBar,
      SideBar,
      AddTaskButton,
      taskList
    },
    data() {
      return {
        isActiveLight: true,
        isCollapsed: false,
        showToday: true,
        showInbox: false,
        show: false,
        userId: null
      };
    },

    watch: {
      isCollapsed: function() {
        const today = document.querySelector(".today-task");
        today.classList.toggle("main-active");
      },
    },
    methods: {
      switchTheme() {
        if (this.isActiveLight) {
          this.isActiveLight = !this.isActiveLight;
          document.documentElement.setAttribute("data-theme", "dark");
        } else {
          this.isActiveLight = !this.isActiveLight;
          document.documentElement.setAttribute("data-theme", "light");
        }
      },
      collapseSidebar() {
        this.isCollapsed = !this.isCollapsed;
      },
      showTodayComponent() {
        this.showToday = true;
        this.showInbox = false;
      },
      showInboxComponent() {
        this.showInbox = true;
        this.showToday = false;
      },
    },
   mounted(){
      let userInfo = sessionStorage.getItem('login');
      userInfo = JSON.parse(userInfo);
      if (userInfo === null) this.$router.push('/users/showlogin');
      else{
        this.show = true;
        this.userId = userInfo.id;
        console.log(this.userId)
      }
   }

  };
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: var(--bg-color);
    font-family: "Roboto", sans-serif;
  }
  :root {
    --bg-color: #fff;
    --nav-color: #db4c3f;
    --nav-text: #fff;
    --search-bg: #e27065;
    --search-bg: #e27065;
    --sidebar-color: #fafafa;
    --sidebar-text: #4b3f33;
    --sidebar-hover: #ececec;
    --tasks-border: #f0f0f0;
    --add-tasks-border: rgb(206, 203, 203);
  }
  [data-theme="light"] {
    --bg-color: #fff;
    --nav-color: #db4c3f;
    --nav-text: #fff;
    --search-bg: #e27065;
    --sidebar-color: #fafafa;
    --sidebar-text: #4b3f33;
    --tasks-border: #f0f0f0;
    --add-tasks-border: rgb(206, 203, 203);
  }

  [data-theme="dark"] {
    --bg-color: #1f1f1f;
    --nav-color: #282828;
    --search-bg: #363636;
    --sidebar-color: #282828;
    --sidebar-text: #fff;
    --sidebar-hover: #363636;
    --tasks-border: #363636;
    --add-tasks-border: #535353;
  }
  .today-task {
    transition: margin-left 0.5s;
    margin-left: 270px;
    padding: 2% 15% 15% 15%;
    margin-top: 50px;
    color: var(--sidebar-text);
  }

  @media (max-width: 700px) {
    .today-task {
      margin-left: 0;
    }
  }
</style>
