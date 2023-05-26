import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from '@firebase/auth';
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

      user.value = credentials
      isLogged.value = true
    } catch (err) {
      error.value = err.message
    }
  }

  async function register(email, password, username) {
    try {
      error.value = ''
      let credentials = await createUserWithEmailAndPassword(auth, email, password)

      await updateProfileInfo(username, 'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg')

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

  async function updateCredentials() {
    user.value = auth.currentUser
    isLogged.value = true
  }

  async function updateProfileInfo(displayName, photoURL) {
    error.value = ''
    
    let newName = ''
    let newImage = ''

    if(!displayName){
      newName = user.displayName
    } else {
      newName = displayName
    } 

    if(!photoURL){
      newImage = user.photoURL
    } else {
      newImage = photoURL
    }

    try {
      await updateProfile(auth.currentUser, {
        displayName: newName,
        photoURL: newImage,
      });
      console.log("Profile updated successfully!");
    } catch (err) {
      error.value = err.message
    }
  };

  return { user, isLogged, error, login, register, logout, updateCredentials, updateProfileInfo }
})