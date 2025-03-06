---
theme: ./
title: The Web as a Canvas
info: |
  ## Why the GPU matters for the web
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
mdc: true
---
<!-- ./components/hero.vue -->
<Hero />

<div class="abs-bl m-6 text-xl">
  <button @click="$slidev.nav.openInEditor" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

---
transition: slide-left
---

<!-- ./components/showcase.vue -->
<Showcase />

---
transition: slide-left
---

<!-- ./components/showcase3.vue -->
<Showcase3 />

---
transition: slide-left
---


<!-- ./components/Arctitecture.vue -->
<Arctitecture />


<!-- 24 is the current upper limit for CPU due to exponential heat mangagment and complexity: M2 Ultra, I9 Intel. 

Despite the core’s frequency, getting data from memory (or pixels from textures) still takes relatively long — Fabian says it takes a couple hundred clock cycles. These couple hundred cycles could be spent on computation instead. To make use of these otherwise idle cycles, each EU is heavily oversubscribed with work. Whenever an EU would end up idling (e.g. to wait for a value from memory), it instead switches to another work item and will only switch back once the new work item needs to wait for something. This is the key trick how GPUs optimize for throughput at the cost of latency: Individual work items will take longer as a switch to another work item might stop execution for longer than necessary, but the overall utilization is higher and results in a higher throughput. The GPU strives to always have work queued up to keep EUs busy at all times. -->

---
transition: slide-left
---

 
<!-- ./components/sorting.vue -->
<Sorting />


---
transition: slide-left
---


<!-- ./components/Arctitecture2.vue -->
<Arctitecture2 />

<!-- 24 is the current upper limit for CPU due to exponential heat mangagment and complexity: M2 Ultra, I9 Intel 

Despite the core’s frequency, getting data from memory (or pixels from textures) still takes relatively long — Fabian says it takes a couple hundred clock cycles. These couple hundred cycles could be spent on computation instead. To make use of these otherwise idle cycles, each EU is heavily oversubscribed with work. Whenever an EU would end up idling (e.g. to wait for a value from memory), it instead switches to another work item and will only switch back once the new work item needs to wait for something. This is the key trick how GPUs optimize for throughput at the cost of latency: Individual work items will take longer as a switch to another work item might stop execution for longer than necessary, but the overall utilization is higher and results in a higher throughput. The GPU strives to always have work queued up to keep EUs busy at all times. 
-->
---
transition: slide-left
---

<!-- ./components/Hamilton.vue -->
<Hamilton />

<!--
Directed the Software Engineering Division at the MIT Instrumentation Laboratory, where she led the development of the on-board flight software for NASA's Apollo Guidance Computer for the Apollo program. 

I began to use the term 'software engineering' to distinguish it from hardware and other kinds of engineering, yet treat each type of engineering as part of the overall systems engineering process.

The computer (or rather the software in it) was smart enough to recognize that it was being asked to perform more tasks than it should be performing. It then sent out an alarm, which meant to the astronaut, 'I'm overloaded with more tasks than I should be doing at this time and I'm going to keep only the more important tasks'; i.e., the ones needed for landing ... Actually, the computer was programmed to do more than recognize error conditions. A complete set of recovery programs was incorporated into the software. The software's action, in this case, was to eliminate lower priority tasks and re-establish the more important ones ... If the computer hadn't recognized this problem and taken recovery action, I doubt if Apollo 11 would have been the successful moon landing it was.

-— Letter from Margaret H. Hamilton, Director of Apollo Flight Computer Programming MIT Draper Laboratory, Cambridge, Massachusetts, titled "Computer Got Loaded"
-->

---
transition: slide-left
---

<!-- ./components/Computers.vue -->
<Computers />


---
transition: slide-left
---

<!-- ./components/Computers.vue -->
<Computers2 />

---
transition: slide-left
---

<!-- ./components/EventLoop.vue -->
<EventLoop />

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: slide-left
---

<!-- ./components/WebGPU.vue -->
<WebGPU />
