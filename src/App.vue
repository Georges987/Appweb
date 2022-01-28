<template>
  <v-app>
    <v-img 
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    fixed
    >
      <Navbar />
      <v-main>
        <router-view/>
      </v-main>
    </v-img>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar'
export default {
  name: 'App',
  components: { Navbar },
  data: () => ({
    //
  }),
};
</script>
