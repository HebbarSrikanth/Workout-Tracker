<template>
  <div class="max-w-screen-md mx-auto py-10 px-6">
    <div
      v-if="statusMessage"
      :class="[
        statusMessage.err ? 'bg-red-200' : 'bg-at-light-green',
        'rounded p-2 mb-2',
      ]"
    >
      {{ statusMessage.err ? statusMessage.err : statusMessage.status }}
    </div>
    <form
      @submit.prevent="onSave"
      class="flex flex-col py-10 px-6 rounded-md bg-light-grey gap-y-4"
    >
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
          <option disabled value="">Select workout</option>
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
              required
            />
          </div>
          <div class="flex flex-col">
            <label class="text-at-light-green">Sets</label>
            <input
              type="text"
              class="p-2 w-full text-gray-500 focus:outline-none"
              v-model="e.sets"
              required
            />
          </div>
          <div class="flex flex-col">
            <label class="text-at-light-green">Reps</label>
            <input
              type="text"
              class="p-2 w-full text-gray-500 focus:outline-none"
              v-model="e.reps"
              required
            />
          </div>
          <div class="flex flex-col">
            <label class="text-at-light-green">Weight(LB's)</label>
            <input
              type="text"
              class="p-2 w-full text-gray-500 focus:outline-none"
              v-model="e.weights"
              required
            />
          </div>
          <img
            src="@/assets/images/trash-light-green.png"
            class="h-4 absolute cursor-pointer -left-5 top-1"
            alt="delete"
            @click="deleteRecord(e.id)"
          />
        </div>

        <div v-show="exercies.length > 0">
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
              <option value="" disabled>Select-Type</option>
              <option value="run">Runs</option>
              <option value="walk">Walk</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label class="text-at-light-green">Distance (Km)</label>
            <input
              type="text"
              class="p-2 w-full text-gray-500 focus:outline-none"
              v-model="e.distance"
              required
            />
          </div>
          <div class="flex flex-col">
            <label class="text-at-light-green">Duration (Hrs)</label>
            <input
              type="text"
              class="p-2 w-full text-gray-500 focus:outline-none"
              v-model="e.duration"
              required
            />
          </div>
          <div class="flex flex-col">
            <label class="text-at-light-green">Pace</label>
            <input
              type="text"
              class="p-2 w-full text-gray-500 focus:outline-none"
              v-model="e.pace"
              required
            />
          </div>
          <img
            src="@/assets/images/trash-light-green.png"
            class="h-4 absolute cursor-pointer -left-5 top-1"
            alt="delete"
            @click="deleteRecord(e.id)"
          />
        </div>

        <div v-show="exercies.length > 0">
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
import { supabase } from "../supabase";
import { useRouter } from "vue-router";

export default {
  name: "create",
  setup() {
    // Create data
    const workoutName = ref(null);
    const workoutType = ref("");
    const exercies = ref([]);
    const statusMessage = ref(null);
    const router = useRouter();

    // Add exercise
    const addExercise = () => {
      if (workoutType.value === "strength") {
        const addStrength = {
          id: uid(),
          exercise: "",
          sets: "",
          reps: "",
        };
        exercies.value.push(addStrength);
      } else {
        const addCardio = {
          id: uid(),
          cardioType: "",
          distance: "",
          pace: "",
        };
        exercies.value.push(addCardio);
      }
    };

    // Delete exercise
    const deleteRecord = (id) => {
      if (exercies.value.length > 1) {
        exercies.value = exercies.value.filter((e) => e.id !== id);
      } else {
        setStatusMessage(
          `Error : Atleast one workout data has to present`,
          "error"
        );
      }
    };

    // Listens for chaging of workout type input
    const onWorkoutChange = () => {
      //resetting the erercise array once there is a change in the input
      exercies.value = [];
      addExercise();
    };

    // Create workout
    const onSave = async () => {
      try {
        if (exercies.value.length < 1)
          throw new Error(`Atleast one workout data has to be added`);

        console.log("Atleast on exercise is present");

        if (workoutType.value === "cardio") {
          try {
            exercies.value.forEach((e) => {
              if (e.cardioType === "")
                throw new Error("All the data in the workout is mandatory");
            });
          } catch (error) {
            console.log("Inside the cardio dropdwon not selected");
            throw error;
          }
        }

        console.log("Data seems to be all okay");
        const { error } = await supabase.from("workouts").insert([
          {
            workoutName: workoutName.value,
            workoutType: workoutType.value,
            exercises: exercies.value,
          },
        ]);
        if (error) throw error;

        console.log("No error");
        setStatusMessage(
          `Status : Record has been updated successfully`,
          "status"
        );
        router.push("/");
      } catch (error) {
        console.log("Error while saving", error.message);
        setStatusMessage(`Error : ${error.message}`, "error");
      }
    };

    //Set Status Message
    const setStatusMessage = (msg, type) => {
      if (type === "error") {
        statusMessage.value = { err: msg };
      } else {
        statusMessage.value = { status: msg };
      }
      setTimeout(() => {
        statusMessage.value = null;
      }, 5000);
    };

    return {
      workoutName,
      workoutType,
      exercies,
      statusMessage,
      addExercise,
      onWorkoutChange,
      deleteRecord,
      onSave,
    };
  },
};
</script>
