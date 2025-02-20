import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
  },
  {
    path: "/contacts",
    children: [
      {
        path: ":id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true, // Truyền các biến trong $route.params vào làm props
      },
      {
        path: "add",
        name: "contact.add",
        component: () => import("@/views/ContactEdit.vue"),
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
