/**
 * Created by Administrator on 2016/6/14.
 */
var $ = require('expose?jQuery!jquery')
//  头部下拉选择
$.fn.sKongHeadSelect = function (option) {
  var _this = $(this)
  var html = $('<div></div>', {
    class: 'wxc-mask'
  })
  $(option.eleL).on('click', function () {
    hot(this)
    removeUp(option.eleR)
    $(option.eleShowL).append(html)
    html.show()
    if ($(option.eleShowL).is(':hidden')) {
      $(option.eleShowL).fadeIn(200).append(html).siblings('.wxc-alert-dg').fadeOut(200).find('.wxc-mask').remove()
    } else {
      $(option.eleShowL).fadeOut(200)
      removeUp(this)
    }
    $('.wxc-mask').on('click', function () {
      $('.wxc-alert-dg').fadeOut(200)
      removeUp(option.eleL)
      removeUp(option.eleR)
    })
    option.eleRHot(option.eleR)
  })

  $(option.eleR).on('click', function () {
    hot(this)
    removeUp(option.eleL)
    if ($(option.eleShowR).is(':hidden')) {
      $(option.eleShowR).fadeIn(200).append(html).siblings('.wxc-alert-dg').fadeOut(200)
      $(option.eleShowR).find('.wxc-mask').on('click', function () {
        $(option.eleShowR).fadeOut(200)
        $('.wxc-mask').remove()
      })
    } else if (!option.eleShowR) {
      $(option.eleShowL).fadeOut(200)
    } else {
      $(option.eleShowR).fadeOut(200)
      removeUp(this)
      option.eleRHot(option.eleR)
    }
  })
  $(option.eleShowR).find('.wxc-cell-content-btn').children('.wxc-btn').on('click', function () {
    $(option.eleShowR).fadeOut(200)
    $('.wxc-mask').remove()
    removeUp(option.eleL)
    removeUp(option.eleR)
    option.eleRHot(option.eleR)
  })

  $(this).find('.wxc-head-dq-bg').on('click', function () {
    $(option.eleShowL).fadeOut(200)
    $('.wxc-mask').remove()
    removeUp(option.eleL)
    removeUp(option.eleR)
  })

  $(this).find(option.eleShowL).find('.wxc-cell').on('click', function () {
    $(this).addClass('hot').siblings().removeClass('hot')
    var text = $(this).text().trim()
    var value = $(this).find('.wxc-cell-primary').data('value')
    _this.find(option.eleL).text(text)
    $(option.eleShowL).fadeOut(200)
    option.eleClick(text, value)
  })

  $(this).find('.wxc-content-ever .wxc-content-hd').on('click', function () {
    var ele = $(this).parents('.wxc-content-ever')
    if (ele.is('.down')) {
      ele.removeClass('down')
    } else {
      ele.addClass('down')
    }
  })
  function hot (ele) {
    $(ele).parent().addClass('hot up')
  }
  function removeUp (ele) {
    $(ele).parent().removeClass('up')
  }
}

// input 清空内容
$(function () {
  var html = $('<i></i>', {
    class: 'wxc-icon wxc-icon-close',
    click: function () {
      var str = ''
      $(this).siblings('.wxc-input').val(str)
      $(this).fadeOut(100)
    }
  }).append()
  $('.wxc-cells-input').append(html)
  $('input.wxc-input').on('keyup', function () {
    var ele = $(this).siblings('.wxc-icon-close')
    var seachIcon = $(this).siblings('.wxc-icon-seach')
    var seachBtn = $(this).parents('.wxc-cell-primary').siblings('.wxc-seach-btn')
    seachIcon.fadeOut(200)
    seachBtn.fadeIn(200)
    if (ele.length > 0) {
      ele.show()
    } else {
      var html = $('<i></i>', {
        class: 'wxc-icon wxc-icon-close',
        click: function () {
          var str = ''
          $(this).siblings('.wxc-input').val(str)
          $(this).fadeOut(100)
          seachIcon.fadeIn(200)
          seachBtn.fadeOut(200)
        }
      }).append()
      $(html).show()
      $(this).parent().append(html)
    }
    if ($(this).val() === '') {
      ele.fadeOut(100)
      seachIcon.fadeIn(200)
      seachBtn.fadeOut(200)
    }
  })
  $('textarea.wxc-input').on('keyup', function () {
    var seachBtn = $(this).parent().siblings('.wxc-seach-btn')
    seachBtn.fadeIn(200)
  })
})

