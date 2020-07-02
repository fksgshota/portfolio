<template>
  <v-btn class="header_button" ref="button" text dark>{{name}}</v-btn>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
