<template>
  <div>
    <div v-for="row in 6" :key="row">
      <button
        v-for="col in 6"
        :key="col"
        @click="handleClick(col - 1, row - 1)"
        :class="grid[row - 1][col - 1] ? 'highlight': ''">
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  props: {
    grid: {
      type: Array as PropType<boolean[][]>,
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: 'grid',
    event: 'gridChanged',
  },
  methods: {
    handleClick(x: number, y: number): void {
      const arr: boolean[][] = [];
      if (this.multiple) {
        this.grid.forEach(element => arr.push(element.slice()));
      } else {
        this.grid.forEach(_ => arr.push(new Array(6).fill(false)));
      }
      arr[y][x] = !arr[y][x];
      this.$emit('gridChanged', arr);
    },
  },
});
</script>

<style scoped>
button {
  height: 32px;
  width: 32px;
  margin: 4px;
  background-color: lightblue;
}
button.highlight {
  background-color: green;
}
</style>
