    <template>
  <v-list-item dark @click="$vuetify.goTo(selector, easeOutQuad)">
    <v-list-item-title>{{name}}</v-list-item-title>
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

<style lang="scss" scoped>
</style>
