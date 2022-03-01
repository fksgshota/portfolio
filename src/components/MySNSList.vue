<template>
  <ul class="snsList">
    <li
      v-for="account in accounts"
      :key="account.name"
      class="snsListItem snsList__item"
    >
      <a
        class="snsListItem__link"
        :href="account.url"
      >
        <v-icon large>{{ account.icon }} fa-fw</v-icon>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    accounts() {
      return [
        {
          name: "Twitter",
          url: "https://twitter.com/fksgshota",
          icon: "fab fa-twitter-square",
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/Fukushige.Shota",
          icon: "fab fa-facebook-square",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/shota_fukushige/",
          icon: "fab fa-instagram-square",
        },
        {
          name: "GitHub",
          url: "https://github.com/fksgshota",
          icon: "fab fa-github-square",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.snsList {
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: start;
  padding-left: 10px;
  flex-wrap: wrap;
}
.snsListItem__link {
  text-decoration: none;
}
</style>
