<template>
  <v-btn
    ref="button"
    text
    dark
    large
    class="HeaderButton"
    @click="$vuetify.goTo(selector, easeOutQuad)"
  >
    {{ name }}
  </v-btn>
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
