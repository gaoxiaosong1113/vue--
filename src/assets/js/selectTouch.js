var $ = require('expose?jQuery!jquery')

!function () {
    "use strict";
    var selectTouch = function (obj) {
        obj = obj || {};
        if (this.isScrolling == false) {
            this.prototype = selectTouch;
            this.isScrolling = true;
        }
        if (!(this instanceof selectTouch)) return this.init(obj);
        this.init(obj);
        /*实例化一个对象*/
    };

    selectTouch.prototype = {
        isScrolling: false,
        /*初始化动画是否进行中*/
        init: function (options) {
            this.options = options;
            this.options.slideBox = $(".wxc-select-touch-warp");
            this.options.sMain = $(".wxc-select-touch-warp .wxc-select-touch-b");
            this.bindTouch();
            if (!this.options.item) {
                this.options.item = 0
            }
            this.options.sMain.addClass("cur1");
        },
        bindTouch: function () {
            var _this = this;
            var startPos = null;
            var eleClick = null;
            this.options.slideBox.on('touchstart', function (event) {
                _this.isScrolling = true;
                var startTouch = event.originalEvent.targetTouches[0];
                startPos = {
                    x: startTouch.pageX,
                    y: startTouch.pageY,
                    time: +new Date()
                };
                event.preventDefault()
            });
            var mask = $("<div></div>", {
                class: 'wxc-mask wxc-mask-dialog',
                click: function () {

                }
            });
            this.options.ele.on("click", function () {
                eleClick = this;
                _this.options.slide.after(mask);
                mask.show();
                console.log(_this.options.slide);
                _this.options.slide.show().siblings(".wxc-select-touch-warp").hide();
                _this.options.slide.parents(".wxc-dialog").fadeIn();
                $(".wxc-mask,.wxc-dialog .primary").on("click", function () {
                    $(".wxc-dialog").fadeOut(200);
                    $(".wxc-mask").remove();
                });
            });
            $(_this.options.slide).find(".primary").on("click", function () {
                $(_this.options.ele).addClass("hot");
                var text = $(_this.options.slide).find(_this.options.sMain).eq(_this.options.item).text().trim();
                var vaule = $(_this.options.slide).find(_this.options.sMain).eq(_this.options.item).data("value");
                if ($(eleClick).attr("type") == "text") {
                    $(eleClick).val(text);
                } else {
                    $(eleClick).text(text);
                }
                eleClick = null;
                if (_this.options.clearClass) {
                    _this.options.clearClass();
                }
                if (_this.options.fn) {
                    _this.options.fn(text, vaule);
                }
            });
            $(".primary").on("click", function () {

            });
            this.options.slideBox.on('touchmove', function (event) {
                if (!_this.isScrolling) {
                    return;
                }
                var moveTouch = event.originalEvent.targetTouches[0];
                var movePos = {
                    x: moveTouch.pageX - startPos.x,
                    y: moveTouch.pageY - startPos.y
                };

                _this.isScrolling = Math.abs(movePos.x) < Math.abs(movePos.y);
                if (_this.isScrolling) {
                    var moveOffset = movePos.y - _this.options.item * 49;
                    _this.options.slideBox.css("top", moveOffset);
                    event.preventDefault()
                }
            });

            this.options.slideBox.on('touchend', function (event) {
                if (!_this.isScrolling) {
                    return;
                }
                var duration = +new Date() - startPos.time;
                var endTouch = event.originalEvent.changedTouches[0];
                var endPos = {
                    x: endTouch.pageX - startPos.x,
                    y: endTouch.pageY - startPos.y
                };

                if (duration > 0) { /*间隔事件*/
                    if (Math.abs(endPos.y) > 30) { /*两次滑动的距离>10*/
                        if (endPos.y >= 0) {
                            if (_this.options.item == 0) {
                                _this.isScrolling = false;
                                _this.objAnimation();
                                /*回弹到第一张*/
                            } else {
                                _this.prevPage();
                                /*往左*/
                            }

                        } else if (endPos.y < 0) {
                            if (_this.options.item == _this.options.sMain.length - 1) {
                                _this.isScrolling = false;
                                _this.objAnimation();
                                /*回调到最后一张*/
                            } else {
                                _this.nextPage();
                                /*往右*/
                            }

                        } else {
                            _this.isScrolling = false;
                            _this.objAnimation();
                            /*回调到最后一张*/
                        }
                    } else {
                        _this.objAnimation();
                        /*回调到最后一张*/
                    }
                } else {
                    _this.objAnimation();
                    /*回调到最后一张*/
                }
            })
        },
        nextPage: function () {
            if (this.isScrolling == false) {
                return;
            }
            this.options.item = Math.abs(Math.floor(parseFloat(this.options.slideBox.css("top")) / 49));
            if (this.options.item > this.options.sMain.length - 1) {
                this.options.item = this.options.sMain.length - 1
            }
            this.objAnimation();
            /*处理动画*/
            this.curItem();
            /*显示当前索引值*/
        },
        prevPage: function () {
            if (this.options.item == 0) {
                return;
            }
            this.options.item--;
            this.options.item = Math.abs(Math.floor(parseFloat(this.options.slideBox.css("top")) / 49));
            this.objAnimation();
            this.curItem();
        },
        curItem: function () {
            var ele = this.options.sMain.eq(this.options.item);
            this.options.sMain.removeClass("cur2 cur3").addClass("cur1");
            $(ele).addClass("cur3").next().addClass("cur2").next().addClass("cur1");
            $(ele).addClass("cur3").prev().addClass("cur2").prev().addClass("cur1");
        },
        objAnimation: function () {
            var setEq = -(this.options.item * 49);
            this.options.slideBox.animate({"top": setEq}, 200);
        }
    };
    window.selectTouch = selectTouch;
}();

