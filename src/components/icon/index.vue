<template>
  <svg class="icon"><use :xlink:href="`#${iconName}`"></use></svg>
</template>

<script>
export default {
  name: "bgyIcon",
  props: {
    iconName: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
