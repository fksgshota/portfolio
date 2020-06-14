<template>
  <div>
    <h1>Skills</h1>
    <SkillCard
      v-for="skill in skills"
      :key="skill.title"
      :title="skill.title"
      :star="skill.star"
      :description="skill.description"
    ></SkillCard>
  </div>
</template>

<script>
import SkillCard from './SkillCard';

export default {
  data () {
    return {
      skills: [
        {
          title: "Ruby",
          star: 3,
          description: "まぁまぁ"
        },
        {
          title: "Ruby on Rails",
          star: 3,
          description: "まぁまぁ",
        },
        {
          title: "JavaScript",
          star: 3,
          description: "まぁまぁ",
        },
        {
          title: "Vue.js",
          star: 3,
          description: "まぁまぁ",
        },
        {
          title: "jQuery",
          star: 3,
          description: "まぁまぁ",
        },
        {
          title: "Firebase",
          star: 3,
          description: "まぁまぁ",
        },
        {
          title: "Heroku",
          star: 3,
          description: "まぁまぁ",
        },
        {
          title: "AWS",
          star: 3,
          description: "まぁまぁ",
        },
        {
          title: "HTML5 & CSS3",
          star: 3,
          description: "まぁまぁ",
        },
        {
          title: "GitHub",
          star: 3,
          description: "まぁまぁ"
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
</style>
