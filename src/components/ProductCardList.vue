<template>
  <v-container class="product_card_list">
    <h1 class="product_card_list__title">Products</h1>
    <ProductCard
      v-for="product in products"
      :key="product.title"
      :title="product.title"
      :url="product.url"
      :description="product.description"
      :img_path="product.img_path"
    ></ProductCard>
  </v-container>
</template>

<script>
import ProductCard from './ProductCard';

export default {
  data () {
    return {
      products: [
        {
          title: "Minesweeper",
          url: "https://fksgshota.github.io/minesweeper",
          description: "JavaScriptの学習を目的として制作したマインスイーパーです",
          img_path: "/portfolio/products/minesweeper.png",
        },
      ]
    }
  },
  components: {
    ProductCard,
  },
};
</script>

<style lang="scss" scoped>
.product_card_list {
  &__title {
    margin-bottom: 50px;
    left: -5px;
  }
}
</style>
