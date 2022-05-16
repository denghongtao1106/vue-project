<template>
  <div>
    <el-input :value="iptValue"></el-input>
    <el-button type="primary" @click="changeValue">改变值</el-button>
    <bgy-icon icon-name="icon-auto" />
    <span class="myclass">fewfwe</span>
    <div :style="{ color: variables.color_333 }">颜色</div>
    <el-button @click="changeTheme(1)">变粉</el-button>
    <el-button @click="changeTheme(2)">变绿</el-button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import variables from "@/theme/variables.scss.js";
export default {
  data() {
    return {
      variables,
    };
  },
  computed: {
    ...mapGetters({
      iptValue: "appName",
    }),
  },
  components: {},
  mounted() {
    console.log(this.$route.params.id);
  },
  methods: {
    ...mapMutations({ changeInputValue: "setAppName" }),
    ...mapActions({ toggleAppName: "toggleAppName" }),
    changeValue() {
      // this.changeInputValue("89790");
      this.toggleAppName("fwewef").then((res) => console.log(res));
    },
    changeTheme(type) {
      window.document.documentElement.setAttribute(
        "data-theme",
        type === 1 ? "pink" : "green"
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/index.scss";

.myclass {
  @include background_color("background_color1");
  // color: $color_333;
  // color: red;
}
</style>
