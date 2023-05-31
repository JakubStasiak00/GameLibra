<template>
    <div class="q-pa-md q-mx-auto q-mt-xl" style="max-width: 400px">

        <h3>User Settings</h3>

        <q-form @submit="handleSettingsChange" class="q-gutter-md">

            <q-input filled v-model="imageURL" type="url" label="Avatar URL" hint="Enter URL for your new avatar">
                <template v-slot:prepend>
                    <q-icon name="mdi-image" />
                </template>
            </q-input>

            <q-input filled v-model="username" label="Username" hint="Enter your new username" lazy-rules :rules="[
                val => val.length === 0 || val.length >= 3 || 'Username should include at least 3 characters',
                val => val.length <= 16 || 'Username should incude 16 characters or less',
                val => /^[a-zA-Z0-9_ ]*$/.test(val) || 'Username should only use letters, numbers and underscore'
            ]">
                <template v-slot:prepend>
                    <q-icon name="person" />
                </template>
            </q-input>

            <div class="row justify-center q-pt-md">
                <q-btn label="Update" type="submit" color="primary" />
            </div>

        </q-form>

        <div class="text-negative q-pt-md text-center" v-if="err"> {{ err }} </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import {useUserStore} from '../stores/userStore'
import { useQuasar } from 'quasar'

let currentMessage = 'Changes Saved'

// notification

const $q = useQuasar()

const showNotif = () => {
  $q.notify({
    message: currentMessage,
    color: 'red-6',
    timeout: 1000,
    position: 'top'
  })
}

// updating user settings

const imageURL = ref('')
const username = ref('')
const userStore = useUserStore()

const handleSettingsChange = async () => {
    console.log(username.value, imageURL.value)
    await userStore.updateProfileInfo(username.value, imageURL.value)
    const { error } = userStore

    if(error !== '') {
        currentMessage = error
    } else {
        currentMessage = 'Changes Saved'
    }

    username.value = ''
    imageURL.value = ''
    showNotif()
}

</script>