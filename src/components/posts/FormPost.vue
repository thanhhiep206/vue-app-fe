<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="itemTitle">Item Title:</label>
      <input type="text" id="itemTitle" v-model="formData.title" required />

      <label for="itemContent">Item Content:</label>
      <input type="text" id="itemContent" v-model="formData.content" required />
      <button type="submit">{{ submitLabel }}</button>
    </form>
  </div>
</template>

<script>
  export default {
    props: {
      initialData: {
        type: Object,
        default: () => ({ title: '', content: '' })
      },
      submitLabel: {
        type: String,
        default: 'Submit'
      }
    },
    data() {
      return {
        formData: { ...this.initialData }
      };
    },
    methods: {
      handleSubmit() {
        const formatFormdata = {
          post: { ...this.formData }
        }
        this.$emit('submit', formatFormdata);
      }
    }
  }
</script>
