<template>
  <div class="calculator-box">
    <div class="calculator-text" v-bind:style="wrapFont">{{calculatorDefault}}</div>
    <div class="calculator-key-warp">
      <div class="calculator-key-num">
        <div class="calculator-key-box">
          <div class="calculator-key calculator-key-default" @click="remove($event)">AC</div>
          <div class="calculator-key calculator-key-default" @click="relative($event)">+/-</div>
          <div class="calculator-key calculator-key-default" @click="percentage($event)">%</div>
        </div>
        <div class="calculator-key-box">
          <div class="calculator-key calculator-key-default" @click="key($event)">7</div>
          <div class="calculator-key calculator-key-default" @click="key($event)">8</div>
          <div class="calculator-key calculator-key-default" @click="key($event)">9</div>
        </div>
        <div class="calculator-key-box">
          <div class="calculator-key calculator-key-default" @click="key($event)">4</div>
          <div class="calculator-key calculator-key-default" @click="key($event)">5</div>
          <div class="calculator-key calculator-key-default" @click="key($event)">6</div>
        </div>
        <div class="calculator-key-box">
          <div class="calculator-key calculator-key-default" @click="key($event)">1</div>
          <div class="calculator-key calculator-key-default" @click="key($event)">2</div>
          <div class="calculator-key calculator-key-default" @click="key($event)">3</div>
        </div>
        <div class="calculator-key-box">
          <div class="calculator-key calculator-key-xs calculator-key-default" @click="key($event)">0</div>
          <div class="calculator-key calculator-key-default" @click="decimal($event)">.</div>
        </div>
      </div>
      <div class="calculator-key-algorithm">
        <div class="calculator-key calculator-key-primary" @click="division($event)">/</div>
        <div class="calculator-key calculator-key-primary" @click="multiplication($event)">*</div>
        <div class="calculator-key calculator-key-primary" @click="subtraction($event)">-</div>
        <div class="calculator-key calculator-key-primary" @click="addition($event)">+</div>
        <div class="calculator-key calculator-key-primary" @click="equal($event)">=</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import FileFooter from './components/template/Footer'

  export default {
    name: 'app',
    data () {
      return {
        calculatorDefault: '0',
        calculatorPro: '',
        calculatorInit: false,
        calculatorState: 0,
        wrapFont: null
      }
    },
    components: {
      FileFooter
    },
    mounted () {

    },
    methods: {
      key (event) {
        if (this.calculatorDefault === '0') {
          this.calculatorDefault = ''
        }

        if (this.calculatorState === -1) {
          this.calculatorDefault = ''
          this.calculatorState = 0
        }

        if (this.calculatorDefault.length >= 13) {
          return
        }
        if (this.calculatorInit === true) {
          if (Number(this.calculatorPro) === Number(this.calculatorDefault)) {
            this.calculatorDefault = ''
          }
          this.calculatorDefault = this.calculatorDefault + event.toElement.textContent
          if (this.calculatorState === 1) {
            this.calculatorPro = Number(this.calculatorPro) + Number(this.calculatorDefault)
          } else if (this.calculatorState === 2) {
            this.calculatorPro = Number(this.calculatorPro) - Number(this.calculatorDefault)
          } else if (this.calculatorState === 3) {
            this.calculatorPro = Number(this.calculatorPro) * Number(this.calculatorDefault)
          } else if (this.calculatorState === 4) {
            this.calculatorPro = Number(this.calculatorPro) / Number(this.calculatorDefault)
          }
        } else {
          this.calculatorDefault = this.calculatorDefault + event.toElement.textContent
          this.calculatorPro = this.calculatorDefault
          if (this.calculatorDefault.length >= 9) {
            this.wrapFont = 'font-size:40px;'
          } else {
            this.wrapFont = ''
          }
        }
      },
      addition (event) {
        // 加
        this.calculatorState = 1
        this.isCalculatorInit()
      },
      subtraction (event) {
        // 减
        this.calculatorState = 2
        this.isCalculatorInit()
      },
      multiplication (event) {
        // 乘
        this.calculatorState = 3
        this.isCalculatorInit()
      },
      division (event) {
        // 除
        this.calculatorState = 4
        this.isCalculatorInit()
      },
      equal (event) {
        // 等于
        this.calculatorDefault = this.calculatorPro
        if (this.calculatorDefault.toString().length >= 9) {
          this.wrapFont = 'font-size:40px;'
        } else {
          this.wrapFont = ''
        }
        if (this.calculatorDefault.length >= 13) {
          this.calculatorDefault = this.calculatorDefault.substring(0, 12)
        }
        this.isCalculator()
        this.calculatorState = -1
      },
      remove (event) {
        // 清0
        this.calculatorDefault = '0'
        this.wrapFont = ''
      },
      relative (event) {
        // 正负
        this.calculatorState = 5
        this.calculatorDefault = Number(this.calculatorDefault) * -1
      },
      percentage (event) {
        // 百分比
        this.calculatorState = 6
        if (this.calculatorDefault === '0') {
          return
        }
        this.calculatorDefault = Number(this.calculatorDefault) / 100
        this.calculatorState = 0
      },
      decimal () {
        // 小数点
        if (this.calculatorDefault.indexOf('.') > 0) {
          return
        }
        this.calculatorDefault = this.calculatorDefault + '.'
      },
      isCalculatorInit () {
        this.calculatorInit = true
      },
      isCalculator () {
        this.calculatorInit = false
      }
    }
  }
</script>

