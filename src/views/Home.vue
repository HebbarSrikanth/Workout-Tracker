<template>
  <div v-if="loadedData" class="px-4 py-10 container">
    <div
      class="
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-6
      "
    >
      <router-link
        class="
          flex flex-col
          items-center
          bg-light-grey
          p-8
          shadow-md
          cursor-pointer
        "
        v-for="workout in workouts"
        :key="workout.id"
        :to="/view/ + workout.id"
      >
        <!-- Display Each exercise -->
        <div
          class="
            bg-light-grey
            rounded
            px-4
            py-6
            gap-y-4
            flex flex-col
            items-center
            align-center
            cursor-pointer
            duration-500
            transform
            hover:-translate-1 hover:scale-110
          "
        >
          <img
            :src="[
              workout.workoutType === 'cardio'
                ? require(`@/assets/images/running-light-green.png`)
                : require(`@/assets/images/dumbbell-light-green.png`),
            ]"
            class="w-auto h-24"
            alt="cardio"
          />
          <h2 class="text-2xl text-at-light-green">
            {{ workout.workoutName }}
          </h2>
        </div>
      </router-link>
    </div>
  </div>
  <div
    v-else-if="errorMessage"
    class="max-w-screen-md rounded mx-auto bg-red-200 p-2 m-2"
  >
    {{ errorMessage }}
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { supabase } from "@/supabase";

export default {
  name: "Home",
  components: {},
  setup() {
    // Create data / vars
    const workouts = ref([]);
    const loadedData = ref(null);
    const errorMessage = ref(null);

    // Get data
    onMounted(async () => {
      try {
        const { data, error } = await supabase.from("workouts").select();
        if (error) throw error;
        workouts.value = data;
        loadedData.value = true;
      } catch (error) {
        console.log("Error while fetching data ", error.message);
        setError(`Error : ${error.message}`);
      }
    });

    const setError = (msg) => {
      console.log("called");
      errorMessage.value = msg;
      setTimeout(() => {
        errorMessage.value = null;
      }, 5000);
    };

    // Run data function

    return { workouts, loadedData, errorMessage };
  },
};
</script>
