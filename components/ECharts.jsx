import { Box } from '@mui/material';
import ReactECharts from 'echarts-for-react';
import React from 'react';
import * as echarts from 'echarts';

export default function NewECharts({ filteredData }) {
  const data = [
    ['lipstick', filteredData?.lipstick?.length],
    ['powder', filteredData?.powder?.length],
    ['pencils', filteredData?.pencils?.length],
    ['lipGloss', filteredData?.lipGloss?.length],
    ['complete order', 10],
  ];

  const option = {
    hover: false,

    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '4.5%',
      right: '4.5%',
      bottom: '1%',
      containLabel: true,
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      splitLine: {
        show: false,
      },
      axisLabel: { show: false },
      axisLine: { show: false },
      axisTick: { show: false },
    },
    yAxis: {
      label: false,
      type: 'value',
      boundaryGap: [0, '30%'],
      splitLine: {
        show: false,
        value: false,
      },
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: { show: false },
    },
    label: {
      show: false,

    },
    visualMap: {
      show: false,
      dimension: 0,
      seriesIndex: 0,
      pieces: [
        {
          gt: 0,
          lt: 1,
          color: '#d1eb67',
        },
        {
          gt: 1,
          lt: 2,
          color: '#90c578',
        },
        {
          gt: 2,
          lt: 3,
          color: '#589e77',
        },
        {
          gt: 3,
          lt: 4,
          color: '#32766d',
        },
        {
          gt: 4,
          lt: 5,
          color: '#204f53',
        },
      ],
    },
    series: [
      {
        type: 'line',
        smooth: 1,
        symbol: 'none',
        lineStyle: {
          color: '#01eefc',
          width: 2,
        },
        name: 'Stock Items',
        // stack: 'complete',
        stack: 'Total',

        markLine: {
          symbol: ['none', 'none'],
          label: { show: false },
          lineStyle: {
            color: '#fff',
            width: 4,
            type: 'solid',
          },
          data: [{ xAxis: 1 }, { xAxis: 2 }, { xAxis: 3 }, { xAxis: 4 }, { xAxis: 5 }],
        },
        areaStyle: {},
        markArea: {
          itemStyle: {
            color: 'rgba(255, 173, 177, 0.4)'
          },
        },
        emphasis: {
          focus: 'series'
        },
        data: data,
      },
    ],
  };

  return (
    <Box>
      <ReactECharts
        option={option}
        hoverMode="excludePoints"
      // notMerge={true}
      // lazyUpdate={true}
      // stickyHovering={false}
      // theme={'theme_name'}
      />
    </Box>
  );
}
