<template>
  <div class="hello">
    <h2>Create Item</h2>
  </div>
  <div>
    <FormPost :submitLabel="'Create Post'" :initialData="newItem" @submit="addItem"/>
  </div>
</template>

<script>
  import axios from 'axios';
  import FormPost from './FormPost.vue'

  export default {
    name: 'PostCreate',
    components: {
      FormPost
    },
    data () {
      return {
        newItem: {
          title: '',
          content: ''
        }
      }
    },
    methods: {
      addItem(formData) {
        axios({
          method: 'post',
          url: 'http://localhost:3000/posts',
          data: formData
        })
        .then(response => {
          console.log("Item created successfully:", response.data);
        })
        .catch(e => {
          console.error("Error creating item:", e);
        });
      }
    }
  }
</script>
