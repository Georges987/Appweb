<template>
  <v-app>
      <Navbar />
      <v-main>
        <router-view/>
      </v-main>
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
