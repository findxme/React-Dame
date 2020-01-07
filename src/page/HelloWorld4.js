import { Chart, Tooltip, Axis, Bar } from 'viser-react';
import * as React from 'react';

import ReactEcharts from 'echarts-for-react';



var data = [
    [5000, 10000, 6785.71],
    [4000, 10000, 6825],
    [3000, 6500, 4463.33],
    [2500, 5600, 3793.83],
    [2000, 4000, 3060],
    [2000, 4000, 3222.33],
    [2500, 4000, 3133.33],
    [1800, 4000, 3100],
    [2000, 3500, 2750],
    [2000, 3000, 2500],
    [1800, 3000, 2433.33],
    [2000, 2700, 2375],
    [1500, 2800, 2150],
    [1500, 2300, 2100],
    [1600, 3500, 2057.14],
    [1500, 2600, 2037.5],
    [1500, 2417.54, 1905.85],
    [1500, 2000, 1775],
    [1500, 1800, 1650]
];
var cities = ['北京', '上海', '深圳', '广州', '苏州', '杭州', '南京', '福州', '青岛', '济南', '长春', '大连', '温州', '郑州', '武汉', '成都', '东莞', '沈阳', '烟台'];
var barHeight = 50;

export default class HelloWorld4 extends React.Component {

    getOption2 = () => {
        var option = {
            // title: {
            //     text: '在中国租个房子有多贵？',
            //     subtext: '市中心一室月租费（数据来源：https://www.numbeo.com）'
            // },
            // legend: {
            //     show: true,
            //     data: ['价格范围', '均值']
            // },
            grid: {
                top: 100
            },
            angleAxis: {
                type: 'category',
                data: cities
            },
            tooltip: {
                show: true,
                formatter: function (params) {
                    var id = params.dataIndex;
                    return cities[id] + '<br>最低：' + data[id][0] + '<br>最高：' + data[id][1] + '<br>平均：' + data[id][2];
                }
            },
            radiusAxis: {
            },
            polar: {
            },
            series: [{
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                data: data.map(function (d) {
                    return d[0];
                }),
                coordinateSystem: 'polar',
                stack: '最大最小值',
                silent: true
            }, {
                type: 'bar',
                data: data.map(function (d) {
                    return d[1] - d[0];
                }),
                coordinateSystem: 'polar',
                name: '价格范围',
                stack: '最大最小值'
            }, {
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                data: data.map(function (d) {
                    return d[2] - barHeight;
                }),
                coordinateSystem: 'polar',
                stack: '均值',
                silent: true,
                z: 10
            }, {
                type: 'bar',
                data: data.map(function (d) {
                    return barHeight * 2
                }),
                coordinateSystem: 'polar',
                name: '均值',
                stack: '均值',
                barGap: '-100%',
                z: 10
            }],
            legend: {
                show: true,
                data: ['A', 'B', 'C']
            }
        };
        return option;
    };

    getOption = () => {



        var option = {
            backgroundColor: '#2c343c',

            title: {
                text: 'Customized Pie',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ccc'
                }
            },

            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 274, name: '联盟广告' },
                        { value: 235, name: '视频广告' },
                        { value: 400, name: '搜索引擎' }
                    ].sort(function (a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        };
        return option;

    };
    // 通过触发getOption获取返回值，到ReactEcharts
    render() {
        return (
            <div>
                <div style={{ marginTop: 20 }}>
                    <ReactEcharts
                        option={this.getOption()}
                        style={{ height: '500px', width: '60%' }}
                    />
                </div>
            </div>
        );
    }
}

