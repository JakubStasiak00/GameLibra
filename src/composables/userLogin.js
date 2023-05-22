import { signInWithEmailAndPassword } from "@firebase/auth"
import { auth } from '../firebase/main'
import { useUserStore } from "src/stores/userStore"


export default useLogin = function(email, password) {

    const userStore = useUserStore()

    signInWithEmailAndPassword(auth, email, password)
        .then(userCreds => {
            userStore.login(userCreds)
        }).catch(error => {
            const errorCode = error.code
            const errorMessage = error.message
        })
}