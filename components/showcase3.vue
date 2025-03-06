<script setup lang="ts">

</script>

<template>
<div class="hero">
    <iframe id="refraction" src="https://glsl-topaz.vercel.app/refraction" width="100%" height="500px"></iframe>
</div>
</template>

<style scoped>
.otherStuff2 {
    background: #F9FAF7;;
    position: absolute;
    z-index: 2;
    pointer-events: none;
    color: black;
    bottom: calc(18.8vh - 30px);
    padding-bottom: 30px;
    background-origin: content-box;
    box-shadow: 0px -60px 30px #F9FAF7;
}

iframe#refraction {
    position: absolute;
    top: 0vh;
    height: 54vh;
    left: 0;
    z-index: 1;
}

.hero {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 44vh;
}

.title {
    font-size: 80px;
    line-height: 1;
    font-weight: bold;
    text-align: center;
}
</style>