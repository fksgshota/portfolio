<template>
  <ul class="sns_list">
    <li class="sns_list__item" v-for="account in accounts" :key="account.name">
      <a class="sns_list__link" :href="account.url">
        <v-icon large>{{account.icon}} fa-fw</v-icon>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      accounts: [
        {
          name: "Twitter",
          url: "https://twitter.com/fksgshota",
          icon: "fab fa-twitter-square",
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/Fukushige.Shota",
          icon: "fab fa-facebook-square"
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/shota_fukushige/",
          icon: "fab fa-instagram-square"
        },
        {
          name: "GitHub",
          url: "https://github.com/fksgshota",
          icon: "fab fa-github-square"
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sns_list {
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: start;
  padding-left: 10px;
  flex-wrap: wrap;
  &__link {
    text-decoration: none;
  }
}
</style>
