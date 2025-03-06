<script setup lang="ts">
</script>

<template>
    <!-- <img src="/cpu.gif"  /> -->
    <img id="margarete" src="/margareteHammilton.jpg"  />
    <h1>Margarete Hammilton</h1>
   <div class="text">
    <p>Hamilton in 1969, standing next to listings of the software she and her MIT team produced for the Apollo project</p>
    <p>Led the development of the on-board flight software for NASA's Apollo Guidance Computer for the Apollo program</p>
    <p>Coined the term "software engineer"</p>
    <p>Her work was crucial for the onboard error handling of the Apollo rocket</p>
    <p>Shes a CPU!</p>
    <img id="clipper" src="/gif/europaClipper.gif"  />

</div>
   
</template>

<style scoped>
#margarete {
    position: absolute;
    z-index: -1;
    top: 0%;
    right: 0px;
    width: 500px;
}

#clipper {
    position: absolute;
    z-index: -1;
    bottom: 0%;
    left: 0px;
    width: 250px;
}

h1 {
    font-size: 50px;
    font-weight: bold;
}

p {
    max-width: 50ch;
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