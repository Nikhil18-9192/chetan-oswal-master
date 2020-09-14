<template>
  <div>
    <Home />
    <WhoWeAre />
    <WhatWeDo />
    <HowWeWork />
  </div>
</template>

<script>
 
import Home from '@/components/home/HomeCarousel'
import WhoWeAre from '@/components/home/WhoWeAre'
import WhatWeDo from '@/components/home/WhatWeDo'
import HowWeWork from '@/components/home/HowWeWork'
export default  {
    components:{Home, WhoWeAre, WhatWeDo, HowWeWork}
}
</script>

<style>
 
</style>
