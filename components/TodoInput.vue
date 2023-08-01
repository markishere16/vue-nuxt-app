<template>
  <div class="grey lighten-2 pa-4">
    <form v-on:submit.prevent="addTodo()">
      <v-text-field
        outlined
        rounded
        color="primary"
        placeholder="New Task"
        v-model="todoName"
        hide-details
      >
        <template #append>
          <v-btn
            fab
            color="blue"
            small
            @click="addTodo()"
            class="add-btn white--text"
          >
            <v-icon style="font-size: 2rem; font-weight: bolder"
              >mdi-plus-thick</v-icon
            >
          </v-btn>
        </template>
      </v-text-field>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TodoInput",
  data() {
    return {
      todoName: "",
    };
  },
  computed: mapGetters(["getTodos"]),
  methods: {
    addTodo() {
      if (this.todoName.trim() == "") {
        alert("Unable to input Task: Input field is Empty");
        return;
      }

      this.$store.dispatch("insertTodo", this.todoName);
      this.todoName = "";
      this.scrollToBottom();
    },
    scrollToBottom() {
      setTimeout(() => {
        var todoListDiv = document.getElementById("todoList");
        todoListDiv.scrollTop = todoListDiv.scrollHeight;
      }, 0);
    },
  },
};
</script>

<style scoped>
.v-input :deep(.v-input__control) {
  background: white !important;
}

.v-input :deep(.v-input__slot) {
  padding-right: 10px !important;
}
.v-input :deep(.v-input__append-inner) {
  margin-top: 8px !important;
}
</style>

<style>
</style>