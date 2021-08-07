<template>
  <div class="justify-center flex flex-col bg-yellow-300 items-center h-screen">
    <div class="text-4xl">
      <BeakerIcon class="h-5 w-5 text-blue-500" /> Hello 👋🏼
    </div>

    <div class="mt-10">
      <h1>{{ count.item }}</h1>
      <button @click="inc" class="px-4 py-2 bg-gray-900 rounded-sm text-white">
        incrementar
      </button>
    </div>
  </div>
</template>

<script>
import { BeakerIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  components: { BeakerIcon },
  setup() {
    const { state, dispatch } = useStore();
    const count = ref(state.count);

    const inc = () => {
      dispatch("increment", 1);
    };

    return { count, inc };
  },
};
</script>
