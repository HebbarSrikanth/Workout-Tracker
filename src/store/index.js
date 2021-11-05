import { reactive } from "vue";

const state = reactive({
  user: null,
});

const methods = {
  setUser: (session) => {
    state.user = session?.user || null;
  },
};

export default {
  state,
  methods,
};
