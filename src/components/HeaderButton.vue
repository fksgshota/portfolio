<template>
  <v-btn ref="button" text>{{name}}</v-btn>
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
