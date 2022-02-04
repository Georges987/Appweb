<template>
  <div>
    <v-sheet id="sheet" color="" height="100px" class="grey--text text-center pa-7">
      <span class="font-weight-bold font-italic text-h3 sp">
        Bienvenue
      </span>
    </v-sheet>
    <template>
      <v-carousel cycle show-arrows-on-hover height="400px" width="100%">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.url"
        ></v-carousel-item>
      </v-carousel>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {url: "/i3.jpg",},
        {url: "/im2.png",},
        {url: "/user-selena.png",},
        {url: "/im4.png",}
      ]
    };
  },
};
</script>
<style lang="css">
#sheet {
  opacity: 0.5;
}
</style>