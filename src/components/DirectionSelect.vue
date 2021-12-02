<template>
  <div class="flex-container">
    <div class="grid">
      <div />
      <button
        @click="handleClick(Direction.Up)"
        :class="direction === Direction.Up ? 'highlight': ''">
      </button>
      <div />
      <button
        @click="handleClick(Direction.Left)"
        :class="direction === Direction.Left ? 'highlight': ''">
      </button>
      <div />
      <button
        @click="handleClick(Direction.Right)"
        :class="direction === Direction.Right ? 'highlight': ''">
      </button>
      <div />
      <button
        @click="handleClick(Direction.Down)"
        :class="direction === Direction.Down ? 'highlight': ''">
      </button>
      <div />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Direction from '@/direction';

export default Vue.extend({
  props: {
    direction: {
      type: Number as PropType<Direction>,
      required: true,
    },
  },
  data() {
    return {
      Direction,
    };
  },
  model: {
    prop: 'direction',
    event: 'directionChanged',
  },
  methods: {
    handleClick(direction: Direction): void {
      this.$emit('directionChanged', direction);
    },
  },
});
</script>

<style scoped>
.flex-container {
  display: flex;
  justify-content: center;
}
.grid {
  display: grid;
  grid-template-columns: min-content min-content min-content;
  grid-template-rows: min-content min-content min-content;
}
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
