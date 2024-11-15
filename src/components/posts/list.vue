<template>
  <div class="hello">
    <h2>All Items</h2>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{item.title}}
        {{item.content}}
        <button @click="editItem(item)">Edit</button>
        <button @click="deleteItem(item)">Delete</button>
      </li>
    </ul>
  </div>
</template>


<script>
  import axios from 'axios';

  export default {
    name: "PostList",
    data () {
      return {
        items: []
      }
    },
    methods: {
      editItem(item) {
        console.log(item)
      },
      deleteItem(item) {
        console.log(item)
      },
    },
    created() {
      axios.get(`http://localhost:3000/posts`)
      .then(response => {
        this.items = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
</script>
