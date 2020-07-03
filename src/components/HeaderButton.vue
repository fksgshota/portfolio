<template>
  <v-btn
    text
    dark
    class="header_button"
    ref="button"
    @click="$vuetify.goTo(selector, easeOutQuad)"
  >{{name}}</v-btn>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    selector: {
      type: String,
      required: true,
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
