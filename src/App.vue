<template>
  <div class="calculator-box">
    <div class="calculator-text">{{calculatorDefault}}</div>
    <div class="calculator-key-warp">
      <div class="calculator-key-num">
        <div class="calculator-key-box">
          <div class="calculator-key calculator-key-default" data-value="AC" @click="key($event)">AC</div>
          <div class="calculator-key calculator-key-default" data-value="AC" @click="key($event)">+/-</div>
          <div class="calculator-key calculator-key-default" data-value="AC" @click="key($event)">%</div>
        </div>
        <div class="calculator-key-box">
          <div class="calculator-key calculator-key-default" data-value="AC" @click="key($event)">7</div>
          <div class="calculator-key calculator-key-default" data-value="AC" @click="key($event)">8</div>
          <div class="calculator-key calculator-key-default" data-value="AC" @click="key($event)">9</div>
        </div>
        <div class="calculator-key-box">
          <div class="calculator-key calculator-key-default" data-value="AC" @click="key($event)">4</div>
          <div class="calculator-key calculator-key-default" data-value="AC" @click="key($event)">5</div>
          <div class="calculator-key calculator-key-default" data-value="AC" @click="key($event)">6</div>
        </div>
        <div class="calculator-key-box">
          <div class="calculator-key calculator-key-default" data-value="AC" @click="key($event)">1</div>
          <div class="calculator-key calculator-key-default" data-value="AC" @click="key($event)">2</div>
          <div class="calculator-key calculator-key-default" data-value="AC" @click="key($event)">3</div>
        </div>
        <div class="calculator-key-box">
          <div class="calculator-key calculator-key-xs calculator-key-default" data-value="AC" @click="key($event)">0</div>
          <div class="calculator-key calculator-key-default" data-value="AC" @click="key($event)">.</div>
        </div>
      </div>
      <div class="calculator-key-algorithm">
        <div class="calculator-key calculator-key-primary" data-value="AC" @click="key($event)">/</div>
        <div class="calculator-key calculator-key-primary" data-value="AC" @click="key($event)">*</div>
        <div class="calculator-key calculator-key-primary" data-value="AC" @click="key($event)">-</div>
        <div class="calculator-key calculator-key-primary" data-value="AC" @click="key($event)">+</div>
        <div class="calculator-key calculator-key-primary" data-value="AC" @click="key($event)">=</div>
      </div>
    </div>
  </div>
</template>

<script>
  import FileFooter from './components/template/Footer'

  export default {
    name: 'app',
    data () {
      return {
        calculatorDefault: '0',
        calculatorInit: ''
      }
    },
    components: {
      FileFooter
    },
    mounted () {

    },
    methods: {
      key (event) {
        var _this = this
        if (this.calculatorDefault === '0') {
          this.calculatorDefault = ''
        }
        if (event.toElement.textContent === 'AC') {
          this.calculatorDefault = 0
        } else if (event.toElement.textContent === '+/-') {
          this.calculatorDefault = this.calculatorDefault * -1
        } else if (event.toElement.textContent === '%') {
          this.calculatorDefault = this.calculatorDefault / 100
        } else if (event.toElement.textContent === '+') {
          calculate(1)
        } else if (event.toElement.textContent === '-') {
          calculate(2)
        } else if (event.toElement.textContent === '*') {
          calculate(3)
        } else if (event.toElement.textContent === '/') {
          calculate(4)
        } else {
          this.calculatorDefault = this.calculatorDefault + event.toElement.textContent
        }
        function calculate (num) {
          if (num === 1) {
            _this.calculatorDefault = Number(_this.calculatorDefault) + Number(event.toElement.textContent)
          } else if (num === 2) {
            _this.calculatorDefault = Number(_this.calculatorDefault) - Number(event.toElement.textContent)
          } else if (num === 3) {
            _this.calculatorDefault = Number(_this.calculatorDefault) * Number(event.toElement.textContent)
          } else if (num === 4) {
            _this.calculatorDefault = Number(_this.calculatorDefault) / Number(event.toElement.textContent)
          }
        }
      }
    }
  }
</script>

