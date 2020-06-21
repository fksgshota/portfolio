<template>
  <div>
    <h1>Products</h1>
    <ProductionCard
      v-for="production in products"
      :key="production.title"
      :title="production.title"
      :url="production.url"
      :description="production.description"
      :img_path="production.img_path"
    ></ProductionCard>
  </div>
</template>

<script>
import ProductionCard from './ProductionCard';

export default {
  data () {
    return {
      products: [
        {
          title: "マインスイーパ",
          url: "",
          description: "JavaScriptの学習を目的として作成しました",
          img_path: "",
        },
      ]
    }
  },
  components: {
    ProductionCard,
  },
};
</script>

<style lang="scss" scoped>
</style>
