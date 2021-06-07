<template>
  <el-container class="is-vertical">
    <Header />
    <Main class="main" />
    <Footer />
  </el-container>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/views/admin/main/Main.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style scoped>
.is-vertical {
  height: 100%;
}
.main {
  padding: 0;
}
</style>