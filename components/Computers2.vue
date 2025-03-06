<script setup lang="ts">
</script>

<template>
    <img id="computers" src="/computerComputing.jpg"  />
</template>

<style scoped>
#computers {
    position: absolute;
    z-index: -1;
    top: 0%;
}

h1 {
    font-size: 50px;
    font-weight: bold;
    background-color: white;
}

p {
    max-width: 50ch;
    background-color: white;
}

p.bold {
    font-weight: bold;
}

.text {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>