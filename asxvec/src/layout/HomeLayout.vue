<template>
    <v-container>
        <v-layout align-center>
            <v-app-bar class="app-bar" color="primary" location="top" density="compact" elevation="8" rounded>

                    <v-tabs grow align-tabs="center" bg-color="deep-purple-darken-4"
                        
                        show-arrows>

                        <v-tab to="/life">Life</v-tab>
                        <v-tab to="/career">Career</v-tab>
                        <v-tab to="/">Education</v-tab>
                        <v-tab>Relegion</v-tab>
                        <v-tab>Food</v-tab>
                        <v-tab>Travel</v-tab>
                    </v-tabs>

            </v-app-bar>

            <v-main>
                <v-container>
                    <!-- <v-row dense> -->
                        <router-view></router-view>
                    <!-- </v-row> -->
                </v-container>
            </v-main>
        </v-layout>
    </v-container> 
</template>
<script lang="ts">
export default {

}
</script>

<style lang="scss">
.app-bar {
    margin-top: 0px;
  }
</style>