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
          <v-btn color="green darken-1" text @click="dialog = false"> Acheter </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-dialog>
</template>