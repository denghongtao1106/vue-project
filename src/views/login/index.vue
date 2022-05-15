<template>
  <div>
    hello
    <el-button @click="elClick" type="primary">按钮</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    elClick() {
      console.log("kiifhweoiiofw");
      this.$router.push({ name: "main", params: { id: "2345565" } });
    },
  },
};
</script>

<style></style>
