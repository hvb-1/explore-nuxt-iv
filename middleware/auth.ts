export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to, from, to.params.chapterSlug);
  return;
  // if (to.params.chapterSlug === "1-chapter-1") {
  //   return;
  // }
  // return navigateTo("/login");
});
