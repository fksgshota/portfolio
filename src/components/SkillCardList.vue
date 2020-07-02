<template>
  <v-container class="skill_card_list">
    <h1 class="skill_card_list__title">Skills</h1>
    <SkillCard
      v-for="skill in skills"
      :key="skill.title"
      :title="skill.title"
      :star="skill.star"
      :description="skill.description"
      :img_path="skill.img_path"
    ></SkillCard>
  </v-container>
</template>

<script>
import SkillCard from './SkillCard';

export default {
  data () {
    return {
      skills: [
        {
          title: "Ruby",
          star: 1,
          description: "まぁまぁ",
          img_path: "/skills/ruby.png",
        },
        {
          title: "Ruby on Rails",
          star: 3,
          description: "まぁまぁ",
          img_path: "/Skills/rails.svg",
        },
        {
          title: "JavaScript",
          star: 3,
          description: "まぁまぁ",
          img_path: "/Skills/javascript.svg",
        },
        {
          title: "Vue.js",
          star: 3,
          description: "まぁまぁ",
          img_path: "/skills/vue.svg",
        },
        {
          title: "jQuery",
          star: 3,
          description: "まぁまぁ",
          img_path: "/skills/jquery.svg",
        },
        {
          title: "Firebase",
          star: 3,
          description: "まぁまぁ",
          img_path: "/skills/firebase.svg",
        },
        {
          title: "Heroku",
          star: 3,
          description: "まぁまぁ",
          img_path: "/skills/heroku.svg",
        },
        {
          title: "AWS",
          star: 3,
          description: "まぁまぁ",
          img_path: "/skills/amazon_aws.svg",
        },
        {
          title: "S3",
          star: 3,
          description: "まぁまぁ",
          img_path: "/skills/amazon_s3.svg",
        },
        {
          title: "Redis",
          star: 3,
          description: "まぁまぁ",
          img_path: "/skills/redis.svg",
        },
        {
          title: "DynamoDB",
          star: 3,
          description: "まぁまぁ",
          img_path: "/skills/amazon_dynamodb.svg",
        },
        {
          title: "Airtable",
          star: 3,
          description: "まぁまぁ",
          img_path: "/skills/airtable.svg",
        },
        {
          title: "Go",
          star: 3,
          description: "まぁまぁ",
          img_path: "/skills/go.svg",
        },
        {
          title: "Asana",
          star: 3,
          description: "まぁまぁ",
          img_path: "/skills/asana.svg",
        },
        {
          title: "HTML5",
          star: 3,
          description: "まぁまぁ",
          img_path: "/skills/html_5.svg"
        },
        {
          title: "CSS3",
          star: 3,
          description: "まぁまぁ",
          img_path: "/skills/css_3.svg",
        },
        {
          title: "Figma",
          star: 3,
          description: "まぁまぁ",
          img_path: "/skills/figma.svg",
        },
        {
          title: "MySQL",
          star: 3,
          description: "まぁまぁ",
          img_path: "/skills/mysql.png",
        },
        {
          title: "Slack",
          star: 3,
          description: "まぁまぁ",
          img_path: "/skills/slack.svg",
        },
        {
          title: "Git",
          star: 3,
          description: "まぁまぁ",
          img_path: "/skills/git.png",
        },
        {
          title: "CircleCI",
          star: 3,
          description: "まぁまぁ",
          img_path: "/skills/circleci.png",
        },
        {
          title: "PostgreSQL",
          star: 3,
          description: "まぁまぁ",
          img_path: "/skills/postgresql.svg",
        },
        {
          title: "Docker",
          star: 3,
          description: "まぁまぁ",
          img_path: "/skills/docker.png",
        },
        {
          title: "GitHub",
          star: 3,
          description: "まぁまぁ",
          img_path: "/skills/octocat.png",
        }
      ]
    }
  },
  components: {
    SkillCard,
  },
};
</script>

<style lang="scss" scoped>
.skill_card_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &__title {
    width: 100%;
    color: #ffffff;
    margin-bottom: 50px;
    left: -5px;
  }
}
</style>
