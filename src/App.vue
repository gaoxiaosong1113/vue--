<template>
  <div class="home wxc-main-vh bright-body">

    <div class="wxc-head wxc-opcity">
      <div class="wxc-head-hd">
        <div class="wxc-icon wxc-logo"><img src="./assets/images/wxc-logo.png" alt=""></div>
      </div>
      <div class="wxc-head-bd wxc-cell-primary">
        <div class="wxc-position-eit">北京</div>
      </div>
      <div class="wxc-head-ft">
        <i class="wxc-icon"><img src="./assets/images/wxc-icon-circum-b.svg" alt=""></i>
      </div>
    </div>
    <!-- banner -->
    <banner></banner>
    <div class="wxc-home-nav wxc-contents">
      <a href="features.html#1" class="wxc-nav-box">
        <i class="wxc-icon"><img src="./assets/images/wxc-icon-home-navOne-hot.svg" alt=""></i>
        <p>绿色无醛</p>
      </a>
      <a href="features.html#2" class="wxc-nav-box">
        <i class="wxc-icon"><img src="./assets/images/wxc-icon-home-navTow-hot.svg" alt=""></i>
        <p>即装即住</p>
      </a>
      <a href="features.html#3" class="wxc-nav-box">
        <i class="wxc-icon"><img src="./assets/images/wxc-icon-home-navFore-hot.svg" alt=""></i>
        <p>高性价比</p>
      </a>
      <a href="features.html#4" class="wxc-nav-box">
        <i class="wxc-icon"><img src="./assets/images/wxc-icon-home-navThree-hot.svg" alt=""></i>
        <p>个性化设计</p>
      </a>
    </div>
    <product></product>
    <HomeReg></HomeReg>
    <div class="wxc-footer">
      <p class="wxc-text-center wxc-font-hint">© Copyrights 2016 Skong Technology Co., Ltd.</p>
      <p class="wxc-text-center wxc-font-hint">京B2-20150072号 </p>
    </div>
    <FileFooter></FileFooter>
  </div>
</template>

<script>
  import Banner from './components/home/Banner'
  import Product from './components/home/Product'
  import HomeReg from './components/home/HomeReg'
  import FileFooter from './components/template/Footer'

  export default {
    name: 'app',
    components: {
      Banner, FileFooter, HomeReg, Product
    }
  }
</script>


<style>

</style>
