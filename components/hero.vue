<script setup lang="ts">

</script>

<template>
<div class="hero">
    <div class="otherStuff">
        <h1 class="title">The Web as a Canvas</h1>
    </div>
    <iframe src="https://enchanting-dolphin-0adcff.netlify.app/" width="100%" height="500px"></iframe>
    <!-- <video width="320" height="240" autoplay loop controls>
        <source src="/video/imageDist2.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video> -->
</div>
</template>

<style>

#slide-content {
    background-color: #F9FAF7;
}

.otherStuff {
    position: absolute;
    z-index: 2;
    pointer-events: none;
    color: black;
    bottom: 18.8vh;
}

iframe {
    position: absolute;
    bottom: 0;
    height: 19vh;
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