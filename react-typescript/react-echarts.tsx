import React, { useState, useRef, useEffect } from 'react'
import echarts, { EChartOption, ECharts } from 'echarts'

interface EchartProp {
    option: EChartOption
}

const ReactEcharts: React.FC<EchartProp> = ({ option }) => {

    const chartRef = useRef<HTMLDivElement>(null) //用来勾住渲染后的 DOM
    const [echartsInstance, setEchartsInstance] = useState<ECharts>() //用来勾住生成后的 图表实例对象

    //仅第一次挂载时执行，将 DOM 传递给 echarts，通过 echarts.init() 得到真正的图表 JS 对象
    useEffect(() => {
        if (chartRef.current) {
            setEchartsInstance(echarts.init(chartRef.current))
        }
    }, [])

    //监听依赖变化，并根据需要更新图表数据
    useEffect(() => {
        echartsInstance?.setOption(option)
    }, [echartsInstance, option])

    return (
        <div ref={chartRef} style={{ width: '500px',height: '400px'}} />
    )
}

export default ReactEcharts