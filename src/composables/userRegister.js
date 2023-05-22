import { createUserWithEmailAndPassword } from "@firebase/auth"
import { auth } from '../firebase/main'
import { useUserStore } from "src/stores/userStore"


export async function useRegister(email, password) {

    const userStore = useUserStore()

    try {
        const userCreds = await createUserWithEmailAndPassword(auth, email, password)
        userStore.login(userCreds)
    } catch(error) {
        const errorCode = error.code
        const errorMessage = error.message
    }
}
