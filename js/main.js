import echarts from 'echarts'

const main = document.getElementById('root')
const loadMore = document.getElementById('loadMore')

const width = document.documentElement.clientWidth
main.style.width = `${width}px`
main.style.height = `${width * 0.6}px`

// 基于准备好的dom，初始化echarts实例
const myChart = echarts.init(main, 'default')

// let date = ['7-1', '7-2', '7-3', '7-4', '7-5', '7-6', '7-7']
let date = ['7月']
// let value = [820, 932, 901, 934, 1290, 1330, 1320]
let value = [updateValue()]

// 指定图表的配置项和数据
const option = {
  baseOption: {
    grid: {
      width: 'auto',
      height: 'auto'
    },
    xAxis: {
      type: 'category',
      data: date
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: value,
      type: 'line'
    }]
  },
  // 响应式
  media: [
    {
      query: {
        maxWidth: 500
      },
      option: {
        series: [{
          itemStyle: {
            borderWidth: 30
          }
        }]
      }
    }
  ]
}

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option)

let n = 0
let m = 0

function updateValue() {
  n += 1
  return n
}

function createDate() {
  m += 1
  return `7-${m}`
}

// 防抖
let isLoading = false

loadMore.addEventListener('click', () => {
    if (isLoading) return
    isLoading = true
    myChart.showLoading()
    setTimeout(() => {
      const newDate = createDate()
      const newValue = updateValue()
      date = [...date, newDate]
      value = [...value, newValue]

      const option = {
        xAxis: {
          type: 'category',
          data: date
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: value,
          type: 'line'
        }]
      }

      myChart.setOption(option)
      myChart.hideLoading()
      isLoading = false

    }, 1000)
  }
)

// 监听数据上各个点的点击事件
myChart.on('click', (e) => {
  console.log(e.dataIndex)
})