<template>
  <nav>
    <v-app-bar flat app color="orange">
      <template md6 lg6 sm6 xs6>
        <v-app-bar-nav-icon
          class="orange"
          grey--text
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <span class="white--text darken-2 text-h5" xs6 md6 lg6> Clari </span>
      </template>
      <v-spacer> </v-spacer>
      <v-autocomplete
      width="100px"
      >
      </v-autocomplete>
      <template>
        <div class="text-center">
          <v-menu offset-y transition="slide-x-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="orange" depressed v-bind="attrs" v-on="on"> Menu </v-btn>
            </template>
            <v-list color="orange">
              <v-list-item v-for="link in items" :key="link.name" router :to="link.road">
                <v-icon left>
                  {{link.icon}}
                </v-icon>
                <v-list-item-title>
                  {{ link.name }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app class="orange">
      <v-list class="">
        <v-list-item v-for="cat in items" :key="cat.id" router :to="cat.road" class="small">
            <v-list-item-action>
              <v-icon left class="white--text">{{ cat.icon }}</v-icon>
            </v-list-item-action>
            <v-list-content>
              <v-list-item class="white--text">{{ cat.name }}</v-list-item>
            </v-list-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      items:[
        {
          name: 'Home',
          road: "/",
          icon: "mdi-cog"
        },
        {
          name: 'Bestsellers',
          road: "/bestsellers",
          icon: "mdi-star-check-outline"
        },
        {
          name: 'Feedback',
          road: "/feedback",
          icon: "mdi-message-alert"
        },
        {
          name: 'Categories',
          road: "/categorie",
          icon: "mdi-store-outline"
        },
        { name: 'Tech', 
          road : "/categorie/tech", 
          icon: "mdi-laptop"
        },
        { name: 'Wear', 
          road : "/categorie/wear",
          icon: "mdi-cart" 
        },
        { 
          name: 'Other', 
          road : "/categorie/other", 
          icon: "mdi-star" 
        },
      ],
    };
  },
};
</script>
