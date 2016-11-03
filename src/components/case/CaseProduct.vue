<template>
  <router-link v-bind:to="'/'" class="wxc-product-box">
    <div class="wxc-product-main">
      <img src="../../assets/images/wxc-product-img.png" alt="">
      <div class="wxc-product-price">
        <p>¥<span>699</span>／m²</p>
      </div>
    </div>
    <div class="wxc-product-ft">
      <div class="wxc-product-ft-primary">
        <h3>欧式简约望京花园田园话题</h3>
        <p>一居室 45㎡</p>
      </div>
      <div class="wxc-product-ft-zan">
        <i class="wxc-icon"></i>
        <p>1232</p>
      </div>
    </div>
  </router-link>
</template>
<script>
  export default{
    name: 'CaseProduct'
  }
</script>
