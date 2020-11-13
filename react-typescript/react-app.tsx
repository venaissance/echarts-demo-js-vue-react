import React from 'react'
import { EChartOption } from 'echarts'
import ReactEcharts from './react-echarts'

const option: EChartOption = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
}

const ReactAPP: React.FC = () => {
    return (
        <ReactEcharts option={option} />
    )
}

export default ReactAPP