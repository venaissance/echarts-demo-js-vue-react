import React, {useState} from 'react'
import {ReactEcharts} from './react-echarts'

export function ReactAPP() {
  const [option, setOption] = useState({
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
  })
  const [loading, setLoading] = useState(false)

  const onClick = () => {
    if (loading) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOption({
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
      })
    }, 1000)
  }

  return (
    <div>
      <h1>React 使用 Echarts</h1>
      <ReactEcharts option={option} loading={loading}/>
      <button onClick={onClick}>加载更多</button>
    </div>
  )
}