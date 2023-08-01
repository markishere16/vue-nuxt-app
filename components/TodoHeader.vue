<template>
  <v-card-title class="header-actions d-flex justify-end mb-3 grey lighten-2">
    <v-btn color="primary" rounded class="pr-1" small>
      Task
      <v-chip
        class="ml-2 text-blue-darken-3 font-weight-bold"
        color="white"
        variant="elevated"
        small
      >
        {{ todosCount }}
      </v-chip>
    </v-btn>

    <v-btn color="primary" rounded class="pr-1" small>
      Task Done
      <v-chip
        class="ml-2 text-blue-darken-3 font-weight-bold"
        right
        color="white"
        variant="elevated"
        small
      >
        {{ taskDone }}
      </v-chip>
    </v-btn>

    <v-btn
      color="red"
      dark
      rounded
      v-if="taskDone > 0"
      @click="deleteTaskDone()"
      small
    >
      <v-icon left>mdi-delete</v-icon>
      Task Done
    </v-btn>

    <v-btn color="red" dark rounded @click="deleteAllTask()" small>
      <v-icon left>mdi-delete</v-icon>
      Task
    </v-btn>
  </v-card-title>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  name: "TodoHeader",
  computed: mapGetters(["todosCount", "taskDone"]),
  methods: {
    deleteTaskDone() {
      this.$store.dispatch("deleteTaskDone");
    },

    deleteAllTask() {
      this.$store.dispatch("deleteAllTask");
    },
  },
};
</script>

<style scoped>
.header-actions button {
  margin-left: 10px;
}
</style>