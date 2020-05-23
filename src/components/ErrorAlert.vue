<template>
  <div class="alert">
    {{errorMessage}}
  </div>
</template>

<script>
export default {
  name: 'ErrorAlert',
  props: {
    errorMessage: {
      required: true
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert {
  padding: 20px;
  background-color:tomato;
  color: white;
  margin-bottom: 15px;
  font-weight: bold;
  width: fit-content;
  border-radius: 5px;
}
</style>