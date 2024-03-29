import { createApp } from "vue";
import App from "./App.vue";
import translatePlagin from "./components/translatePlagin";
import uk from "./components/dictionaryUk";
import en from "./components/dictionaryEn";

const app = createApp(App);

// const uk = {
//   app: {
//     title: "Як працюють плагіни у Vue",
//     button: "Перемкнути мову",
//   },
// };

// const en = {
//   app: {
//     title: "How plugins work in Vue",
//     button: "Switch language",
//   },
// };

app.use(translatePlagin, { uk, en });
app.mount("#app");
