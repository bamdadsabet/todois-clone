export const state = () => ({
  latestId : 0,
  users : [
    {
      name: 'user',
      email: 'user@user.com',
      password: 'imuser',
      id: 0
    },
  ],
  tasks: {
    task_0 : [
      {
        content: 'first task',
        description: 'number 1'
      }
    ]
  }
});


export const  mutations = {
  // login(state, user) {
  //   state.user = user;
  //   state.isLogin = true;
  // }
  register(state, newUser) {
    state.latestId++;
    const user = {
        ...newUser,
        id: state.latestId
    };
    state.users.push(user);
    state.tasks[`task_${state.latestId}`] = [];
    return user
  },
  addTask(state, data) {
    console.log(data)
    state.tasks[`task_${data.id}`].push(data.value);
  },
  deleteTask(state, data){
    state.tasks[`task_${data.id}`].splice(data.index, 1);
  },
  defaultMode(state){
    state.latestId = 0;
    state.users = [
      {
        name: 'user',
        email: 'user@user.com',
        password: 'imuser',
        id: 0
      },
    ];
    state.tasks = {
      task_0 : [
        {
          content: 'first task',
          description: 'number 1'
        }
      ]
    };
  }
};
