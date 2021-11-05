<template>
  <div class="max-w-screen-md mx-auto py-10 px-6">
    <div
      v-if="statusMessage"
      :class="[
        statusMessage.value.error ? 'bg-red-200' : 'bg-at-light-green',
        'rounded p-2',
      ]"
    >
      {{ statusMessage.error ? statusMessage.error : statusMessage.status }}
    </div>
    <form class="flex flex-col py-10 px-6 rounded-md bg-light-grey gap-y-4">
      <h1 class="text-3xl text-at-light-green text-center">Record</h1>

      <!-- Workout Name -->
      <div class="flex flex-col gap-x-2 mb-2 w-full">
        <label class="text-at-light-green">Workout Name</label>
        <input type="text" class="p-2" v-model="workoutName" required />
      </div>

      <!-- Workout Type -->
      <div class="flex flex-col gap-x-2 mb-2 w-full">
        <label class="text-at-light-green">Workout Type</label>
        <select v-model="workoutType" @change="onWorkoutChange" class="p-2">
          <option value="">Select workout</option>
          <option value="strength">Strengthing</option>
          <option value="cardio">Cardio</option>
        </select>
      </div>

      <!-- Strengting Options -->
      <div v-if="workoutType === 'strength'" class="flex flex-col">
        <div
          v-for="e in exercies"
          :key="e.id"
          class="flex flex-col gap-x-6 gap-y-6 relative md:flex-row"
        >
          <div class="flex flex-col md:w-1/3">
            <label class="text-at-light-green">Exercise</label>
            <input
              type="text"
              class="p-2 w-full text-gray-500 focus:outline-none"
              v-model="e.exercise"
            />
          </div>
          <div class="flex flex-col">
            <label class="text-at-light-green">Sets</label>
            <input
              type="text"
              class="p-2 w-full text-gray-500 focus:outline-none"
              v-model="e.sets"
            />
          </div>
          <div class="flex flex-col">
            <label class="text-at-light-green">Reps</label>
            <input
              type="text"
              class="p-2 w-full text-gray-500 focus:outline-none"
              v-model="e.reps"
            />
          </div>
          <div class="flex flex-col">
            <label class="text-at-light-green">Weight(LB's)</label>
            <input
              type="text"
              class="p-2 w-full text-gray-500 focus:outline-none"
              v-model="e.weights"
            />
          </div>
          <img
            src="@/assets/images/trash-light-green.png"
            class="h-4 absolute cursor-pointer -left-5 top-1"
            alt="delete"
            @click="deleteRecord(e.id)"
          />
        </div>

        <div v-show="exercies.length>0">
          <button
            type="button"
            @click="addExercise"
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
            Add
          </button>
        </div>
      </div>

      <!-- Cardio Options -->
      <div v-if="workoutType === 'cardio'" class="flex flex-col">
        <div
          v-for="e in exercies"
          :key="e.id"
          class="flex flex-col gap-x-6 gap-y-6 relative md:flex-row"
        >
          <div class="flex flex-col md:w-1/3">
            <label class="text-at-light-green">Type</label>
            <select
              v-model="e.cardioType"
              class="p-2 text-gray-500 focus:outline-none"
            >
              <option value="">Select-Type</option>
              <option value="run">Runs</option>
              <option value="walk">Walk</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label class="text-at-light-green">Distance</label>
            <input
              type="text"
              class="p-2 w-full text-gray-500 focus:outline-none"
              v-model="e.distance"
            />
          </div>
          <div class="flex flex-col">
            <label class="text-at-light-green">Duration</label>
            <input
              type="text"
              class="p-2 w-full text-gray-500 focus:outline-none"
              v-model="e.duration"
            />
          </div>
          <div class="flex flex-col">
            <label class="text-at-light-green">Pace</label>
            <input
              type="text"
              class="p-2 w-full text-gray-500 focus:outline-none"
              v-model="e.pace"
            />
          </div>
          <img
            src="@/assets/images/trash-light-green.png"
            class="h-4 absolute cursor-pointer -left-5 top-1"
            alt="delete"
             @click="deleteRecord(e.id)"
          />
        </div>

        <div  v-show="exercies.length>0">
          <button
            type="button"
            @click="addExercise"
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
            Add
          </button>
        </div>
      </div>

      <!-- Save Exercise Button -->
      <div>
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
          "
        >
          Save Exercise
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { uid } from "uid";

export default {
  name: "create",
  setup() {
    // Create data
    const workoutName = ref(null);
    const workoutType = ref("");
    const exercies = ref([]);
    const statusMessage = ref(null);
    // Add exercise
    const addExercise = () => {
      if (workoutType.value === "strength") {
        const addStrength = {
          id: uid(),
          exercise: "",
          sets: "",
          reps: "",
          duration: "",
        };
        exercies.value.push(addStrength);
      } else {
        const addCardio = {
          id: uid(),
          type: "",
          distance: "",
          pace: "",
          weights: "",
        };
        exercies.value.push(addCardio);
      }
    };

    // Delete exercise
    const deleteRecord=(id)=>{
      const deleteNewArray=exercies.value.filter(e=>e.id!==id?e:null)
      exercies.value=deleteNewArray
    }

    // Listens for chaging of workout type input
    const onWorkoutChange = () => {
      //resetting the erercise array once there is a change in the input
      exercies.value=[]
      addExercise();
    };

    // Create workout

    return {
      workoutName,
      workoutType,
      exercies,
      statusMessage,
      addExercise,
      onWorkoutChange,
      deleteRecord,
    };
  },
};
</script>
