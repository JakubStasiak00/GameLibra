<template>
    <div class="q-pa-md q-mx-auto q-mt-xl" style="max-width: 400px">

        <h3>Sign in</h3>

        <q-form @submit="handleLogin" class="q-gutter-md">

            <q-input filled v-model="email" type="email" label="E-mail" hint="Enter your e-mail" lazy-rules :rules="[
                val => /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val) || 'E-mail adress you entered is invalid'
            ]" />

            <q-input filled v-model="password" label="Password" type="password" hint="Enter your password" />

            <div class="row justify-center q-pt-md">
                <q-btn label="Sign In" type="submit" color="primary" />
            </div>

        </q-form>

        <div class="text-negative q-pt-md text-center" v-if="err"> {{ err }} </div>

        <p class="text-center q-mt-md">No account yet ? <router-link to="/register">Sign up</router-link></p>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from 'src/stores/userStore';
import { useRouter } from 'vue-router';

const router = useRouter()
const userStore = useUserStore()

const password = ref('')
const email = ref('')
const err = ref('')

const handleLogin = async () => {
    await userStore.login(email.value, password.value)
    const { error } = userStore
    console.log(error)

    if(error === '') {
        await userStore.updateCredentials()
        console.log(userStore.user)
        router.push('/auth')
    } else {
        err.value = error
    }
}

</script>