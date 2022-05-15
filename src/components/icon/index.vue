<template>
  <svg class="icon"><use :xlink:href="`#${iconName}`"></use></svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
