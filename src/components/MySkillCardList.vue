<template>
  <v-container class="skillCardList">
    <h1 class="skillCardList__title">
      Skills
    </h1>
    <h2 class="skillCardList__subtitle">
      Language
    </h2>
    <MySkillCard
      v-for="language in languages"
      v-bind="language"
      :key="language.title"
      class="skillCardList__item"
    />
    <h2 class="skillCardList__subtitle">
      Framework
    </h2>
    <MySkillCard
      v-for="framework in frameworks"
      :key="framework.title"
      class="skillCardList__item"
      v-bind="framework"
    />

    <h2 class="skillCardList__subtitle">
      Database
    </h2>
    <MySkillCard
      v-for="database in databases"
      :key="database.title"
      class="skillCardList__item"
      v-bind="database"
    />

    <h2 class="skillCardList__subtitle">
      Infrastructure
    </h2>
    <MySkillCard
      v-for="infrastructure in infrastructures"
      :key="infrastructure.title"
      class="skillCardList__item"
      v-bind="infrastructure"
    />

    <h2 class="skillCardList__subtitle">
      Tool
    </h2>
    <MySkillCard
      v-for="tool in tools"
      :key="tool.title"
      class="skillCardList__item"
      v-bind="tool"
    />
  </v-container>
</template>

<script>
import MySkillCard from "./MySkillCard";

export default {
  components: {
    MySkillCard,
  },
  computed: {
    languages() {
      return [
        {
          title: "Ruby",
          star: 4,
          description: "業務で使用している。",
          imgPath: "/portfolio/skills/ruby.png",
        },
        {
          title: "JavaScript",
          star: 3,
          description: "業務で使用している。",
          imgPath: "/portfolio/skills/javascript.svg",
        },
        {
          title: "TypeScript",
          star: 2,
          description: "業務で使用しながら学習中",
          imgPath: "/portfolio/skills/typescript.svg",
        },
        {
          title: "Go",
          star: 1,
          description: "学習していたが一時中断",
          imgPath: "/portfolio/skills/go.svg",
        },
        {
          title: "HTML5",
          star: 4,
          description: "業務で使用している。",
          imgPath: "/portfolio/skills/html_5.svg",
        },
        {
          title: "CSS3",
          star: 4,
          description: "業務で使用している。",
          imgPath: "/portfolio/skills/css_3.svg",
        },
        {
          title: "Scss",
          star: 3,
          description: "業務で使用している。",
          imgPath: "/portfolio/skills/scss.svg",
        },
      ];
    },
    frameworks() {
      return [
        {
          title: "Ruby on Rails",
          star: 4,
          description: "業務で使用している。",
          imgPath: "/portfolio/skills/rails.svg",
        },
        {
          title: "Vue.js",
          star: 2,
          description: "業務で使用しながら学習中",
          imgPath: "/portfolio/skills/vue.svg",
        },
        {
          title: "Nuxt.js",
          star: 2,
          description: "学習中",
          imgPath: "/portfolio/skills/nuxt_js.svg",
        },
        {
          title: "Next.js",
          star: 2,
          description: "業務で使用しながら学習中",
          imgPath: "/portfolio/skills/next_js.svg",
        },
        {
          title: "jQuery",
          star: 3,
          description: "基本的な使い方は理解している",
          imgPath: "/portfolio/skills/jquery.svg",
        },
        {
          title: "Middleman",
          star: 2,
          description: "業務で触ったことがあり、ある程度は理解している。",
          imgPath: "/portfolio/skills/middleman.svg",
        },
      ];
    },
    databases() {
      return [
        {
          title: "MySQL",
          star: 3,
          description: "使用経験あり",
          imgPath: "/portfolio/skills/mysql.png",
        },
        {
          title: "PostgreSQL",
          star: 3,
          description: "使用経験あり",
          imgPath: "/portfolio/skills/postgresql.svg",
        },
        {
          title: "Redis",
          star: 3,
          description:
            "業務で使用したことがあり、基本的な使い方は理解している。",
          imgPath: "/portfolio/skills/redis.svg",
        },
        {
          title: "DynamoDB",
          star: 2,
          description:
            "業務で使用したことがあり、基本的な使い方は理解している。",
          imgPath: "/portfolio/skills/amazon_dynamodb.svg",
        },
      ];
    },
    infrastructures() {
      return [
        {
          title: "Firebase",
          star: 2,
          description: "業務で使用している",
          imgPath: "/portfolio/skills/firebase.svg",
        },
        {
          title: "Heroku",
          star: 3,
          description: "業務で使用している。基本的な使い方は理解している。",
          imgPath: "/portfolio/skills/heroku.svg",
        },
        {
          title: "S3",
          star: 2,
          description:
            "業務で使用したことがあり、基本的な使い方は理解している。",
          imgPath: "/portfolio/skills/amazon_s3.svg",
        },
      ];
    },
    tools() {
      return [
        {
          title: "Airtable",
          star: 3,
          description: "情報共有・タスク管理で使用したことあり。",
          imgPath: "/portfolio/skills/airtable.svg",
        },
        {
          title: "Asana",
          star: 4,
          description: "業務でタスク管理ツールとして使用している。",
          imgPath: "/portfolio/skills/asana.svg",
        },
        {
          title: "Git",
          star: 4,
          description: "基本的な使い方は習得している",
          imgPath: "/portfolio/skills/git.png",
        },
        {
          title: "CircleCI",
          star: 2,
          description: "基本的な使い方は理解している。",
          imgPath: "/portfolio/skills/circleci.png",
        },

        {
          title: "Docker",
          star: 2,
          description: "業務で使用しながら学習中",
          imgPath: "/portfolio/skills/docker.png",
        },
        {
          title: "GitHub",
          star: 4,
          description:
            "基本的な使い方は習得していて、多人数でのチーム開発経験あり。",
          imgPath: "/portfolio/skills/octocat.png",
        },
        {
          title: "Figma",
          star: 3,
          description: "業務で使用している。",
          imgPath: "/portfolio/skills/figma.svg",
        },
        {
          title: "Miro",
          star: 3,
          description: "業務で使用している。",
          imgPath: "/portfolio/skills/miro.svg",
        },
        {
          title: "Slack",
          star: 4,
          description: "業務で使用している。",
          imgPath: "/portfolio/skills/slack.svg",
        },
        {
          title: "Notion",
          star: 4,
          description: "業務で使用している。",
          imgPath: "/portfolio/skills/notion.svg",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.skillCardList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &__title {
    width: 100%;
    color: #ffffff;
    left: -5px;
  }
  &__subtitle {
    width: 100%;
    color: #ffffff;
    margin-top: 50px;
    margin-bottom: 10px;
    text-align: center;
  }
}
</style>
