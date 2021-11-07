<template>
  <div
    class="max-w-screen-sm mx-auto flex flex-col gap-y-5 py-10 px-5"
    v-if="isLoaded"
  >
    <!-- If Any error message -->
    <div v-if="status" class="bg-red-200 p-2 mb-2">
      {{ status.err }}
    </div>

    <!-- Initial Card Details -->
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
      <div class="flex flex-row absolute top-2 left-2 gap-x-2" v-if="user">
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
          @click="onEdit"
        >
          <img
            src="@/assets/images/pencil-light.png"
            class="h-3.5 w-auto"
            alt="edit"
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
          @click="deleteWorkout"
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

    <!-- Detailed Explainiation -->
    <div class="flex flex-col bg-light-grey rounded shadow-xl py-6 px-2">
      <!-- Cardio Detials -->
      <div
        v-if="(workout.workoutType === 'cardio')"
        class="flex flex-col gap-y-4 w-full"
      >
        <div
          v-for="e in workout.exercises"
          :key="e.id"
          class="flex flex-col relative px-5 gap-x-6 gap-y-2 md:flex-row"
        >
          <div class="flex flex-col md:w-1/3">
            <label class="text-at-light-green">Type</label>
            <select v-if="edit" class="w-full" v-model="e.cardioType">
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
              v-model="e.distance"
            />
            <p v-else>{{ e.distance }}</p>
          </div>
          <div class="flex flex-col flex-1">
            <label class="text-at-light-green">Duration</label>
            <input
              v-if="edit"
              type="text"
              class="w-full"
              v-model="e.duration"
            />
            <p v-else>{{ e.duration }}</p>
          </div>
          <div class="flex flex-col flex-1">
            <label class="text-at-light-green">Pace</label>
            <input v-if="edit" type="text" class="w-full" v-model="e.pace" />
            <p v-else>{{ e.pace }}</p>
          </div>
          <img
            src="@/assets/images/trash-light-green.png"
            class="h-4 absolute cursor-pointer -left-1 top-1"
            alt="delete"
            v-if="edit"
            @click="onDelete(e.id)"
          />
        </div>
        <div v-show="workout.exercises.length > 0 && edit">
          <button
            type="button"
            @click="onAdd"
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
            Add
          </button>
        </div>
      </div>

      <!-- Strengthing Details -->
      <div v-else class="flex flex-col gap-y-4 w-full">
        <div
          v-for="e in workout.exercises"
          :key="e.id"
          class="flex flex-col relative px-5 gap-x-6 gap-y-2 md:flex-row"
        >
          <div class="flex flex-col w-1/3">
            <label class="text-at-light-green">Exercise</label>
            <input type="text" v-if="edit" v-model="e.exercise" />
            <p v-else>{{ e.exercise }}</p>
          </div>
          <div class="flex flex-col flex-1">
            <label class="text-at-light-green">Sets</label>
            <input v-if="edit" type="text" class="w-full" v-model="e.sets" />
            <p v-else>{{ e.sets }}</p>
          </div>
          <div class="flex flex-col flex-1">
            <label class="text-at-light-green">Reps</label>
            <input v-if="edit" type="text" class="w-full" v-model="e.reps" />
            <p v-else>{{ e.reps }}</p>
          </div>
          <div class="flex flex-col flex-1">
            <label class="text-at-light-green">Weights(LB's)</label>
            <input v-if="edit" type="text" class="w-full" v-model="e.weights" />
            <p v-else>{{ e.weights }}</p>
          </div>
          <img
            src="@/assets/images/trash-light-green.png"
            class="h-4 absolute cursor-pointer -left-1 top-1"
            alt="delete"
            @click="onDelete(e.id)"
          />
        </div>
        <div v-show="workout.exercises.length > 0 && edit">
          <button
            type="button"
            @click="onAdd"
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
            Add
          </button>
        </div>
      </div>

      <!-- Button to update record -->
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
          @click="onUpdate"
        >
          Update Record
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { supabase } from "../supabase";
import { uid } from "uid";
import store from "@/store";

export default {
  name: "view-workout",
  setup() {
    // Create data / vars
    const workout = ref(null);
    const router = useRoute();
    const route = useRouter();
    const id = router.params.workoutId;
    const isLoaded = ref(false);
    const edit = ref(false);
    const status = ref(null);
    const user = computed(() => store.state.user);

    //Fetch the workout ID
    onMounted(async () => {
      await getData()
    });

    const getData = async () => {
      try {
        const { data, error } = await supabase
          .from("workouts")
          .select()
          .eq("id", id);
        if (error) throw error;
        workout.value = data[0];
        console.log("Before", workout.value.workoutType);
        isLoaded.value = true;
        console.log("After", workout.value.workoutType);
      } catch (error) {
        console.log("Error while fetching individual data", error.message);
      }
    };

    const onEdit = () => {
      edit.value = !edit.value;
    };

    const onAdd = () => {
      if (workout.value.workoutType.value === "strength") {
        const addStrength = {
          id: uid(),
          exercise: "",
          sets: "",
          reps: "",
          duration: "",
        };
        workout.value.exercises.push(addStrength);
      } else {
        const addCardio = {
          id: uid(),
          cardioType: "",
          distance: "",
          pace: "",
        };
        workout.value.exercises.push(addCardio);
      }
    };

    const onDelete = (id) => {
      if (workout.value.exercises.length > 1) {
        workout.value.exercises = workout.value.exercises.filter(
          (e) => e.id !== id
        );
      } else {
        setStatusMessage(
          `Error : Cannot delete,atleast one record should be provided`,
          "error"
        );
      }
    };

    const setStatusMessage = (msg, type) => {
      if (type === "error") {
        status.value = { err: msg };
      } else {
        status.value = { status: msg };
      }
      setTimeout(() => {
        status.value = null;
      }, 5000);
    };

    const onUpdate = async () => {
      try {
        if (workout.value.workoutType === "cardio") {
          try {
            workout.value.exercises.forEach((e) => {
              if (e.cardioType === "")
                throw new Error("All the data in the workout is mandatory");
            });
          } catch (error) {
            console.log("Inside the cardio dropdwon not selected");
            throw error;
          }
        }

        const { data, error } = await supabase.from("workouts").upsert({
          id: workout.value.id,
          exercises: workout.value.exercises,
        });
        if (error) throw error;
        console.log(data);
        onEdit();
      } catch (error) {
        setStatusMessage(`Error : ${error.message}`, "error");
      }
    };

    const deleteWorkout = async () => {
      if (confirm("Delete workout?")) {
        try {
          const { data, error } = await supabase
            .from("workouts")
            .delete()
            .match({ id: workout.value.id });
          if (error) throw error;
          console.log(data);
          route.push("/");
        } catch (error) {
          setStatusMessage(`Error : ${error.message}`, "error");
        }
      }
    };

    return {
      workout,
      isLoaded,
      onEdit,
      edit,
      onAdd,
      onDelete,
      status,
      onUpdate,
      deleteWorkout,
      user,
    };
  },
};
</script>
