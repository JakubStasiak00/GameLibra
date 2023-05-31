<template>
    <q-layout view="hHh lpR fFf">

        <q-header bordered class="bg-transparent text-white">

            <q-img src="https://asyikasyik.com/files/uploads/2018/09/header-background-indexed1.png" cover
                class="absolute-full" />
            <q-toolbar>
                <q-toolbar-title class="row">
                    <q-avatar>
                        <q-icon class="text-red-6" name="mdi-robot-angry" size="md" @click="goToHome" />
                    </q-avatar>
                    <div class="self-end" @click="goToHome">
                        <span class="q-pl-xs text-weight-bold">Game</span><span class="text-red-6">Libra</span>
                    </div>
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>

        <q-footer bordered class="bg-transparent text-white">
            <q-img src="https://asyikasyik.com/files/uploads/2018/09/header-background-indexed1.png" cover
                class="absolute-full" />

            <q-toolbar>
                <q-toolbar-title class="text-right text-subtitle2">
                    Copyright Vue Jacob
                </q-toolbar-title>
            </q-toolbar>
        </q-footer>

    </q-layout>
</template>

<script setup>
import { onAuthStateChanged } from '@firebase/auth';
import { useRouter } from 'vue-router';
import { auth } from 'src/firebase/main';

const router = useRouter()

const goToHome = () => {
    router.push('/')
}

onAuthStateChanged(auth, user => {
    if (user) {
        router.push('/auth')
    }
})
</script>