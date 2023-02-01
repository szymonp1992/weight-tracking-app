import { createRouter, createWebHistory } from "vue-router";
import AddNewEntry from "../views/AddNewEntry.vue";
import WeightOverTime from "../views/WeightOverTime.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterAccount from "../views/RegisterAccount.vue";
import UserProfile from "../views/UserProfile.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: WeightOverTime,
    },
    {
      path: "/add-new-entry",
      component: AddNewEntry,
    },
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path: "/register",
      component: RegisterAccount,
    },
    {
      path: "/my-profile",
      component: UserProfile,
    },
  ],
});

export default router;
