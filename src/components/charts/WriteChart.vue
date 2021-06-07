<template>
  <div class="chart">
    <shu-ju-biao v-if="chart === 0"></shu-ju-biao>
    <zhu-xing-tu v-if="chart === 1"></zhu-xing-tu>
  </div>
</template>

<script>
import ShuJuBiao from "./childrenChart/ShuJuBiao.vue";
import ZhuXingTu from "./childrenChart/ZhuXingTu.vue";
export default {
  components: { ShuJuBiao, ZhuXingTu },
  props: {
    chart: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.chart {
  height: 100%;
  width: 100%;
  background-color: #fff;
}
</style>