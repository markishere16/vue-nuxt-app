<template>
  <div>
    <div v-if="getTodos.length > 0" id="todoList">
      <v-fade-transition class="py-0" group tag="v-list">
        <TodoItem v-for="(todo, index) in getTodos" :key="index" :todo="todo" />
      </v-fade-transition>
    </div>
    <div v-else class="text-center">No Task Available</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getTodos"]),
};
</script>

<style scoped>
#todoList {
  max-height: 500px;
  overflow-y: auto;
}
</style>

