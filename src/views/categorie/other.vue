<template>
  <div class="pa-5">
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
          <v-card flat>
            <v-responsive>
              <v-img height="100px" width="100px">
                <img src="" />
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
              <template>
                <v-dialog v-model="dialog" width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="white" depressed v-bind="attrs" v-on="on" rounded>
                      <v-icon left> mdi-information-variant </v-icon>
                      Description
                    </v-btn>
                  </template>
                  <div>
                    <v-card>
                      <v-card-title>
                        <span class="text-h5">{{ product.name }}</span>
                      </v-card-title>
                      <v-card-text>
                        {{ product.description }}
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="dialog = false">
                          Acheter
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </div>
                </v-dialog>
              </template>
              <v-btn color="white" depressed rounded>
                <v-icon left> mdi-information-variant </v-icon>
                Acheter
              </v-btn>
            </v-card-actions>
          </v-card>
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
