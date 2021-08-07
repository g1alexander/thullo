import { createStore } from "vuex";
import count from "./modules/count";

const store = new createStore({
  modules: {
    count,
  },
});

export default store;
