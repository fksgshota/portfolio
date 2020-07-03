<template>
  <v-app-bar class="header blue-grey darken-2">
    <v-container class="d-flex justify-space-around">
      <HeaderButton
        v-for="link in links"
        :key="link.name"
        :name="link.name"
        :selector="link.selector"
      ></HeaderButton>
    </v-container>
  </v-app-bar>
</template>
<script>
import HeaderButton from './HeaderButton';

export default {
  data () {
    return {
      links: [
        {
          name: "TOP",
          selector: "#first",
        },
        {
          name: "Profile",
          selector: "#second",
        },
        {
          name: "Skills",
          selector: "#third",
        },
        {
          name: "Products",
          selector: "#fourth",
        },
        {
          name: "Contact",
          selector: "#fifth",
        },
      ]
    }
  },
  components: {
    HeaderButton
  }
}
</script>
<style lang="scss" scoped>
</style>
