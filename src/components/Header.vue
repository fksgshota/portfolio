<template>
  <v-app-bar app class="header blue-grey darken-2">
    <v-app-bar-nav-icon dark class="header_nav_icon" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer app dark temporary hide-overlay v-model="drawer">
      <v-list nav dark>
        <v-list-item-group v-model="group">
          <HeaderHamburgerMenu
            v-for="link in links"
            :key="link.name"
            :name="link.name"
            :selector="link.selector"
          ></HeaderHamburgerMenu>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-container class="d-flex justify-space-around">
      <HeaderButton
        class="header_nav_link"
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
import HeaderHamburgerMenu from './HeaderHamburgerMenu';

export default {
  data () {
    return {
      drawer: false,
      group: null,

      links: [
        {
          name: "TOP",
          selector: "#first",
        },
        {
          name: "PROFILE",
          selector: "#second",
        },
        {
          name: "SKILLS",
          selector: "#third",
        },
        {
          name: "PRODUCTS",
          selector: "#fourth",
        },
        {
          name: "CONTACT",
          selector: "#fifth",
        },
      ]
    }
  },
  components: {
    HeaderButton,
    HeaderHamburgerMenu
  },
  watch: {
    group () {
      this.drawer = false
    },
  }
}
</script>
<style lang="scss" scoped>
.header_nav_icon {
  display: none;
  @media screen and (max-width: 480px) {
    display: initial;
  }
}
.header_nav_link {
  display: initial;
  @media screen and (max-width: 480px) {
    display: none;
  }
}
</style>
