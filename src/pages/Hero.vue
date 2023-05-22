<template>
    <div class="q-pa-lg">
        <h2 class="col-12 q-mb-sm text-center text-h3 text-bold" :class="$q.screen.lt.sm ? 'q-mt-none' : ''">Meet the Game Libra</h2>
        <div class="col-12 text-h6 q-mb-xl text-center"> Store all your favourite titles in one place ! </div>

        <div class="row col-12 col-sm-6 q-mb-xl justify-around"> 
            <q-list class="q-mx-auto">
                <q-list-item class="text-h6">
                    <p class="flex q-ma-none q-ml-sm">
                        <q-item-label class="q-break-word inline flex align-baseline no-wrap q-mb-md">
                            <q-icon name="mdi-star" class="q-pr-sm" />
                            Add your favourite games from list of +300,000 titles !
                        </q-item-label>
                    </p>
                </q-list-item>
                <q-list-item class="text-h6">
                    <p class="flex q-ma-none q-ml-sm">
                        <q-item-label class="q-break-word inline flex align-baseline no-wrap q-mb-md">
                            <q-icon name="mdi-star" class="q-pr-sm" />
                            Share your opinion on your favourite games through Game Libras' rating system !
                        </q-item-label>
                    </p>
                </q-list-item>
                <q-list-item class="text-h6">
                    <p class="flex q-ma-none q-ml-sm">
                        <q-item-label class="q-break-word inline flex align-baseline no-wrap q-mb-md"> 
                            <q-icon name="mdi-star" class="q-pr-sm" />
                            Inspire yourself to play some of the best titles featured in our top 10 list !
                        </q-item-label>
                    </p>
                </q-list-item>
            </q-list>
        </div>

        <div class="col-12 col-sm-6">
            <p class="text-h5 text-center">Check it out yourself !</p>
            <div class="col-12 flex justify-center items-center" :cols="{ sm: 12, md: 6 }">
                <router-link class="q-mr-sm" to="login"><q-btn label="Sign In" color="primary"/></router-link>
                <router-link class="q-ml-sm" to="register"><q-btn label="Sign Up" color="primary"/></router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useQuasar} from 'quasar'

const $q = useQuasar()


</script>