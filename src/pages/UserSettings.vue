<template>
    <div class="q-pa-md q-mx-auto q-mt-xl" style="max-width: 400px">

        <h3>User Settings</h3>

        <div class="q-gutter-md">

            <q-input filled v-model="imageURL" type="url" label="Avatar URL" hint="Enter URL for your new avatar">
                <template v-slot:prepend>
                    <q-icon name="mdi-image" />
                </template>
                <template v-slot:append>
                    <q-btn icon="upgrade" class="text-red-6 q-pa-sm" @click="changeUserData('picture', imageURL)" />
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
                <template v-slot:append>
                    <q-btn icon="upgrade" class="text-red-6 q-pa-sm"  @click="changeUserData('username', username)" />
                </template>
            </q-input>
        </div>

        <div class="text-negative q-pt-md text-center" v-if="err"> {{ err }} </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/userStore'
import { useQuasar } from 'quasar'

const currentMessage = ref('Changes Saved')

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

const changeUserData = async (changeType, changeValue) => {
   await userStore.updateProfileData(changeType, changeValue)

   const { error } = userStore

   if (error !== '') {
        currentMessage.value = error
    } else {
        currentMessage.value = 'Changes Saved'
    }

    switch(changeType){
        case 'username': username.value = ''
        break

        case 'picture': imageURL.value = ''
        break
    }
    
    showNotif()
}

</script>