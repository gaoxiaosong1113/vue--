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
    <div class="wxc-product">
      <div class="wxc-product-box">
        <div class="wxc-product-head">
          <div class="wxc-product-info">
            <h3 class="wxc-product-title">超值无醛套餐</h3>
            <p class="wxc-product-describe">全屋无醛装修，即装即住，全家安心</p>
          </div>
        </div>
        <div class="wxc-product-main">
          <img src="./assets/images/wxc-product-img.png" alt="">
          <div class="wxc-product-price">
            <p>¥<span>699</span>／m²</p>
          </div>
        </div>
      </div>
      <div class="wxc-product-box">
        <div class="wxc-product-head">
          <div class="wxc-product-info">
            <h3 class="wxc-product-title">超值无醛套餐</h3>
            <p class="wxc-product-describe">全屋无醛装修，即装即住，全家安心</p>
          </div>
        </div>
        <div class="wxc-product-main">
          <img src="./assets/images/wxc-product-img.png" alt="">
          <div class="wxc-product-price">
            <p>¥<span>699</span>／m²</p>
          </div>
        </div>
      </div>
    </div>
    <div class="wxc-homeReg">
      <div class="wxc-product-info">
        <h3 class="wxc-homeReg-title">10秒预约，免费获取无醛家装方案</h3>
        <p class="wxc-product-describe">认真填写装修需求，匹配适合您的装修方案</p>
      </div>
      <div class="leftMax-cells">
        <div class="wxc-form-cell">
          <div class="wxc-cell-bd wxc-cell-primary wxc-cells-input">
            <input class="wxc-input" type="text" placeholder="请输入您的姓名">
          </div>
        </div>
        <div class="wxc-form-cell">
          <div class="wxc-cell-bd wxc-cell-primary wxc-cells-input">
            <input class="wxc-input" type="text" placeholder="输入您的手机号">
          </div>
        </div>
        <div class="wxc-form-cell wxc-cell-or">
          <div class="wxc-cell-primary wxc-cells-input">
            <select name="" class="wxc-input">
              <option>省／市</option>
              <option>北京</option>
              <option>北京</option>
              <option>北京</option>
            </select>
          </div>
          <div class="wxc-cell-mar"></div>
          <div class="wxc-cell-primary wxc-cells-input">
            <select name="" class="wxc-input">
              <option>省／市</option>
              <option>北京</option>
              <option>北京</option>
              <option>北京</option>
            </select>
          </div>
        </div>
      </div>
      <div class="wxc-btn-area">
        <a class="wxc-btn wxc-btn-success wxc-btn-block" href="javascript:" id="showTooltips">免费申请</a>
      </div>
      <p class="wxc-font-hint wxc-homeReg-hint wxc-text-center">已有 <span class="wxc-text-hint">93485</span>人得到了满意的设计方案</p>
    </div>
    <div class="wxc-footer">
      <p class="wxc-text-center wxc-font-hint">© Copyrights 2016 Skong Technology Co., Ltd.</p>
      <p class="wxc-text-center wxc-font-hint">京B2-20150072号 </p>
    </div>
    <FileFooter></FileFooter>
  </div>
</template>

<script>
  import Banner from './components/home/Banner'
  import FileFooter from './components/template/Footer'

  export default {
    name: 'app',
    components: {
      Banner, FileFooter
    }
  }
</script>


<style>

</style>
