<template>
    <q-layout view="hHh lpR fFf">

        <q-header bordered class="bg-transparent text-white">

            <q-img src="https://asyikasyik.com/files/uploads/2018/09/header-background-indexed1.png" cover
                class="absolute-full" />
            <q-toolbar>
                <q-toolbar-title class="row">
                    <q-avatar>
                        <q-icon name="mdi-robot-angry" size="md" />
                    </q-avatar>
                    <div class="self-end">
                        <span class="q-pl-sm text-weight-bold">Game</span><span class="text-grey-4">Libra</span>
                    </div>

                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>

    </q-layout>
</template>