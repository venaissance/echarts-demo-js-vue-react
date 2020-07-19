<template>
  <div ref="container"></div>
</template>


<script>
  import echarts from 'echarts'

  export default {
    props: ['option', 'loading'],
    mounted() {
      const width = document.documentElement.clientWidth
      const c = this.$refs.container
      console.log(c)
      c.style.width = `${width - 20}px`
      c.style.height = `${(width - 20) * 1.2}px`
      this.chart = echarts.init(c, 'dark')
      this.chart.setOption(this.option)
    },
    watch: {
      option() {
        this.chart.setOption(this.option)
      },
      loading() {
        if (this.loading) {
          this.chart.showLoading()
        } else {
          this.chart.hideLoading()
        }
      }
    }
  }
</script>

