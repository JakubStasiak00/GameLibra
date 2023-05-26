<template>
  <q-layout view="lHh lpR lff">

    <q-header bordered class="bg-transparent text-white">

      <q-img src="https://asyikasyik.com/files/uploads/2018/09/header-background-indexed1.png" cover
        class="absolute-full" />
      <q-toolbar>
        <q-toolbar-title class="row">
          <q-avatar>
            <q-icon class="text-red-6" name="mdi-robot-angry" size="md"  @click="goToHome" />
          </q-avatar>
          <div class="self-end"  @click="goToHome">
            <span class="q-pl-xs text-weight-bold">Game</span><span class="text-red-6">Libra</span>
          </div>

        </q-toolbar-title>


        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="DrawerOpen" side="right" overlay behavior="mobile">
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 100px; border-right: 1px solid #ddd">
        <q-list>
          <q-item clickable v-ripple @click="goToHome">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section>
              Home
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="goToTopTen">
            <q-item-section avatar>
              <q-icon name="emoji_events" />
            </q-item-section>

            <q-item-section>
              Top 10
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="goToSettings">
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>

            <q-item-section>
              Account Settings
            </q-item-section>
          </q-item>

          <q-item class="text-negative" clickable v-ripple @click="handleLogout">
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

            <q-item-section>
              Logout
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top"
        src="https://t3.ftcdn.net/jpg/03/57/88/88/360_F_357888819_XvattGqyaKLQtZ9JfW1QVTRVTaLkItug.jpg"
        style="height: 100px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img :src="userStore.user.photoURL" v-if="userStore.isLogged">
          </q-avatar>
          <span class="text-weight-bold q-pl-md" v-if="userStore.isLogged">{{ userStore.user.displayName }}</span>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-transparent text-white">
      <q-img src="https://asyikasyik.com/files/uploads/2018/09/header-background-indexed1.png" cover
        class="absolute-full" />

      <q-toolbar>
        <q-toolbar-title class="text-right text-subtitle1">
          Copyright Vue Jacob
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '../firebase/main.js'
import { useRouter } from 'vue-router';
import { onAuthStateChanged } from '@firebase/auth';
import { useUserStore } from '../stores/userStore'

const userStore = useUserStore()
const DrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  DrawerOpen.value = !DrawerOpen.value
}

const router = useRouter()

const goToHome = () => {
    router.push('/auth')
}

const goToTopTen = () => {
    router.push('/auth/topten')
}

const goToSettings = () => {
    router.push('/auth/settings')
}

const handleLogout = () => {
  userStore.logout()
}


onAuthStateChanged(auth, user => {
  if(!user) {
    router.push('/login')
  } else {
    userStore.updateCredentials()
  }
})



</script>