<template>
    <div>
      <h1>Today <span class="date">{{currentDate}}</span></h1>
      <ul>
        <li v-for="(task, index) in tasks" >
          <button role="checkbox" checked="checked" class="today-btn">
            <div
              class="complete-task-btn"
              @click="done(index)"
            ></div>
          </button>
          <div class="todo-content">
            {{task.content}}
          </div>
          <div class="description">
            {{task.description}}
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "taskList",
      props:{
        id: {
          type: Number
        }
      },
      data() {
        return {
          days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          months: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          tasks: this.$store.state.tasks[`task_${this.id}`]
        };
      },
      computed:{
        currentDate() {
          let current = new Date();
          let day = this.days[current.getDay()];
          let month = this.months[current.getMonth()];
          return `${day} ${current.getDate()} ${month}`;
        },
      },
      methods:{
        done(index){
          this.$store.commit('deleteTask', {index: index , id: this.id});
        }
      }
    }
</script>

<style scoped lang="scss">
  span.date{
    color: #7f828b;
    font-size: 13px;
    font-weight: normal;
    vertical-align: bottom;
  }
  ul{
    padding-left: 30px;
    li {
      list-style: none;
      padding: 10px 0;
      box-sizing: border-box;
      .todo-content {
        font-size: 14px;
        line-height: 21px;
        word-wrap: break-word;
        word-break: break-word;
        font-weight: bolder;
        color: #7f828b;
        overflow: hidden;
      }

      .description {
        font-size: 12px;
        line-height: 21px;
        word-wrap: break-word;
        word-break: break-word;
        color: #7f828b;
        overflow: hidden;
        padding-left: 5px;
      }

      .today-btn {
        text-decoration: none;
        border: none;
        background-color: transparent;
        padding: 0;
      }

      .complete-task-btn {
        margin-top: -15px;
        height: 18px;
        width: 18px;
        border: 1px solid gray;
        border-radius: 50%;
        color: grey;
        padding: 1px;
        background-color: transparent;
        position: relative;
        top: 22px;
        right: 25px;
        &:hover{
          border-color: var(--sidebar-hover);
          background-color: transparent;
          cursor: pointer;
          &::after {
            content: "\2713";
            display: inline-block;
            position: relative;
            bottom: 5px;
            color: silver;
            font-size: medium;
          }
        }
      }

      .task-item > button:checked {
        border-color: red;
      }

    }
  }

</style>
