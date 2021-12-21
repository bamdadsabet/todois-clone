<template>
    <div>
      <h1>{{$store.state}}</h1>
      <h1 @click="$store.commit('defaultMode')">default</h1>
    </div>
</template>

<script>
    export default {
      name: "store",
    }
</script>

<style scoped>

</style>
