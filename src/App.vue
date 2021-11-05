<template>
  <div class="font-Poppins">
    <Header/>
    <router-view />
  </div>
</template>

<script>
import Header from './components/Navigation.vue'
// import {ref} from 'vue'
import store from '@/store'

import {supabase} from './supabase'

export default {
  components:{
    Header
  },
  setup() {
    //Get the user details if any, if logged in then triggers onAuthStateChange is not then not triggered
     supabase.auth.user()

    // Runs when there is a auth state change
    // if user is login/logout, this will fire
    supabase.auth.onAuthStateChange((_,session)=>{
      store.methods.setUser(session)
    })

    return {};
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");
</style>
