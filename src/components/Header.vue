<template>
  <v-app-bar app class="Header blue-grey darken-2">
    <v-app-bar-nav-icon
      dark
      class="Header__navIcon"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-navigation-drawer
      class="drawer Header__navDrawer"
      app
      dark
      temporary
      hide-overlay
      v-model="drawer"
    >
      <v-list class="menuList drawer__list" nav dark>
        <v-list-item-group
          class="menuGroupe menuList__itemGroup"
          v-model="group"
        >
          <HeaderHamburgerMenu
            class="menuGroupe__hamburger"
            v-for="link in links"
            :key="link.name"
            :name="link.name"
            :selector="link.selector"
          ></HeaderHamburgerMenu>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-container
      class="HeaderMenu Header__container d-flex justify-space-around"
    >
      <HeaderButton
        class="HeaderMenu__link"
        v-for="link in links"
        :key="link.name"
        :name="link.name"
        :selector="link.selector"
      ></HeaderButton>
    </v-container>
  </v-app-bar>
</template>
<script>
import HeaderButton from "./HeaderButton";
import HeaderHamburgerMenu from "./HeaderHamburgerMenu";

export default {
  components: {
    HeaderButton,
    HeaderHamburgerMenu,
  },
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  computed:{
    links(){
      return [
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
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.Header__navIcon {
  display: none;
  @media screen and (max-width: 480px) {
    display: initial;
  }
}
.HeaderMenu__link {
  display: initial;
  @media screen and (max-width: 480px) {
    display: none;
  }
}
</style>
