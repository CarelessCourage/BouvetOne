<script setup lang="ts">

</script>

<template>
<div class="aw3">
    <div class="images">
        <img id="margarete" src="/margareteHammilton.jpg"  />
        <div class="grid2">
            <img border="rounded" src="/gif/eventLoop2.gif" alt="">
            <img id="margarete" src="/gpuComputers.jpg"  />
        </div>
    </div>
       <a href="http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D">
        Event Loop Simulation
       </a>
</div>
</template>

<style>

.images {
    display: grid;
    grid-template-columns: 300px 1fr;
}

.grid2 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 200px 200px;
}

.aw3 {
    padding: 25px;
    display: grid;
    grid-template-rows: 1fr auto;
    height: 60vh;
    gap: 25px;
}

.aw3 img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
    overflow: hidden;
}

.aws3 {
    display: flex;
    height: 22vh;
    align-items: center;
    justify-content: center;
    gap: 25px;
}

.aws3 a {
    display: inline-block;
    width: max-content;
}
</style>