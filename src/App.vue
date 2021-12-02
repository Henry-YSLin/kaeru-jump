<template>
  <div id="app">
    <h1>Kaeru Jump solver</h1>
    <div>
      <h3>Input lily pads:</h3>
      <grid-select v-model="grid" :multiple="true" />
    </div>
    <div>
      <h3>Input frog location:</h3>
      <grid-select v-model="frogGrid" />
    </div>
    <div>
      <h3>Input frog direction:</h3>
      <direction-select v-model="direction" />
    </div>
    <div>
      <button id="action-btn" @click="reset">Reset</button>
      <button id="action-btn" @click="solve">Solve</button>
    </div>
    <hr>
    <div>
      <h3>Results:</h3>
      <pre id="result">{{ result }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GridSelect from './components/GridSelect.vue';
import DirectionSelect from './components/DirectionSelect.vue';
import Direction, { getOffsetX, getOffsetY, getOppositeDirection } from './direction';

export default Vue.extend({
  name: 'App',
  components: {
    GridSelect,
    DirectionSelect,
  },
  data(): {
    grid: boolean[][],
    frogGrid: boolean[][],
    direction: Direction,
    result: string,
    } {
    return {
      grid: new Array(6).fill(null).map(_ => new Array(6).fill(false)),
      frogGrid: new Array(6).fill(null).map(_ => new Array(6).fill(false)),
      direction: Direction.Up,
      result: '',
    };
  },
  methods: {
    step(grid: boolean[][], frogX: number, frogY: number, direction: Direction): Direction[] | null {
      if (!grid[frogY][frogX]) {
        return null;
      }
      if (grid.reduce((acc, row) => acc + row.reduce((a, cell) => a + (cell ? 1 : 0), 0), 0) === 1) {
        return [];
      }
      const nextGrid = grid.map(row => row.slice());
      nextGrid[frogY][frogX] = false;
      for (let i = 0; i < 4; i++) {
        const dir = i as Direction;
        if (dir === getOppositeDirection(direction)) {
          continue;
        }
        const offsetX = getOffsetX(dir);
        const offsetY = getOffsetY(dir);

        let currentX = frogX + offsetX;
        let currentY = frogY + offsetY;

        while (currentX >= 0 && currentX < nextGrid[0].length && currentY >= 0 && currentY < nextGrid.length) {
          if (nextGrid[currentY][currentX]) {
            const steps = this.step(nextGrid, currentX, currentY, dir);
            if (steps) {
              return [dir, ...steps];
            }
          }
          currentX += offsetX;
          currentY += offsetY;
        }
      }
      return null;
    },
    reset() {
      this.grid = new Array(6).fill(null).map(_ => new Array(6).fill(false));
      this.frogGrid = new Array(6).fill(null).map(_ => new Array(6).fill(false));
      this.direction = Direction.Up;
    },
    solve() {
      const frogRow = this.frogGrid.find(r => r.includes(true));
      if (frogRow === undefined) {
        alert('Select a starting location for the frog first!');
        return;
      }

      const frogX = frogRow.findIndex(c => c);
      const frogY = this.frogGrid.findIndex(r => r.includes(true));

      const steps = this.step(this.grid, frogX, frogY, this.direction);
      if (steps === null) {
        this.result = 'No solution found!';
        return;
      }
      this.result = steps.map(d => Direction[d]).join('\n->');
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#action-btn {
  width:120px;
  height: 50px;
  font-size: 1.5rem;
  margin: 10px;
}
</style>
