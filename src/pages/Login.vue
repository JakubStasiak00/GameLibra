<template>
    <div class="q-pa-md q-mx-auto q-mt-xl" style="max-width: 400px">

        <h3>Sign in</h3>

        <q-form @submit="handleLogin" class="q-gutter-md">

            <q-input filled v-model="email" type="email" label="E-mail" hint="Enter your e-mail" lazy-rules
            :rules="[
                val => /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val) || 'E-mail adress you entered is invalid'
                ]" />

            <q-input filled v-model="password" label="Password" type="password" hint="Enter your password" />

            <div class="row justify-center q-pt-md">
                <q-btn label="Sign In" type="submit" color="primary"/>
            </div>

        </q-form>

        <p class="text-center q-mt-md">No account yet ? <router-link to="/register">Sign up</router-link></p>

    </div>
</template>

<script setup>
import { ref } from 'vue';

    const password = ref('')
    const email = ref('')

    const handleLogin = () => {
        console.log('logged in as', email.value)
    }

</script>