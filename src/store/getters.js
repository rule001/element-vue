const getters = {
    token: state => state.user.token,
    userName: state => state.user.userName,
    roles: state => state.user.roles,
    addRoutes: state => state.user.addRoutes,
  }
  export default getters
  