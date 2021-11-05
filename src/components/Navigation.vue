<template>
  <header class="bg-at-light-green text-white ">
    <nav class="py-5 container gap-4  px-4 flex flex-col items-center sm:flex-row">
      <div class="flex gap-4 items-center align-center cursor-pointer">
        <img
          class="w-16"
          src="../assets/images/dumbbell-light.png"
          alt="App Pic"
        />
        <div>Workout</div>
      </div>
      <ul class="flex justify-end flex-1 gap-4">
        <a href="#">Create</a>
        <a href="#">View</a>
        <a href="#">Login</a>
        <a href="#">Logout</a>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  setup() {
    // Get user from store

    // Setup ref to router

    // Logout function

    return {};
  },
};
</script>
