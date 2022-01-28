<template>
  <div class="pa-10">
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="First name"
              required
            >
            </v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="Last name"
              required
            >
            </v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-textarea
              v-model="textarea"
              :rules="textRules"
              label="Your message"
              required
            ></v-textarea>
          </v-col>
          <v-col cols="12" md="4">
            <template>
              <div class="text-center ma-2">
                <v-btn dark @click="snackbar = true"> Submit your message </v-btn>
                <v-snackbar v-model="snackbar" color="success">
                  {{ text }}

                  <template v-slot:action="{ attrs }">
                    <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
                  </template>
                </v-snackbar>
              </div>
            </template>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    snackbar: false,
    text: `Submited successfully !!`,

    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length >= 3 || "Name must be more than 6 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    textarea: "",
    textRules: [
      (v) => !!v || "Message is required befor submit",
      (v) => v.length >= 40 || "Message must be more than 40 characters",
    ],
  }),
};
</script>