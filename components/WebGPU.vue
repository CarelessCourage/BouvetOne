<script setup lang="ts">

</script>

<template>
<div class="aw5">
    <a href="https://codepen.io/munrocket/pen/qBreZya?editors=1010">
        <img border="rounded" src="/webGPU.png" alt="">
    </a>
    <div class="aws5">
        <img border="rounded" src="/performance.png" alt="">
        <img border="rounded" src="/performanceCurve.png" alt="">
    </div>
</div>
</template>

<style>
.aw5 {
    padding: 25px;
    display: grid;
    grid-template-rows: 1fr auto;
    height: 60vh;
    gap: 25px;
}

.aw5 a, .aw5 img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
    overflow: hidden;
}

.aws5 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    height: 22vh;
    width: 55vw;
    gap: 25px;
}

.lolm {
    display: flex;
    height: 200px;
}

.lolm .text {
    position: absolute;
    background: white
}
</style>