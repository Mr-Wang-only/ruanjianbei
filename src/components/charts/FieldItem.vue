<template>
  <li>
    <div>
      <svg
        class="icon"
        aria-hidden="true"
        style="padding-right: 3px; font-size: 14px"
      >
        <use :xlink:href="showIcon"></use>
      </svg>
      <slot />
    </div>
    <div class="dropdown" @click="dropMenuClick">
      <i class="el-icon-caret-bottom"></i>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    tableFields: {
      type: Array,
      default: [],
    },
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    showIcon() {
      const currentType = this.tableFields[this.currentIndex].data_type;
      if (currentType === "varchar") {
        return "#icon-xingzhuang-wenzi";
      }
      if (currentType === "int") {
        return "#icon-shuzi";
      }
    },
  },
  methods: {
    dropMenuClick() {
    }
  }
};
</script>

<style scoped>
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  padding: 3px 10px;
}
.dropdown {
  display: none;
  padding: 0 5px;
}
li:hover {
  background-color: #e4edfa;
  cursor: move;
}
li:hover .dropdown {
  display: block;
  background-color: #e4edfa;
  cursor: pointer;
}
</style>