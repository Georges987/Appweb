<template>
    <nav>
        <v-app-bar depressed app color="success">
            <v-app-bar-nav-icon class="success" grey--text @click="drawer = !drawer">
            </v-app-bar-nav-icon>
            <v-app-bar-title class="white--text darken-2" xs6 md6 lg6>
                Clari
            </v-app-bar-title>
            <v-spacer>
            </v-spacer>
            <template>
                <div class="text-center">
                    <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        color="success"
                        depressed
                        v-bind="attrs"
                        v-on="on"
                        >
                        <v-icon left>
                            mdi-log
                        </v-icon>
                            Menu
                        </v-btn>
                    </template>
                    <v-list
                    color="success"
                    >
                        <v-list-item
                        v-for="link in links"
                        :key="link.name"
                        router :to="link.road"
                        >
                            <v-list-item-title>
                                    {{ link.name }}
                            </v-list-item-title>
                            </v-list-item>
                    </v-list>
                    </v-menu>
                </div>
            </template>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app class="success">
            <v-list class="pt-15">
                <v-list-item v-for="cat in categories" :key="cat.name" router :to="cat.road">
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
            links:[
                {name: 'Home', road: '/'},
                {name: 'Bestsellers', road: '/best'},
                {name: 'Feedback', road: '/feedback'}

            ],
            categories: [
                {name: 'Tech', road: '/categorie/tech', icon: "mdi-xml"},
                {name: 'Wear', road: '/categorie/wear', icon: 'mdi-cart'},
                {name: 'Other', road: '/categorie/other', icon: 'mdi-star'}
            ]
        }
    },
}
</script>