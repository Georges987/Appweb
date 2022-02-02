<template>
  <div>
     <v-container class="pa-5">
      <v-row>
        <v-col
          v-for="product in products"
          :key="product.name"
          xs="12"
          sm="6"
          md="4"
          lg="4"
          xl="4"
        >
        <v-hover
        v-slot="{ hover }"
        open-delay="200"
        >
        <v-card
        :elevation="hover ? 16 : 2"
        :class="{ 'on-hover': hover }"
        class="mx-auto"
        >
            <v-responsive>
              <v-img height="200px" width="400px">
                <img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" />
              </v-img>
            </v-responsive>
            <v-card-title>
              {{ product.name }}
            </v-card-title>
            <v-card-subtitle>
              <v-row>
                <v-col>{{ product.status }}</v-col>
                <v-col>{{ product.price }}</v-col>
              </v-row>
            </v-card-subtitle>
            <v-card-actions>
              <Descript />
              <v-btn color="white" depressed rounded>
                <v-icon left> mdi-information-variant </v-icon>
                Acheter
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      products: [
        {
          name: "product 1",
          price: "product_price",
          description: "product_description",
          status: "product_status",
          image: "product_image",
        },
        {
          name: "product 2",
          price: "product_price",
          description: "product_description",
          status: "product_status",
          image: "product_image",
        },
        {
          name: "product 3",
          price: "product_price",
          description: "product_description",
          status: "product_status",
          image: "product_image",
        },
        {
          name: "product 4",
          price: "product_price",
          description: "product_description",
          status: "product_status",
          image: "product_image",
        },
      ],
    };
  },
};
</script>
