<template>
  <v-list-item
    class="HeaderHamburgerMenu"
    dark
    @click="$vuetify.goTo(selector, easeOutQuad)"
  >
    <v-list-item-title class="HeaderHamburgerMenu__title">
      {{ name }}
    </v-list-item-title>
  </v-list-item>
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