$(function () {
  var html = $('<div></div>', {
    class: 'wxc-mask',
    click: function () {
      $(this).fadeOut(100)
      $('.wxc-dialog').fadeOut(200)
    }
  })
  $('.wxc-dialog-show').on('click', function () {
    if ($('.wxc-mask').length > 0) {
      $('.wxc-mask').fadeIn(200)
    } else {
      $('body').append(html)
    }
    $('.wxc-dialog').fadeIn(200)
  })
  $('.wxc-dialog .wxc-btn').on('click', function () {
// 如果要加验证,写到这里即可
    $('.wxc-mask').fadeOut(100)
    $('.wxc-dialog').fadeOut(200)
  })
  $('.wxc-dialog .primary').on('click', function () {
// 如果要加验证,写到这里即可
    $('.wxc-mask').fadeOut(100)
    $('.wxc-dialog').fadeOut(200)
  })
})

$(function () {
  $('.wxc-select-bg-hot').find('.wxc-check').on('change', function () {
    var _this = $(this)
    var patent = _this.parents('.wxc-cell')
    if (_this.is(':checked')) {
      patent.addClass('hot')
    } else {
      patent.removeClass('hot')
    }
  })
})

$(document).ready(function () {
  $('.valid-message-bg').click(function () {
    $('.valid-message-bg').hide()
    $('.valid-message').hide()
  })
  $('.valid-message').click(function () {
    $('.valid-message-bg').hide()
    $('.valid-message').hide()
  })
})

$(function () {
  $('.wxc-reply-btn').on('click', function () {
    var type = $(this).attr('name')
    var userJudgeId = $(this).attr('value')
    $('#userJudgeId').val(userJudgeId)
    if (type !== 1) {
      $('#reply_show').css('display', 'block')
      $('#reply_name').html(type)
      $('#pid_userJudgeId').val($(this).attr('id'))
    } else {
      $('#reply_show').css('display', 'none')
      $('#reply_name').html('')
    }
    $('.wxc-privateMessage-input').fadeIn(200)
  })
  $('.wxc-input-warp input').on('keyup', function () {
    var val = $(this).val()
    if (val === '') {
      $(this).parent().siblings('.wxc-btn').fadeOut(200)
    } else {
      $(this).parent().siblings('.wxc-btn').fadeIn(200)
    }
  })
})

$.fn.sKongListHover = function (option) {
  var onEle = $(this).find(option.onEle)
  $(onEle).on('click', function () {
    if ($(this).is('.cur')) {
      $(this).removeClass(option.cur)
      $(this).next(option.hoverEle).slideUp(200)
    } else {
      $(this).addClass(option.cur)
      $(this).next(option.hoverEle).slideDown(200)
    }
  })
}

// tab选型卡
$.fn.sKongTab = function (option) {
// 需要调用隐藏显示的元素
//  $('.wxc-main-vh').sKongTab({
//      onEle: '.wxc-select',// 点击的元素
//      hoverEle: '.wxc-eval-contents',// 隐藏显示的元素
//      cur: 'hot'// 点击后的样式
//  })
  var onEle = $(this).find(option.onEle)
  var hoverEle = $(this).find(option.hoverEle)
  var index
  hoverEle.eq(0).show().siblings(option.hoverEle).hide()
  $(onEle).on('click', function () {
    $(this).addClass(option.cur).siblings().removeClass(option.cur)
    $(this).next(option.hoverEle).slideDown(200)
    index = $(this).index()
    $(hoverEle).eq(index).show().siblings(option.hoverEle).hide()
  })
}

// select 选中高亮
$(function () {
  $('select.wxc-input').on('change', function () {
    $(this).css('color', '#3B4046')
  })
  $('div.wxc-textarea').on('change', function () {
    $(this).css('color', '#3B4046')
  })
})

// 项目资料弹出层
$.fn.sharingSlider = function (option) {
  var _this = $(this)
  $(this).find('.wxc-mask').on('click', function () {
    $(this).parents(_this).eq(0).fadeOut(200)
  })
  $(option.ele).on('click', function () {
    $(_this).fadeIn(200)
    option.eleFn()
  })
  $(this).find('.wxc-sharing-main')
}
