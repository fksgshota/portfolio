<template>
  <v-container class="ProductCardList">
    <h1 class="ProductCardList__title">Products</h1>
    <ProductCard
    class="ProductCardList__item"
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
  components: {
    ProductCard,
  },
  computed:{
    products(){
      return [
        {
          title: "Minesweeper",
          url: "https://fksgshota.github.io/minesweeper",
          description: "JavaScriptの学習を目的として制作したマインスイーパーです",
          img_path: "/portfolio/products/minesweeper.png",
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.ProductCardList {
  &__title {
    margin-bottom: 50px;
    left: -5px;
  }
}
</style>
