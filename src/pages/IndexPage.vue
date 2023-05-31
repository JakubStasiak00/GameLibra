<template>
  <div class="q-pa-md">
    <div class="row q-gutter-md q-col-lg-3 justify-center">
      <q-card class="card xs-col-12 sm-col-6 md-col-4 lg-col-3 flex custom-center" style="width: 250px;">
        <q-card-section>
          <q-btn flat @click="handleAddingGame">Add Game</q-btn>
        </q-card-section>
      </q-card>

      <q-card class="card xs-col-12 sm-col-6 md-col-4 lg-col-3" v-for="game in games" :key="game" style="width:250px;">
        <q-img :src="game.background_image" cover class="absolute-full" />
        <q-btn @click="deleteGame(game)" flat rounded size="md" class="q-px-sm absolute text-white" icon="close" style="z-index: 10;" />
        <q-card-section>
          <q-badge color="primary" floating class="q-pa-sm" style="border-radius: 1000px; aspect-ratio: 1/1;">
            <div v-if="game.metacritic">{{ game.metacritic }}</div>
            <div v-else>
              <q-icon name="remove"></q-icon>
            </div>
          </q-badge>
        </q-card-section>
        <q-card-section>
          
        </q-card-section>
        <q-card-section class="bg-red text-white q-py-xs q-mt-xl" style="border-radius: 0;">
          {{ game.name }}
        </q-card-section>
      </q-card>

    </div>
  </div>

  <q-dialog v-model="addGames" @hide="resetDialog">
    <q-card style="min-width: 300px;">
      <q-card-section>
        <div class="text-h6 text-red-6">Add Game</div>
      </q-card-section>

      <q-card-section v-if="error">
        {{ error }}
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="searchGame" class="row">
          <q-input standout v-model="gameToFind" label="Find your game">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-btn square type="submit" color="primary" style="border-top-right-radius: 10px;">Search</q-btn>
        </q-form>
      </q-card-section>

      <q-card-section class="q-pt-sm" v-if="foundGame">
        <q-card style="border-radius: 0;">
          <q-img :src="foundGame.background_image" cover class="absolute-full q-mt-lg" />
          <q-card-section class="text-subtitle1 text-white text-bold bg-red-6 q-mb-xl q-py-sm">
            {{ foundGame.name }}
          </q-card-section>

          <q-card-actions align="right">
            <q-btn @click="addingGame" color="primary">Add</q-btn>
          </q-card-actions>
        </q-card>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useGameAPI } from '../composables/getGameFromAPI'
import { db } from 'src/firebase/main';
import { collection, deleteDoc, doc, getDoc, onSnapshot, setDoc } from '@firebase/firestore';
import { useUserStore } from 'src/stores/userStore';
import { watchEffect } from 'vue';

const userStore = useUserStore()

const addGames = ref(false)
const gameToFind = ref('')
const foundGame = ref(null)
const error = ref('')

const games = ref([])

const handleAddingGame = () => {
  addGames.value = true
}

const searchGame = async () => {
  error.value = ''

  const game = gameToFind.value.trim().replace(/\s+/g, "-")

  const response = await useGameAPI(game)

  if (response === 'error') {
    console.log(response)
  } else {
    foundGame.value = response
    console.log(foundGame.value)
  }
}

const resetDialog = () => {
  foundGame.value = null
  gameToFind.value = ''
}

const gettingLibraryReference = () => {
  console.log(userStore.user.uid)

  let usersRef = collection(db, 'users')
  let userRef = doc(usersRef, userStore.user.uid)
  let libraryRef = collection(userRef, 'library')

  return libraryRef
}

const addingGame = async () => {
  let libraryRef = gettingLibraryReference()

  try {
    let gameProps = {
      ...foundGame.value
    }

    const docRef = doc(libraryRef, foundGame.value.slug)

    const checkDoc = await getDoc(docRef)

    if(checkDoc.exists()) {
      throw new Error('Game was already added')
    }

    await setDoc(docRef, gameProps)

  } catch (err) {
    error.value = err.message
  }
}

const deleteGame = async game => {
  let libraryRef = gettingLibraryReference()

  try {
    deleteDoc(doc(libraryRef, game.slug))
  } catch (err) {
    console.log(err.message)
  }
}

watchEffect(async () => {
  if (userStore.isLogged) {
    const unsubscribe = onSnapshot(await gettingLibraryReference(), snapshot => {
      games.value = []

      snapshot.forEach(doc => {
        games.value.push(doc.data())
      })
    })
  }
})


</script>

<style>
.custom-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
