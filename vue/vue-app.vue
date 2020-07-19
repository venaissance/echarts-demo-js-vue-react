<template>
  <div>
    <h1>Vue 里使用 Echarts</h1>
    <vue-echarts :option="option" :loading="loading"></vue-echarts>
    <button @click="loadMore">加载更多</button>
  </div>
</template>

<script>
  import VueEcharts from './vue-echarts.vue'

  export default {
    data() {
      return {
        loading: false,
        option: {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
      }
    },
    components: {VueEcharts},
    methods: {
      loadMore() {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.option = {
            title: {
              text: 'ECharts 入门示例'
            },
            xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子']
            },
            yAxis: {},
            series: [{
              name: '销量',
              type: 'line',
              data: [5, 20, 36, 10]
            }]
          }
        }, 1000)
      }
    }
  }
</script>