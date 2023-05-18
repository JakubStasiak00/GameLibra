<template>
    <div class="q-pa-md q-mx-auto q-mt-xl" style="max-width: 400px">

        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

            <q-input filled v-model="username" label="Username" hint="Enter your username" lazy-rules
            :rules="[
                val => val.length >= 3 || 'Username should include at elast 3 characters',
                val => val.length <= 16 || 'Username should incude 16 characters or less',
                val => /^[a-zA-Z0-9_]+$/.test(val) || 'Username should only use letters, numbers and underscore'
                ]" />

            <q-input filled v-model="password" label="Password" type="password" hint="Enter your password" lazy-rules
            :rules="[
                val => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/.test(val) || 'Password should contain at least one number, uppercase and lowercase letter, is should also be 8 to 30 characters long'
                ]" />

            <q-input filled v-model="email" type="email" label="E-mail" hint="Enter your e-mail" lazy-rules
            :rules="[
                val => /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val) || 'E-mail adress you entered is invalid'
                ]" />

            <div class="row justify-evenly q-pt-md">
                <q-btn label="Submit" type="submit" color="primary" />
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>

        </q-form>

    </div>
</template>

<script setup>
import { ref } from 'vue';

    const username = ref('')
    const password = ref('')
    const email = ref('')

    const onSubmit = () => {
        console.log('username:', username.value)
        console.log('password:', password.value)
        console.log('email:', email.value)
    }

    const onReset = () => {
        username.value = ''
        password.value = ''
        email.value = ''
    }
</script>