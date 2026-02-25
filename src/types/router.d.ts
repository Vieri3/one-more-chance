import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    // Добавляем нужные поля
    title?: string;
    requiresAuth?: boolean; // можно добавить и другие поля
  }
}