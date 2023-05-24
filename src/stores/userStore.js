import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@firebase/auth';
import { defineStore } from 'pinia';
import { auth } from 'src/firebase/main';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const isLogged = ref(false)
  const error = ref('')

  async function login(email, password) {

    try {
      error.value = ''
      let credentials = await signInWithEmailAndPassword(auth, email, password)

      if (!credentials.ok) {
        throw new Error('something went wrong')
      }

      user.value = credentials
      isLogged.value = true
    } catch (err) {
      error.value = err.message
    }
  }

  async function register(email, password) {
    try {
      error.value = ''
      let credentials = await createUserWithEmailAndPassword(auth, email, password)

      if (!credentials.ok) {
        throw new Error('something went wrong')
      }

      user.value = credentials
      isLogged.value = true
    } catch (err) {
      error.value = err.message
    }
  }

  async function logout() {
    signOut(auth)
      .then(() => {
        error.value = ''
        let router = useRouter()
        router.push('/login')
      })
      .catch(err => {
        error.value = err.message
      })
  }

  return { user, isLogged, error, login, register, logout }
})