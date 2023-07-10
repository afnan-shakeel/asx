<template>
  <v-container>
    <v-card>
      <v-card-title>Filter</v-card-title>
    </v-card>
    <v-row align="center" justify="center" v-for="(blog, index) in blogs" :key="blog.id" dense>
      <v-col cols="12">
        <v-card border class="mb-2" density="compact" prepend-avatar="https://randomuser.me/api/portraits/women/10.jpg"
          subtitle="Salsa, merengue, y cumbia" :title="blog.title" variant="text">
          <v-img src="https://picsum.photos/512/128?image=660" height="128" cover></v-img>

          <v-card-text>
            {{ blog.context }}
          </v-card-text>

          <template v-slot:actions>
            <v-col>
              <v-btn color="primary" variant="text">View More</v-btn>

              <v-btn color="primary" variant="text">See in Map</v-btn>
            </v-col>
            <v-col class="justify-end" align="right">
              <v-btn @click="deletePost(index)" class="me-auto" variant="text" icon="mdi-delete"></v-btn>
            </v-col>
          </template>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="openAddPost" width="860">
      <template v-slot:activator="{ props }">
        <v-btn class="add-btn" @click="openAddPost = !openAddPost" v-bind="props" size="x-large" color="primary"
          density="compact" position="fixed" icon="mdi-plus"></v-btn>
      </template>
      <v-card>
        <AddPost @cancelEvent="handlecancelEvent" @addPostEvent="handleaddPostEvent" v-if="openAddPost" />
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AddPost from '../components/AddPost.vue'
const openAddPost = ref(false)
const blogs = ref([
  {
    id: 1,
    title: 'First Blog',
    context: 'During my last trip to South America, I spent 2 weeks traveling through Patagonia in Chile.'
  },
  {
    id: 2,
    title: 'Second Blog',
    context: 'During my last trip to South America, I spent 2 weeks traveling through Patagonia in Chile.'
  },
  {
    id: 3,
    title: 'Third Blog',
    context: 'During my last trip to South America, I spent 2 weeks traveling through Patagonia in Chile.'
  },
])

const handlecancelEvent = () => {
  openAddPost.value = false
}
const handleaddPostEvent = (data: any) => {
  openAddPost.value = false
  blogs.value.push(data)
}

const deletePost = (index: number) => {
    blogs.value.splice(index, 1);
}
</script>

<style>
.add-btn {
  bottom: 20px;
  right: 20px;
  z-index: 1;
}
</style>