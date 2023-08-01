<template>
  <v-container class="fill-height todo-wrapper" fluid>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="8" sm="12">
        <div class="title text-sm font-weight-bold text-center white--text">
          Vue TODO List
        </div>

        <v-card class="mx-auto rounded-xl">
          <!-- Header -->
          <TodoHeader />

          <v-card-text>
            <!-- Todo List -->
            <TodoList />
          </v-card-text>

          <!-- Input -->
          <TodoInput />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("initTodos");
  },
};
</script>

<style scoped>
.title {
  font-size: 3rem !important;
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