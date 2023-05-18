<template>
    <div class="row q-pa-lg">
        <h2 class="col-12 q-mb-sm text-center">Meet the Game Libra</h2>
        <div class="col-12 text-subtitle1 q-mb-xl text-center"> Store all your favourite titles in one place ! </div>
        <div class="col-12 col-sm-6">
            <p class="text-subtitle1 text-center">Check it out yourself !</p>
            <div class="col-12 flex justify-center items-center" :cols="{ sm: 12, md: 6 }">
                <router-link class="q-mr-sm" to="noauth/login"><red-button btn-text="Sign in" /></router-link>
                <router-link class="q-ml-sm" to="noauth/register"><red-button btn-text="Sign up"/></router-link>
            </div>
        </div>
        <div class="row col-12 col-sm-6" :class="$q.screen.lt.sm ? 'q-mt-xl' : null"> 
            <q-list class="q-mx-auto">
                <q-list-item class="text-h6">
                    <p class="flex q-ma-none q-ml-sm">
                        <q-item-label class="q-break-word inline">
                            <q-icon name="mdi-star" />
                            Add your favourite games from <br>list of +300,000 titles !
                        </q-item-label>
                    </p>
                </q-list-item>
                <q-list-item class="text-h6">
                    <p class="flex q-ma-none q-ml-sm">
                        <q-item-label>
                            <q-icon name="mdi-star" />
                            Share your opinion on your favourite <br>games through Game Libras' rating system !
                        </q-item-label>
                    </p>
                </q-list-item>
                <q-list-item class="text-h6">
                    <p class="flex q-ma-none q-ml-sm">
                        <q-item-label> 
                            <q-icon name="mdi-star" />
                            Inspire yourself to play some of the best <br>titles featured in our top 10 list !
                        </q-item-label>
                    </p>
                </q-list-item>
            </q-list>
        </div>
    </div>
</template>

<script setup>
import {useQuasar} from 'quasar'
import RedButton from 'src/components/RedButton.vue';

const $q = useQuasar()
</script>