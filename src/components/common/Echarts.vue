<template>
    <div style="height: 100%;" ref="echart">
        echarts
    </div>
</template>

<script>
import echarts from 'echarts'
import { log } from 'util';
export default {
    props: {
        chartData: {
            type: Object,
            default() {
                return {
                    xData: [],
                    serires: [],
                }
            }
        },
        isAxisChart: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        options() {
            return this.isAxisChart ? this.axisOption : this.normalOption
        }
    },
    data() {
        return {
            // 要进行渲染的数据, 由props的父组件传入
            echart: null,
            // 有坐标轴
            axisOption: {},
            // 没有坐标轴
            normalOption: {},
        }
    },
    methods: {
        initChart() {
            if(this.echart) {
                this.echart.setOption(this.options)
            }else{
                this.echart = echarts.init(this.$refs.echart)
                this.echart.setOption(this.options)
            }
        },

        initChartData() {
            if(this.isAxisChart) {
                console.log("axis");
            }else{
                console.log("normal");
            }
        }
    },

};
</script>

<style lang="scss" scoped>
</style>