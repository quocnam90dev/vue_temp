export default {
  getCurrent ({ commit }) {
    commit('SET_CURRENT_USER', {id: 2})
    // return UsersService.getCurrent()
    //   .then(user => )
    //   .catch(error => commit('toast/NEW', { type: 'error', message: error.message }, { root: true }))
  }
}
