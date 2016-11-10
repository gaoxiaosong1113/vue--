<template>
  <div class="wxc-main-vh case">
    <div class="wxc-scrollable-head">
      <FileHeader></FileHeader>
      <div class="wxc-contents wxc-tribalList-contents">
        <div class="wxc-head-select">
          <div class="wxc-head wxc-select-warp wxc-tribalList-hd">
            <div class="wxc-select hot">
              <span class="wxc-selectS wxc-select-px">所有版块</span>
            </div>
            <button class="wxc-btn" type="button">发表帖子</button>
          </div>
          <div class="wxc-head-dq wxc-alert-dg">
            <div class="wxc-cells wxc-head-dq-list">
              <div class="wxc-cell">
                <div class="wxc-cell-primary">
                  所有版块
                </div>
              </div>
              <div class="wxc-cell">
                <div class="wxc-cell-primary">
                  无醛空间
                </div>
              </div>
              <div class="wxc-cell">
                <div class="wxc-cell-primary">
                  云设计交流
                </div>
              </div>
              <div class="wxc-cell">
                <div class="wxc-cell-primary">
                  问题反馈
                </div>
              </div>
              <div class="wxc-cell">
                <div class="wxc-cell-primary">
                  司空大学
                </div>
              </div>
              <div class="wxc-cell">
                <div class="wxc-cell-primary">
                  活动竞赛
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wxc-contents wxc-tribalList-contents scrollable" id="scrollable">
      <div class="wxc-product scrollable-box">
        <div class="wxc-cells">
          <TribalBox></TribalBox>
        </div>
      </div>
    </div>
    <FileFooter></FileFooter>
  </div>
</template>
<script>
  import FileHeader from '../template/Header'
  import TribalBox from './TribalBox'
  import FileFooter from '../template/Footer'
  var $ = require('expose?jQuery!jquery')
  require('../../assets/js/sherdC')
  var downLoad = require('../../assets/js/downLoad')
  export default{
    name: 'designer',
    components: {
      FileHeader, TribalBox, FileFooter
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
