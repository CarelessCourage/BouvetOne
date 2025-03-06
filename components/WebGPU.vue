<script setup lang="ts">

</script>

<template>
<div class="aw">
    <img border="rounded" src="/webGPU.png" alt="">
    <div class="aws">
        <div class="lolm">
            <img border="rounded" src="/performance.png" alt="">
        </div>
        <div class="lolm">
            <img border="rounded" src="/performanceCurve.png" alt="">
        </div>
    </div>
</div>
</template>

<style>
.aw {
    padding: 25px;
    display: grid;
    grid-template-rows: 1fr auto;
    height: 60vh;
    gap: 25px;
}

.aw img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
    overflow: hidden;
}

.aws {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    height: 22vh;
    width: 64vw;
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