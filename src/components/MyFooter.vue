<template>
  <v-footer
    class="Footer blue-grey darken-2"
    absolute
    dark
  >
    <small class="copyright">&copy; {{ copyrightYear }} Shota Fukushige</small>
  </v-footer>
</template>

<script>
export default {
  computed: {
    copyrightYear: function () {
      const now = new Date()
      return now.getFullYear()
    },
  }
};
</script>
<style lang="scss" scoped>
.Footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
