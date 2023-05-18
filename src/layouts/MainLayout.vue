<template>
  <q-layout view="lHh lpR lff">

    <q-header bordered class="bg-transparent text-white">

      <q-img src="https://asyikasyik.com/files/uploads/2018/09/header-background-indexed1.png" cover
        class="absolute-full" />
      <q-toolbar>
        <q-toolbar-title class="row">
          <q-avatar>
            <q-icon class="text-red-6" name="mdi-robot-angry" size="md" />
          </q-avatar>
          <div class="self-end">
            <span class="q-pl-sm text-weight-bold">Game</span><span class="text-red-6">Libra</span>
          </div>

        </q-toolbar-title>


        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="DrawerOpen" side="right" overlay behavior="mobile">
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 100px; border-right: 1px solid #ddd">
        <q-list>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section>
              Home
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="emoji_events" />
            </q-item-section>

            <q-item-section>
              Top 10
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>

            <q-item-section>
              Account Settings
            </q-item-section>
          </q-item>

          <q-item class="text-negative" clickable v-ripple>
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
            <img src="https://img.freepik.com/premium-vector/gamer-mascot-logo-gaming-badge_10051-451.jpg?w=2000">
          </q-avatar>
          <span class="text-weight-bold q-pl-md">RazvanTheKing</span>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-deep-purple-10 text-white">
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

const DrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  DrawerOpen.value = !DrawerOpen.value
}

</script>