<script setup lang="ts">

</script>

<template>
<div class="hero">
    <div class="otherStuff2">
        <h1 class="title">The Web as a Canvas</h1>
    </div>
    <video width="720" height="440" autoplay loop controls>
        <source src="/video/imageDist.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
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
    height: 23vh;
    width: 20vw;
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