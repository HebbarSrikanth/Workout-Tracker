<template>
  <div
    class="max-w-screen-sm mx-auto flex flex-col gap-y-5 py-10 px-5"
    v-if="dataLoaded"
  >
    <div
      class="
        bg-light-grey
        flex flex-col
        py-6
        px-3
        relative
        rounded
        align-center
        items-center
        shadow-xl
      "
    >
      <!-- Edit & Delete Options -->
      <div class="flex flex-row absolute top-2 left-2 gap-x-2">
        <div
          class="
            w-7
            h-7
            bg-at-light-green
            rounded-full
            flex
            justify-center
            items-center
            cursor-pointer
          "
        >
          <img
            src="@/assets/images/pencil-light.png"
            class="h-3.5 w-auto"
            alt="edit"
            @click="onEdit"
          />
        </div>
        <div
          class="
            w-7
            h-7
            bg-at-light-green
            rounded-full
            flex
            justify-center
            items-center
            cursor-pointer
          "
        >
          <img
            src="@/assets/images/trash-light.png"
            class="h-3.5 w-auto"
            alt="delete"
          />
        </div>
      </div>
      <img
        :src="[
          workout.workoutType === 'cardio'
            ? require(`@/assets/images/running-light-green.png`)
            : require(`@/assets/images/dumbbell-light-green.png`),
        ]"
        alt="exercise-image"
        class="w-16 my-5"
      />
      <h2 class="text-2xl text-at-light-green">{{ workout.workoutName }}</h2>
    </div>

    <div class="flex flex-col bg-light-grey rounded shadow-xl py-6 px-2">
      <div
        v-if="(workout.workoutType = 'cardio')"
        class="flex flex-col gap-y-4 w-full"
      >
        <div
          v-for="e in workout.exercises"
          :key="e.id"
          class="flex flex-col px-2 gap-x-6 gap-y-2 md:flex-row"
        >
          <div class="flex flex-col md:w-1/3">
            <label class="text-at-light-green">Type</label>
            <select v-if="edit" class="w-full" v-model="workout.cardioType">
              <option value="" disabled>Select-Option</option>
              <option value="walk">Walk</option>
              <option value="run">Run</option>
            </select>
            <p v-else>{{ e.cardioType }}</p>
          </div>
          <div class="flex flex-col flex-1">
            <label class="text-at-light-green">Distance</label>
            <input
              v-if="edit"
              type="text"
              class="w-full"
              v-model="workout.distance"
            />
            <p v-else>{{ e.distance }}</p>
          </div>
          <div class="flex flex-col flex-1">
            <label class="text-at-light-green">Duration</label>
            <input
              v-if="edit"
              type="text"
              class="w-full"
              v-model="workout.duration"
            />
            <p v-else>{{ e.duration }}</p>
          </div>
          <div class="flex flex-col flex-1">
            <label class="text-at-light-green">Pace</label>
            <input
              v-if="edit"
              type="text"
              class="w-full"
              v-model="workout.pace"
            />
            <p v-else>{{ e.pace }}</p>
          </div>
        </div>
      </div>

      <div v-else class="flex flex-col gap-y-4 w-full">
        <div
          v-for="e in workout.exercises"
          :key="e.id"
          class="flex flex-col px-2 gap-x-6 gap-y-2 md:flex-row"
        >
          <div class="flex flex-col w-1/3">
            <label class="text-at-light-green">Exercise</label>
            <input type="text" v-if="edit" v-model="workout.exercise" />
            <p v-else>{{ e.cardioType }}</p>
          </div>
          <div class="flex flex-col flex-1">
            <label class="text-at-light-green">Sets</label>
            <input
              v-if="edit"
              type="text"
              class="w-full"
              v-model="workout.sets"
            />
            <p v-else>{{ e.sets }}</p>
          </div>
          <div class="flex flex-col flex-1">
            <label class="text-at-light-green">Reps</label>
            <input
              v-if="edit"
              type="text"
              class="w-full"
              v-model="workout.reps"
            />
            <p v-else>{{ e.reps }}</p>
          </div>
          <div class="flex flex-col flex-1">
            <label class="text-at-light-green">Weights(LB's)</label>
            <input
              v-if="edit"
              type="text"
              class="w-full"
              v-model="workout.weights"
            />
            <p v-else>{{ e.weights }}</p>
          </div>
        </div>
      </div>

      <div v-if="edit" class="px-2">
        <button
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
            border-solid border-2
          "
        >
          Update Record
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { supabase } from "../supabase";

export default {
  name: "view-workout",
  setup() {
    // Create data / vars
    const workout = ref(null);
    const router = useRoute();
    const id = router.params.workoutId;
    const dataLoaded = ref(null);
    const edit = ref(false);

    //Fetch the workout ID
    onMounted(async () => {
      try {
        const { data, error } = await supabase
          .from("workouts")
          .select()
          .eq("id", id);
        if (error) throw error;
        workout.value = data[0];
        dataLoaded.value = true;
        console.log(data);
      } catch (error) {
        console.log("Error while fetching individual data", error.message);
      }
    });

    const onEdit = () => {
      edit.value = !edit.value;
    };

    return { workout, dataLoaded, onEdit, edit };
  },
};
</script>
