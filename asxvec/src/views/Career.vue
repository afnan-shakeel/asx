<template>
    <v-container>
        <v-btn density="compact" icon="mdi-plus" fixed></v-btn>
        <v-card
        border
        class="mb-2"
        density="compact"
        prepend-avatar="https://randomuser.me/api/portraits/women/10.jpg"
        subtitle="Salsa, merengue, y cumbia"
        title="Cuba"
        variant="text"
      >
        <v-img src="https://picsum.photos/512/128?image=660" height="128" cover></v-img>

        <v-card-text>
          During my last trip to South America, I spent 2 weeks traveling through Patagonia in Chile.
        </v-card-text>

        <template v-slot:actions>
          <v-btn color="primary" variant="text">View More</v-btn>

          <v-btn color="primary" variant="text">See in Map</v-btn>
        </template>
      </v-card>
    </v-container>
</template>

<script lang="ts">
export default {

}
</script>

<style>

</style>