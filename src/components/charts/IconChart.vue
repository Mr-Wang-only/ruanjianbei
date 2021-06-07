<template>
  <el-tooltip class="item" effect="dark" :content="text" :placement="position">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
  </el-tooltip>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      position: "",
    };
  },
  props: {
    iconName: {
      type: String,
      default: "",
    },
  },
  mounted() {
    switch (this.iconName) {
      case "#icon-zu":
        this.text = "数据表";
        this.position = "top";
        break;
      case "#icon-zhuxingtu":
        this.text = "柱形图";
        this.position = "top";
        break;
      case "#icon-pubutu":
        this.text = "瀑布图";
        this.position = "top";
        break;
      case "#icon-zhexiantu":
        this.text = "折线图";
        this.position = "top";
        break;
      case "#icon-duidiezhexiantu":
        this.text = "堆叠折线图";
        this.position = "top";
        break;
      case "#icon-mianjitu":
        this.text = "面积图";
        this.position = "bottom";
        break;
      case "#icon-bingtu":
        this.text = "饼图";
        this.position = "bottom";
        break;
      case "#icon-meiguitu":
        this.text = "玫瑰图";
        this.position = "bottom";
        break;
      case "#icon-duoxiliesandiantu":
        this.text = "散点图";
        this.position = "bottom";
        break;
      default:
        this.text = "图表";
        this.position = "bottom";
        break;
    }
  },
};
</script>

<style scoped>
svg {
  width: 34px;
  height: 34px;
  margin-left: 15px;
  padding: 5px;
}
svg:hover {
  border: 1px solid #3f8ce8;
}
svg:nth-child(1),
svg:nth-child(6) {
  margin-left: 0;
}
svg:nth-child(n + 6) {
  margin-top: 10px;
}
.active {
  box-shadow: 0px 1px 3px #98c3f8;
  border: 1px solid #3f8ce8;
}
</style>