<template>
  <header class="bg-at-light-green text-white">
    <nav
      class="py-5 container gap-4 px-4 flex flex-col items-center sm:flex-row"
    >
      <router-link
        to="/"
        class="flex gap-4 items-center align-center cursor-pointer"
      >
        <img
          class="w-16"
          src="../assets/images/dumbbell-light.png"
          alt="App Pic"
        />
        <div>Workout</div>
      </router-link>
      <ul v-if="user" class="flex justify-end flex-1 gap-4">
        <router-link to="/create">Create</router-link>
        <router-link to="/view">View</router-link>
        <a @click="logout" class="cursor-pointer">Logout</a>
      </ul>
      <ul v-else class="flex justify-end flex-1 gap-4">
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
import { supabase } from "@/supabase";
import store from "@/store";
import { computed } from "vue";

export default {
  setup() {
    // Get user from store
    const user = computed(() => store.state.user);
    // Check if the user is logged in
    // Logout function
    const logout = async () => {
      await supabase.auth.signOut();
    };

    return { logout, user };
  },
};
</script>
