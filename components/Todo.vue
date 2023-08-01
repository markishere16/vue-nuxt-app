<template>
  <v-container
    class="fill-height todo-wrapper"
    style="background-color: #2c4d57"
    fluid
  >
    <div class="ma-auto">
      <h1 class="title font-weight-bold text-center white--text">Vue TODO List</h1>

      <v-card class="mx-auto rounded-xl" width="700">
        <!-- Header -->
        <TodoHeader />

        <v-card-text>
          <!-- Todo List -->
          <TodoList />
        </v-card-text>

        <!-- Input -->
        <TodoInput />
      </v-card>
    </div>
  </v-container>
</template>

<script>
import TodoHeader from "./TodoHeader.vue";
import TodoList from "./TodoList.vue";
import TodoInput from "./TodoInput.vue";
export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
  },
  mounted() {
    this.$store.dispatch("initTodos");
  },
};
</script>

<style scoped>
.title {
  font-size: 60px !important;
  margin-bottom: 30px;
}
.todo-wrapper {
  background: rgb(47, 133, 109);
  background: linear-gradient(
    180deg,
    rgba(47, 133, 109, 1) 11%,
    rgba(48, 133, 110, 1) 36%,
    rgba(79, 145, 133, 1) 55%,
    rgba(37, 72, 82, 1) 91%
  );
}
</style>