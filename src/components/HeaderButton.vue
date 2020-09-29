<template>
  <v-btn
    text
    dark
    large
    class="HeaderButton"
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
