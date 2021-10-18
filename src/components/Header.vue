<template>
    <div class="header">this is header<span class="header_red">red!</span></div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
.header{
    color: #fff;
    background-color: #222;
    &_red{
        color: red;
    }
}
</style>