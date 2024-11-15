import { createRouter, createWebHistory } from 'vue-router';
import PostList from '../components/posts/list.vue';
import PostCreate from '../components/posts/create.vue'
const routes = [
  { path: '/', component: PostList },
  { path: '/add', component: PostCreate },
];

const router = createRouter({
  history: createWebHistory(), // Sử dụng HTML5 History Mode
  routes,
});

export default router;
