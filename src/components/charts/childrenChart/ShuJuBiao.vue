<template>
  <div>
    <!-- 展示表格 -->
    <el-table
      :data="tableData"
      stripe
      height="500"
      style="width: 100%; font-size: 12px"
      border
      size="mini"
    >
      <el-table-column
        :prop="item"
        :label="item"
        v-for="item in tableField"
        :key="item"
      >
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="count"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getShuJuBiao } from "@/service/admin/chartServer.js";
export default {
  data() {
    return {
      tableData: [],
      tableField: [],
      tableName: "",
      currentPage: 1,
      currentLimit: 100,
      count: 0,
      filterArr1: [],
    };
  },
  created() {
    this.tableName = this.$route.query.tableName;
  },
  computed: {
    // 通过watch可以监听变化
    vuexArr1() {
      return this.$store.state.arr1;
    },
  },
  watch: {
    // 监听vuex中arr1的变化
    vuexArr1(newValue) {
      this.filterArr1 = newValue.filter((item) => {
        // 过滤不需要的字段
        return item.column_name !== "请拖入左侧字段";
      });
      this.getData();
    },
    currentPage() {
      this.getData();
    },
    currentLimit() {
      this.getData();
    },
  },
  methods: {
    getData() {
      // 加载动画
      const loading = this.$loading({
        lock: true,
        text: "生成图表中...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      const { currentPage, currentLimit, tableName, filterArr1 } = this;
      getShuJuBiao({
        page: currentPage,
        limit: currentLimit,
        tableName: tableName,
        fields: filterArr1,
      }).then((res) => {
        const { data, count } = res.data;
        this.count = count;
        this.tableData = data;
        // 将字段取出
        this.tableField = filterArr1.map((item) => {
          return item.column_name;
        });
        loading.close();
      });
    },
    handleSizeChange(val) {
      // 每页条数
      this.currentLimit = val;
    },
    handleCurrentChange(val) {
      // 第几页
      this.currentPage = val;
    },
  },
};
</script>

<style scoped>
.el-pagination {
  text-align: center;
  padding-top: 15px;
}
</style>