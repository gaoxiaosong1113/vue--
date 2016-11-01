<template>
  <div class="slide banner">
    <div class="slide-box">
      <div class="sMain"><img src="../../assets/images/wxc-banner.jpg" alt=""></div>
      <div class="sMain"><img src="../../assets/images/wxc-banner.jpg" alt=""></div>
      <div class="sMain"><img src="../../assets/images/wxc-banner.jpg" alt=""></div>
      <div class="sMain"><img src="../../assets/images/wxc-banner.jpg" alt=""></div>
    </div>
    <ul class="slide-item">
      <li class="cur"></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script>
  import 'jquery'
  import Slider from '../../assets/js/slider.js'

  export default {
    name: 'banner',
    mounted () {
      console.log(Slider)
      Slider.newClass({
        slide: document.querySelector('.slide'),
        item: 0,
        switch: true,
        time: 3000
      })
    }
  }

</script>
