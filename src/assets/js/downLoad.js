var $ = require('expose?jQuery!jquery')

var downLoad = {
  isScrolling: false,
  newClass: function (obj) {
    obj = obj || {}
    if (this.isScrolling === false) {
      this.Init.prototype = downLoad
      this.isScrolling = true
    }
    return new this.Init(obj)
  },
  Init: function (options) {
    this.options = options
    this.options.slide = $(this.options.slide)
    this.options.slideBox = $(this.options.slide).find(this.options.slideBoxClass)
    var refreshFn = '<div class="loding refresh"><div class="loader"><div class="loader-inner line-spin-fade-loader"><div></div><div></div><div></div><div></div> <div></div> <div></div> <div></div> <div></div> </div> </div> <div class="loader-info"> 松开刷新 </div> </div>'
    var loading = '<div class="loding loding-end"><div class="loader"><div class="loader-inner line-spin-fade-loader"><div></div><div></div><div></div><div></div> <div></div> <div></div> <div></div> <div></div> </div> </div> <div class="loader-info"> 加载中 </div> </div>'
    $(this.options.slideBox).append(loading, refreshFn)
    this.refresh = $(this.options.slide).find('.refresh')
    this.refreshInfo = $(this.refresh).find('.loader-info')
    this.lodingEnd = $(this.options.slide).find('.loding-end')
    this.lodingEndInfo = $(this.lodingEnd).find('.loader-info')
    this.bodyHeight = $(this.options.slideBox).height()
    this.scrollableHeadHeight = $('.wxc-scrollable-head').height()
    this.body = $('body')
    this.newStyle()
    this.bindTouch()
    this.lodingEnd.fadeOut()
  },

  newStyle: function () {
    this.options.slide.css({
      'position': 'relative',
      'z-index': '1',
      'display': 'block',
      'height': window.innerHeight - this.scrollableHeadHeight + 'px' - $('.wxc-nav').height(),
      'marginTop': this.scrollableHeadHeight
    })
    this.body.css({
      'overflow': 'hidden',
      'height': window.innerHeight + 'px'
    })
    this.options.slideBox.css({
      'z-index': ' 2',
      '-webkit-backface-visibility': ' hidden',
      '-moz-backface-visibility': ' hidden',
      '-ms-backface-visibility': ' hidden',
      'backface-visibility': ' hidden'
    })
    this.options.slideBox.css('opacity', 1)
  },
  bindTouch: function () {
    var _this = this
    var startPos = null
    var startTouch = null
    var movePos = null
    var moveTouch = null
    var endPos = null
    var endTouch = null
    var isTouch = false

    this.options.slideBox.on('touchstart', function (event) {
      startPos = event.originalEvent.changedTouches[0]
      startTouch = {
        x: startPos.pageX,
        y: startPos.pageY
      }
      _this.refreshInfo.text('刷新中')
      _this.lodingEndInfo.text('加载中')
      event.stopPropagation()
    })

    this.options.slideBox.on('touchmove', function (event) {
      movePos = event.originalEvent.changedTouches[0]
      moveTouch = {
        x: movePos.pageX - startTouch.x,
        y: movePos.pageY - startTouch.y
      }
      isTouch = moveTouch
    })

    this.options.slideBox.on('touchend', function (event) {
      if (!isTouch) {
        return
      }
      endPos = event.originalEvent.changedTouches[0]
      endTouch = {
        x: endPos.pageX - startTouch.x,
        y: endPos.pageY - startTouch.y
      }
      if (endTouch < 10 || endTouch > -10) {
        return
      }
      if ($(_this.options.slideBox).height() < $(_this.options.slide).height()) {
        if (moveTouch.y > 0) {
          _this.lodingEnd.fadeOut()
          _this.refresh.fadeIn()
        } else {
          _this.lodingEnd.fadeIn()
          _this.refresh.fadeOut()
        }
      } else {
        _this.showLoder()
      }
      if (_this.options.type === 'loading') {
        _this.loading($(_this.options.slide).scrollTop())
      }
      if (_this.options.type === 'refreshFn') {
        _this.refreshFn($(_this.options.slide).scrollTop())
      }
      if (_this.options.type === 'all') {
        if (moveTouch.y > 0) {
          _this.refreshFn($(_this.options.slide).scrollTop())
        } else {
          _this.loading($(_this.options.slide).scrollTop())
        }
      }
    })
  },
  refreshFn: function (num) {
    var _this = this
    if (num <= 0) {
      this.end = $(this.refresh).height() + 30
      this.animationStar(this.end, 200)
      var isRefresh = this.options.refreshFn()
      if (isRefresh) {
        this.refreshInfo.text('刷新成功')
      } else {
        this.refreshInfo.text('数据请求失败')
      }
      window.setTimeout(function () {
        $(_this.options.slide).scrollTop(num)
        _this.animationStar(0, 200)
        _this.hiddenLoder()
      }, 800)
    } else {
      if (_this.options.type === 'all') {
        window.setTimeout(function () {
          _this.hiddenLoder()
        }, 800)
      } else {
        _this.hiddenLoder()
      }
    }
  },
  loading: function (num) {
    var _this = this
    var bodyHeight = this.bodyHeight - $(_this.options.slide).height()
    var scrollTop = $(_this.options.slideBox).height() - $(_this.options.slide).height()
    if (num > bodyHeight) {
      var isLoading = this.options.loading()
      if (isLoading) {
        this.lodingEndInfo.text('加载成功')
      } else {
        this.lodingEndInfo.text('数据请求失败')
      }
      window.setTimeout(function () {
        $(_this.options.slide).animate({'scrollTop': scrollTop}, 200)
        _this.hiddenLoder()
      }, 800)
    } else {
      if (_this.options.type === 'all') {
        window.setTimeout(function () {
          _this.hiddenLoder()
        }, 800)
      } else {
        _this.hiddenLoder()
      }
    }
  },
  animationStar: function (num, time) {
    this.options.slideBox.css({
      '-webkit-transform': 'translateY(' + num + 'px)',
      '-moz-transform': 'translateY(' + num + 'px)',
      '-ms-transform': 'translateY(' + num + 'px)',
      'transform': 'translateY(' + num + 'px)',
      '-webkit-transition': time + 'ms ease-out',
      '-moz-transition': time + 'ms ease-out',
      '-ms-transition': time + 'ms ease-out',
      'transition': time + 'ms ease-out'
    })
  },
  hiddenLoder: function () {
    var _this = this
    window.setTimeout(function () {
      _this.lodingEnd.fadeOut()
    }, 500)
    this.bodyHeight = $(this.options.slideBox).height()
  },
  showLoder: function () {
    if ($(this.options.slide).scrollTop() <= 0) {
      this.lodingEnd.fadeOut().css('opacity', 0)
      this.refresh.fadeIn().css('opacity', 1)
    }
    if ($(this.options.slide).scrollTop() >= $(this.options.slideBox).height() - $(this.options.slide).height()) {
      this.lodingEnd.fadeIn().css('opacity', 1)
      this.refresh.fadeOut().css('opacity', 0)
    }
  }
}

export default downLoad
