<template>
  <div class="wxc-main-vh bright-body">
    <div class="wxc-scrollable-head">
      <FileHeader></FileHeader>
      <div class="wxc-head-select">
        <div class="wxc-head wxc-select-warp">
          <div class="wxc-select hot">
            <span class="wxc-selectS wxc-select-px">全部地区</span>
          </div>
          <div class="wxc-select">
            <span class="wxc-selectS wxc-selectSelect">擅长风格</span>
          </div>
        </div>
        <div class="wxc-head-dq wxc-alert-dg">
          <div class="wxc-cells wxc-head-dq-list">
            <div class="wxc-cell">
              <div class="wxc-cell-primary">
                全部地区
              </div>
            </div>
            <div class="wxc-cell">
              <div class="wxc-cell-primary">
                北京
              </div>
            </div>
            <div class="wxc-cell">
              <div class="wxc-cell-primary">
                广州
              </div>
            </div>
            <div class="wxc-cell">
              <div class="wxc-cell-primary">
                青岛
              </div>
            </div>
            <div class="wxc-cell">
              <div class="wxc-cell-primary">
                烟台
              </div>
            </div>
            <div class="wxc-cell">
              <div class="wxc-cell-primary">
                潍坊
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wxc-designer-contents scrollable" id="scrollable">
      <div class="wxc-cells wxc-cells-list scrollable-box">
        <DesignerBox></DesignerBox>
      </div>
    </div>
    <FileFooter></FileFooter>
  </div>
</template>
<script>
  import FileHeader from '../template/Header'
  import DesignerBox from './DesignerBox'
  import FileFooter from '../template/Footer'
  var $ = require('expose?jQuery!jquery')
  require('../../assets/js/sherdC')
  var downLoad = require('../../assets/js/downLoad')
  export default{
    name: 'designer',
    components: {
      FileHeader, DesignerBox, FileFooter
    },
    mounted () {
      $('.wxc-head-select').sKongHeadSelect({
        eleL: $('.wxc-select-px'),
        eleShowL: $('.wxc-head-dq'),
        eleR: $('.wxc-selectSelect'),
        eleShowR: $('.wxc-cell-content'),
        eleClick: function (text, value) {

        },
        eleRHot (ele) {
          $(ele).parent().removeClass('hot')
        }
      })
      downLoad.default.newClass({
        slide: document.querySelector('.scrollable'),
        slideBoxClass: '.scrollable-box',
        type: 'all',
        refreshFn: function (num) {
          var siRefresh = true
          return siRefresh
        },
        loading: function (num) {
          var siLoading = true
          return siLoading
        }
      })
    }
  }
</script>
