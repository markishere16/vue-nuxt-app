<template>
  <v-list-item
    class="todo-item rounded mb-2"
    :class="todo.status.done ? 'grey lighten-2' : ''"
  >
    <v-list-item-action>
      <v-btn
        elevation="0"
        :color="todo.status.done ? 'grey' : 'green'"
        @click="toggleTodoHandler()"
        fab
        small
      >
        <v-icon color="white">mdi-check-bold</v-icon>
      </v-btn>
    </v-list-item-action>

    <v-list-item-title
      class="ml-3 font-weight-bold text-h5"
      :class="todo.status.done ? 'task-done' : ''"
    >
      {{ todo.name }}
    </v-list-item-title>

    <v-list-item-action>
      <v-btn icon color="red" @click="deleteTodoHandler()">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>


<script>
import { mapActions } from "vuex";
export default {
  props: ["todo"],
  methods: {
    ...mapActions(["toggleTodo", "deleteTodo"]),
    toggleTodoHandler() {
      this.$store.dispatch("toggleTodo", this.todo);
    },
    deleteTodoHandler() {
      this.$store.dispatch("deleteTodo", this.todo);
    },
  },
};
</script>

<style scope>
.task-done {
  text-decoration: line-through;
  color: grey;
}

.todo-item {
  border: 3px solid rgb(214, 214, 214);
}
</style>