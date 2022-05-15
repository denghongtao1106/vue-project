<template>
  <div>
    <el-input :value="iptValue"></el-input>
    <el-button type="primary" @click="changeValue">改变值</el-button>
    <Icon icon-name="icon-auto" />
    <span class="myclass">fewfwe</span>
    <div :style="{ color: variables.color_333 }">颜色</div>
  </div>
</template>

<script>
import Icon from "@/components/icon";
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
  components: {
    Icon,
  },
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
  },
};
</script>

<style lang="scss" scoped>
.myclass {
  color: $color_333;
  // color: red;
}
</style>
