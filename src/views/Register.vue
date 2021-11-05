<template>
  <div class="max-w-screen-sm mx-auto px-4 py-10">
    <div v-if="errorMessage" class="mb-5 p-2 rounded bg-red-200">
      {{ errorMessage }}
    </div>

    <form
      @submit.prevent="register"
      class="py-10 px-4 shadow-xl bg-light-grey my-auto"
    >
      <h1 class="text-3xl text-center text-at-light-green mb-2">Register</h1>
      <div class="flex flex-col mb-2">
        <label for="email" class="text-at-light-green">Email</label>
        <input id="email" type="text" v-model="email" required/>
      </div>
      <div class="flex flex-col mb-2">
        <label for="password" class="text-at-light-green">Password</label>
        <input id="password" type="password" required  v-model="password" />
      </div>
      <div class="flex flex-col mb-2">
        <label for="confirmPassword" class="text-at-light-green"
          >Confirm Password</label
        >
        <input id="confirmPassword" type="password" required v-model="confirmPassword" />
      </div>
      <div>
        <button
          type="submit"
          class="
            mt-4
            bg-at-light-green
            p-2
            rounded
            text-white
            transition
            duration-500
            ease-in-out
            hover:bg-white hover:text-at-light-green
            transform
            hover:scale-110 hover:-translate-y-1 hover:border-at-light-green
          "
        >
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";

export default {
  name: "register",
  setup() {
    // Create data / vars
    const email = ref(null);
    const password = ref(null);
    const confirmPassword = ref(null);
    const errorMessage = ref(null);
    const router = useRouter();

    // Register function
    const register = async () => {
      if (password.value.trim() !== confirmPassword.value.trim() || (password.value.trim().length<=0)) {
        setError("Error : Password won't match");
        return;
      }
      try {
        const { error } = await supabase.auth.signUp({
          email: email.value,
          password: password.value,
        });
        if (error) throw error;
        router.push("/");
      } catch (error) {
        console.log(error);
        setError(`Error : ${error.message}`);
      }
    };

    //Method to set error message and make it disappear after sometime
    const setError = (msg) => {
      errorMessage.value = msg;
      setTimeout(() => {
        errorMessage.value = null;
      }, 5000);
    };

    return { email, password, register, confirmPassword, errorMessage };
  },
};
</script>
