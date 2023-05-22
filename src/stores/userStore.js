import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    // Define your state properties here
    user: null,
    isLoggedIn: false,
  }),
  getters: {
    // Define your getters here
    getUser: (state) => state.user,
    getIsLoggedIn: (state) => state.isLoggedIn,
  },
  actions: {
    // Define your actions here
    login(theUser) {
      this.user = theUser
      this.isLoggedIn = true
    },
    logout() {
      this.user = null
      this.isLoggedIn = false
    },
  },
});