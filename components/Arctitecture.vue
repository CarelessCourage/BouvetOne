<script setup lang="ts">

</script>

<template>
<div class="aw">
    <img border="rounded" src="/arcitecture.png" alt="">
    <div class="aws">
        <div class="lolm">
            <div class="text">
                <p>- latency</p>
                <p>- serial decitions</p>
                <p>- 2-24 cores</p>
            </div>
            <img border="rounded" src="/cpuBrick.avif" alt="">
        </div>
        <p>vs</p>
        <div class="lolm">
            <div class="text">
                <p>- throughput</p>
                <p>- parallel execution</p>
                <p>- Thousands of cores</p>
            </div>
            <img border="rounded" src="/gpuBrick.webp" alt="">
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
    grid-template-columns: 1fr auto 1fr;
    justify-content: center;
    align-items: center;
    height: 22vh;
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