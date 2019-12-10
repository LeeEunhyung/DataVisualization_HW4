import React, { Component } from 'react';
import * as d3 from 'd3';

import './css/Main.css';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            year: "5년 평균",
            type: "전체"
        };
    }

    componentDidUpdate() {
        this.drawChart();
    }

    firstSubMenu_1 = () => {
        var series = ["교통사고 발생건수", "교통사고 사상자수"];
        var data_set = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
        var data_발생건수 = [8494, 7856, 8047, 7932, 6423, 5666, 4824];
        var data_사상자수 = [8909, 8298, 8522, 8394, 6806, 6013, 5071];

        var color = ["#fa4659", "#11cbd7"];

        var svg = d3.select(".line1")
                    .append("svg")
                    .attr('width', 500)
                    .attr('height', 300);

        svg.append('line') //x축
        .attr('x1', 30)
        .attr('y1', 270)
        .attr('x2', 480)
        .attr('y2', 270)
        .style("stroke", 'black')
        .style("stroke-width",0.5);
        svg.append('line') //x축
        .attr('x1', 30)
        .attr('y1', 36)
        .attr('x2', 480)
        .attr('y2', 36)
        .style("stroke", 'black')
        .style("stroke-width",0.5);

        svg.append('line') //y축
        .attr('x1', 30)
        .attr('y1', 36)
        .attr('x2', 30)
        .attr('y2', 270)
        .style("stroke", 'black')
        .style("stroke-width",0.5);
        svg.append('line') //y축
        .attr('x1', 480)
        .attr('y1', 36)
        .attr('x2', 480)
        .attr('y2', 270)
        .style("stroke", 'black')
        .style("stroke-width",0.5);

        svg.append('text')
        .attr('x', 15)
        .attr('y', 270 - 46 * 0.5)
        .text("...")
        .style("font-size", "15px")
        .attr("font-family", "맑은고딕")
        .attr("fill", "black")

        for(var i = 0; i<6; i++) {
            svg.append('line')
                .attr('x1', 30)
                .attr('y1', 270 - 46 * i)
                .attr('x2', 480)
                .attr('y2', 270 - 46 * i)
                .style("stroke", 'black')
                .style("stroke-width",0.2);

            svg.append('line')
                .attr('x1', 30)
                .attr('y1', 270 - 46 * i)
                .attr('x2', 40)
                .attr('y2', 270 - 46 * i)
                .style("stroke", 'black')
                .style("stroke-width",0.5);
            if(i == 0) {
            svg.append('text')
                .attr('x', 0)
                .attr('y', 270 - 46 * i)
                .text(i*1000)
                .style("font-size", "13px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
            } else {
                svg.append('text')
                .attr('x', 0)
                .attr('y', 270 - 46 * i)
                .text(i*1000 + 4000)
                .style("font-size", "13px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
            }
        }    

        for(var i = 1; i<8; i++) {
            svg.append('line')
                .attr('x1', 63 * i)
                .attr('y1', 36)
                .attr('x2', 63 * i)
                .attr('y2', 270)
                .style("stroke", 'black')
                .style("stroke-width",0.2)
        }  
        for(var i = 0; i<7; i++) {
            svg.append('text')
                .attr('x', 63 * (i+1) - 13)
                .attr('y', 290)
                .text(data_set[i])
                .style("font-size", "13px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
                .attr("font-weight", "bold")
        }

        for (var i = 0; i < 6; i++) {
            svg.append('line')
            .attr('x1', 63 * (i+1))
            .attr('y1', 224 - (46 * data_발생건수[i] / 1000) + 230)
            .attr('x2', 63 * (i+2))
            .attr('y2', 224 - (46 * data_발생건수[i+1] / 1000) + 230)
            .style("stroke", color[0])
            .style("stroke-width", 1.5)
            

            svg.append('line')
            .attr('x1', 63 * (i+1))
            .attr('y1', 224 - (46 * data_사상자수[i] / 1000) + 230)
            .attr('x2', 63 * (i+2))
            .attr('y2', 224 - (46 * data_사상자수[i+1] / 1000) + 230)
            .style("stroke", color[1])
            .style("stroke-width", 1.5)
        }

        for (var i = 0; i < 7; i++) {
            svg.append('circle')
            .attr('cx', 63 * (i+1))
            .attr('cy', 224 - (46 * data_발생건수[i] / 1000) + 230)
            .attr('r', 2)
            .style("fill", color[0])

            svg.append('text')
            .attr("x", 63 * (i+1) + 10) 
            .attr("y", 224 - (46 * data_발생건수[i] / 1000) + 230 + 5)
            .text(data_발생건수[i])
            .style("font-size", "10px")
            .attr("font-family", "맑은고딕")
            .attr("fill", "black")

            svg.append('circle')
            .attr('cx', 63 * (i+1))
            .attr('cy', 224 - (46 * data_사상자수[i] / 1000) + 230)
            .attr('r', 2)
            .style("fill", color[1])

            svg.append('text')
            .attr("x", 63 * (i+1) + 10) 
            .attr("y", 224 - (46 * data_사상자수[i] / 1000) + 230 + 5)
            .text(data_사상자수[i])
            .style("font-size", "10px")
            .attr("font-family", "맑은고딕")
            .attr("fill", "black")
        }
        
        for(var i = 0; i < 2; i++) {
            svg.append("rect")
            .attr("x", 457) 
            .attr("y", 40 + i*21)
            .attr("width", 19) 
            .attr("height", 19) 
            .attr("fill", color[i])

            svg.append("text")
            .attr("x", 345) 
            .attr("y", 55 + i*21)
            .text(series[i])
            .style("font-size", "13px")
            .attr("font-family", "맑은고딕")
            .attr("fill", "black")
        }
    }
    firstSubMenu_2 = () => {
        //년도별 교통사고 사상자수 세부 구성
        var series = ["부상자수", "경상자수", "중상자수", "사망자수"];
        var data_set = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];

        var data_부상자 = [383, 474, 654, 701, 588, 434, 376];
        var data_경상자 = [3408, 3172, 3483, 3478, 2950, 2601, 2123];
        var data_중상자 = [4612, 4267, 4049, 3855, 2982, 2678, 2321];
        var data_사망자 = [510, 385, 336, 360, 286, 300, 251];

        var color = ["#d0efff", "#2a9df4", "#1167b1", "#03254c"];

        var svg = d3.select(".bar1")
                    .append("svg")
                    .attr('width', 900)
                    .attr('height', 300);

                    svg.append('line') //x축
                    .attr('x1', 60)
                    .attr('y1', 270)
                    .attr('x2', 880)
                    .attr('y2', 270)
                    .style("stroke", 'black')
                    .style("stroke-width",0.5);
                    svg.append('line') //x축
                    .attr('x1', 60)
                    .attr('y1', 36)
                    .attr('x2', 880)
                    .attr('y2', 36)
                    .style("stroke", 'black')
                    .style("stroke-width",0.5);

                    svg.append('line') //y축
                    .attr('x1', 60)
                    .attr('y1', 36)
                    .attr('x2', 60)
                    .attr('y2', 270)
                    .style("stroke", 'black')
                    .style("stroke-width",0.5);
                    svg.append('line') //y축
                    .attr('x1', 880)
                    .attr('y1', 36)
                    .attr('x2', 880)
                    .attr('y2', 270)
                    .style("stroke", 'black')
                    .style("stroke-width",0.5);

                    for(var i = 0; i<10; i++) {
                        svg.append('line')
                            .attr('x1', 60)
                            .attr('y1', 270 - 26 * i)
                            .attr('x2', 880)
                            .attr('y2', 270 - 26 * i)
                            .style("stroke", 'black')
                            .style("stroke-width",0.2);
            
                        svg.append('line')
                            .attr('x1', 60)
                            .attr('y1', 270 - 26 * i)
                            .attr('x2', 70)
                            .attr('y2', 270 - 26 * i)
                            .style("stroke", 'black')
                            .style("stroke-width",0.5);

                        svg.append('text')
                            .attr('x', 25)
                            .attr('y', 275 - 26 * i)
                            .text(i*1000)
                            .style("font-size", "13px")
                            .attr("font-family", "맑은고딕")
                            .attr("fill", "black")
                    }    
                    for(var i = 1; i<8; i++) {
                        svg.append('line')
                            .attr('x1', 117 * i)
                            .attr('y1', 36)
                            .attr('x2', 117 * i)
                            .attr('y2', 270)
                            .style("stroke", 'black')
                            .style("stroke-width",0.2);
                    }  
                    for(var i = 0; i<7; i++) {
                        svg.append('text')
                            .attr('x', 117 * (i+1) - 13)
                            .attr('y', 290)
                            .text(data_set[i])
                            .style("font-size", "13px")
                            .attr("font-family", "맑은고딕")
                            .attr("fill", "black")
                            .attr("font-weight", "bold")
                    }  
                    
                    for(var i = 0; i < 8; i++) {
                        if(i < 6) {
                            svg.append("line")
                            .attr('x1', 117 * (i+1) + 20)
                            .attr('y1', 270 - ((26 * data_부상자[i] / 1000)+(26 * data_경상자[i] / 1000)+(26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000)))
                            .attr('x2', 117 * (i+2) - 20)
                            .attr('y2', 270 - ((26 * data_부상자[i+1] / 1000)+(26 * data_경상자[i+1] / 1000)+(26 * data_중상자[i+1] / 1000)+(26 * data_사망자[i+1] / 1000)))
                            .style("stroke", 'darkblue')
                            .style("stroke-width",0.5)
                            .style("stroke-dasharray", 3)

                            svg.append("line")
                            .attr('x1', 117 * (i+1) + 20)
                            .attr('y1', 270 - ((26 * data_경상자[i] / 1000)+(26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000)))
                            .attr('x2', 117 * (i+2) - 20)
                            .attr('y2', 270 - ((26 * data_경상자[i+1] / 1000)+(26 * data_중상자[i+1] / 1000)+(26 * data_사망자[i+1] / 1000)))
                            .style("stroke", 'darkblue')
                            .style("stroke-width",0.5)
                            .style("stroke-dasharray", 3)

                            svg.append("line")
                            .attr('x1', 117 * (i+1) + 20)
                            .attr('y1', 270 - ((26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000)))
                            .attr('x2', 117 * (i+2) - 20)
                            .attr('y2', 270 - ((26 * data_중상자[i+1] / 1000)+(26 * data_사망자[i+1] / 1000)))
                            .style("stroke", 'darkblue')
                            .style("stroke-width",0.5)
                            .style("stroke-dasharray", 3)

                            svg.append("line")
                            .attr('x1', 117 * (i+1) + 20)
                            .attr('y1', 270 - ((26 * data_사망자[i] / 1000)))
                            .attr('x2', 117 * (i+2) - 20)
                            .attr('y2', 270 - ((26 * data_사망자[i+1] / 1000)))
                            .style("stroke", 'darkblue')
                            .style("stroke-width",0.5)
                            .style("stroke-dasharray", 3)
                        }

                        svg.append("rect")
                            .attr('x', 117 * (1+i) - 20)
                            .attr('y', 270 - ((26 * data_부상자[i] / 1000)+(26 * data_경상자[i] / 1000)+(26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000)))
                            .attr('width',40)
                            .attr('height',(26 * data_부상자[i] / 1000)+(26 * data_경상자[i] / 1000)+(26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000))
                            .attr('fill',color[0])

                        svg.append("text")
                            .attr('x', 117 * (1+i) - 20 + 3)
                            .attr('y', 270 - ((26 * data_부상자[i] / 1000)+(26 * data_경상자[i] / 1000)+(26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000)) + 7)
                            .text(data_부상자[i])
                            .style("font-size", "10px")
                            .attr("font-family", "맑은고딕")
                            .attr("fill", "black")

                        svg.append("rect")
                            .attr('x', 117 * (1+i) - 20)
                            .attr('y', 270 - ((26 * data_경상자[i] / 1000)+(26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000)))
                            .attr('width',40)
                            .attr('height',(26 * data_경상자[i] / 1000)+(26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000))
                            .attr('fill',color[1])

                        svg.append("text")
                            .attr('x', 117 * (1+i) - 20 + 3)
                            .attr('y', 270 - ((26 * data_경상자[i] / 1000)+(26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000)) + 10)
                            .text(data_경상자[i])
                            .style("font-size", "10px")
                            .attr("font-family", "맑은고딕")
                            .attr("fill", "black")

                        svg.append("rect")
                            .attr('x', 117 * (1+i) - 20)
                            .attr('y', 270 - ((26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000)))
                            .attr('width',40)
                            .attr('height',(26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000))
                            .attr('fill',color[2])

                        svg.append("text")
                            .attr('x', 117 * (1+i) - 20 + 3)
                            .attr('y', 270 - ((26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000)) + 10)
                            .text(data_중상자[i])
                            .style("font-size", "10px")
                            .attr("font-family", "맑은고딕")
                            .attr("fill", "white")

                        svg.append("rect")
                            .attr('x', 117 * (1+i) - 20)
                            .attr('y', 270 - 26 * data_사망자[i] / 1000)
                            .attr('width',40)
                            .attr('height',26 * data_사망자[i] / 1000)
                            .attr('fill',color[3])
                
                        svg.append("text")
                            .attr('x', 117 * (1+i) - 20 + 3)
                            .attr('y', 270 - ((26 * data_사망자[i] / 1000)) + 7)
                            .text(data_사망자[i])
                            .style("font-size", "10px")
                            .attr("font-family", "맑은고딕")
                            .attr("fill", "white")
                        }
                
                        for(var i = 0; i < 4; i++) {
                            svg.append("rect")
                            .attr("x", 857) 
                            .attr("y", 40 + i*21)
                            .attr("width", 19) 
                            .attr("height", 19) 
                            .attr("fill", color[i])

                            svg.append("text")
                            .attr("x", 800) 
                            .attr("y", 55 + i*21)
                            .text(series[i])
                            .style("font-size", "13px")
                            .attr("font-family", "맑은고딕")
                            .attr("fill", "black")
                        }
    }
    secondSubMenu_1 = () => {
        //사고유형별 발생건수
        var series = ["자전거", "보행노인", "무단횡단", "보행어린이", "스쿨존어린이"];
        var data_set = [17769, 16201, 11772, 2942, 558];

        var color = ["#f9ed69", "#f08a5d", "#b83b5e", "#6a2c70", "#08d9d6"];

        var svg = d3.select(".bar2")
                    .append("svg")
                    .attr('width', 600)
                    .attr('height', 500);

            svg.append('line') //x축
                .attr('x1', 60)
                .attr('y1', 470)
                .attr('x2', 580)
                .attr('y2', 470)
                .style("stroke", 'black')
                .style("stroke-width",0.5);
                svg.append('line') //x축
                .attr('x1', 60)
                .attr('y1', 110)
                .attr('x2', 580)
                .attr('y2', 110)
                .style("stroke", 'black')
                .style("stroke-width",0.5);

            svg.append('line') //y축
                .attr('x1', 60)
                .attr('y1', 110)
                .attr('x2', 60)
                .attr('y2', 470)
                .style("stroke", 'black')
                .style("stroke-width",0.5);
                svg.append('line') //y축
                .attr('x1', 580)
                .attr('y1', 110)
                .attr('x2', 580)
                .attr('y2', 470)
                .style("stroke", 'black')
                .style("stroke-width",0.5);

                for(var i = 1; i<5; i++) {
                    svg.append('line')
                        .attr('x1', 60)
                        .attr('y1', 470 - 90 * i)
                        .attr('x2', 580)
                        .attr('y2', 470 - 90 * i)
                        .style("stroke", 'black')
                        .style("stroke-width",0.2);

                        svg.append('line')
                        .attr('x1', 60)
                        .attr('y1', 470 - 90 * i)
                        .attr('x2', 70)
                        .attr('y2', 470 - 90 * i)
                        .style("stroke", 'black')
                        .style("stroke-width",0.5);
                }    
                for(var i = 1; i<6; i++) {
                    svg.append('line')
                        .attr('x1', 105 * i)
                        .attr('y1', 110)
                        .attr('x2', 105 * i)
                        .attr('y2', 470)
                        .style("stroke", 'black')
                        .style("stroke-width",0.2);
                }    

                svg.append("text")
                .attr('x', 85)
                .attr('y', 490)
                .text("자전거")
                .style("font-size", "13px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
                .attr("font-weight", "bold")

                svg.append("text")
                .attr('x', 185)
                .attr('y', 490)
                .text("보행노인")
                .style("font-size", "13px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
                .attr("font-weight", "bold")

                svg.append("text")
                .attr('x', 290)
                .attr('y', 490)
                .text("무단횡단")
                .style("font-size", "13px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
                .attr("font-weight", "bold")

                svg.append("text")
                .attr('x', 387)
                .attr('y', 490)
                .text("보행어린이")
                .style("font-size", "13px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
                .attr("font-weight", "bold")

                svg.append("text")
                .attr('x', 485)
                .attr('y', 490)
                .text("스쿨존어린이")
                .style("font-size", "13px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
                .attr("font-weight", "bold")

                for(var i = 0; i< 5; i++) { //t축 값
                    svg.append("text")
                    .attr('x', 15)
                    .attr('y', 470 - (i*90))
                    .text(i*5000)
                    .style("font-size", "13px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "black")
                }
                for(var i = 0; i < 5; i++) {
                svg.append("rect")
                    .attr('x', 105 * (i+1) - 25)
                    .attr('y', 470 - 90 * data_set[i] / 5000)
                    .attr('width',50)
                    .attr('height',90 * data_set[i] / 5000)
                    .attr('fill',color[i])

                    svg.append("text")
                    .attr('x', 105 * (i+1)-20)
                    .attr('y', 470 - 90 * data_set[i] / 5000 - 10)
                    .text(data_set[i])
                    .style("font-size", "13px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "black")
                }
    }
    secondSubMenu_2 = () => {
//사고유형별 년도에 따른 발생건수 추이
var series = ["자전거", "보행노인", "무단횡단", "보행어린이", "스쿨존어린이"];
var data_set = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];

var data_자전거 = [2432, 2505, 3329, 3384, 2558, 1967, 1594];
var data_보행노인 = [2049, 2220, 2549, 2582, 2393, 2252, 2156];
var data_무단횡단 = [3231, 2531, 1607, 1493, 1056, 1122, 732];
var data_보행어린이 = [708, 544, 472, 385, 321, 257, 255];
var data_스쿨존어린이 = [74,  56, 90, 88, 95, 68, 87];

var color = ["#f9ed69", "#f08a5d", "#b83b5e", "#6a2c70", "#08d9d6"];

var svg = d3.select(".line2")
            .append("svg")
            .attr('width', 500)
            .attr('height', 500);

            svg.append('line') //x축
            .attr('x1', 40)
            .attr('y1', 470)
            .attr('x2', 480)
            .attr('y2', 470)
            .style("stroke", 'black')
            .style("stroke-width",0.5);
            svg.append('line') //x축
            .attr('x1', 40)
            .attr('y1', 30)
            .attr('x2', 480)
            .attr('y2', 30)
            .style("stroke", 'black')
            .style("stroke-width",0.5);
    
        svg.append('line') //y축
            .attr('x1', 40)
            .attr('y1', 30)
            .attr('x2', 40)
            .attr('y2', 470)
            .style("stroke", 'black')
            .style("stroke-width",0.5);
            svg.append('line') //y축
            .attr('x1', 480)
            .attr('y1', 30)
            .attr('x2', 480)
            .attr('y2', 470)
            .style("stroke", 'black')
            .style("stroke-width",0.5);
    
            for(var i = 0; i<8; i++) {
                svg.append('line')
                    .attr('x1', 40)
                    .attr('y1', 470 - 63 * i)
                    .attr('x2', 480)
                    .attr('y2', 470 - 63 * i)
                    .style("stroke", 'black')
                    .style("stroke-width",0.2);
    
                    svg.append('line')
                    .attr('x1', 40)
                    .attr('y1', 470 - 63 * i)
                    .attr('x2', 50)
                    .attr('y2', 470 - 63 * i)
                    .style("stroke", 'black')
                    .style("stroke-width",0.5);

                    svg.append('text')
                    .attr('x', 5)
                    .attr('y', 470 - 63 * i + 7)
                    .text(i * 500)
                    .style("font-size", "13px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "black")
            }    
            for(var i = 0; i<7; i++) {
                svg.append('line')
                    .attr('x1', 64 * (i+1))
                    .attr('y1', 30)
                    .attr('x2', 64 * (i+1))
                    .attr('y2', 470)
                    .style("stroke", 'black')
                    .style("stroke-width",0.2);

                    svg.append('text')
                    .attr('x', 64 * (i+1) - 15)
                    .attr('y', 490)
                    .text(data_set[i])
                    .style("font-size", "13px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "black")
                    .attr("font-weight", "bold")
            }

            //line
            for (var i = 0; i < 6; i++) {
                svg.append('line')
                .attr('x1', 64 * (i+1))
                .attr('y1', 470 - (63 * data_자전거[i] / 500))
                .attr('x2', 64 * (i+2))
                .attr('y2', 470 - (63 * data_자전거[i+1] / 500))
                .style("stroke", color[0])
                .style("stroke-width", 2)
                
                svg.append('line')
                .attr('x1', 64 * (i+1))
                .attr('y1', 470 - (63 * data_보행노인[i] / 500))
                .attr('x2', 64 * (i+2))
                .attr('y2', 470 - (63 * data_보행노인[i+1] / 500))
                .style("stroke", color[1])
                .style("stroke-width", 2)
                
                svg.append('line')
                .attr('x1', 64 * (i+1))
                .attr('y1', 470 - (63 * data_무단횡단[i] / 500))
                .attr('x2', 64 * (i+2))
                .attr('y2', 470 - (63 * data_무단횡단[i+1] / 500))
                .style("stroke", color[2])
                .style("stroke-width", 2)
                
                svg.append('line')
                .attr('x1', 64 * (i+1))
                .attr('y1', 470 - (63 * data_보행어린이[i] / 500))
                .attr('x2', 64 * (i+2))
                .attr('y2', 470 - (63 * data_보행어린이[i+1] / 500))
                .style("stroke", color[3])
                .style("stroke-width", 2)
                
                svg.append('line')
                .attr('x1', 64 * (i+1))
                .attr('y1', 470 - (63 * data_스쿨존어린이[i] / 500))
                .attr('x2', 64 * (i+2))
                .attr('y2', 470 - (63 * data_스쿨존어린이[i+1] / 500))
                .style("stroke", color[4])
                .style("stroke-width", 2)
            }

            //dot
            for (var i = 0; i < 7; i++) {
                svg.append('circle')
                .attr('cx', 64 * (i+1))
                .attr('cy', 470 - (63 * data_자전거[i] / 500))
                .attr('r', 3)
                .style("fill", color[0])
                
                svg.append('text')
                .attr("x", 64 * (i+1) + 10) 
                .attr("y", 470 - (63 * data_자전거[i] / 500) + 5)
                .text(data_자전거[i])
                .style("font-size", "10px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg.append('circle')
                .attr('cx', 64 * (i+1))
                .attr('cy', 470 - (63 * data_보행노인[i] / 500))
                .attr('r', 3)
                .style("fill", color[1])

                svg.append('text')
                .attr("x", 64 * (i+1) + 10) 
                .attr("y", 470 - (63 * data_보행노인[i] / 500) + 5)
                .text(data_보행노인[i])
                .style("font-size", "10px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg.append('circle')
                .attr('cx', 64 * (i+1))
                .attr('cy', 470 - (63 * data_무단횡단[i] / 500))
                .attr('r', 3)
                .style("fill", color[2])

                svg.append('text')
                .attr("x", 64 * (i+1) + 5) 
                .attr("y", 470 - (63 * data_무단횡단[i] / 500) - 5)
                .text(data_무단횡단[i])
                .style("font-size", "10px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg.append('circle')
                .attr('cx', 64 * (i+1))
                .attr('cy', 470 - (63 * data_보행어린이[i] / 500))
                .attr('r', 3)
                .style("fill", color[3])

                svg.append('text')
                .attr("x", 64 * (i+1) + 10) 
                .attr("y", 470 - (63 * data_보행어린이[i] / 500) + 5)
                .text(data_보행어린이[i])
                .style("font-size", "10px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg.append('circle')
                .attr('cx', 64 * (i+1))
                .attr('cy', 470 - (63 * data_스쿨존어린이[i] / 500))
                .attr('r', 3)
                .style("fill", color[4])

                svg.append('text')
                .attr("x", 64 * (i+1) + 10) 
                .attr("y", 470 - (63 * data_스쿨존어린이[i] / 500) + 5)
                .text(data_스쿨존어린이[i])
                .style("font-size", "10px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
            }

            for(var i = 0; i < 5; i++) {
                svg.append("rect")
                .attr("x", 457) 
                .attr("y", 34 + i*21)
                .attr("width", 19) 
                .attr("height", 19) 
                .attr("fill", color[i])

                svg.append("text")
                .attr("x", 376) 
                .attr("y", 48 + i*21)
                .text(series[i])
                .style("font-size", "13px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
            }
    }
    thirdSubMenu_1 = () => {
        this.pieChart_1();
        this.pieChart_2();
        this.pieChart_3();
        this.pieChart_4();
        this.pieChart_5();
    }
    fourthSubMenu_1 = () => {
        //년도별 지역의 사상자 발생률(사상자수/인구)
        var series = ['2014년도', '2015년도', '2016년도', '2017년도', '2018년도'];
        var data_set = ["강원", "경기", "경남", "경북", "광주", "대구", "대전", "부산", "서울", "세종", "울산", "인천", "전남", "전북", "제주", "충남", "충북"];

        var data_2014 = [0.0000954, 0.0001032, 0.0001119, 0.0001295, 0.0001635, 0.0003935, 0.0001275, 0.0001596, 0.0002885, 0.0000606, 0.0001347, 0.0001251, 0.0000932, 0.0001914, 0.0001664, 0.0000785, 0.0001572];
        var data_2015 = [0.0000884, 0.0001217, 0.0000949, 0.0001299, 0.0001275, 0.0004297, 0.0001602, 0.0001556, 0.0002592, 0.0000214, 0.0001564, 0.0001263, 0.0001503, 0.0001275, 0.0001770, 0.0000599, 0.0001196];
        var data_2016 = [0.0000842, 0.0000979, 0.0000848, 0.0001092, 0.0001338, 0.0002369, 0.0001628, 0.0001314, 0.0002272, 0.0000085, 0.0001115, 0.0000626, 0.0000862, 0.0001139, 0.0001084, 0.0000837, 0.0001387];
        var data_2017 = [0.0000664, 0.0000800, 0.0000878, 0.0001062, 0.0001037, 0.0002315, 0.0001106, 0.0001183, 0.0002032, 0.0000451, 0.0000587, 0.0000492, 0.0001170, 0.0001022, 0.0000866, 0.0000739, 0.0001212];
        var data_2018 = [0.0000546, 0.0000730, 0.0000659, 0.0001144, 0.0000831, 0.0001494, 0.0000863, 0.0001426, 0.0001573, 0.0000263, 0.0000555, 0.0000235, 0.0001101, 0.0000626, 0.0001087, 0.0000679, 0.0001272];

        if (this.state.year === "5년 평균") {
            var color = ["#ea5e5e", "#ffdc34", "#1fab89" , "#1089ff", "#8d448b"];
        } else if (this.state.year === "2014년도") {
            var color = ["#ea5e5e", "gray", "gray", "gray", "gray"];
        } else if (this.state.year === "2015년도") {
            var color = ["gray", "#ffdc34", "gray", "gray", "gray"];
        } else if (this.state.year === "2016년도") {
            var color = ["gray", "gray", "#1fab89", "gray", "gray"];
        } else if (this.state.year === "2017년도") {
            var color = ["gray", "gray", "gray", "#1089ff", "gray"];
        } else if (this.state.year === "2018년도") {
            var color = ["gray", "gray", "gray", "gray", "#8d448b"];
        }

        var svg_dot = d3.select(".scatter_plot1")
                    .append("svg")
                    .attr('width', 1000)
                    .attr('height', 300);

            svg_dot.append('line') //x축
                .attr('x1', 40) 
                .attr('y1', 270)
                .attr('x2', 980)
                .attr('y2', 270)
                .style("stroke", 'black')
                .style("stroke-width",0.5);
            svg_dot.append('line') //x축
                .attr('x1', 40)
                .attr('y1', 30)
                .attr('x2', 980)
                .attr('y2', 30)
                .style("stroke", 'black')
                .style("stroke-width",0.5);

            svg_dot.append('line') //y축
                .attr('x1', 40)
                .attr('y1', 30)
                .attr('x2', 40)
                .attr('y2', 270)
                .style("stroke", 'black')
                .style("stroke-width",0.5);
                svg_dot.append('line') //y축
                .attr('x1', 980)
                .attr('y1', 30)
                .attr('x2', 980)
                .attr('y2', 270)
                .style("stroke", 'black')
                .style("stroke-width",0.5);

                for(var i = 0; i<6; i++) {
                    svg_dot.append('line')
                        .attr('x1', 40)
                        .attr('y1', 270 - 48 * i)
                        .attr('x2', 980)
                        .attr('y2', 270 - 48 * i)
                        .style("stroke", 'black')
                        .style("stroke-width",0.2);

                        svg_dot.append('line')
                        .attr('x1', 40)
                        .attr('y1', 270 - 48 * i)
                        .attr('x2', 50)
                        .attr('y2', 270 - 48 * i)
                        .style("stroke", 'black')
                        .style("stroke-width",0.5);

                        svg_dot.append('text')
                        .attr('x', 0)
                        .attr('y', 270 - 48 * i + 7)
                        .text(i /10000)
                        .style("font-size", "13px")
                        .attr("font-family", "맑은고딕")
                        .attr("fill", "black")
                }    
                for(var i = 0; i<17; i++) {
                    svg_dot.append('line')
                        .attr('x1', 57 * (i+1))
                        .attr('y1', 30)
                        .attr('x2', 57 * (i+1))
                        .attr('y2', 270)
                        .style("stroke", 'black')
                        .style("stroke-width",0.2);

                        svg_dot.append('text')
                        .attr('x', 57 * (i+1) - 15)
                        .attr('y', 290)
                        .text(data_set[i])
                        .style("font-size", "13px")
                        .attr("font-family", "맑은고딕")
                        .attr("fill", "black")
                        .attr("font-weight", "bold")
                }
                for(var i = 0; i < 5; i++) {
                    svg_dot.append("rect")
                    .attr("x", 957) 
                    .attr("y", 34 + i*21)
                    .attr("width", 19) 
                    .attr("height", 19) 
                    .attr("fill", color[i])

                    svg_dot.append("text")
                    .attr("x", 900) 
                    .attr("y", 48 + i*21)
                    .text(series[i])
                    .style("font-size", "13px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "black")
                }

                if (this.state.year === "5년 평균") {
                    for(var i = 0; i < 17; i++) {
                        svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2014[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", color[0])
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
                            
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2015[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", color[1])
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
    
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2016[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", color[2])
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
    
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2017[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", color[3])
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
    
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2018[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", color[4])
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
                    }
                } else if (this.state.year === "2014년도") {
                    for(var i = 0; i < 17; i++) {
                        svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2014[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", color[0])
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
    
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2015[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", "gray")
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
            
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2016[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", "gray")
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
            
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2017[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", "gray")
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
            
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2018[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", "gray")
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
                    }
                } else if (this.state.year === "2015년도") {
                    for(var i = 0; i < 17; i++) {
                        svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2014[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", "gray")
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
    
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2015[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", color[1])
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
            
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2016[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", "gray")
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
            
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2017[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", "gray")
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
            
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2018[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", "gray")
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
                    }
                } else if (this.state.year === "2016년도") {
                    for(var i = 0; i < 17; i++) {
                        svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2014[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", "gray")
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
    
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2015[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", "gray")
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
            
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2016[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", color[2])
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
            
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2017[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", "gray")
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
            
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2018[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", "gray")
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
                    }
                } else if (this.state.year === "2017년도") {
                    for(var i = 0; i < 17; i++) {
                        svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2014[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", "gray")
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
    
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2015[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", "gray")
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
            
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2016[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", "gray")
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
            
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2017[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", color[3])
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
            
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2018[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", "gray")
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
                    }
                } else if (this.state.year === "2018년도") {
                    for(var i = 0; i < 17; i++) {
                        svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2014[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", "gray")
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
    
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2015[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", "gray")
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
            
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2016[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", "gray")
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
            
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2017[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", "gray")
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
            
                            svg_dot.append("circle")
                            .attr('cx', 57 * (i+1))
                            .attr('cy', 270 - data_2018[i] * 48 / 0.0001)
                            .attr('r', 5)
                            .style("fill", color[4])
                            .attr("stroke", "white")
                            .attr("stroke-width", 1)
                    }
                }
    }
    fifthSubMenu_1 = () => {
        var 강원 = [[128.54880989370014,38.301950820518755],[128.5600921732829,38.25735515107489],[128.59761716763322,38.21480959198724],[128.60765942875406,38.15215810015938],[128.64206854447866,38.106588627599855],[128.66939445927846,38.08634208760778],[128.69458333244307,38.0453480455091],[128.73326744935343,38.01787054352603],[128.79463671088126,37.92801060958252],[128.8233689458956,37.90753318801803],[128.83001997197184,37.88458455426084],[128.8786226699225,37.8294251483049],[128.9852771172376,37.74045442473868],[129.01482411622038,37.70600771921262],[129.05505018456222,37.675224044111836],[129.04353313092116,37.642745963305245],[129.05392180246835,37.62123228307141],[129.11550878570839,37.57855036235084],[129.12163400699842,37.52066201439543],[129.18932196241568,37.45204451034289],[129.19776432627512,37.41521414735909],[129.2513233979134,37.380088360708676],[129.2506772120506,37.362368874276115],[129.28084694703435,37.31347366301054],[129.35527819358379,37.235059804121235],[129.3411918281742,37.17718338225454],[129.3633972863588,37.146000904866405],[129.32482985566594,37.142286218870495],[129.271238269404,37.1163805689057],[129.22537770639696,37.073720111851664],[129.2253141304669,37.04455999175614],[129.18540948720124,37.04171908095918],[129.1850295662585,37.04657953042605],[129.18167891525556,37.050424880670846],[129.181333033076,37.05162367047038],[129.1804325873684,37.05243956004464],[129.18042225596662,37.05322104542962],[129.17705384944216,37.05671598015327],[129.1757059210262,37.05780315753493],[129.17039771110316,37.06035604623057],[129.169731709345,37.06153035273092],[129.16965828604876,37.062130475530964],[129.1693452740602,37.06274071555654],[129.1692154824529,37.06343855741099],[129.1667786382645,37.065216264525716],[129.16663358375598,37.065846086142365],[129.16626037723566,37.06671727729185],[129.16583175157555,37.06737637989426],[129.16618416883838,37.06921625222834],[129.16169241045623,37.068883557546876],[129.15477987484462,37.07180739051456],[129.152593437702,37.073430543687365],[129.15211560438644,37.073230583464394],[129.1511766786477,37.07415934489281],[129.1497563868977,37.07448385475696],[129.14804560115635,37.07612999722843],[129.14427297850273,37.07657999397457],[129.14218092721796,37.08034593853001],[129.13354920758437,37.08174985928144],[129.13168136751403,37.08308779638034],[129.13072182631043,37.08326705821548],[129.12940681431542,37.083805110438846],[129.1278750948309,37.08416988124314],[129.12718836712094,37.08444348884117],[129.12620044216388,37.08757364220293],[129.1266895406377,37.088927360579],[129.11807366044786,37.09274206422415],[129.10777955353805,37.09349729951034],[129.10457591227782,37.09772481490934],[129.10180780588084,37.09919382721883],[129.10047599854036,37.09947743831959],[129.09824630668646,37.0990074650811],[129.09732181861435,37.09981094225302],[129.09625119137382,37.10041457677577],[129.09578691003182,37.10040102466429],[129.09431730052114,37.099312837530626],[129.0923459636965,37.09856047464542],[129.0912040811164,37.09715409277839],[129.08739574675562,37.09706688773898],[129.0825675977211,37.094016344248054],[129.07685834212097,37.092919922186034],[129.07415325006534,37.0910215857944],[129.07131938506382,37.088582922616915],[129.07045707891805,37.0882370592894],[129.07036009035184,37.08819820632722],[129.07026651167388,37.08757427429712],[129.0702643946837,37.08756108547353],[129.07013034248345,37.08746432544053],[129.07001527424103,37.08738130444678],[129.07086879920246,37.08501421127003],[129.0707990748015,37.08388451765994],[129.0707947039881,37.083814499029074],[129.07019950284308,37.08371311506649],[129.06859875979106,37.0817551107322],[129.06706287247107,37.08083705603317],[129.06560500090285,37.078752079394285],[129.06394506865436,37.068440286414685],[128.98417415532123,37.08469362235354],[128.95927445250473,37.077576562924214],[128.94744481415265,37.09180594627658],[128.92319827326182,37.09212064413647],[128.91031992655576,37.068295931261886],[128.90486079149107,37.06204214971449],[128.90436206198413,37.06170603166004],[128.90344055180657,37.06130859710159],[128.9019789745721,37.06021297120707],[128.90141441225032,37.05971234039724],[128.9006831007711,37.059301142232215],[128.90030626790963,37.059061750539996],[128.89929684553178,37.0587390048582],[128.89698177926687,37.05056537913623],[128.8976916454551,37.04974772432323],[128.89739454396303,37.04890382959527],[128.89746469315455,37.04818674928906],[128.897408192608,37.047964837932945],[128.89764874361745,37.04546052004957],[128.8971367088834,37.0451174485665],[128.8964199880587,37.044515505609276],[128.895394833915,37.04503412215564],[128.89479361709897,37.045251055052205],[128.8942199191496,37.04589019865822],[128.8939837623581,37.04592304351404],[128.89325488523448,37.04670725786571],[128.8928373832333,37.047481363183586],[128.89255567957687,37.047484852711435],[128.87865988395052,37.05317316413975],[128.87854418259712,37.05325513255148],[128.87695180180432,37.04724671869133],[128.87684218705334,37.04607807808882],[128.87636308561736,37.04562000330495],[128.87566375801973,37.044745903582175],[128.87435494340195,37.04454560526311],[128.87343703980804,37.044339220075166],[128.8732844040576,37.044203327195724],[128.87032486565667,37.04495375526292],[128.86970757374556,37.04555259607306],[128.86946164324476,37.04559763746743],[128.8684207209602,37.04605212802358],[128.86736639394147,37.04620731107804],[128.86636381492835,37.04762805005152],[128.8659485146247,37.04794272618727],[128.8654989920083,37.04799307613609],[128.86503110159353,37.0481300064702],[128.86462754867173,37.04803294686014],[128.86309828283498,37.04883065407776],[128.8625583060358,37.048916670303754],[128.86220867334106,37.04889489603779],[128.85960213503753,37.04955041477679],[128.85897878650795,37.049657373235235],[128.85813423805695,37.04920445967169],[128.85751692663445,37.049210651797814],[128.85698539530242,37.04892219437424],[128.8520369011085,37.05037618956492],[128.8514266027787,37.050281277419266],[128.85108140504124,37.05019990624839],[128.84810750840919,37.051313205741465],[128.8480488757149,37.051350343209414],[128.84610653596798,37.052281663474126],[128.8460576915738,37.05292524164609],[128.84370605423243,37.05574709016701],[128.84403479334244,37.05647859713259],[128.8440168408719,37.057168880679825],[128.8438413924731,37.05723084927045],[128.84096621494658,37.0590584547389],[128.8406474723684,37.05935650154915],[128.83595268934945,37.06594274294764],[128.83511959079271,37.066200237986656],[128.83166598873817,37.06740405953454],[128.83141819095889,37.06810663276492],[128.8320818770073,37.07507545762714],[128.82990123435874,37.077721638690655],[128.82938357321646,37.07845905861575],[128.82840950973844,37.078897810200324],[128.8266920968244,37.07868163087922],[128.82634601905934,37.07883054403071],[128.82580517651408,37.07869862168359],[128.8243527925529,37.07785183188365],[128.81437091589447,37.07846571578772],[128.81256962565848,37.07871178740773],[128.8089767404385,37.0767120202652],[128.80800350318356,37.07575679682841],[128.8061062415388,37.07688381801899],[128.8056553374044,37.07721038538205],[128.80521489826617,37.07713095786804],[128.80437823553464,37.07761421613409],[128.8038128228762,37.07794158708094],[128.80218570585248,37.07771226549804],[128.8001137047593,37.081275584611106],[128.80027474997283,37.08152331542],[128.80151360186676,37.08439414921599],[128.8010927983599,37.08560032038205],[128.79187859495627,37.08754203023271],[128.7913842169662,37.08732363120454],[128.7907704546675,37.08761588109886],[128.7881885083232,37.08772197954246],[128.78580641535552,37.08785353400863],[128.78518099550237,37.08851075477799],[128.7826911510882,37.09144075164313],[128.78238209741818,37.09150597656299],[128.78162196336328,37.09177153581155],[128.78127783113626,37.09226975188506],[128.78064580483795,37.0923519521352],[128.7779558936613,37.07907641591308],[128.77792828362627,37.07893482538085],[128.77788263533614,37.07887432357988],[128.77698927061456,37.07884847814508],[128.77655569101378,37.0787919974217],[128.77541366724563,37.07865313441059],[128.77501823491934,37.078101588130366],[128.7742317569294,37.077346849684304],[128.7720525504998,37.07652567060007],[128.77202033542,37.0765507928232],[128.772017121463,37.076582935854574],[128.77005300686432,37.07512976176954],[128.77005104199313,37.07468164091945],[128.7700310474564,37.07448536903096],[128.76999067896665,37.07434013789405],[128.76944722213764,37.07340359162708],[128.76926667855497,37.07323442369666],[128.7688252135772,37.072963456618204],[128.76869437394194,37.07284298920557],[128.7685758504157,37.07270619009102],[128.7687003768805,37.071338882553555],[128.76882748420147,37.071042421061925],[128.767807300437,37.06723608054055],[128.7674144559089,37.06689640787321],[128.76736139622034,37.066928713794574],[128.76719625405693,37.066661510937415],[128.76718272677005,37.06619040746805],[128.76708052849906,37.06597438222479],[128.76652178529744,37.06549363232606],[128.76592581185443,37.064750118061006],[128.76342644116406,37.06454329001844],[128.76284255872676,37.065037917103915],[128.75814832617112,37.06972387809066],[128.75807872166195,37.06979409817234],[128.75698427164454,37.06907861040456],[128.7567554093457,37.068844555318414],[128.75611606514875,37.066806742625225],[128.75585349757026,37.06667175956804],[128.75568691868764,37.064824188182115],[128.7552518181005,37.0644535702407],[128.75301722255048,37.05438919903203],[128.75293209641546,37.053971530411],[128.7530212428212,37.05371794071414],[128.75395874359018,37.05311733145523],[128.75414907275652,37.05298983918211],[128.7542717445225,37.05297018066278],[128.75469855808424,37.05263164794954],[128.75447592838992,37.05238274262855],[128.75471625017468,37.05125112535855],[128.75501081003895,37.050907305424325],[128.75519342799527,37.05016463004839],[128.7562766860167,37.04944757883273],[128.76091360009417,37.03602889712068],[128.7597845889418,37.03561604842704],[128.75401944083814,37.02878853292738],[128.75377273439562,37.02820945160366],[128.7537649458286,37.02783249082943],[128.74775093373395,37.029995342145654],[128.74714236724688,37.03056409310133],[128.73378138434126,37.040296683008556],[128.73311121408972,37.040520913770266],[128.7320039199267,37.04038306342082],[128.7311763751362,37.04084927722144],[128.72294525131548,37.04252676855807],[128.72225255383114,37.042497738886],[128.72104016901915,37.04309446580895],[128.69878866919018,37.04237442716063],[128.69711056637763,37.044082096452875],[128.69683559413986,37.04424200699947],[128.6945044019952,37.047307873976095],[128.69449897156974,37.047411275596275],[128.69038660106966,37.05153576603032],[128.69027731274488,37.05164459053626],[128.68232569814728,37.05335308394942],[128.68198032284965,37.05354154906156],[128.68176894633635,37.05365688296091],[128.66340091570643,37.06094007453868],[128.6633131673814,37.06094384113092],[128.66319111651526,37.06093710590403],[128.66245878574495,37.06089611558329],[128.65667394196217,37.063074538735684],[128.65600637417563,37.06446289882839],[128.6530791609286,37.065714363868544],[128.65238950466954,37.065602054858005],[128.65216473898778,37.06542780371934],[128.65209610523607,37.065440054137554],[128.64696043921617,37.06808500875296],[128.64593297225161,37.069096925598956],[128.64466936330294,37.06905218734183],[128.6441169928987,37.069750729502005],[128.64267079039365,37.070762452578215],[128.64133028768305,37.07082467320155],[128.6390999594068,37.07066228375282],[128.6388475709991,37.07117031517037],[128.6377362168288,37.07177667749838],[128.63739685195895,37.072257405654575],[128.63435719836446,37.07071059428392],[128.63352523521698,37.07232019270018],[128.62730358155162,37.07746507891147],[128.62765264976272,37.07838561978724],[128.62761868835074,37.07961778334325],[128.6277983118497,37.0805640460646],[128.62827850189603,37.081332593063145],[128.62785913811132,37.081781811485556],[128.6239471246612,37.0857957464563],[128.6226423191844,37.087401820062674],[128.62065192312406,37.08583027951265],[128.61838231449318,37.085474758350806],[128.6176557755176,37.08514206286106],[128.61754039879176,37.08423353203916],[128.6167131980782,37.08355945442611],[128.61521923776633,37.0821720054205],[128.61503175181736,37.08188109291547],[128.6126163196552,37.08092488749102],[128.61201595593528,37.08067987498192],[128.61166907525626,37.08030904041939],[128.6112964558571,37.07982414497852],[128.6106341244072,37.080056862649386],[128.61050406471847,37.0800826901728],[128.6097505669774,37.07973662063512],[128.60961262261114,37.07956820913152],[128.60863056616319,37.07826822816631],[128.60848669789254,37.078078610286084],[128.60796929234363,37.07750722701371],[128.60789589874088,37.07744279283751],[128.60733286764273,37.07698298834359],[128.6072012653145,37.07689691297704],[128.60703544204853,37.07679178594516],[128.60701469128645,37.076774739623936],[128.60665061027143,37.07669940842689],[128.60659138495444,37.07668540640147],[128.60583056877525,37.07692858045454],[128.60580960771998,37.077021437050014],[128.60573464111076,37.077296749043214],[128.6057118021251,37.077344545375325],[128.60567649427006,37.0774085113905],[128.60560421295042,37.077491860906264],[128.60499396177673,37.07792116841375],[128.60492595162938,37.07797478097231],[128.60487388895223,37.0781635935187],[128.60486073340786,37.078219154200376],[128.60422533751773,37.079183789371655],[128.60421361338217,37.07917404615614],[128.60411135360988,37.07917615732998],[128.6013669211955,37.0815224918176],[128.60146258866766,37.0816347257723],[128.60151040797518,37.08169254559074],[128.60168178659148,37.08185846788409],[128.601881403928,37.08203075511393],[128.60194831325273,37.08212201554935],[128.60201050719928,37.08220105723971],[128.60199476069621,37.082270286635215],[128.60177526839277,37.0828068836889],[128.60171769088075,37.08295358863532],[128.6016230291214,37.08305668492968],[128.6003164477916,37.08288985635899],[128.59969397792278,37.083153228337586],[128.5991261268537,37.083072378433535],[128.5990860812063,37.08295061076972],[128.59955809953175,37.082240898639796],[128.5992176998597,37.08209460994004],[128.59554104110651,37.08172115526072],[128.59503667243072,37.081536432624375],[128.5947838350074,37.08131898765021],[128.59448494511804,37.081191886011375],[128.5939837532181,37.08085631473939],[128.59403181901018,37.0797045225766],[128.59379011314266,37.079184313189735],[128.59356517075963,37.07884055243728],[128.59329635578274,37.07856600285103],[128.59322704876897,37.07852815341836],[128.59310380941704,37.07838903866617],[128.59280101727254,37.078480625661804],[128.59015605493207,37.07914760764049],[128.58993690108497,37.07926299462279],[128.58786041227742,37.07997579822639],[128.5874956695166,37.07995245762164],[128.58732143118954,37.08003555727884],[128.58709011511036,37.079968513854055],[128.58694368269326,37.08003603157366],[128.58643810812006,37.08015461740761],[128.58629277055232,37.08016352583165],[128.5861739670537,37.08024803295777],[128.5859170304552,37.080272030169404],[128.58556027523625,37.08037358183948],[128.58444539051098,37.080695352234535],[128.5837911134754,37.08073706631039],[128.58320255550754,37.0807493116776],[128.5826803693083,37.08111747881099],[128.58266486575897,37.08115369184195],[128.58252951244503,37.08124822925895],[128.58142385593928,37.081584558334555],[128.58127798273102,37.08156136155382],[128.5804233966175,37.08142110014397],[128.57971450789822,37.08159765713836],[128.57887481774705,37.08141783520322],[128.57036842497124,37.084474600473634],[128.57073424229756,37.08596868111311],[128.5709067145964,37.086217125259324],[128.5704831328927,37.086504511321415],[128.56917951913834,37.08671058514016],[128.5688828453016,37.08705854522273],[128.5684117361825,37.08736071578077],[128.5538489512943,37.08658977311861],[128.5519056499035,37.08673808942114],[128.5504583231733,37.086547274218134],[128.54974742987932,37.08618887720374],[128.54709824155816,37.08728154053655],[128.5453210924718,37.0876994572896],[128.54446543055698,37.08758589204345],[128.542245714974,37.0886165755583],[128.54155670608884,37.08902902058865],[128.5410375061322,37.08893898225535],[128.53813095689588,37.08962700712944],[128.5377472112929,37.08999833544124],[128.5370741465786,37.09009981006996],[128.53683430585662,37.0901360471432],[128.53491762222058,37.094833302458575],[128.5348631229665,37.09524282438663],[128.53471940964545,37.09590915524215],[128.53412694239137,37.098118121241534],[128.53193510974964,37.09952691052254],[128.53116570286377,37.10001434920085],[128.53029820402108,37.10027863386714],[128.5180775111592,37.10210426383507],[128.5176966669242,37.10236036741402],[128.51446628035026,37.101351625759854],[128.51423749778186,37.10326379805282],[128.51405534748213,37.10437126952911],[128.51391194815315,37.10511193016053],[128.51383504246823,37.105375361213596],[128.51382996143298,37.105381854666014],[128.5136461711679,37.10602589958114],[128.5135349882736,37.106355461705476],[128.51350340291097,37.10645480788542],[128.51347920011557,37.106511653385546],[128.51335059183342,37.10687575341611],[128.51305565630264,37.107615571239684],[128.51301048069166,37.10769756070016],[128.5111810735241,37.11089863252708],[128.51107968650635,37.111266455431355],[128.51075840545516,37.11395422719171],[128.51046681229883,37.11395734553267],[128.51003250480576,37.114003192769566],[128.5085106494332,37.114660345463456],[128.50729765885248,37.115108451314285],[128.50706390376234,37.115213963049406],[128.5066721093284,37.11544215794637],[128.5065561850825,37.11555166564275],[128.5065642423681,37.115567027102536],[128.5065950185275,37.115656377769696],[128.50655829740975,37.115674677067375],[128.50650112305377,37.11573286241528],[128.5062849636341,37.115898491747544],[128.50627090316297,37.11591330895752],[128.50616222464365,37.11599832889909],[128.50610690161025,37.11610890817465],[128.50607294999418,37.11628917489551],[128.5029852384731,37.119665059964056],[128.50175033247882,37.12085044305699],[128.4994642259731,37.12270797124816],[128.4983260473348,37.12373801766457],[128.49749337182817,37.124801835343355],[128.49655669776803,37.125787767090095],[128.4965539218214,37.12579069302723],[128.4956149946817,37.12561989686196],[128.49524464883913,37.12534536205976],[128.4940850339942,37.12486384112449],[128.4938498748175,37.124602359623914],[128.49325799482764,37.12462959455256],[128.49261700239006,37.12461219341837],[128.49110403970943,37.123852529709794],[128.49099654001336,37.12381778275022],[128.48953320303318,37.12171579869844],[128.48944601143114,37.121011993432276],[128.48785916540388,37.120354194384],[128.48684925381903,37.120066172922506],[128.48555587660493,37.117767224221545],[128.48542038259373,37.11762662812505],[128.48520014771321,37.11761606494184],[128.4808699409498,37.11168754027461],[128.48006807602027,37.111413504280335],[128.47927782709942,37.11132820199548],[128.4784042699038,37.110604773731325],[128.47780569753422,37.11015482631454],[128.4732157831679,37.11016371918566],[128.4723007663423,37.109843507793826],[128.46962452955256,37.110079645095176],[128.46816741780978,37.11020505941585],[128.4661843690461,37.10992481687061],[128.46623095319634,37.10987747936859],[128.46618930981774,37.109838032715544],[128.4660854367401,37.10991795470056],[128.4660455215535,37.10990963857785],[128.4659339402216,37.109879273401155],[128.4658777456058,37.10987091138453],[128.4658038589228,37.109868494682445],[128.46576316775372,37.10986837502908],[128.4655997461171,37.10986950203748],[128.46541938453228,37.10986838873928],[128.46294959849757,37.1103628743784],[128.46282916198686,37.11038980863883],[128.4627416865551,37.11041907397686],[128.4626679332447,37.11041186398495],[128.4625757687527,37.11037541300251],[128.4624989442835,37.11039522752812],[128.46225354828664,37.11045368975178],[128.46212794108573,37.110381556891255],[128.46174250540597,37.1101618404648],[128.46166829700357,37.110155338291186],[128.4615528460296,37.11034040290062],[128.46149819119884,37.11032451249076],[128.46127413241803,37.11044072618918],[128.4611980228958,37.11047248304686],[128.46110644738232,37.110432139259416],[128.46063241893125,37.1104240786141],[128.4605454792997,37.11042486988767],[128.4566164872112,37.11075252218291],[128.45651440723918,37.110809459290515],[128.45648233768839,37.1108398939674],[128.4564006663053,37.11088762413936],[128.45628846156234,37.11093797188215],[128.45608176332075,37.11112817002228],[128.4559771232511,37.11126417177427],[128.45585499532476,37.11138211484387],[128.45580849378672,37.11144357799125],[128.45550428528267,37.11173215255821],[128.4554232747641,37.111785869103635],[128.45531105839106,37.11184546973999],[128.45369248715554,37.1117990959344],[128.45326976857172,37.11177803197581],[128.45275444158693,37.11171684406164],[128.4526223056253,37.1117163950118],[128.45252130435142,37.11172150524785],[128.45238224404181,37.11174501820505],[128.45221660374241,37.111797340996624],[128.45109999349864,37.11224134291057],[128.4509972501361,37.11231160882524],[128.45001811191548,37.11182297146357],[128.44991333033707,37.11176432008837],[128.44986335105858,37.1117076097438],[128.44984178858058,37.11168663233226],[128.449699873272,37.11155004087736],[128.4495649679561,37.1114923496999],[128.4494754767584,37.111398170538266],[128.4493237943928,37.111252601591445],[128.44850068600198,37.11054975225372],[128.44848144829825,37.110447744638265],[128.448478637455,37.11038866701579],[128.448441485882,37.11028494566559],[128.44840646315635,37.110189108729706],[128.44835623736495,37.110135541667006],[128.44740091342965,37.10931241729436],[128.44737275118246,37.10929714718586],[128.4472880890317,37.10924368876153],[128.44720737159577,37.10919682606845],[128.44711690011175,37.109157713674314],[128.44702969145968,37.10912140687681],[128.4467513900341,37.10907243984066],[128.44670245284513,37.10905215430962],[128.44665766958636,37.109016010224956],[128.44627769483415,37.10820161320182],[128.4461325524881,37.10812039708222],[128.4461050881449,37.108108167905215],[128.44588531440368,37.107961907221764],[128.44574906592263,37.107870858253136],[128.44570419717434,37.10784367057105],[128.44532174237978,37.107467527504575],[128.4452787157783,37.10739285311425],[128.44507203080863,37.106969634964],[128.44505582537354,37.106935029953384],[128.44500579234264,37.106808089088986],[128.445012642812,37.10674501344524],[128.44502299840912,37.10666896953288],[128.44503636462684,37.1066011722576],[128.44500147737313,37.10651665274074],[128.44486822921613,37.106270888493015],[128.4448012632306,37.10626583435209],[128.44476428984328,37.106291341892465],[128.44461948503067,37.10649829861074],[128.4445841002295,37.10655554775038],[128.44443210980603,37.10682027290385],[128.44430750141444,37.10703098413105],[128.44391131633063,37.10763021894919],[128.4437280418224,37.10774037551015],[128.4434937983464,37.10792162656943],[128.4433047226748,37.10809728031233],[128.44316904020576,37.10838312046853],[128.44315849618079,37.10842324889159],[128.44307333383992,37.108688188092884],[128.44297547845005,37.10890277975545],[128.44291561610984,37.10901451663492],[128.44269186878364,37.10924113829867],[128.4425973565769,37.10927605082842],[128.44240642423281,37.1093422608306],[128.44232216736404,37.10934861149619],[128.44181715933513,37.10937463833819],[128.4417605979529,37.109375455149895],[128.44111816609112,37.10963954278194],[128.4410845490587,37.10965833260278],[128.44065149837564,37.10985045270889],[128.4403533601174,37.10987458758004],[128.44023173196382,37.10988232749392],[128.4401930025231,37.109887487098746],[128.4401313969218,37.10989059247727],[128.4398173992135,37.10995716235432],[128.43977406459186,37.10998270823074],[128.4394557146017,37.110149605685685],[128.4392788196963,37.110239665257],[128.4388029492312,37.11044606337066],[128.4387045497415,37.11053766478443],[128.43813726741652,37.110954562496914],[128.4380772925122,37.11098785895719],[128.43773715269714,37.11113029260474],[128.4375746166629,37.111240600530145],[128.4352377949797,37.11159313627573],[128.43524169917512,37.111568988049555],[128.4352483481222,37.11154934824687],[128.43012317391282,37.10367086579479],[128.42843200626848,37.103288696979845],[128.42798950809387,37.10336951758423],[128.4261130016276,37.10281019301557],[128.4230531614131,37.10365501572185],[128.4230628229648,37.10372197315185],[128.42300058335425,37.10411649136583],[128.42247670374076,37.10700368243483],[128.4224845528092,37.107328106855554],[128.42213584314433,37.10812446209927],[128.42236933136434,37.10866058067932],[128.4223726247659,37.10915011693627],[128.4221617776945,37.110157682906184],[128.42294127642796,37.11121860554058],[128.42311580143644,37.111457854724414],[128.42344745199492,37.11217670528493],[128.42354945048206,37.11223763547374],[128.4235494631296,37.112250746862],[128.4210462656199,37.11370344868739],[128.42075100819937,37.114941958359864],[128.41989480729282,37.11629900809491],[128.41974230328978,37.117217326703546],[128.42002011240442,37.11800339074528],[128.41241746811934,37.12175907011329],[128.41215492192535,37.1218851647154],[128.4110441137311,37.122134407307655],[128.41027545393231,37.12282983178875],[128.40989410827558,37.12331893530342],[128.40855466962736,37.125112673915254],[128.40728535089954,37.1263783761826],[128.40076767653593,37.12794930431678],[128.400316006495,37.12799651928389],[128.39600247257084,37.128594069263066],[128.3968297171765,37.12937063716483],[128.39702641985014,37.13007442684624],[128.39790020207914,37.1306158821457],[128.39792103665383,37.13103475528628],[128.3980926756441,37.13165303420509],[128.3993178970894,37.132354336475146],[128.4017929724072,37.134808472628855],[128.40131949186897,37.13542506576708],[128.40187145675395,37.13678264560131],[128.4014655816235,37.13759869403894],[128.40182222189745,37.13851620047973],[128.4036634141039,37.139618482207275],[128.4030242054581,37.14085703392318],[128.3918766843487,37.155133550001864],[128.39106769653094,37.15512131216391],[128.39072707893422,37.15508097499148],[128.39053990508452,37.1550222807434],[128.3902420217223,37.15501495088047],[128.3902387777601,37.15499142778386],[128.3901861159657,37.15498458640648],[128.39008168778156,37.15495197134438],[128.3847570197492,37.15783178083836],[128.38447995064402,37.15804635372467],[128.38433562082741,37.15810234816754],[128.38432159622428,37.15808572280659],[128.38419040106135,37.15797622117183],[128.3840973117386,37.157977862931695],[128.38398435220412,37.158030327864296],[128.38383144959775,37.15818844746048],[128.38369725107552,37.15820618346056],[128.3837005371175,37.15813150496589],[128.3837371497002,37.15802453373832],[128.38367258389272,37.157838330571174],[128.3836390804932,37.15773583526156],[128.38331306841954,37.15697774080017],[128.38331158416744,37.15695818978093],[128.38320157429587,37.15654506785673],[128.3831100506408,37.15649823136689],[128.3826812278282,37.15621339976097],[128.382404189776,37.15606114627915],[128.38221771759828,37.15593627131921],[128.38214339815465,37.155799591458816],[128.38210453585498,37.15571986262687],[128.38203553750884,37.15559313242544],[128.38197168579265,37.15543862153445],[128.38195760453732,37.15536794189669],[128.38185344813238,37.155223881363526],[128.38180608352246,37.15521501908288],[128.38174072691024,37.15521332531885],[128.38171841780542,37.15585582031335],[128.3815776656469,37.15587131115258],[128.3814616721895,37.155898754549185],[128.3814922804012,37.155985559430114],[128.38145942862639,37.155966599985774],[128.3814068524935,37.155803084769],[128.37801529707778,37.15171332900444],[128.3778054720022,37.15170535835291],[128.3768438615283,37.151695979695646],[128.37671733690877,37.15170410742981],[128.36539176902917,37.15760068453273],[128.3653528900645,37.157638013036284],[128.36486813084719,37.15772138646985],[128.36442172996234,37.15763210153895],[128.3644337373079,37.15643056062648],[128.36442736212024,37.15641635236091],[128.36445715817277,37.156243370955984],[128.3642601064152,37.15622510099031],[128.3642432809063,37.15618701365589],[128.36342006751522,37.15466971755409],[128.36338935908412,37.154622598361776],[128.3622651298246,37.15345118321971],[128.36216949914186,37.15269621058484],[128.35398483033825,37.15567479368149],[128.3531189163721,37.15611764997317],[128.35080180282074,37.15757156637235],[128.35068285815595,37.15728747442534],[128.3505121830571,37.1570342654611],[128.35015061810756,37.15693075078569],[128.34874921104407,37.156987887734246],[128.34844000935303,37.156858940752805],[128.34822141092337,37.15650759351882],[128.34763143652293,37.15649975402411],[128.347044265332,37.157177840304456],[128.34690447349686,37.157138233385766],[128.34601151761493,37.156317670162075],[128.3457006340632,37.15621366571567],[128.34537732398616,37.15610143652642],[128.3452590936522,37.15607498419483],[128.34519567540053,37.156120189714414],[128.34501928063744,37.15632379385347],[128.3448823693746,37.156313394147425],[128.34469950465535,37.156264102362826],[128.34402654625308,37.15628350163415],[128.34371785299808,37.15630500857857],[128.34343480914717,37.1563064463469],[128.34076985909869,37.15791575315009],[128.3406673243622,37.15797183157567],[128.3404862878113,37.15809257771607],[128.3400901060617,37.1581034960009],[128.33999732195616,37.158090516159184],[128.33988496877515,37.15807421195677],[128.3396304658002,37.158035703850416],[128.339482148088,37.157994428654824],[128.33709310260446,37.157852427275905],[128.3362324229027,37.15757189124545],[128.33218610232035,37.1515727288309],[128.33067274423158,37.15034316085705],[128.32837815416514,37.15256525234406],[128.32797017997697,37.1529418925218],[128.32659662990943,37.15025518282263],[128.32617888689612,37.14996236294622],[128.3261286997793,37.14994656097672],[128.3260364566901,37.14940847760239],[128.32598715807657,37.149105638585354],[128.32473294539147,37.14807344777398],[128.32444352256556,37.14795684008882],[128.32305526910022,37.1485090311701],[128.32201917127662,37.149221951691196],[128.3201016379758,37.14742815378128],[128.31978525334273,37.14726422850341],[128.31672041570542,37.147559330326985],[128.31586194509998,37.14721531402746],[128.31550299698418,37.14672270615014],[128.3154777667783,37.146703359039],[128.3145305480285,37.14629462248417],[128.31357611318018,37.1458646369062],[128.3121140941975,37.14500061796596],[128.3111120152932,37.14578388364735],[128.30951502022572,37.144925329503224],[128.30948115146052,37.14314636847305],[128.30931728065966,37.142803404611456],[128.30636092183022,37.13752592615662],[128.30544529431393,37.137159697299694],[128.30099303433897,37.13594865219474],[128.30072782871449,37.13527140612107],[128.27189077789834,37.151714360561684],[128.27189700636964,37.15214986835713],[128.26612358806193,37.15630522026867],[128.2661086734393,37.156993227512864],[128.2680448779367,37.16152846737003],[128.26862785441864,37.161615717229395],[128.26886108088124,37.16163602632232],[128.2696442667453,37.16170394742977],[128.27014547954823,37.16171970099609],[128.2764508643482,37.172280608993994],[128.2762992706756,37.1726817659202],[128.29668380357464,37.17718721592857],[128.29649368164206,37.17761388466526],[128.2960605989876,37.178463574157995],[128.29575022094943,37.182173959421874],[128.29566291751948,37.182563459387936],[128.29565567816795,37.18277865412453],[128.29562354674266,37.18328833784228],[128.29751182826323,37.183638510374664],[128.2975806068023,37.18364761560317],[128.29765006813165,37.18365586730464],[128.29813431668944,37.18361678051094],[128.29945233414094,37.183564048435976],[128.29992347589712,37.18358197605638],[128.3020739595793,37.18604622914226],[128.3026434102342,37.186623932842735],[128.30359954015762,37.186787149630035],[128.3044465615867,37.18688764422266],[128.30492385962583,37.1867708939883],[128.305986081681,37.187065815561404],[128.30638889548237,37.186260911690454],[128.3076562585243,37.18600312045852],[128.3141984077434,37.18999733928166],[128.31388476927575,37.190297580828016],[128.31299386062506,37.19114253647916],[128.31343612195496,37.192579219515885],[128.31370740977687,37.193328532624626],[128.3136855853135,37.19336931980811],[128.31285490789296,37.19505265323858],[128.31320287540026,37.195757757131176],[128.31308061146365,37.196482429511654],[128.3132494894373,37.19664161217329],[128.31535238229642,37.196698833894764],[128.31593357548022,37.1965634310136],[128.31986873460238,37.195911258180296],[128.32073770697602,37.19568816722346],[128.32175803063564,37.19554756604474],[128.32181038983,37.19621003951756],[128.32184600858312,37.19665817447297],[128.32166850956267,37.19691466911658],[128.32158576711683,37.19703413024669],[128.3215033611607,37.19757704884675],[128.32243504924102,37.19834741201958],[128.32315282176285,37.198111345558374],[128.32367421138974,37.19797770809627],[128.32400198479505,37.197640398623705],[128.32428008117424,37.19750130243029],[128.32469569393103,37.1974780786532],[128.32491113254196,37.19700683875248],[128.32491534116198,37.196995851151605],[128.32585999939792,37.19705596929184],[128.32602140432923,37.19720901995001],[128.32606718689468,37.19723075279221],[128.32621568143352,37.19728905714322],[128.3263359938717,37.197285742736696],[128.3263874755521,37.197291082843535],[128.32640325842675,37.1973083546797],[128.32650087537536,37.19741623235329],[128.32746421279205,37.19946953829117],[128.3274995272808,37.19959697461042],[128.32766754729792,37.199805978018404],[128.32810553285265,37.20027577776865],[128.32821886700668,37.20051720425972],[128.32858496922952,37.201202921163954],[128.32872206783938,37.201414521599304],[128.3289221063814,37.20158177136632],[128.32904887114577,37.20166538644335],[128.329162509864,37.201782931146404],[128.32965321640663,37.20238783587105],[128.32964782929182,37.20248222297736],[128.3297089626318,37.20289739473334],[128.32970770883924,37.202966387878135],[128.32969675046212,37.20310475068714],[128.32968813688905,37.20317552387995],[128.32925749287764,37.20403036282981],[128.3292543702497,37.20411317634397],[128.32925606404834,37.20420945158919],[128.3292394949544,37.20426876276059],[128.3291559689995,37.20438317082901],[128.32908511003677,37.20443718088024],[128.3290185708993,37.20447650229231],[128.32868100664234,37.20471791853183],[128.32866094257886,37.204838641249346],[128.3286556327612,37.204877273587115],[128.32865856233676,37.20500422693854],[128.32865079288592,37.20510285416609],[128.3296910290104,37.207397701979076],[128.32970985315197,37.20742676781449],[128.32988456905105,37.20779561991841],[128.32988009563869,37.20786183741896],[128.32986122243682,37.20790935121091],[128.32989862756332,37.207915122122834],[128.32987441267417,37.20797930895102],[128.32986945670933,37.209704171437544],[128.32989509842534,37.20978159904837],[128.3299318627806,37.20991069891893],[128.3299515452432,37.210009590237775],[128.33004288156016,37.210420481609],[128.3302131682865,37.21069618650319],[128.33028889348114,37.21083892385385],[128.33036435580135,37.21096646873306],[128.33046113013714,37.211165565930344],[128.33101504829594,37.21256008676082],[128.33111224044393,37.21270231613951],[128.33115573211055,37.21275362236439],[128.33129119269643,37.21288978598889],[128.33195686677212,37.21365011496835],[128.3320717124015,37.21377496186078],[128.33287463033867,37.21447151325647],[128.33292077012013,37.21453350188129],[128.33337557652033,37.215693184958226],[128.3333870278274,37.215743734955275],[128.33339658604686,37.21578670332568],[128.33338112710643,37.21578828466599],[128.32394442015078,37.21917077774351],[128.32382898252072,37.21923372004943],[128.32357414551433,37.21927739393437],[128.32311231881638,37.21930225855913],[128.32102544415346,37.21935142970625],[128.32100656081397,37.219358964374976],[128.32099575078033,37.21936456957408],[128.32090433907524,37.2194127535124],[128.32005731624642,37.219859719687335],[128.3192351812649,37.22080700976725],[128.31868369263347,37.22164937112725],[128.318649047726,37.22166157881868],[128.31639628743292,37.222421190246514],[128.31631785484444,37.222446270704594],[128.3165654109816,37.223320291688346],[128.3079354336886,37.217110639449814],[128.3053143763837,37.21710940054178],[128.30137967775784,37.21689530871503],[128.30124717905946,37.216580293127684],[128.30073882930293,37.21643749164224],[128.30036525822734,37.216332340205184],[128.30002860032175,37.216285079481665],[128.29998488664094,37.216241067709085],[128.29488957943465,37.21588574574785],[128.29468531596223,37.21563316820246],[128.2881743998463,37.21506494733294],[128.2878715527057,37.21464449720947],[128.27243261740094,37.20945679097235],[128.2713162040269,37.208921707381634],[128.2709998418064,37.20877624248121],[128.27032993334342,37.20867464556908],[128.2699374617589,37.20842347641739],[128.26844378159873,37.2079346362895],[128.25395376914935,37.22506947088503],[128.25394423268168,37.22545108227851],[128.25269347661705,37.227787996416765],[128.25266683545522,37.227902303572236],[128.24730866635502,37.22851205583721],[128.24695351468725,37.22817707440681],[128.24388840128887,37.226824006435116],[128.2437213401026,37.22700708690474],[128.24294568444267,37.22707322133592],[128.24096271851988,37.22757291379606],[128.2409039329313,37.227638014761474],[128.2405898824744,37.227983952752595],[128.24049918371256,37.22814369687041],[128.24039627808344,37.22843928209956],[128.24036362120287,37.22844497311983],[128.24002831732022,37.228503673049495],[128.23976744160035,37.22869982261746],[128.23928686856462,37.228853796916844],[128.23914130386288,37.22903889364867],[128.23912957104395,37.22905365762641],[128.23909765329861,37.229061031034],[128.23757680602714,37.22888376639821],[128.2375591677585,37.228934300864275],[128.23702619398793,37.22927777883599],[128.23665002448465,37.22894720902761],[128.2362413871383,37.228892905584686],[128.2353294759457,37.22833423308814],[128.2349207609648,37.22771258007291],[128.23445984318704,37.22734403323364],[128.2342644654073,37.2274113889588],[128.23368355535402,37.227544706973006],[128.2330236155464,37.22701914167552],[128.23172392208104,37.22701434974962],[128.23119134673985,37.22713250763008],[128.23081009608165,37.227332422630106],[128.2307249093862,37.227376956080924],[128.2301291739914,37.22731359211561],[128.22992804089554,37.227373677139525],[128.22921533305686,37.22758801523648],[128.22903128711602,37.22772478780986],[128.22867885618203,37.22798718983743],[128.22866517935825,37.22799014564228],[128.22678263034567,37.23237434884643],[128.22622808500896,37.232835365626784],[128.2219315740039,37.237695198893256],[128.22192376716953,37.23777918691112],[128.21464911981417,37.24604838867643],[128.21464565687177,37.24607460368154],[128.21312993163184,37.24581673334306],[128.21310799513117,37.245810487177344],[128.2120658419042,37.2453766796712],[128.17409861245437,37.23260505841317],[128.16404062128265,37.213308702545994],[128.1253222358382,37.23453731924993],[128.11150413136116,37.20767155165618],[128.03720306560032,37.18928064496871],[128.01921550291559,37.24437776806951],[127.97989775019303,37.258334282253266],[127.92158334535746,37.225045280425554],[127.93362553710759,37.17580286045303],[127.90163979883549,37.15180229570607],[127.87205003626993,37.164343968516285],[127.84739138408551,37.15293593643071],[127.78952364538557,37.14340827668379],[127.7555275181598,37.171440833401505],[127.74452465986985,37.21189740257894],[127.7465801770823,37.214788596156716],[127.75944069235,37.264291977914134],[127.75069483723593,37.29796777339103],[127.75177178665042,37.29770529061019],[127.76814797515826,37.309527147619775],[127.75966033960421,37.366981331471656],[127.75954226452649,37.36713188928649],[127.79457162460717,37.42434551678986],[127.79455844474505,37.42440163859761],[127.80046640044505,37.43864051866462],[127.80041371254586,37.43862973786442],[127.79626622739944,37.46304395774103],[127.76026387852899,37.5034192392237],[127.81046862897327,37.53778517436494],[127.81386838552825,37.56441285459359],[127.81377995595594,37.564608017216855],[127.79290245685173,37.58528955973904],[127.76758884464324,37.58230289831856],[127.76731848341944,37.58264194674718],[127.71588792305243,37.58806950078408],[127.71526464337649,37.58838072747054],[127.70789397677477,37.586353965757425],[127.70754156075685,37.586650862093556],[127.69743097282591,37.59184754650679],[127.69837135764675,37.59276717501084],[127.66170726870769,37.62432229248661],[127.63534534782174,37.63538737649934],[127.63482790518195,37.63538536945756],[127.60903113525227,37.64988237030668],[127.55946121643886,37.62848572118071],[127.55872606888067,37.628621808761274],[127.54371642756576,37.63785936073006],[127.54344449755911,37.63837021579318],[127.55063833274824,37.68688733484721],[127.55063947467438,37.68704218602075],[127.53840882702505,37.7200991657876],[127.53734262522799,37.72048692282705],[127.508114641248,37.719019465733055],[127.5070671693104,37.7205938771277],[127.51400490539135,37.738602998113535],[127.5156821845639,37.73957689394778],[127.5168714592926,37.74026739901714],[127.5226675714934,37.742788233760656],[127.54498749919725,37.76363172028802],[127.52753972501412,37.784067219653345],[127.52567834793379,37.78534528884811],[127.52632867678867,37.79935066506172],[127.52675615836827,37.79976544489748],[127.53244267759554,37.84215225744638],[127.53669821830727,37.84481158804279],[127.61705254486418,37.90599578768939],[127.60660211006525,37.94371269823554],[127.60373629154027,37.94449064839802],[127.58472254436221,37.96175228120187],[127.54737624478935,37.96645831006209],[127.54021886095005,37.9998679381613],[127.53987715267588,38.00056775473242],[127.47155598091673,38.00645256611817],[127.45524289460813,38.02520632317709],[127.45635635137705,38.02671668593617],[127.44835812532122,38.050511841683914],[127.44599706244628,38.05179744923254],[127.44707594223411,38.08072865081007],[127.43056502516414,38.1153948519065],[127.4299113720553,38.114819077229555],[127.37881591256038,38.118304668933945],[127.37861375177565,38.118428956454935],[127.32067032629682,38.09468376961723],[127.30780685944099,38.11894079017472],[127.30755257070895,38.11901944238137],[127.2801409493074,38.12514266162087],[127.27964644780144,38.125127879943015],[127.28610903994878,38.17952519190596],[127.28611198156418,38.18028120370732],[127.25860012630561,38.16889826906579],[127.25862090854297,38.16854435188437],[127.22093389872076,38.138373145177354],[127.18893153415279,38.16181940114458],[127.18821154061405,38.17945780508126],[127.18829044878312,38.17960886733756],[127.18927809875584,38.18801779773819],[127.18922517260414,38.18832123017771],[127.18138816512068,38.185955814696705],[127.18055972516179,38.18614599869608],[127.1489225708514,38.24234375454817],[127.14734021346035,38.241652167081995],[127.11054584094177,38.24156894534964],[127.11054584038686,38.2693620177918],[127.09512679965678,38.28138353789106],[127.13073465816868,38.30086456818448],[127.14640506335638,38.27882887555678],[127.17272256624888,38.30845283023073],[127.24236426228656,38.33313448840872],[127.28553748416243,38.3190409457866],[127.29103048309425,38.300941646103674],[127.3532002948708,38.30369538959052],[127.38372520154267,38.33433839187872],[127.46476519462236,38.3186350846697],[127.49830723136014,38.29987096992084],[127.57721539830209,38.3361447793406],[127.6219094484549,38.324754497594824],[127.68186003193264,38.325366232708625],[127.70289307373392,38.309159067623675],[127.75893324289085,38.31930443705978],[127.81065972384172,38.28812464615896],[127.86081375264055,38.28255443372146],[127.89490512127838,38.312914589275024],[127.94222791263535,38.30638452027367],[127.98246829607226,38.2806410169307],[128.0159659351575,38.289886647627206],[128.0795613895778,38.288255488235905],[128.11299165785547,38.327699344898086],[128.19791562074798,38.33303361063169],[128.2144531666887,38.36983304269721],[128.2674223748482,38.37680862209443],[128.2685386367666,38.41574753651878],[128.30981387312295,38.42035823979988],[128.32023585626837,38.46224523193618],[128.3455982264007,38.500619874793145],[128.33470076595734,38.5259663821765],[128.37204739210082,38.59062604168019],[128.40991840015968,38.552589818313805],[128.430131838897,38.490675016179104],[128.4609812094205,38.45491981642942],[128.45579087293785,38.433269403323294],[128.50894144469,38.37304724460137],[128.51267056620978,38.346258103412495],[128.54880989370014,38.301950820518755]];

        var 경기 = [[127.11054584094177,38.24156894534964],[127.14734021346035,38.241652167081995],[127.1489225708514,38.24234375454817],[127.18055972516179,38.18614599869608],[127.18138816512068,38.185955814696705],[127.18922517260414,38.18832123017771],[127.18927809875584,38.18801779773819],[127.18829044878312,38.17960886733756],[127.18821154061405,38.17945780508126],[127.18893153415279,38.16181940114458],[127.22093389872076,38.138373145177354],[127.25862090854297,38.16854435188437],[127.25860012630561,38.16889826906579],[127.28611198156418,38.18028120370732],[127.28610903994878,38.17952519190596],[127.27964644780144,38.125127879943015],[127.2801409493074,38.12514266162087],[127.30755257070895,38.11901944238137],[127.30780685944099,38.11894079017472],[127.32067032629682,38.09468376961723],[127.37861375177565,38.118428956454935],[127.37881591256038,38.118304668933945],[127.4299113720553,38.114819077229555],[127.43056502516414,38.1153948519065],[127.44707594223411,38.08072865081007],[127.44599706244628,38.05179744923254],[127.44835812532122,38.050511841683914],[127.45635635137705,38.02671668593617],[127.45524289460813,38.02520632317709],[127.47155598091673,38.00645256611817],[127.53987715267588,38.00056775473242],[127.54021886095005,37.9998679381613],[127.54737624478935,37.96645831006209],[127.58472254436221,37.96175228120187],[127.60373629154027,37.94449064839802],[127.60660211006525,37.94371269823554],[127.61705254486418,37.90599578768939],[127.53669821830727,37.84481158804279],[127.53244267759554,37.84215225744638],[127.52675615836827,37.79976544489748],[127.52632867678867,37.79935066506172],[127.52567834793379,37.78534528884811],[127.52753972501412,37.784067219653345],[127.54498749919725,37.76363172028802],[127.5226675714934,37.742788233760656],[127.5168714592926,37.74026739901714],[127.5156821845639,37.73957689394778],[127.51400490539135,37.738602998113535],[127.5070671693104,37.7205938771277],[127.508114641248,37.719019465733055],[127.53734262522799,37.72048692282705],[127.53840882702505,37.7200991657876],[127.55063947467438,37.68704218602075],[127.55063833274824,37.68688733484721],[127.54344449755911,37.63837021579318],[127.54371642756576,37.63785936073006],[127.55872606888067,37.628621808761274],[127.55946121643886,37.62848572118071],[127.60903113525227,37.64988237030668],[127.63482790518195,37.63538536945756],[127.63534534782174,37.63538737649934],[127.66170726870769,37.62432229248661],[127.69837135764675,37.59276717501084],[127.69743097282591,37.59184754650679],[127.70754156075685,37.586650862093556],[127.70789397677477,37.586353965757425],[127.71526464337649,37.58838072747054],[127.71588792305243,37.58806950078408],[127.76731848341944,37.58264194674718],[127.76758884464324,37.58230289831856],[127.79290245685173,37.58528955973904],[127.81377995595594,37.564608017216855],[127.81386838552825,37.56441285459359],[127.81046862897327,37.53778517436494],[127.76026387852899,37.5034192392237],[127.79626622739944,37.46304395774103],[127.80041371254586,37.43862973786442],[127.80046640044505,37.43864051866462],[127.79455844474505,37.42440163859761],[127.79457162460717,37.42434551678986],[127.75954226452649,37.36713188928649],[127.75966033960421,37.366981331471656],[127.76814797515826,37.309527147619775],[127.75177178665042,37.29770529061019],[127.75069483723593,37.29796777339103],[127.75944069235,37.264291977914134],[127.7465801770823,37.214788596156716],[127.74473889229826,37.213747381839575],[127.71783109113159,37.18380818310866],[127.71763705125346,37.183831314570746],[127.71523778210312,37.18148566298708],[127.71451717235057,37.18112170704128],[127.70753173319338,37.17093346510742],[127.70712925192542,37.17082436011628],[127.69480590348178,37.150183474632804],[127.69472770074562,37.14997838844164],[127.67021249421336,37.13610800288655],[127.64604527629734,37.15109429632734],[127.64603579539634,37.15108063485405],[127.63197318192705,37.15390543594678],[127.63195661573504,37.15391819146927],[127.63193455331954,37.153929175299254],[127.63545082744736,37.115267954706944],[127.63574809895894,37.11497155376889],[127.61338662608749,37.087858045791606],[127.61194320164803,37.087254177767555],[127.60477873635023,37.06879228237433],[127.60465483856676,37.06876588072504],[127.57797674541946,37.07534104130867],[127.56952205968616,37.04822688682432],[127.56954254472399,37.0481699139382],[127.56707389091,37.04751407739582],[127.56689497607194,37.04738061898354],[127.53481250856242,37.05195194995274],[127.53480073762644,37.051961490217735],[127.53438585368731,37.05227965382116],[127.53429636183519,37.05234312782888],[127.49472805661466,37.0494055703042],[127.49467757530023,37.04944970682387],[127.4603317842726,37.04615558561884],[127.45963285791262,37.02524463620583],[127.45973058493531,37.0250860043428],[127.44714853474542,37.011965419357196],[127.44708787946097,37.01086831891267],[127.40795308089255,36.99854503386099],[127.40736882429556,36.99852901313694],[127.40051655807157,36.96851951420808],[127.40153404660329,36.96767809296368],[127.39702678490286,36.964692612005635],[127.3963181982531,36.96446970179323],[127.37564901158117,36.94913722281673],[127.37565790376988,36.94865962359563],[127.33077224356259,36.93800662143752],[127.33041472054747,36.93766463126555],[127.28993839303588,36.89425698769248],[127.28960128741868,36.894113629995054],[127.28782886465115,36.893778879374906],[127.27328610692291,36.912245904108374],[127.21948575107018,36.93036048735337],[127.20129177056114,36.952000450433935],[127.14366362142856,36.97105116272797],[127.104831297411,36.965700138527076],[127.10454715602945,36.965762911884845],[127.10171462812292,36.963680451767225],[127.10168401655243,36.96361966398055],[127.0986368226935,36.948592308584516],[127.09862448810053,36.94858231044132],[127.08620069149451,36.94773239509572],[127.08566264370494,36.94753201566842],[127.02579668130889,36.92874638176359],[126.98555125761096,36.93248561003929],[126.98485932304035,36.93197386996364],[126.96523748576564,36.92383185217811],[126.95612652718258,36.9211417876591],[126.95224372958063,36.92013834912196],[126.93962592593128,36.91733090247394],[126.92665722447109,36.91102794197184],[126.91674289720265,36.906208052378744],[126.90970519398604,36.90160135376443],[126.90584281477464,36.91576040078059],[126.85748224621867,36.90834109061955],[126.83933896486263,36.91764524256273],[126.82534284206982,36.98162561846466],[126.78921884021071,36.99498236909106],[126.79763756939514,37.01413158668805],[126.7889566933846,37.02991113921943],[126.75110191678334,37.029818938911255],[126.75668110523733,37.05545536579377],[126.68383140967839,37.112334381220165],[126.66968818184645,37.15603560619222],[126.62337052734249,37.23398472632835],[126.54417976974617,37.21399530983295],[126.56361279679001,37.25630440063445],[126.61751332155481,37.25619997995991],[126.62219950561342,37.23657370746956],[126.65027960312659,37.22509327983326],[126.6874404399449,37.262111151207],[126.73372315905208,37.249366661887564],[126.78956491149248,37.244129484049054],[126.8207045381377,37.291860564397616],[126.73236591819078,37.30936520728669],[126.69259483930438,37.33394348501228],[126.70091249800197,37.354564102919014],[126.7544652746883,37.41757293948264],[126.77083792139524,37.43073681082609],[126.77090454544626,37.43094416277482],[126.77902288729182,37.45102090644409],[126.77923966572729,37.45164188169722],[126.7785287726508,37.46203559089818],[126.77845499939897,37.46207684428783],[126.74235365745886,37.48694907503676],[126.76027622579264,37.51591576136998],[126.7662043574505,37.554242375748366],[126.82093622383633,37.54075211803162],[126.82519276074486,37.522814433306856],[126.82519578544195,37.522808238386034],[126.82304057020718,37.48838072867327],[126.8230376824639,37.488187305447084],[126.82097447268102,37.48606231694577],[126.82085673566871,37.486020187012],[126.81980357805229,37.48567055977359],[126.81976421399546,37.48565923787357],[126.81932699742285,37.48550426825966],[126.81931674798676,37.48550200093884],[126.8193066787723,37.485430184635995],[126.81931983972237,37.485393317344666],[126.81940090559604,37.485034727018764],[126.81941319995495,37.4850015072935],[126.81928352572616,37.47517732083924],[126.81931070810403,37.47518412039784],[126.83839528045023,37.47537164469701],[126.8384452976402,37.47536073899915],[126.8394461875337,37.47517713177623],[126.83947233288954,37.47517829466936],[126.83994906384793,37.47486161420836],[126.84003079667828,37.474804584291],[126.84115804833667,37.4746768707427],[126.84121471815003,37.47468877833988],[126.84701576597996,37.481910137829594],[126.84745541682669,37.48202475115549],[126.85721499662559,37.48575426666921],[126.8572904217548,37.48576055748878],[126.85744917240672,37.48579453849624],[126.85748359866508,37.48580696970532],[126.86101647965847,37.48954727435679],[126.86111908361396,37.48966818340981],[126.8669766488407,37.49398740662242],[126.86690705120128,37.4940796800465],[126.8696158296022,37.49217121107502],[126.86951218576495,37.492131398705226],[126.87225463563813,37.490602443526996],[126.87244776128445,37.4906969705978],[126.8732976926301,37.490845443350864],[126.87355968425534,37.49106674311068],[126.8876603495564,37.45553719625955],[126.88786002402594,37.455567517759974],[126.90027471163853,37.437781105606675],[126.90033710425958,37.4377330168086],[126.9018794940231,37.436387033051965],[126.90202334628252,37.43628410575411],[126.9022056584959,37.43620062634847],[126.9022116812914,37.43618289959961],[126.90248415408749,37.43600855880374],[126.90258873335353,37.435962189453114],[126.90278381899759,37.43489155825632],[126.902789441085,37.43477555753823],[126.90708939028751,37.43354665430045],[126.9072539727338,37.4335177909577],[126.91353583639527,37.43919756950644],[126.91389165150723,37.439307081656374],[126.92200704606958,37.443250788318885],[126.92224736989289,37.44356039362581],[126.92835700490626,37.4498986888838],[126.928398718143,37.45021266066312],[126.95896605519613,37.439069769737706],[127.0113677119196,37.45540804563676],[127.01193901632813,37.45550936015528],[127.03453730738119,37.463457701068506],[127.03453412881018,37.46345207152503],[127.03382171137727,37.4615303084281],[127.03379944035794,37.46147034249536],[127.04005277532535,37.438237145594],[127.0707064662218,37.4302740280479],[127.07088469811113,37.43018832758625],[127.10434122885971,37.46217475459644],[127.1242069321964,37.466520884451874],[127.12448814562413,37.4666439205858],[127.12862836343653,37.468273039293685],[127.12906221307959,37.468066124977376],[127.1292010497195,37.46799981438472],[127.13279960034394,37.46839366435819],[127.13255718045988,37.468780283544284],[127.13233119637184,37.470329267874234],[127.13242927205611,37.47049710618933],[127.13247725154778,37.47058985631461],[127.13253354046908,37.470715303606816],[127.13750729597875,37.47415393761236],[127.13819772030355,37.47412690385656],[127.13833405043304,37.474135062339876],[127.13955999950241,37.47408657612582],[127.14715916268612,37.477295113416965],[127.14724152025043,37.478632972085876],[127.1478891941261,37.48281606016224],[127.1480912617321,37.48310644547842],[127.15374124653098,37.48705978381838],[127.15534133269671,37.487936636967056],[127.15545167116943,37.488059993318686],[127.15642724370568,37.488574396512355],[127.15838209058433,37.48989430463104],[127.1579182626353,37.4898938383289],[127.15735665485731,37.4899615877533],[127.15731681479384,37.489948638871475],[127.1572823190578,37.48995007189349],[127.15738637743016,37.48999210144077],[127.16100520056195,37.49906614103524],[127.16101136633914,37.49914215949103],[127.14006354547423,37.508904417324764],[127.14008527652372,37.50899702452757],[127.14260569987978,37.51435666315716],[127.14259476431539,37.51436343317848],[127.14558978122007,37.52147908644674],[127.14564264493674,37.521581231118425],[127.14566577557713,37.52193231127703],[127.14576900429451,37.5219406272],[127.15380211103749,37.532662505061],[127.15375620206102,37.53285825175579],[127.15959717026999,37.54108311607964],[127.15964745814631,37.54128351901674],[127.16518842283608,37.54448687726985],[127.16525354706339,37.544436665108684],[127.17320516148587,37.54556962940526],[127.17340689759621,37.54556905754166],[127.17361545708238,37.54553975037379],[127.17390587134958,37.545581845621655],[127.17783676304336,37.546142259660186],[127.17826131172255,37.54630155058717],[127.18267373726607,37.54774771227253],[127.18267635419156,37.547875810714345],[127.17920371745956,37.56894649053065],[127.17918103163179,37.56900339442535],[127.17913286048612,37.5691236950674],[127.17906344497867,37.569236981136434],[127.17867853259932,37.56973789588422],[127.17865401781775,37.56976862114466],[127.17839688143106,37.57037435266602],[127.17838317444362,37.570413231577895],[127.17805768631027,37.57106693568019],[127.17798236683704,37.57115320042141],[127.1777422872658,37.57217139361932],[127.17773117758638,37.572188303449664],[127.1549813353778,37.572043536648785],[127.15124362796432,37.569795300013745],[127.13474102620464,37.56802464152234],[127.13394554105413,37.56785322323571],[127.11687775807742,37.59549705107354],[127.1107515628852,37.642730279886464],[127.09286768996691,37.65445365833233],[127.09235192147821,37.65549186357224],[127.08517746569052,37.69038984798168],[127.08390529304403,37.69178245133874],[127.04892011684281,37.69281135361802],[127.04890068063864,37.69289300869862],[127.04529608963428,37.69236367591524],[127.04490459959014,37.69240549105115],[127.0121245963727,37.69737761882486],[127.00966648935855,37.69669983614291],[127.00552971892708,37.68486524762253],[127.00456697867835,37.6850798158096],[126.97965838947995,37.65603864772166],[126.98446162524,37.636547656841124],[126.9853780243647,37.63597004140536],[126.98546052305173,37.635934852968546],[126.98421472500995,37.636330826626114],[126.98395943515433,37.6364380599443],[126.95545866547994,37.65386004224214],[126.95544419558657,37.65387550726039],[126.94033521165288,37.65676784823662],[126.94018606220826,37.65667282689997],[126.93990472628454,37.6564454988786],[126.93966623205036,37.65624105992546],[126.93334917765836,37.6506144041979],[126.93282320184188,37.6504961523453],[126.92799207692265,37.64888777367512],[126.92797282834235,37.648873013884824],[126.9279365337432,37.64884012277876],[126.91580612419956,37.64514377118851],[126.91518932884668,37.64511629276755],[126.91104162625543,37.6459348748236],[126.91103341863632,37.64593839043465],[126.91043589523396,37.64627870692835],[126.91043851534273,37.646286231489526],[126.90996658247529,37.646662033192094],[126.90985753641255,37.6467592176747],[126.90634871420797,37.64782170891583],[126.90638506235992,37.64778767158853],[126.90743985641852,37.625094022984605],[126.9066271476982,37.624495625555106],[126.90522347409764,37.61921925372372],[126.90523109002538,37.619074543083734],[126.90126122233153,37.598488590691055],[126.90117136916932,37.59820751647032],[126.8854845330959,37.59100103420086],[126.8854670373862,37.591104920061944],[126.88561180509548,37.59152345197316],[126.88571526656891,37.591666584075185],[126.85362858539449,37.57379912026391],[126.81930252899605,37.592849755469835],[126.8186829622044,37.59371571335089],[126.79369544519706,37.58159385885768],[126.72566531581052,37.59184225525884],[126.67242225512966,37.63384201577993],[126.6512526639701,37.63798791865732],[126.62581676367968,37.602682107868596],[126.59156455632241,37.593011823985485],[126.55525015394878,37.610799259547775],[126.52786453649097,37.673336885178024],[126.52162632842435,37.71441350794218],[126.53068962250309,37.74999272062827],[126.52278344725434,37.79009815833313],[126.57534545594214,37.76270390442091],[126.63207754731701,37.7809414688451],[126.66303420603086,37.780683084593264],[126.67711930442589,37.81490471625847],[126.67135243467357,37.83477930571684],[126.69137528220524,37.86726930524636],[126.67172262465937,37.886836341609936],[126.66975920607399,37.94598424891284],[126.7024860450523,37.974318784556026],[126.71939400060927,37.96495208812375],[126.76313555488494,37.985071601762876],[126.78210176491983,37.980529571923235],[126.81763538245156,37.99760617125673],[126.82464784856943,38.020292054914655],[126.85237652496895,38.035089671732514],[126.86889640305323,38.08012015891089],[126.85632394731154,38.09698472497251],[126.90460393336087,38.13754874556678],[126.95753073776098,38.13465407122044],[126.95155382236294,38.15781827272319],[126.98558494917576,38.19976586780338],[126.97891270566116,38.22267883207458],[127.0482232828259,38.21791537795904],[127.06278847608796,38.240514863255484],[127.11054584094177,38.24156894534964]];

        var 대전 = [[127.40150573442256,36.48679951624792],[127.40237162713332,36.486049226720844],[127.40583116302797,36.45493887822377],[127.40629396019843,36.454913086274914],[127.43213116720865,36.45662159419439],[127.43378989155006,36.45653731526793],[127.46155957004515,36.45509361223148],[127.4617928230305,36.455337148641355],[127.47987139318172,36.477063983032316],[127.48061100717518,36.47720999255097],[127.48423168252953,36.475797777779924],[127.48427610887815,36.4756241273186],[127.4960880025384,36.454788546508105],[127.49646645707624,36.45490693805522],[127.5035961999129,36.454045572323665],[127.5037888450623,36.45370091965119],[127.49376705635758,36.42524291590289],[127.49391176970472,36.42506434044689],[127.53743516505264,36.420317939994945],[127.53778279146553,36.42012291038361],[127.54228073457993,36.41927919632655],[127.54185998818646,36.41585756869269],[127.5470727467962,36.40845961594542],[127.54707951164634,36.408454519716564],[127.55816517314781,36.399675947569705],[127.55878010175535,36.399856150629894],[127.55919218532583,36.39914654004481],[127.55967899075192,36.39821888953578],[127.55508024348465,36.39518678315378],[127.55494637061842,36.39514713936509],[127.52480467423321,36.38380225513675],[127.5193690338617,36.35035287645941],[127.50134180998748,36.34006990064799],[127.49257720191125,36.23795395068193],[127.44871641082584,36.19672289194393],[127.40799929928723,36.212892945867274],[127.39025797769695,36.2622709500042],[127.35950194982368,36.262586342451286],[127.36419718015068,36.21890129271374],[127.32394583489626,36.203158372814976],[127.31564105913714,36.22081536998303],[127.2831547927397,36.23529359092193],[127.28650666227946,36.26495018611541],[127.28624581898431,36.264895312282356],[127.25877186484053,36.2760505815688],[127.25975274393714,36.32724953025797],[127.27912600112028,36.3448265782094],[127.28212428234082,36.414603964631645],[127.29426961581308,36.421915039124464],[127.29425168764308,36.42219502183513],[127.3263167270464,36.422208976417835],[127.35579857644919,36.450273038129],[127.38008138312885,36.499215976257155],[127.38033654837668,36.49953929874922],[127.38096688868224,36.499660645040414],[127.38230967353526,36.49992444824916],[127.38385497104343,36.500230690026456],[127.38538373894964,36.499444883432616],[127.38626339999793,36.498985556577466],[127.39575988535204,36.49195602619904],[127.39614094465608,36.491708392279],[127.40150573442256,36.48679951624792]];

        var  부산1 = [[128.8286558122081,35.08993281542374],[128.85089960669623,35.04208294961921],[128.82733718568332,35.01352154743623],[128.80604226717355,35.047352310385875],[128.8115148972471,35.077580388338006],[128.81150291250765,35.08298883134139],[128.81809381762187,35.08300068674461],[128.82455549915403,35.08623761986571],[128.82643223135477,35.08621402273716],[128.8286558122081,35.08993281542374]];

        var 부산2 = [[129.0701978239403,35.06030671194276],[129.03163031633449,35.09401681172881],[129.05882143443415,35.100532114582265],[129.079246151107,35.08477340482591],[129.0701978239403,35.06030671194276]];

        var 부산3 = [[128.8217153474745,35.097742993072465],[128.83553728257522,35.10213291210307],[128.83748295121924,35.10352002367108],[128.83371285406793,35.129410523165284],[128.8329750327898,35.129940986011654],[128.82908642439637,35.12832206021285],[128.8280851864696,35.12827971072031],[128.82657180449294,35.12952660343006],[128.82580642694262,35.12999224676259],[128.80731620984454,35.13947956188185],[128.80766971141267,35.14044294688121],[128.80715198734205,35.14214929653768],[128.8066853695431,35.14250378060486],[128.80515689866908,35.14211493991196],[128.8045656207218,35.14193547641024],[128.8035597431441,35.14186061216291],[128.82534164321078,35.15596541168969],[128.8257722315986,35.15571475589506],[128.8270573475437,35.155601753880205],[128.82752650377512,35.15558862721815],[128.83395407960285,35.15759332513056],[128.8349959811177,35.15823965342557],[128.84293309138636,35.15798870605143],[128.84354473240487,35.15846971787538],[128.84360339665156,35.15866821990179],[128.84364598511286,35.15880795715872],[128.84418311810745,35.15990783948597],[128.84416987277123,35.159974503623594],[128.84407390585486,35.16046303043565],[128.844541465186,35.16285563085456],[128.84492910315922,35.16310375263311],[128.84599970902946,35.16354171047499],[128.8531496421853,35.166365300491776],[128.85413617720576,35.166207991434355],[128.85637982224003,35.166903749794166],[128.85763374998777,35.16693734102218],[128.86189476031447,35.167724717566216],[128.86334373937126,35.1678354592772],[128.86758335621585,35.15895533976436],[128.8675045369461,35.159092295045696],[128.86679997533707,35.159645616319594],[128.86675969172862,35.159640830428934],[128.8666465053035,35.159757529121464],[128.86652798016496,35.159742258853974],[128.86560479950168,35.159200406824745],[128.865547809227,35.15913721144942],[128.86597345842853,35.1572328011464],[128.8660973179306,35.15708544322157],[128.86721884817058,35.155862686683484],[128.86738250564798,35.15559656308447],[128.8673864579176,35.155589319907975],[128.86747602127375,35.15545740598176],[128.8679702786203,35.154862192068016],[128.86850978738406,35.15420726587],[128.87398521251404,35.15103264424935],[128.87401716645243,35.15103552632151],[128.87401887904477,35.15103564559747],[128.87411134447225,35.150925929821575],[128.87436278890456,35.15063127026431],[128.87527708328554,35.15114629625637],[128.87567696161133,35.15073077166292],[128.87658841951404,35.15124161048615],[128.8752927199552,35.15288985777624],[128.87503504206947,35.15319687170203],[128.879210219067,35.15947969442886],[128.87929776696134,35.159409486272175],[128.87931119821084,35.15936703782111],[128.87984646721904,35.15946983430609],[128.8814329262813,35.161276892048136],[128.88139369576734,35.1613304481836],[128.8816730860033,35.16174318381414],[128.88077427663129,35.16204228091022],[128.877534171623,35.168489411422684],[128.87709433579258,35.1687662985467],[128.874016703843,35.17391677321857],[128.87594519993388,35.17312008055802],[128.88043426208856,35.17152975865671],[128.88059099356644,35.171499727930495],[128.8801415574966,35.175548107728915],[128.8801159673433,35.177580685549245],[128.8800443781628,35.17886668864722],[128.88014678301641,35.17973938949457],[128.88027117800036,35.18030083894472],[128.88067549520954,35.18090724045797],[128.88141714948162,35.182815812877024],[128.88075603721077,35.18357082117523],[128.8794132116773,35.184873315575125],[128.87919206848966,35.18514682385321],[128.8784546717492,35.18592763854361],[128.8782127612832,35.18622287399454],[128.87591583380288,35.191138100854424],[128.87608865171592,35.191806522509296],[128.87595938831475,35.19316819263701],[128.87559125923957,35.19363025628856],[128.87372939512176,35.20415196436847],[128.87394155300692,35.20426161118658],[128.88273697268224,35.21155099673224],[128.8828635526315,35.21163829895658],[128.88490550945943,35.21380275565569],[128.8853132469155,35.21402874549333],[128.89546681440714,35.21337829824597],[128.89661225429313,35.21314239454059],[128.90109855343792,35.214333728861824],[128.90307926891003,35.214878956113395],[128.9046679925146,35.2153013274454],[128.9069158180091,35.21510192273846],[128.90750283027768,35.21511112263966],[128.90857247524372,35.21527366659441],[128.90892304056365,35.21532615897994],[128.90916306462597,35.215977980095026],[128.90895201989997,35.21618308288308],[128.90810497423345,35.2170139701118],[128.90775741270662,35.217354707431255],[128.90511088248212,35.22013002920298],[128.9059694218441,35.22069890758166],[128.90601056663485,35.22072670138926],[128.90643274187053,35.221008578140804],[128.9075987436609,35.22179494612635],[128.9102851230928,35.22289076359769],[128.91078605710703,35.222797670341876],[128.91086498352706,35.22278290248008],[128.91171964373433,35.22262692056897],[128.91421739486552,35.220141906411094],[128.91665298961416,35.21696081385831],[128.94570713684303,35.22725543767479],[128.94571052222085,35.227253276979816],[128.9482706322187,35.225334022726756],[128.9485347467171,35.22524204781821],[128.9499184594479,35.22523977888191],[128.95067833086742,35.22524091984352],[128.9527547424582,35.22525814024004],[128.9577864485801,35.22541965967409],[128.9596157715651,35.22569449506154],[128.96068072878808,35.22585186434257],[128.97469436045435,35.22761574703039],[128.9749787561858,35.227681228840105],[128.97808528883698,35.228396093374045],[128.97842106334699,35.22847199726106],[128.98608726921503,35.230527187113836],[128.98627453532288,35.23060236073151],[129.017120481692,35.27545953165717],[129.0445979187947,35.27450352632453],[129.05836190721868,35.2948355324119],[129.05894500090474,35.29497908232251],[129.11238676001895,35.3117066049417],[129.11237590078395,35.311751707241804],[129.1123438250838,35.31249992494977],[129.1121029772709,35.3130679024924],[129.11209204204582,35.313176091145124],[129.11204819920943,35.31331300734739],[129.1120377560807,35.31374404280619],[129.1119392611366,35.314131695272685],[129.12594533876754,35.33342452625021],[129.12578140111967,35.33400159154616],[129.1257161023207,35.33443428750269],[129.1239600475882,35.33714007098977],[129.12627711743167,35.341646213698205],[129.12635445269856,35.34186956321738],[129.12842504435397,35.34370584330998],[129.12716218522547,35.345086445917154],[129.13458728959856,35.351450825501665],[129.1344668210102,35.35178453016032],[129.13455598761445,35.352469358418276],[129.1345121170586,35.352604596069774],[129.1346777959218,35.35301012731486],[129.13330495410912,35.35440855991351],[129.13340590939185,35.35560724016797],[129.13324093077094,35.355869641258735],[129.13331729528633,35.35614609361373],[129.13182445355025,35.3574026007957],[129.13180272709602,35.357582916792836],[129.13134116772363,35.3579529116156],[129.1313085450876,35.35812427906383],[129.1279127505889,35.360813809372054],[129.12795698854953,35.360921346735765],[129.1275504112542,35.36121977381275],[129.1275507372529,35.36133691886838],[129.12748452823183,35.36135498822276],[129.1275065217239,35.36144467342097],[129.1274298493799,35.36147223514707],[129.12745202233472,35.36154436292243],[129.1272764088294,35.36188706651472],[129.12708972049123,35.36214857226193],[129.12707909321546,35.362319835821665],[129.12667235921074,35.362527634790894],[129.12670549420386,35.36262616217485],[129.1211527675642,35.365219118288394],[129.12114245387997,35.36567887407824],[129.11808624793184,35.3675745436646],[129.1183072113967,35.368268339623704],[129.11817896370542,35.36901850803685],[129.11817629128237,35.369034609521165],[129.13845161983105,35.36609311964499],[129.1384952213077,35.36603898104478],[129.13858315642796,35.36584059104385],[129.13859397169733,35.36576845489894],[129.13862677143646,35.365669307467336],[129.13847199152966,35.365209808524746],[129.13848295938226,35.36518272091261],[129.13849377449924,35.365110575967144],[129.13876947592107,35.365344641586624],[129.13874740914972,35.36540768733408],[129.13874738624213,35.365497793783426],[129.13873664258801,35.36553388464632],[129.13874798638977,35.36565111559254],[129.13859423146087,35.36592163384613],[129.14506166394102,35.36446297301507],[129.1450613233778,35.36434583795521],[129.1451719190132,35.36458900964531],[129.14512802183398,35.36469735615101],[129.14512880038998,35.365012728021426],[129.14510682976172,35.36503987563977],[129.15911557755632,35.360272383530784],[129.16110614139436,35.35940388197445],[129.16104931232326,35.3588187217035],[129.18279025016287,35.35395686584915],[129.1824081179675,35.355156260080655],[129.19876242016983,35.36649634208822],[129.19851094127776,35.36717273913641],[129.19869864677105,35.36732567156994],[129.19800787878762,35.36846243961606],[129.19846244655747,35.36982255405108],[129.1978282063966,35.371410063967375],[129.19918182757723,35.37597718880569],[129.19359479280885,35.38208857969253],[129.19444476205146,35.38307857878882],[129.19434645852135,35.383448266903635],[129.201169890842,35.3877816761035],[129.25082479622543,35.38584160343394],[129.25029925632225,35.38675304548247],[129.26552213183123,35.38714429075133],[129.26557498580036,35.38651337888533],[129.26580440591601,35.38599911690706],[129.26574757075528,35.385368300571834],[129.26584706042385,35.38518790941956],[129.26584595926866,35.385160755113716],[129.26597711902826,35.38490809896068],[129.26598753312675,35.3847638652522],[129.26610721073018,35.3843219211977],[129.26608472399556,35.38413269361165],[129.26612795982498,35.38387127068365],[129.2680762098698,35.3806402310514],[129.2679754602668,35.38009963499199],[129.2733410609669,35.375310780231565],[129.27334079966957,35.375301776638324],[129.27353870136386,35.37521118124141],[129.27353872344483,35.37517513742709],[129.27367052814756,35.37509366775876],[129.27367028883725,35.3750486203512],[129.27374693809375,35.37497604338884],[129.2737248548595,35.37492228565513],[129.2773441783289,35.371362859282705],[129.2775703394912,35.36992924391258],[129.2849312544691,35.35073144290537],[129.2838810230918,35.346083091198935],[129.28256927327715,35.345121029343],[129.28210216778274,35.343897044248834],[129.28082289658963,35.34292660435531],[129.28028056186065,35.34200843360423],[129.27991632594146,35.34163078899934],[129.27975076455886,35.34148692228055],[129.27971855391553,35.3414413443577],[129.27969360722307,35.34140971119821],[129.27966757589206,35.34137613366589],[129.2796625939431,35.34137003416752],[129.28076023494202,35.34074546315246],[129.28172668567484,35.34028358695793],[129.2855068940476,35.33922027743859],[129.28908633964033,35.3404736504065],[129.29099144329987,35.33800843284405],[129.30218389451247,35.333627756673714],[129.30550336086927,35.32475626104834],[129.29921399013207,35.31855583871204],[129.28816405069142,35.32116332322724],[129.2681926512343,35.321924384336576],[129.25308389841564,35.24657537932709],[129.22203678969854,35.21309366721178],[129.22381917068205,35.18599582680328],[129.2005714990838,35.17970036418586],[129.18093170784093,35.154853783320014],[129.11965789494383,35.154216785103415],[129.11046678472076,35.13423353296701],[129.12339509348328,35.09943768065054],[129.06737998399464,35.108161209271],[129.04997088021207,35.12352857492998],[129.02522304004748,35.09351164537899],[129.02228662787655,35.06192826369905],[128.9581638743738,35.050645028008304],[128.95077472375988,35.080006791354975],[128.9262454142456,35.09302242324228],[128.89537839558102,35.07903722905874],[128.83760730243742,35.083390645082815],[128.8217153474745,35.097742993072465]];;

        var 서울 = [[127.12448814562413,37.4666439205858],[127.1242069321964,37.466520884451874],[127.10434122885971,37.46217475459644],[127.07088469811113,37.43018832758625],[127.0707064662218,37.4302740280479],[127.04005277532535,37.438237145594],[127.03379944035794,37.46147034249536],[127.03382171137727,37.4615303084281],[127.03453412881018,37.46345207152503],[127.03453730738119,37.463457701068506],[127.01193901632813,37.45550936015528],[127.0113677119196,37.45540804563676],[126.95896605519613,37.439069769737706],[126.928398718143,37.45021266066312],[126.92835700490626,37.4498986888838],[126.92224736989289,37.44356039362581],[126.92200704606958,37.443250788318885],[126.91389165150723,37.439307081656374],[126.91353583639527,37.43919756950644],[126.9072539727338,37.4335177909577],[126.90708939028751,37.43354665430045],[126.902789441085,37.43477555753823],[126.90278381899759,37.43489155825632],[126.90258873335353,37.435962189453114],[126.90248415408749,37.43600855880374],[126.9022116812914,37.43618289959961],[126.9022056584959,37.43620062634847],[126.90202334628252,37.43628410575411],[126.9018794940231,37.436387033051965],[126.90033710425958,37.4377330168086],[126.90027471163853,37.437781105606675],[126.88786002402594,37.455567517759974],[126.8876603495564,37.45553719625955],[126.87355968425534,37.49106674311068],[126.8732976926301,37.490845443350864],[126.87244776128445,37.4906969705978],[126.87225463563813,37.490602443526996],[126.86951218576495,37.492131398705226],[126.8696158296022,37.49217121107502],[126.86690705120128,37.4940796800465],[126.8669766488407,37.49398740662242],[126.86111908361396,37.48966818340981],[126.86101647965847,37.48954727435679],[126.85748359866508,37.48580696970532],[126.85744917240672,37.48579453849624],[126.8572904217548,37.48576055748878],[126.85721499662559,37.48575426666921],[126.84745541682669,37.48202475115549],[126.84701576597996,37.481910137829594],[126.84121471815003,37.47468877833988],[126.84115804833667,37.4746768707427],[126.84003079667828,37.474804584291],[126.83994906384793,37.47486161420836],[126.83947233288954,37.47517829466936],[126.8394461875337,37.47517713177623],[126.8384452976402,37.47536073899915],[126.83839528045023,37.47537164469701],[126.81931070810403,37.47518412039784],[126.81928352572616,37.47517732083924],[126.81941319995495,37.4850015072935],[126.81940090559604,37.485034727018764],[126.81931983972237,37.485393317344666],[126.8193066787723,37.485430184635995],[126.81931674798676,37.48550200093884],[126.81932699742285,37.48550426825966],[126.81976421399546,37.48565923787357],[126.81980357805229,37.48567055977359],[126.82085673566871,37.486020187012],[126.82097447268102,37.48606231694577],[126.8230376824639,37.488187305447084],[126.82304057020718,37.48838072867327],[126.82519578544195,37.522808238386034],[126.82519276074486,37.522814433306856],[126.82093622383633,37.54075211803162],[126.7662043574505,37.554242375748366],[126.79369544519706,37.58159385885768],[126.8186829622044,37.59371571335089],[126.81930252899605,37.592849755469835],[126.85362858539449,37.57379912026391],[126.88571526656891,37.591666584075185],[126.88561180509548,37.59152345197316],[126.8854670373862,37.591104920061944],[126.8854845330959,37.59100103420086],[126.90117136916932,37.59820751647032],[126.90126122233153,37.598488590691055],[126.90523109002538,37.619074543083734],[126.90522347409764,37.61921925372372],[126.9066271476982,37.624495625555106],[126.90743985641852,37.625094022984605],[126.90638506235992,37.64778767158853],[126.90634871420797,37.64782170891583],[126.90985753641255,37.6467592176747],[126.90996658247529,37.646662033192094],[126.91043851534273,37.646286231489526],[126.91043589523396,37.64627870692835],[126.91103341863632,37.64593839043465],[126.91104162625543,37.6459348748236],[126.91518932884668,37.64511629276755],[126.91580612419956,37.64514377118851],[126.9279365337432,37.64884012277876],[126.92797282834235,37.648873013884824],[126.92799207692265,37.64888777367512],[126.93282320184188,37.6504961523453],[126.93334917765836,37.6506144041979],[126.93966623205036,37.65624105992546],[126.93990472628454,37.6564454988786],[126.94018606220826,37.65667282689997],[126.94033521165288,37.65676784823662],[126.95544419558657,37.65387550726039],[126.95545866547994,37.65386004224214],[126.98395943515433,37.6364380599443],[126.9841989529393,37.63633745489391],[126.98421472500995,37.636330826626114],[126.98546052305173,37.635934852968546],[126.9853780243647,37.63597004140536],[126.9841989529393,37.63633745489391],[126.98446162524,37.636547656841124],[126.97965838947995,37.65603864772166],[127.00456697867835,37.6850798158096],[127.00552971892708,37.68486524762253],[127.00966648935855,37.69669983614291],[127.0121245963727,37.69737761882486],[127.04490459959014,37.69240549105115],[127.04529608963428,37.69236367591524],[127.04890068063864,37.69289300869862],[127.04892011684281,37.69281135361802],[127.08390529304403,37.69178245133874],[127.08517746569052,37.69038984798168],[127.09235192147821,37.65549186357224],[127.09286768996691,37.65445365833233],[127.1107515628852,37.642730279886464],[127.11687775807742,37.59549705107354],[127.13394554105413,37.56785322323571],[127.13474102620464,37.56802464152234],[127.15124362796432,37.569795300013745],[127.1549813353778,37.572043536648785],[127.17773117758638,37.572188303449664],[127.1777422872658,37.57217139361932],[127.17798236683704,37.57115320042141],[127.17805768631027,37.57106693568019],[127.17838317444362,37.570413231577895],[127.17839688143106,37.57037435266602],[127.17865401781775,37.56976862114466],[127.17867853259932,37.56973789588422],[127.17906344497867,37.569236981136434],[127.17913286048612,37.5691236950674],[127.17918103163179,37.56900339442535],[127.17920371745956,37.56894649053065],[127.18267635419156,37.547875810714345],[127.18267373726607,37.54774771227253],[127.17826131172255,37.54630155058717],[127.17783676304336,37.546142259660186],[127.17390587134958,37.545581845621655],[127.17361545708238,37.54553975037379],[127.17340689759621,37.54556905754166],[127.17320516148587,37.54556962940526],[127.16525354706339,37.544436665108684],[127.16518842283608,37.54448687726985],[127.15964745814631,37.54128351901674],[127.15959717026999,37.54108311607964],[127.15375620206102,37.53285825175579],[127.15380211103749,37.532662505061],[127.14576900429451,37.5219406272],[127.14566577557713,37.52193231127703],[127.14564264493674,37.521581231118425],[127.14558978122007,37.52147908644674],[127.14259476431539,37.51436343317848],[127.14260569987978,37.51435666315716],[127.14008527652372,37.50899702452757],[127.14006354547423,37.508904417324764],[127.16101136633914,37.49914215949103],[127.16100520056195,37.49906614103524],[127.15738637743016,37.48999210144077],[127.1572823190578,37.48995007189349],[127.15731681479384,37.489948638871475],[127.15735665485731,37.4899615877533],[127.1579182626353,37.4898938383289],[127.15838209058433,37.48989430463104],[127.15642724370568,37.488574396512355],[127.15545167116943,37.488059993318686],[127.15534133269671,37.487936636967056],[127.15374124653098,37.48705978381838],[127.1480912617321,37.48310644547842],[127.1478891941261,37.48281606016224],[127.14724152025043,37.478632972085876],[127.14715916268612,37.477295113416965],[127.13955999950241,37.47408657612582],[127.13833405043304,37.474135062339876],[127.13819772030355,37.47412690385656],[127.13750729597875,37.47415393761236],[127.13253354046908,37.470715303606816],[127.13247725154778,37.47058985631461],[127.13242927205611,37.47049710618933],[127.13233119637184,37.470329267874234],[127.13255718045988,37.468780283544284],[127.13279960034394,37.46839366435819],[127.1292010497195,37.46799981438472],[127.12906221307959,37.468066124977376],[127.12862836343653,37.468273039293685],[127.12448814562413,37.4666439205858]];

        var 세종 = [[127.20793603234716,36.71918904581354],[127.20792684751393,36.71917607776152],[127.2078769797854,36.71919046333673],[127.20787710929177,36.71918850565105],[127.20792684751393,36.71917607776152],[127.20789089293503,36.719119287386114],[127.22822551880574,36.708468998779054],[127.22822008391248,36.70845514952263],[127.22823057936279,36.70846556314337],[127.28126367067202,36.69057059579415],[127.28125389722467,36.69051337150437],[127.28127028658162,36.69055905464245],[127.28529006643944,36.690671454249056],[127.28584071664231,36.69054597487386],[127.28695192725102,36.69042227135924],[127.28778966925744,36.689957120324],[127.28779203249857,36.68993638868247],[127.28802252401164,36.689552489604154],[127.29315875989967,36.686891527960476],[127.29555230314855,36.68662128819838],[127.29601000174823,36.686182800890414],[127.29666145531564,36.68577021395261],[127.30599100648968,36.68286949025073],[127.30675988177548,36.6827048689683],[127.30713492689173,36.68241042349506],[127.30762517941348,36.68202247597364],[127.30748615036502,36.681368114350946],[127.30553179956138,36.67468315246674],[127.30538838486908,36.674441673790525],[127.30524851798377,36.674294354514494],[127.30556452598307,36.67353875289289],[127.30542032525797,36.673168100096746],[127.30549221552579,36.67283651265932],[127.30598724495917,36.67248987335183],[127.3060918613474,36.67224860128498],[127.3059754062775,36.671330718487695],[127.30120529359405,36.663241312164345],[127.30101457836184,36.66204722630182],[127.29974560292538,36.6621899850743],[127.2985492684561,36.66154602975927],[127.29541403878942,36.65980079903912],[127.29505040306023,36.65971297941831],[127.29293929048616,36.65983513867207],[127.29209366753187,36.65945103727195],[127.28578748471577,36.65007050207586],[127.28517652597971,36.650072617724085],[127.28491958095898,36.6499578569263],[127.2844024803419,36.64999247286601],[127.28406227151227,36.64941340737435],[127.28410399092954,36.64873572508502],[127.28367087545615,36.64870082346342],[127.28346345107761,36.647798764912515],[127.28363057457275,36.64735889925182],[127.28332041653829,36.64714120012397],[127.28284968060139,36.64696494268962],[127.28269782918669,36.646682032028856],[127.28215673979534,36.645641130659904],[127.28161958747624,36.645142891240766],[127.28196914305916,36.64406615879597],[127.28277801148316,36.642293808669294],[127.28183221680469,36.64193460486294],[127.28058671166131,36.6413784785834],[127.28005813754115,36.640885328523275],[127.27988656819622,36.64080330486722],[127.27961014992174,36.64073834655767],[127.2795157376238,36.640696890590334],[127.27839024150103,36.64135365962691],[127.27835966321695,36.6413551168914],[127.27616210578105,36.640412381239344],[127.27605058136636,36.64008306205531],[127.27599535796874,36.64008410673377],[127.2767369516302,36.63767625620222],[127.276855106548,36.63735861562898],[127.27697767395216,36.63712828438764],[127.27736026492623,36.6365905052916],[127.27771025399251,36.636302642278146],[127.27837175171065,36.63574915743992],[127.27858432173299,36.63550038442548],[127.27892529425306,36.63402556131637],[127.27902427630545,36.63384677243725],[127.27932104825264,36.633555610274726],[127.2793510933541,36.633540825060926],[127.27939744629366,36.63351802624119],[127.27947818609803,36.63350317681572],[127.2849683694301,36.63399776355129],[127.28501783554661,36.63377242859195],[127.28724472009708,36.63612087143955],[127.28738504595137,36.63606344996632],[127.29140803581117,36.63643738428618],[127.29203474903925,36.63583253404632],[127.29220849637726,36.634928296802194],[127.29220512498176,36.63491176926981],[127.29167449391241,36.63385086559311],[127.29173502415274,36.633781504223585],[127.29188354422375,36.62533979195654],[127.29201158924211,36.62503680851586],[127.29218257100409,36.624836998546606],[127.29235957948262,36.624747976910825],[127.29640912078843,36.61897500928468],[127.2988830749215,36.61866137747316],[127.29960715850451,36.6179441706347],[127.29978773484743,36.6176502922248],[127.30006160734733,36.61719374990013],[127.30017576182085,36.616790668896314],[127.30026479634921,36.61645113396209],[127.30021766482857,36.61596656129217],[127.30165572963566,36.61282251041858],[127.30180732474165,36.612813742418105],[127.30118450511816,36.61169662990931],[127.30117659435365,36.61161939554949],[127.30145108811489,36.6102314206329],[127.30136195693741,36.610216740714094],[127.30143375493505,36.609851223353004],[127.30158956382209,36.60929574246767],[127.30120784386847,36.609197696050984],[127.30124089402007,36.60907623286527],[127.30129197178773,36.608613273338456],[127.30101381237412,36.60853820440824],[127.30193999755144,36.60685746996796],[127.30202753908316,36.60676631763875],[127.30287583178692,36.60600731269453],[127.30325392400887,36.60565669184328],[127.30360868658373,36.60537205291443],[127.30556397838414,36.603598282327894],[127.30572171142731,36.6033783125467],[127.30618464574755,36.60256305382366],[127.30629392100103,36.602308124972],[127.30632172368443,36.59923307340224],[127.3061252444229,36.59871432467949],[127.30591289254673,36.598313530131335],[127.30580654938737,36.59810728893466],[127.30574489208077,36.59798782781937],[127.30543640065345,36.59738778445304],[127.30532761615453,36.597211089828335],[127.30512342051841,36.596867674817496],[127.30505713854193,36.59675365254544],[127.3049473794867,36.596641433665724],[127.30480256565008,36.596238885867244],[127.30315798244679,36.589846974834884],[127.30300752377117,36.58968543753862],[127.30288110514343,36.589550102456734],[127.30250950787895,36.58905850659543],[127.30223806585866,36.58884760675026],[127.30049544412255,36.587936355001645],[127.29998377814003,36.58774076773492],[127.29984573680306,36.58767276063294],[127.29978682525449,36.587582670781764],[127.2996715620089,36.58617366479687],[127.29982091566156,36.58595324983658],[127.30000167360662,36.58586481294991],[127.30161150568016,36.58545427729559],[127.30182832566175,36.585324551786805],[127.30197765197165,36.585122167600574],[127.30302818816928,36.58396619033335],[127.30327772069175,36.583761998763855],[127.3052123595425,36.58309331129594],[127.30552151466463,36.583039788597276],[127.30576774283747,36.58299570596346],[127.30619480167914,36.582979457899576],[127.3085064868594,36.58290189765557],[127.30877554665159,36.582831194766015],[127.30972901381928,36.58289902849866],[127.30994418505533,36.582896563286084],[127.31034819768857,36.582895821859324],[127.31081598318389,36.58290160402119],[127.31118020778989,36.58288736434708],[127.31138358422945,36.58288038342038],[127.3198455901394,36.58373875608678],[127.32043558475397,36.58373853119033],[127.32088749519556,36.58377362866443],[127.32143936934834,36.583779683168714],[127.32272620113196,36.58213375067179],[127.32304543734186,36.581915155734585],[127.3227559560115,36.581734582798425],[127.32206277912906,36.581494307205766],[127.32177688022196,36.58142010061243],[127.32159783779174,36.58137155982673],[127.32149145640194,36.581309521278094],[127.3216283110897,36.581069354885386],[127.32492488890603,36.58009508817309],[127.32503258811488,36.579915938565144],[127.32502765818164,36.579588549165955],[127.32475727815836,36.579022822135805],[127.32531050395207,36.57837084280806],[127.32538481267486,36.57811842189787],[127.3254359215498,36.57782247653914],[127.3254549248763,36.57771238013681],[127.32573981497552,36.577526403721244],[127.32779035974866,36.57589447536298],[127.32788265003703,36.57583716261832],[127.32790905889074,36.5757729205331],[127.32805098940516,36.57577673759555],[127.3281758402883,36.57574150644202],[127.32881832948651,36.57556636316261],[127.32908280516796,36.57535742216015],[127.32942389524071,36.57531337451181],[127.32970417274994,36.57498935412286],[127.3344462746174,36.57160151508699],[127.3349901217512,36.571431247627494],[127.33573602887667,36.570702852165844],[127.33576934132576,36.5706065082213],[127.33617096660163,36.57025631710134],[127.33655020881913,36.569986073887144],[127.33620739544183,36.56952049958285],[127.33606719895977,36.56933078804634],[127.33575233431071,36.56890475763566],[127.33515454924374,36.568096137968155],[127.33546734029163,36.56726329843188],[127.33559099044388,36.56710112640649],[127.33584832797901,36.56667752799316],[127.33642085438704,36.565554012778996],[127.336584401099,36.56534770780269],[127.33662673183058,36.56515687250125],[127.33682386060448,36.56427923203463],[127.33684255298114,36.56427749450982],[127.33685970559493,36.56424247321924],[127.33688132076517,36.56419839168468],[127.34080478039098,36.56364152551656],[127.34086982579575,36.56363593369186],[127.34243191690224,36.56372112268328],[127.34324334759147,36.56462472183839],[127.34444211247006,36.56435856255148],[127.34446478563817,36.56432467521305],[127.34348871364591,36.56441327636665],[127.34339377058384,36.56439283337752],[127.34452911030007,36.56401482451396],[127.34738548273008,36.564087098689406],[127.34784963993853,36.56385581697319],[127.36825983291152,36.566196532635615],[127.40182466649642,36.54124048495118],[127.40982635082797,36.495320806621656],[127.40278189051706,36.493414713499995],[127.40029554490653,36.49344405572545],[127.3969998205258,36.49234724550459],[127.39612424170942,36.49172477764016],[127.39612055279709,36.49172147304118],[127.39575988535204,36.49195602619904],[127.38626339999793,36.498985556577466],[127.38538373894964,36.499444883432616],[127.38385497104343,36.500230690026456],[127.38230967353526,36.49992444824916],[127.38096688868224,36.499660645040414],[127.38033654837668,36.49953929874922],[127.38008138312885,36.499215976257155],[127.35579857644919,36.450273038129],[127.3263167270464,36.422208976417835],[127.29425168764308,36.42219502183513],[127.29426961581308,36.421915039124464],[127.28212428234082,36.414603964631645],[127.25790805131376,36.40823236399692],[127.20138964906599,36.44197527604719],[127.20473351147956,36.45929024006822],[127.17346586866955,36.499206669441534],[127.17266844902414,36.536143615637876],[127.19378772255222,36.564812513911036],[127.17865507176774,36.59668359063944],[127.1786181246923,36.59671264216109],[127.15547820292068,36.606702898566276],[127.15485840345418,36.6642746537941],[127.13437853561463,36.7067919896922],[127.15964389368695,36.732843948327705],[127.20793603234716,36.71918904581354]];

        var 울산 = [[129.34639641222327,35.4649617499976],[129.35404718553374,35.39283321177816],[129.3418692369663,35.35642860542689],[129.31211653289358,35.33001269324448],[129.30413958627858,35.33016233846881],[129.30218372269056,35.33362837087451],[129.29099127233468,35.3380090467815],[129.28908616882612,35.340474264150075],[129.285506723514,35.33922089129981],[129.28172651542485,35.34028420077379],[129.28076006478113,35.34074607690686],[129.28038715948537,35.34102638450374],[129.28006233898495,35.341183450213094],[129.27966242383795,35.34137064790956],[129.2775703394912,35.36992924391258],[129.2773441783289,35.371362859282705],[129.2737248548595,35.37492228565513],[129.27374693809375,35.37497604338884],[129.27367028883725,35.3750486203512],[129.27367052814756,35.37509366775876],[129.27353872344483,35.37517513742709],[129.27353870136386,35.37521118124141],[129.27334079966957,35.375301776638324],[129.2733410609669,35.375310780231565],[129.2679754602668,35.38009963499199],[129.2680762098698,35.3806402310514],[129.26612795982498,35.38387127068365],[129.26608472399556,35.38413269361165],[129.26610721073018,35.3843219211977],[129.26598753312675,35.3847638652522],[129.26597711902826,35.38490809896068],[129.26584595926866,35.385160755113716],[129.26584706042385,35.38518790941956],[129.26574757075528,35.385368300571834],[129.26580440591601,35.38599911690706],[129.26557498580036,35.38651337888533],[129.26552213183123,35.38714429075133],[129.25029925632225,35.38675304548247],[129.25082479622543,35.38584160343394],[129.201169890842,35.3877816761035],[129.2188837828047,35.40697148198228],[129.19650268927376,35.43834331409561],[129.16804993410835,35.431792540813404],[129.13567038505516,35.4534908245544],[129.13282238343888,35.455497542379725],[129.10672323039563,35.4951358538811],[129.01087789233605,35.52321416542541],[128.9779054757717,35.56344699876552],[129.0188954322724,35.58381993366389],[129.02245485986256,35.614223360138915],[129.0027397894968,35.62025845634497],[129.0703591470812,35.658635907201706],[129.06987683104623,35.682372231460334],[129.10175903636122,35.70606714334869],[129.2054662229613,35.72117420654348],[129.26187932662864,35.69340314612147],[129.2547450479585,35.6664117699837],[129.25474620474972,35.666403863359136],[129.2962573065231,35.64474149715338],[129.35355872503268,35.67938023112894],[129.44962644856716,35.651018328769396],[129.4442296030743,35.623067732631405],[129.46365607575655,35.58591012759749],[129.43925076225153,35.487121949283974],[129.4084767938324,35.493268506301256],[129.34639641222327,35.4649617499976]];

        var 인천1 = [[126.62944249764311,37.499632518412234],[126.60313065796478,37.513650344486884],[126.59665587047718,37.548579010391656],[126.63985902906148,37.58548082824081],[126.59156455632241,37.593011823985485],[126.62581676367968,37.602682107868596],[126.6512526639701,37.63798791865732],[126.67242225512966,37.63384201577993],[126.72566531581052,37.59184225525884],[126.79369544519706,37.58159385885768],[126.7662043574505,37.554242375748366],[126.76027622579264,37.51591576136998],[126.74235365745886,37.48694907503676],[126.77845499939897,37.46207684428783],[126.7785287726508,37.46203559089818],[126.77923966572729,37.45164188169722],[126.77902288729182,37.45102090644409],[126.77090454544626,37.43094416277482],[126.77083792139524,37.43073681082609],[126.7544652746883,37.41757293948264],[126.72114288972793,37.38250405568312],[126.69505736740857,37.382728422176854],[126.66344966004381,37.35053506629968],[126.60996708541704,37.38718717658724],[126.61166364956264,37.42993401634955],[126.59516762247304,37.470751125354276],[126.62944249764311,37.499632518412234]];

        var 인천2 = [[126.54063203734842,37.52137210621049],[126.58257529425838,37.490646554011505],[126.50766160048013,37.466180988746544],[126.44308783596472,37.42152563638588],[126.38005400083568,37.43990787098436],[126.35578510553542,37.46756799120455],[126.41691275707815,37.496070547623596],[126.47134884661521,37.49847651609366],[126.49426957115062,37.507495537162704],[126.51237343504722,37.5342594061903],[126.54063203734842,37.52137210621049]];

        var 인천3 = [[126.10489742298309,37.27365664691258],[126.12030051466729,37.24683567659007],[126.16501994179943,37.231520452069546],[126.11931236583665,37.21159807869733],[126.08963928755354,37.24726670706811],[126.10489742298309,37.27365664691258]];

        var 인천4 = [[126.43921536373273,37.23113445861797],[126.43502765150147,37.27291676577788],[126.47139614227595,37.28452211198935],[126.49649461384448,37.2558167689752],[126.45781951688586,37.226038140761055],[126.43921536373273,37.23113445861797]];

        var 인천5 = [[126.41078726302332,37.411039259746744],[126.44129435680796,37.38491394270893],[126.41386011569953,37.366484488831475],[126.41078726302332,37.411039259746744]];

        var 인천6 = [[126.32141007123677,37.7521179310233],[126.3199918547476,37.71163641955494],[126.36312215612392,37.69571544695772],[126.3698741458859,37.66341975854123],[126.33871873184843,37.64743949314964],[126.3156769559878,37.684576686919556],[126.28246175095768,37.702919090249736],[126.28981100240654,37.74072226751897],[126.32141007123677,37.7521179310233]];

        var 인천7 = [[126.26451707478925,37.81778583885214],[126.29773328966907,37.802199043695516],[126.31577075890729,37.77398861988196],[126.29081580750011,37.7629425837148],[126.24827008507194,37.76560034570511],[126.21634667621532,37.77815916115239],[126.22322045538863,37.80503670281207],[126.26451707478925,37.81778583885214]];

        var 인천8 = [[126.43121685572747,37.82986908194544],[126.5068975008081,37.78234762310096],[126.52648366049696,37.747326128313986],[126.51372172326727,37.72503438286504],[126.52251279524307,37.651887425219904],[126.54274511634391,37.6178090830475],[126.51062866491168,37.59662373953827],[126.40316813158975,37.59428252797514],[126.3792856257021,37.60958611335555],[126.3767633555897,37.636293098460364],[126.41263172449081,37.656405203316694],[126.39236685339195,37.69419397340533],[126.3555906986772,37.70667699662161],[126.35057985274231,37.789565062650894],[126.38817572692581,37.80670536628266],[126.3949295459992,37.82287154699949],[126.43121685572747,37.82986908194544]];

        var 인천9 = [[124.70691404651816,37.84705148177522],[124.71788130307019,37.81383758257668],[124.6799885505802,37.817024381490505],[124.70691404651816,37.84705148177522]];

        var 인천10 = [[124.6871734927767,37.98047304204017],[124.729720445775,37.97811533012657],[124.69626248901929,37.91707230639538],[124.63738695819157,37.923945353998434],[124.62302020632995,37.95696971255016],[124.6871734927767,37.98047304204017]];

        var 전남1 = [[125.10885194846745,34.092729047488746],[125.14327936681718,34.052449441544084],[125.11858496597003,34.0484699795631],[125.09508010090458,34.07082966058024],[125.10885194846745,34.092729047488746]];

        var 전남2 = [[126.59345192678869,34.16209881214578],[126.54694808942018,34.127344425869545],[126.5056192971638,34.138925478169234],[126.5166038127822,34.1702967479631],[126.5395292338291,34.18179682035577],[126.59345192678869,34.16209881214578]];

        var 전남3 = [[126.6499571530005,34.19981559236474],[126.67194513583543,34.14566951541314],[126.66766758115219,34.12010484114305],[126.63737307808621,34.13049720508824],[126.62974573878577,34.14902641703364],[126.65081045209769,34.16669989717265],[126.6499571530005,34.19981559236474]];

        var 전남4 = [[126.8918173359896,34.21650993307176],[126.92201277349145,34.18360748330412],[126.9150092070458,34.15622381400231],[126.88148269745251,34.1555874724553],[126.85312430252455,34.18610386819111],[126.8918173359896,34.21650993307176]];

        var 전남5 = [[126.56522654017708,34.2352026758581],[126.61425347562637,34.216152121890325],[126.62199400847598,34.20013100914268],[126.56101195977303,34.179101402316824],[126.55303031005501,34.20465906994899],[126.56522654017708,34.2352026758581]];

        var 전남6 = [[126.03985787636287,34.31846251266375],[126.0549156289061,34.30379295915045],[126.08777163790957,34.30968260374652],[126.08620381784974,34.28235769508952],[126.04480428029512,34.28217956928858],[126.01929000017681,34.300508201458584],[126.03985787636287,34.31846251266375]];

        var 전남7 = [[126.83475889385595,34.357396008688816],[126.8683573328446,34.35013321105574],[126.8786307688684,34.32596536359369],[126.84116346192376,34.29938058848992],[126.83337341442547,34.32348583418357],[126.80558076721155,34.33325202168562],[126.83475889385595,34.357396008688816]];

        var 전남8 = [[126.99250775709608,34.35544530039805],[127.0269998697105,34.37160664756963],[127.03325454793772,34.34249010249249],[126.99250775709608,34.35544530039805]];

        var 전남9 = [[126.65406446082397,34.32834385142369],[126.65451636082969,34.32861876541089],[126.63946332641997,34.382682875346816],[126.68491233216186,34.402194326740315],[126.72594886565334,34.38343168600764],[126.73172060350174,34.35112989500727],[126.75563586016935,34.314981328686045],[126.75210001368036,34.29110417764483],[126.68896776389607,34.29687990641106],[126.65406446082397,34.32834385142369]];

        var 전남10 = [[126.94355077663488,34.41260107278357],[126.94175121000151,34.3815070032618],[126.91811281811584,34.35631955949232],[126.86416488816401,34.372514136074585],[126.8849554158804,34.40352027958099],[126.93051552886205,34.39060496915848],[126.94355077663488,34.41260107278357]];

        var 전남11 = [[126.83427539933341,34.44281295875285],[126.85366104791363,34.39229344727081],[126.82811279088016,34.37981410357025],[126.77239758543446,34.37512327216255],[126.76373136353058,34.40651396627466],[126.7871522502029,34.43194522622448],[126.83427539933341,34.44281295875285]];

        var 전남12 = [[127.04560516253964,34.45898731693705],[127.0753916240128,34.42354395940915],[127.04013617383185,34.42079879246929],[127.04560516253964,34.45898731693705]];

        var 전남13 = [[127.45666809550995,34.47618929740167],[127.53588573757729,34.44867235682432],[127.49368300372296,34.43105402513394],[127.45666809550995,34.47618929740167]];

        var 전남14 = [[127.21749972719066,34.495126548148654],[127.23407402505839,34.48261848010259],[127.21650479189348,34.43616831952445],[127.12435239645366,34.43169983579732],[127.09844884001615,34.46616528643712],[127.13611430615654,34.47273046559854],[127.18821226493901,34.49388940226425],[127.21749972719066,34.495126548148654]];

        var 전남15 = [[127.46031506180327,34.54497088653376],[127.47868771000533,34.537240523445895],[127.49322239614244,34.48413658214109],[127.45145944343004,34.48279175565497],[127.46031506180327,34.54497088653376]];

        var 전남16 = [[127.74121925348965,34.55280146111318],[127.79226987062515,34.5010961130153],[127.77075087731423,34.4887959646929],[127.7385342335627,34.50283418504139],[127.71171593442807,34.537778357443855],[127.74121925348965,34.55280146111318]];

        var 전남17 = [[126.2502961130186,34.58780049401739],[126.30381381478803,34.570704097040334],[126.31417990042647,34.5437134382202],[126.33854758389072,34.548195390418265],[126.36912202259471,34.51459404359705],[126.37883128856683,34.486067994693684],[126.35855042606414,34.474679050407545],[126.36537995437787,34.442997346762986],[126.32481125054285,34.408168725553374],[126.26549862223396,34.39743644063622],[126.26252985169174,34.37873260647702],[126.17401155022667,34.35237919834223],[126.14328120575401,34.38518584884781],[126.11739351919954,34.380233089971476],[126.09349567176928,34.427676558799675],[126.11918388509692,34.4594548215816],[126.17271521333537,34.48454960437561],[126.25082720314273,34.56117238526258],[126.2502961130186,34.58780049401739]];

        var 전남18 = [[126.05688125665995,34.6304478104053],[126.09364650954423,34.60611471861587],[126.09890838501535,34.55496648571307],[126.06140206053935,34.55394379815565],[126.07446534900714,34.58435327785489],[126.05688125665995,34.6304478104053]];

        var 전남19 = [[126.01719997408566,34.63482454890867],[126.06156165481576,34.59068047438512],[126.06078934551346,34.57199636473535],[126.02936093882212,34.56559263299496],[126.01100432222762,34.60576740904243],[126.01719997408566,34.63482454890867]];

        var 전남20 = [[126.15400734400275,34.67202512653894],[126.18737526633343,34.65043576022637],[126.17506855259934,34.621851070886045],[126.1431329852272,34.61883740806165],[126.11622790100583,34.65250128465356],[126.15400734400275,34.67202512653894]];

        var 전남21 = [[125.40578151645376,34.68025741372326],[125.41038875206057,34.68742178633392],[125.44285691444408,34.68084829781035],[125.40329494844173,34.628866617269544],[125.3875604023343,34.642096594162325],[125.40578151645376,34.68025741372326]];

        var 전남22 = [[127.73985273904162,34.73397534419952],[127.75559689231213,34.731483537962916],[127.76583272664804,34.694265656613375],[127.79536337107376,34.66690426934005],[127.79958316285045,34.630559440412526],[127.78992932256858,34.584881496240236],[127.74954592052886,34.59292050099357],[127.71047023823077,34.62309850738473],[127.76150047720996,34.684514707586274],[127.73985273904162,34.73397534419952]];

        var 전남23 = [[125.9627424314813,34.736917658312784],[125.99054785873804,34.71918916344829],[126.00994296070078,34.68839087394797],[125.97995993114303,34.67337275898843],[125.93528313383008,34.66908006509381],[125.91582625344111,34.68086696028874],[125.91565439320581,34.71139789012222],[125.9627424314813,34.736917658312784]];

        var 전남24 = [[126.08974571266826,34.77411383914677],[126.12481467692281,34.77084539676336],[126.13500638101746,34.7558009783175],[126.17133760725332,34.74934127832482],[126.17782677741297,34.70626629800636],[126.1534288779206,34.70355304321424],[126.13701736881092,34.72868223763172],[126.08174278130653,34.71962689348791],[126.07032744323504,34.737337034560035],[126.08974571266826,34.77411383914677]];

        var 전남25 = [[125.99425166673981,34.80528257881262],[125.99821053348677,34.761764640906875],[125.93620693802258,34.747430990282545],[125.9172568226303,34.71667854631288],[125.88744237553287,34.73857550110342],[125.90015110460403,34.769003752083634],[125.93946749393797,34.776700942172944],[125.99425166673981,34.80528257881262]];

        var 전남26 = [[126.14876074952717,34.81167534214399],[126.16506869460972,34.76729100121929],[126.14121387679003,34.76108600286417],[126.12976677074583,34.79622093231253],[126.14876074952717,34.81167534214399]];

        var 전남27 = [[126.11558430036722,34.8819510849826],[126.14751260521696,34.873191457637645],[126.14898124673782,34.83974660930617],[126.11412569170705,34.826181991028264],[126.09652580375726,34.80596504424704],[126.06095054851183,34.84386371611741],[126.08180190988017,34.859303633133],[126.11523768247862,34.850634257731606],[126.11558430036722,34.8819510849826]];

        var 전남28 = [[126.30025014762224,34.921171530733076],[126.32534768360802,34.89016338539431],[126.32077390158626,34.86203494061434],[126.3574560284511,34.862353332825634],[126.371200688268,34.84653513015376],[126.35772553541858,34.815469762278816],[126.33178606085792,34.81887449381333],[126.33446298311908,34.84842755680022],[126.2628039409516,34.8573262724662],[126.30234673303885,34.89350544956551],[126.30025014762224,34.921171530733076]];

        var 전남29 = [[126.0898441284527,34.90321418120014],[126.08250820187963,34.86646481682051],[126.04028602588632,34.84722959241676],[125.98790629401759,34.874572349101776],[126.01744745636994,34.90955753366477],[126.0898441284527,34.90321418120014]];

        var 전남30 = [[127.73126556718522,34.951912734922175],[127.76142198283266,34.90852442563511],[127.70536092783219,34.91347846419355],[127.73126556718522,34.951912734922175]];

        var 전남31 = [[126.1362932588848,35.02526141637266],[126.17971813817435,34.99445349427646],[126.17560081672114,34.97330511630621],[126.14410042138708,34.96881725231281],[126.1362932588848,35.02526141637266]];

        var 전남32 = [[126.15120135253017,35.14632854338883],[126.12198074597845,35.13129026063826],[126.11352684751019,35.063820244483445],[126.09540115772893,35.05161377141951],[126.04805387777806,35.08145979140281],[126.04944659177708,35.10228952242374],[126.08725982321477,35.11138320606371],[126.11767934764106,35.14014380773208],[126.15120135253017,35.14632854338883]];

        var 전남33 = [[126.44778723471107,35.42961117426382],[126.45390783548653,35.426875324163134],[126.45539576848046,35.426852048456624],[126.45747234452949,35.426594553365895],[126.45806155384369,35.426492420737766],[126.47252460236884,35.426685489112714],[126.47280034655553,35.42679103963738],[126.47966308670222,35.42650360984718],[126.47958264320889,35.42629087044135],[126.47944885888073,35.425948607755096],[126.47930755345544,35.42560160907221],[126.47926939145827,35.425553242954344],[126.47917905936399,35.425489237858756],[126.47913878798117,35.425400808724895],[126.47906403888058,35.425193455669316],[126.4789806315154,35.42480914060581],[126.47897122124452,35.42476583763303],[126.47896694555334,35.42474590062686],[126.47901841692101,35.424772440832996],[126.47907553267243,35.42470941629675],[126.47911585598195,35.424688860958334],[126.47957000590301,35.42371576893322],[126.47958218554844,35.4236865020445],[126.47961302990234,35.42365553190477],[126.48036423744233,35.42210043252807],[126.48041383101777,35.422054219673086],[126.48077260790045,35.42171416499248],[126.48073932937251,35.42169765378972],[126.4805470245424,35.42170276385447],[126.4805261497978,35.42168355773534],[126.48071608582431,35.421273310012374],[126.48071882953917,35.42122662582197],[126.48074303804088,35.42119654607353],[126.48076611914391,35.42118426137248],[126.48100171816851,35.42018939122988],[126.48101872461649,35.42018338017983],[126.48104695765062,35.42015905879759],[126.48103073742811,35.42012327942672],[126.48103033014931,35.420109613526094],[126.48107159076122,35.42004921497349],[126.48113326081179,35.420001297718294],[126.48291724861096,35.41865274317097],[126.48292594669692,35.418658008041184],[126.4832781523694,35.41839794361347],[126.48331148058459,35.41836204341172],[126.48332867362288,35.41835244599619],[126.48336600403343,35.41831202080751],[126.48343195636737,35.41825188878329],[126.49171372244099,35.411150157933115],[126.49173273515109,35.41114847191515],[126.49200733680728,35.410278356755015],[126.49203677663772,35.410278363528626],[126.49282719872643,35.40829710263593],[126.49280001986523,35.40824068325571],[126.49280343291207,35.40810914303305],[126.49280133192686,35.40809141465478],[126.49128658004899,35.404901931944885],[126.49130089762365,35.40488690491225],[126.49117547517282,35.40468613206834],[126.49115872498481,35.40463637234767],[126.49095652522342,35.403547587954534],[126.49099565856889,35.40351653157793],[126.49100891940448,35.403466458110316],[126.49134556231358,35.400564484910724],[126.49136443614417,35.40053909370343],[126.49141447947802,35.40049877287015],[126.49061243387489,35.399429265344374],[126.49062557769443,35.39940117284265],[126.49058541544481,35.39935670473539],[126.49001148833558,35.39841010368609],[126.48997148794042,35.39838018195581],[126.48991976964668,35.39842444278838],[126.48987459300147,35.398441898501474],[126.48986528531196,35.3984324950198],[126.48980456227366,35.398380827338556],[126.48950602645535,35.39832963907149],[126.48945336210042,35.39831274178437],[126.49008789556632,35.39707246419958],[126.49011605877041,35.39703644117422],[126.49039558613765,35.39534745803128],[126.49043259396268,35.39535419331815],[126.51991511661167,35.34956930034717],[126.51994441356548,35.34958587487752],[126.51983972161243,35.343484571529366],[126.51984063981033,35.343467134773626],[126.51975968944419,35.34348737131583],[126.51972569846563,35.3434909844618],[126.51901141833905,35.34323917457084],[126.51896094710743,35.34324690502196],[126.51891067436465,35.34328418139129],[126.51900049261732,35.342379113880796],[126.51905372606444,35.342320983808825],[126.51909655897333,35.34228437191918],[126.51918185133854,35.34202361919095],[126.51914144770852,35.34202004178711],[126.51913570636344,35.34174959694914],[126.51913068096628,35.34170852211815],[126.51913237180281,35.34169618144296],[126.51912518760057,35.341663010982174],[126.51923750493889,35.341293378836],[126.51928432554321,35.34123715138708],[126.51380907526746,35.32702443150604],[126.51380202523578,35.32702079804872],[126.5212583934378,35.32393069702968],[126.52126165454303,35.323925933855186],[126.52134342427647,35.32380638215208],[126.5213976259249,35.32380540800229],[126.52142162015853,35.32376125807467],[126.52388086435639,35.316365085867496],[126.52391404606881,35.31633814184709],[126.52384061132496,35.315036146802406],[126.52385322067535,35.3150178819206],[126.52385440946414,35.315002807758084],[126.52377303800574,35.314742454786156],[126.52380631833928,35.314739747122275],[126.52382499973507,35.31471746841448],[126.52395124751249,35.31467307221013],[126.5240252143082,35.31463848314596],[126.52506639958594,35.31375814986733],[126.52542771928326,35.313233788151116],[126.54742353334318,35.312930373817096],[126.54813037159654,35.31347150213078],[126.56095652271071,35.31177977098941],[126.56096353631119,35.3118651429593],[126.5609909265218,35.311851253748074],[126.57375135873343,35.30832647171702],[126.57374832083589,35.3083143923683],[126.57615286768142,35.304886358669116],[126.57668730743042,35.30438340478464],[126.57942167246685,35.30303005652224],[126.57949549963331,35.30301984997589],[126.58289775860862,35.301994273225326],[126.58291631607774,35.30200311678191],[126.5884478664414,35.309666416083004],[126.58850449433886,35.30973136031499],[126.58856948042231,35.30976361562962],[126.58264261357928,35.315879976591475],[126.58262012423734,35.31590380179876],[126.58258241120295,35.31591767710573],[126.58133974889077,35.31669037920206],[126.58129124126344,35.31670124259706],[126.58125494122604,35.31671395155593],[126.58098100338347,35.31723661400133],[126.58093070740068,35.31725071593543],[126.58277574955434,35.3177493568896],[126.58285550144198,35.31782548835397],[126.58333423980565,35.31812860095517],[126.58330935870652,35.31813193058833],[126.58273440344566,35.32648276007876],[126.58274285605277,35.326494280661784],[126.58288028043897,35.32648500467381],[126.58281320418715,35.32650630509403],[126.60940403505144,35.331037940293925],[126.60938171040297,35.33098960202234],[126.61609182531079,35.32805381081442],[126.61612428157636,35.328014256076614],[126.61655615352782,35.32762598074029],[126.61655422040144,35.32760899467752],[126.61654450879932,35.32756732204266],[126.61655542041589,35.32755543224958],[126.61657149312519,35.327505730306875],[126.61771728248459,35.32604886985686],[126.61775175032527,35.32594877927378],[126.6177696260541,35.32594092191477],[126.6220201726449,35.32371875606943],[126.62207389690353,35.32366672004993],[126.62523865067575,35.32244110975098],[126.62525310626734,35.322394889704405],[126.62768402471951,35.321247373331886],[126.62770611059254,35.321268225803024],[126.62773027983206,35.32129515156291],[126.62835084027834,35.32127535425656],[126.6284430217814,35.321291727532376],[126.64427527468914,35.32720412262489],[126.65282060763234,35.32779209210265],[126.66644498172303,35.35148689385442],[126.69681420358695,35.34972002013913],[126.69683157576904,35.34965814313397],[126.71472192081235,35.364760087139935],[126.71482279219542,35.36471211480868],[126.72213530453159,35.398258438722735],[126.722468633855,35.399932544731236],[126.72314082665403,35.40022466991154],[126.72999584108452,35.40133239905505],[126.73000840962884,35.401329966706506],[126.73006035431877,35.401321052235154],[126.75266867155027,35.42948787784144],[126.74807576322272,35.45058156475165],[126.77400506229051,35.468433193177496],[126.77406919988032,35.46845866773163],[126.8139730484842,35.46879903520319],[126.81398838330378,35.46883369709475],[126.8423070711508,35.47932669713233],[126.84238395280157,35.4792804623838],[126.84320766974518,35.47845896898295],[126.84320869669347,35.47846346784241],[126.84329985257736,35.47833050143945],[126.8431951528395,35.478341069781955],[126.83949307474691,35.46234881441951],[126.83954288015578,35.462321562593075],[126.84024650929517,35.46217238144506],[126.84029137628622,35.46211821965313],[126.86890175569471,35.4614359238733],[126.8695134078482,35.46164012727802],[126.88266112623434,35.454274341222074],[126.88248577808339,35.45325906881721],[126.88280747061759,35.45280073596256],[126.88578459748736,35.45099385780145],[126.88684576435345,35.45048000540203],[126.8920720627109,35.449674151515865],[126.89255880658007,35.44959396025344],[126.89259373369272,35.44941467608486],[126.89283716549883,35.44927193849106],[126.8936939469299,35.44888655779365],[126.89496827533235,35.44856016115368],[126.89677487813742,35.447985695312845],[126.8967384327835,35.44695506018014],[126.89701503658758,35.446061767359325],[126.89787037555426,35.44578013245027],[126.89816766532202,35.44541610430172],[126.89879529440027,35.445023199273734],[126.89889237679188,35.44469074309284],[126.89892387586708,35.444196734236435],[126.90050732793125,35.44212406105309],[126.90122679954341,35.441986732652545],[126.90168275338225,35.441902666351844],[126.90233241630044,35.44178287627239],[126.90431364430854,35.44112791684279],[126.9051134748784,35.440817821388144],[126.90072965824658,35.43711425122881],[126.90019405530593,35.43663129487643],[126.89959548835455,35.43654909657813],[126.89960802425148,35.4365991660302],[126.89950561202612,35.436670445520306],[126.89953621893915,35.43652060116125],[126.89874763220858,35.4363187241501],[126.8975935079355,35.43518894260251],[126.89748113908979,35.43491826291582],[126.89747950349634,35.43446857869261],[126.89754663642854,35.434169229463336],[126.89752797085634,35.4338598378639],[126.89748401526678,35.43386290054685],[126.89747862418609,35.43383319765571],[126.89749579118757,35.433834582429064],[126.89748738920514,35.43372264118435],[126.89747350471376,35.43364359312774],[126.89749998765177,35.433568419413],[126.89749741813785,35.433528344841434],[126.8975468417296,35.43343493927795],[126.89768136144664,35.43290235209438],[126.89776007848847,35.43279124277777],[126.89777053183997,35.43278074244562],[126.89809007157406,35.43259995162266],[126.89815545727043,35.43257066082055],[126.89830874356862,35.43248186830878],[126.89836338706654,35.43235266670596],[126.89846088987797,35.43228483597104],[126.89855421872893,35.432208403075826],[126.89866957328407,35.43217454884736],[126.89944816259207,35.431617791983506],[126.89947638516871,35.43157729374833],[126.89944982253803,35.43155078167623],[126.90261990479503,35.43014959434956],[126.9043168221165,35.42969572672347],[126.90405213800433,35.428000611726056],[126.90284260903245,35.427371757211404],[126.9025258764352,35.426011623107655],[126.90256209473529,35.42555120757132],[126.90256248381036,35.42553919337571],[126.90256332085367,35.42551308384036],[126.90256371343638,35.42550615221524],[126.90258873865201,35.42475235877762],[126.90187454827371,35.42301512002082],[126.90243678811161,35.422100297518035],[126.90721484628801,35.42027178328913],[126.90737758166178,35.420228629006715],[126.90777325527513,35.42002006583572],[126.90771136509956,35.419952148819256],[126.90776441315575,35.41987775940083],[126.9081633324955,35.41960209456604],[126.90835348594797,35.41933601089107],[126.90875770044215,35.419009045300044],[126.9088030901786,35.41896729516245],[126.90824857951402,35.41627287370026],[126.9082686496784,35.415872551938364],[126.90907327958928,35.41534086206146],[126.90921997944531,35.41532126238875],[126.9093321851173,35.41533003668885],[126.90953478501335,35.415328514572394],[126.90960375233365,35.41531915729699],[126.90963967583951,35.415311811845],[126.90978343343778,35.415294291290174],[126.90983196739455,35.41529328258456],[126.90993842547493,35.41528285394209],[126.90999697683634,35.41526397967221],[126.91010654566638,35.41520925357927],[126.91014859538303,35.415178253075815],[126.91042294656197,35.415070338315836],[126.91066482787207,35.41514921420358],[126.91077716856964,35.41509634629401],[126.91086183859842,35.41505515660745],[126.91096757841069,35.414958010949434],[126.910994111441,35.41495922957069],[126.9110170737524,35.414943816240886],[126.9113674132715,35.41501529996455],[126.91145607798555,35.4150250732209],[126.91157025260138,35.41506513157179],[126.91163490989636,35.4151492363504],[126.91165523012751,35.41517314533191],[126.91207103424024,35.41513799595271],[126.9121058819343,35.41537688837122],[126.91271022152154,35.41525461973635],[126.91272292082645,35.415260478602555],[126.91272575972722,35.415262048976786],[126.91514546821341,35.41606287225239],[126.91614824943737,35.41584470008619],[126.91739399721439,35.413093604215405],[126.91754641889308,35.41295447489759],[126.91823355272173,35.41262425738091],[126.91853534788714,35.41247921783141],[126.91875381049495,35.4123758874901],[126.91923152843023,35.41216598160903],[126.92077872666371,35.410863000519534],[126.91977149479966,35.40994604554338],[126.91889610925374,35.409074274091836],[126.91897337514641,35.40882325613596],[126.91887197708381,35.40865300928876],[126.91867452403696,35.40836408330997],[126.9184082070714,35.40761634849894],[126.91823899922397,35.40732477327545],[126.91818259345332,35.40726659947966],[126.91823908558251,35.407240734559316],[126.91823911338685,35.407213677048816],[126.91821857139949,35.40722347823792],[126.91817256886826,35.407144292895865],[126.9181489265887,35.40689311565436],[126.91810677134862,35.406745000223516],[126.91802607765223,35.40661452397906],[126.91789497873417,35.40640491325671],[126.91786791286805,35.40631458258049],[126.91748879873921,35.405942030737336],[126.91660833816219,35.40492479310507],[126.91719291538723,35.40418296752334],[126.91717509351845,35.403885655598046],[126.9171377187438,35.403262269450536],[126.91721388388636,35.402651166281565],[126.91742715344168,35.402139050990066],[126.9194259107278,35.40195528485962],[126.91945074241465,35.40194226918781],[126.91978523205236,35.402579925007544],[126.92014672194888,35.40306762833104],[126.92070490648416,35.40302519009454],[126.92311900658089,35.40318228368624],[126.92312133397012,35.40318891889135],[126.9233737700358,35.40390868506437],[126.92774695647795,35.40538321099899],[126.92819817192566,35.4053014295107],[126.92922676185937,35.40567980881713],[126.93003364421064,35.406005645919656],[126.93062161410573,35.40593554511449],[126.93096276936195,35.40568192473548],[126.93138718357588,35.405795773615715],[126.93188175773308,35.40591069793874],[126.93276639041746,35.406038028423644],[126.93323960885114,35.40608979778246],[126.93326286355588,35.40481695280053],[126.93315850314926,35.40465734267412],[126.93248592662519,35.40331123070263],[126.93214495032753,35.40271688708445],[126.93221024229275,35.40249704809808],[126.93129476427728,35.40158901928909],[126.93081402195929,35.40151170355945],[126.93080492433836,35.40150455079075],[126.93032692111483,35.40104195743098],[126.92999647240362,35.400185068843705],[126.93056566534013,35.399799270495215],[126.93049246290578,35.39934554910195],[126.93052140803864,35.39906315610533],[126.930638361364,35.39875552371252],[126.93092707709799,35.39857850243897],[126.9313405319149,35.39836431945949],[126.9315892815473,35.39821827874009],[126.93292635521576,35.395244711534744],[126.93352175560183,35.395130399985305],[126.93472695922588,35.39558436270435],[126.9351052860024,35.395450725205656],[126.9363007741364,35.39464350569241],[126.93694694790977,35.394674154702116],[126.94358627366391,35.39488750577274],[126.94360313138249,35.39489536433102],[126.9436079237102,35.394889607198024],[126.94824079399703,35.39599500432027],[126.9487938504562,35.396225461403795],[126.94906343743153,35.39593546213478],[126.94930036354121,35.39567917550438],[126.94964352224568,35.39549015434296],[126.94992783224771,35.395337736717046],[126.95366796228,35.39622465697087],[126.95402022970652,35.396464086840716],[126.95433524094311,35.39662333787836],[126.95473345400274,35.39654530310143],[126.95609653473554,35.39647384309569],[126.9563840150702,35.396444080955206],[126.95690322827392,35.396392465686596],[126.95746586894255,35.39633501444315],[126.9583362486606,35.39611060233968],[126.96010370108398,35.39546128809056],[126.96059731263581,35.39532359926493],[126.9693299273364,35.397230001316295],[126.97016548975512,35.39697397564639],[126.97063047858866,35.39774896769892],[126.971144946711,35.39828604025331],[126.97454863442105,35.41004503788803],[126.97392361360514,35.4111224481128],[126.97384035660316,35.411290876152556],[126.97348999197477,35.411465587881366],[126.97336941599238,35.41177814546328],[126.97254873498083,35.4126011331523],[126.97219465553984,35.41303914170079],[126.9721026890174,35.41328525983161],[126.97199090573584,35.41358729070377],[126.97180142972071,35.41408468970997],[126.97138061224311,35.42767121552887],[126.97316388349759,35.427796072664734],[126.98295503565755,35.42996074314335],[126.98394909763395,35.43024475997275],[126.9850747046107,35.43005496593356],[126.98468889281799,35.431278238897306],[126.98530662167069,35.436731861973676],[126.98596375067814,35.43678936161702],[126.98642575255825,35.43695402668631],[126.9869854668179,35.43692321602824],[126.98909907589751,35.43833321155611],[126.98935492693623,35.43862191879127],[126.98955851630913,35.439094370882124],[126.98970236623965,35.439144254565285],[126.99222323073624,35.43950150119181],[126.99245941621865,35.439585368074525],[126.99403019951039,35.43985798648168],[126.9945455264679,35.439804127564244],[126.99476666638598,35.44274229090244],[126.99486536049696,35.44316707552896],[126.99523591466007,35.44388042023074],[126.99651292241902,35.444532740278326],[126.99669799248767,35.444732685621865],[126.99673290659237,35.44474714402516],[126.99680545442045,35.44479214030243],[126.99711303955439,35.44514836803308],[126.99768710994626,35.44567795275578],[126.9979859098758,35.44610437205876],[126.99814309123863,35.446757863143446],[126.99818404738402,35.446921848807946],[126.99866828829536,35.44947556325777],[126.9985937468211,35.44990575713109],[126.99911126708133,35.45077430721556],[127.000199920382,35.45242710136436],[127.00055766709909,35.45396330664118],[126.99928203213432,35.45573541911993],[126.99802433884389,35.45730383115422],[127.00080670615814,35.463473302779796],[127.00240995939612,35.46432081910151],[127.00986941307139,35.46168544477608],[127.01221673010828,35.46012009894374],[127.01308406078981,35.45864787395788],[127.01429200694616,35.457819348933704],[127.01512457698058,35.45863365363193],[127.02629739828845,35.46483216372786],[127.02713385577457,35.46413284363445],[127.02856895113885,35.46419844240113],[127.0291804967069,35.46433046230842],[127.03074866427387,35.46520077378999],[127.03074502867472,35.46520077467249],[127.03239820332358,35.465894757049476],[127.03283834292246,35.4664255499773],[127.03385807239927,35.46638431601602],[127.034722145982,35.46657185043678],[127.0350920080802,35.46568488766705],[127.03501326604173,35.46519966321813],[127.03651957821656,35.45980827294474],[127.03590218614035,35.45903711932686],[127.03492368070546,35.456994630897235],[127.03495437783886,35.455576763087215],[127.03536542938814,35.454873680687925],[127.03738695697355,35.439578252842665],[127.03736688550653,35.43889775003858],[127.03765653962057,35.43821380178567],[127.03762510903665,35.4333668305347],[127.0384147087126,35.43275148118751],[127.04018290673311,35.43178880201124],[127.04105060984836,35.43228741549701],[127.04146835546568,35.432572858872284],[127.04163519773559,35.432533677451744],[127.04458314281041,35.43355383013197],[127.0446107360711,35.43354548312563],[127.04656852935756,35.431367843577696],[127.04902726752323,35.431083607989024],[127.04982266488538,35.42977546800286],[127.05036107948413,35.428897948413955],[127.05124923076106,35.42737535639796],[127.05231520673998,35.42651610400503],[127.05180773182055,35.42563021670324],[127.04972910226891,35.42275790945067],[127.04978424823443,35.42193169722564],[127.04809534206042,35.41699372198661],[127.04792367829032,35.41557386447706],[127.04753006006736,35.414233839714285],[127.04739392077425,35.41378719035257],[127.04716080476295,35.41302335031932],[127.04692186543743,35.41201800422833],[127.04661838609519,35.41111713521302],[127.04607394687136,35.409173864671104],[127.045647934864,35.40791333142809],[127.04696050212435,35.403055284532],[127.04711760287674,35.40256442169659],[127.04513498893077,35.401208590553786],[127.04391856370897,35.400302307460166],[127.04330650882598,35.39933871455648],[127.0368517044435,35.39934227507404],[127.03661522360524,35.39942769899288],[127.03592061791802,35.399686253080475],[127.03527121420714,35.39961947773986],[127.03460525564647,35.39955309101973],[127.03383134738776,35.399664072991456],[127.03289383052407,35.400500022893475],[127.03161670968387,35.40006171314916],[127.0301482690323,35.39955316871038],[127.02852432773533,35.39974016160258],[127.03046305467696,35.39008991148688],[127.0307314499903,35.39010882851421],[127.03076229746911,35.38982284131084],[127.03117170736853,35.38974472303234],[127.0316727010411,35.389808511301155],[127.03205128833648,35.38957703819909],[127.03245491736568,35.389441710269566],[127.03322957233095,35.38971061598333],[127.03354944637344,35.389537694334145],[127.03391711529682,35.3894331331135],[127.03424413485386,35.38948949443105],[127.03542681196188,35.3902244821893],[127.03573021431465,35.390018598154214],[127.04015464514879,35.382528101797696],[127.04032438872024,35.382578953893336],[127.04038677948814,35.382600430301125],[127.04047985516888,35.38239530472432],[127.04014801596051,35.38228982174388],[127.04015638001651,35.38194368482429],[127.03972426647208,35.381129983782294],[127.03948994013903,35.3809496133285],[127.03936421344798,35.38085591546481],[127.03880148044851,35.38059275178686],[127.04072017772309,35.379583745255225],[127.04122858380285,35.37959273635295],[127.05575781380713,35.384120776824815],[127.05586016282943,35.384537735688674],[127.05773278811307,35.381986924691496],[127.0578485962123,35.381632885952534],[127.05995242481774,35.379847910000215],[127.06052420274135,35.37928219699011],[127.06187386753679,35.37779105962054],[127.06196380232598,35.37702640559902],[127.06433718690923,35.37600241896709],[127.06498367162645,35.37595386005495],[127.06347680528391,35.37037682933448],[127.06359463226285,35.36989715704783],[127.06570624562612,35.36863433610766],[127.06623656831921,35.368556845637016],[127.06713756729249,35.36791261644664],[127.06768477387317,35.367362799213595],[127.06994761491211,35.36572747511732],[127.07060767149419,35.36551344051835],[127.06752290013365,35.359518425890435],[127.06760836995804,35.359372121266865],[127.0653278911671,35.35623227776914],[127.06524178643107,35.35597802351653],[127.06647100309539,35.354996781230405],[127.06783563586043,35.35471713341283],[127.0684985440412,35.35400826302434],[127.0687635995155,35.35355629050004],[127.06902341310692,35.35308857414409],[127.06933362601063,35.35252011482651],[127.06966295424525,35.35183265091608],[127.06990030348723,35.3514044953778],[127.06860493715867,35.350346633401635],[127.06839939306981,35.35015287231702],[127.06719563261115,35.34566452475486],[127.06717304945089,35.345638975425565],[127.06744822182513,35.345463869058705],[127.06801220397746,35.344429927815725],[127.06803584362882,35.34361151940662],[127.07026453411567,35.34149949033905],[127.07046151248713,35.3407088603066],[127.07036778030292,35.34055245244157],[127.07002438480437,35.34008754498932],[127.07000980207705,35.34007833268581],[127.07005340288181,35.34004872639606],[127.07025672476883,35.33983965618674],[127.06943822896982,35.33911461408646],[127.06907581260067,35.33893690440889],[127.0677174736016,35.33860579701793],[127.06759248137807,35.33833342128034],[127.06542259189682,35.33702604198018],[127.06508262553842,35.33653057238946],[127.06434930707978,35.33652370049524],[127.06354222814151,35.336519286634356],[127.06303206303716,35.33623140218362],[127.06281923267169,35.33634478927542],[127.05876650153357,35.33741246345884],[127.0583765342189,35.33747718278416],[127.05570103265576,35.34073319595565],[127.05525206456464,35.341063273286686],[127.05452581377912,35.34077318681698],[127.05404440220032,35.340765041945815],[127.05366108900317,35.340688252825586],[127.0530624980214,35.34035688464747],[127.0524645167142,35.33740026223462],[127.05253927871046,35.336977291724416],[127.05242988762515,35.33653840939203],[127.05247785084048,35.335917284246776],[127.0519214833391,35.3355874335789],[127.05168152922933,35.33536883535238],[127.05127777007137,35.33526767518573],[127.05071013723136,35.335027749029905],[127.05050755775149,35.33479968729829],[127.05050299636095,35.33444112287039],[127.05049742437443,35.33437593207955],[127.05042454593782,35.33357739400516],[127.0504076106798,35.33340053325112],[127.05109141778544,35.33247660028903],[127.05115750877609,35.332384223036755],[127.0511674051233,35.33236189306574],[127.05134481748526,35.33203961313012],[127.0507482320825,35.33056148097651],[127.0508309473598,35.33033510558824],[127.05100820443432,35.32952926327554],[127.05096806097077,35.32942298603152],[127.0506975981423,35.329099348246324],[127.05066926310411,35.329094438531136],[127.05021484894843,35.32870766421248],[127.049443416129,35.32851523277849],[127.04945986661212,35.328044993950336],[127.04945979693206,35.327741165002294],[127.0492491789343,35.32740354752738],[127.04917076762719,35.32728303476045],[127.04888358537276,35.3271194303738],[127.048755036193,35.32700242513702],[127.04876173084732,35.326940239823145],[127.04872842895199,35.326941253326986],[127.048702784534,35.32698477952202],[127.04837359944564,35.32694945847083],[127.04601434784841,35.32548856646887],[127.0456656829221,35.324627672555636],[127.04530817993552,35.32439192485951],[127.04531213708567,35.32438809277344],[127.0439424436527,35.323082699600164],[127.04362718971772,35.3227745191811],[127.04533349321167,35.31998929804711],[127.04552467224886,35.31971124024936],[127.05083236200521,35.31709056267865],[127.05090789146271,35.316716443555734],[127.05131426872714,35.316683423137626],[127.05305451067632,35.317167969284725],[127.05323052861972,35.317188786871284],[127.05371731198328,35.317815533893196],[127.05432950814587,35.317877477517804],[127.05454252098768,35.31789719540907],[127.05455834656077,35.31789865762723],[127.05547013313162,35.317578641905335],[127.05547823512458,35.317574537231486],[127.05550432733774,35.31755282153123],[127.05563060068826,35.317447705930256],[127.05593880240097,35.317287932780886],[127.05623331150619,35.31735594929619],[127.05664861859148,35.31772648664285],[127.05667851866585,35.31779032323696],[127.0567713685317,35.31782658637846],[127.0568290231615,35.31783926874357],[127.05689607580068,35.31781328870971],[127.05696626313976,35.317772119781395],[127.05711645712366,35.31781707217921],[127.05718488149225,35.31781909568998],[127.05720362449122,35.31782522510863],[127.05726470174329,35.31771353110105],[127.05733692148021,35.31763784006241],[127.05726999323034,35.31754037406406],[127.05732200136679,35.317529867568574],[127.05731915052061,35.3175100306022],[127.05726365566707,35.31751950217612],[127.05751463695337,35.317215313200755],[127.0593502156522,35.316990305239955],[127.05932207101704,35.31704678707264],[127.05938254246585,35.317092807090106],[127.05941962357299,35.31710785956365],[127.06129571811792,35.317241469094334],[127.06152426915612,35.31715657660681],[127.06178389556734,35.31712925419019],[127.06180508784814,35.3171162734673],[127.06244850979897,35.316686791051325],[127.06247867818429,35.316648460265036],[127.06249957581186,35.31656564447459],[127.06255000185492,35.316485689005916],[127.06259631170056,35.31637211596498],[127.06258473993887,35.31635327499313],[127.06258857664727,35.316322519652296],[127.06261095777496,35.31628237208028],[127.062615177182,35.3162633338429],[127.06262965823912,35.31618815554111],[127.06271448305328,35.316022601242175],[127.06282750106499,35.31585448180523],[127.06283328816552,35.315785491015674],[127.06300450119736,35.31566268779791],[127.06357975437511,35.31495344284351],[127.06366185206501,35.314806474690904],[127.06528290593637,35.31333662255914],[127.06606836032994,35.31319473243346],[127.06642106154997,35.31318767529073],[127.06675629219451,35.312417866072494],[127.06687123013808,35.312083364994145],[127.07238424830457,35.3122118869943],[127.0727904976067,35.31195609356018],[127.07400357193664,35.31167422854567],[127.07409038731383,35.311589352139265],[127.07519936644825,35.31082680352278],[127.07782566021662,35.3108610101869],[127.07819348710204,35.31082575156882],[127.07885488453985,35.31072115412658],[127.08029442086502,35.31019729865082],[127.08119591891057,35.31003877620464],[127.08534040410152,35.30777308893211],[127.08562596741463,35.30774902322928],[127.0859808421887,35.307826353311846],[127.08606722420363,35.30780587773453],[127.08609713229059,35.307774301178505],[127.09076268171701,35.305006046627035],[127.09116745349826,35.3046622042613],[127.09155372161388,35.30451089975722],[127.09167394906493,35.30441777372614],[127.09495499816926,35.30306459914037],[127.09523263376956,35.30302832158915],[127.09676395611213,35.30181144321267],[127.09678789631059,35.30179659742181],[127.10063677868119,35.301767561704416],[127.10180131480939,35.30170791525981],[127.10180443635889,35.301680422027005],[127.10186136557188,35.301456609952865],[127.10224645111698,35.30137301550287],[127.10278460060118,35.30033417648629],[127.1029214241412,35.30011085572432],[127.10327586201244,35.2998793028764],[127.10373204769054,35.29969692081593],[127.10395283454883,35.29964981050685],[127.11316330287869,35.300087083294194],[127.11348108956689,35.2998720918963],[127.12897701121976,35.307556941439536],[127.12931131100288,35.3074884297737],[127.1296414819273,35.30770254302678],[127.12990535658757,35.307871406867925],[127.1306201769908,35.30911468086046],[127.13101149489636,35.309108331493405],[127.13219791278382,35.30901806617514],[127.13242562348444,35.308983848597485],[127.13284367078069,35.30872560538878],[127.13296280203362,35.3086939743696],[127.1334348016618,35.308618388282504],[127.13358572888312,35.30859157110539],[127.13370548941093,35.30853476448698],[127.13393521391927,35.3085027501255],[127.13415434294224,35.30847350502835],[127.13485161313807,35.30846116478681],[127.13523641075896,35.308523814859555],[127.13548148917783,35.30856124616763],[127.13589531764383,35.308551557178404],[127.13594106691146,35.30858914589776],[127.13610552010198,35.308749426877675],[127.13637845823862,35.308830503846806],[127.13654140869407,35.30887313515568],[127.1368548422201,35.30903174336955],[127.13714559523326,35.30907334739325],[127.1373767235316,35.30909820792542],[127.13798198959074,35.30914029425733],[127.13848062536618,35.30917291728182],[127.13887608292089,35.30929341814497],[127.13908937790721,35.309351149180934],[127.13944074408472,35.30918029805634],[127.1400594513729,35.308863006982975],[127.14080279051538,35.30918727182148],[127.14132057566219,35.30917769680384],[127.14143753014562,35.30897550109277],[127.14667632214237,35.31113772699643],[127.14656682973099,35.31149820139978],[127.14624829060881,35.31237787621489],[127.1467785128271,35.31302145705678],[127.14664010335267,35.313544908652815],[127.1463412608553,35.31528671804217],[127.14678771909428,35.31542012902741],[127.14868795653396,35.316531197844306],[127.14894569353878,35.31676463460685],[127.14944442162346,35.317212211452706],[127.15046548583464,35.31794116966128],[127.15065016229933,35.31788385172148],[127.1541888914754,35.32115379161315],[127.15369730450495,35.32202000285028],[127.15371856584441,35.32219767306813],[127.1541624344386,35.322722732207744],[127.15433555908128,35.32269961967882],[127.15463997280601,35.32265899005966],[127.15805290221157,35.324976728772015],[127.15869562117817,35.3256932438144],[127.15950714390685,35.3265195058391],[127.15960130385054,35.326618141236416],[127.16004808310434,35.327053032680205],[127.1640349200868,35.32896822362261],[127.16451940338342,35.32927590634057],[127.16608661225018,35.33052458169732],[127.16643178941244,35.330533196549915],[127.16658165816749,35.330685172072684],[127.16804631870174,35.33201469355465],[127.16882184447488,35.33196507694609],[127.16931165754936,35.33226902842657],[127.17011606265578,35.332735679629415],[127.17083551449639,35.3327354669605],[127.17114964646127,35.332894272901925],[127.17142475608024,35.33264895982783],[127.17267320340076,35.331455553596186],[127.17264529122808,35.331133431729334],[127.17263520909228,35.331093454114445],[127.17256993130992,35.330827141217426],[127.17262854723613,35.33066205224945],[127.17295957980738,35.33046686936548],[127.17358798889337,35.33063886890225],[127.17744414620226,35.3318887306898],[127.17742288260042,35.3320954719876],[127.17827008337234,35.3322986208255],[127.17862819923089,35.33275865659177],[127.18043016323527,35.33291100359157],[127.18059032521792,35.33300841613451],[127.1813278000281,35.33345696605739],[127.1849547278505,35.33567756664991],[127.1858260060263,35.336771190221384],[127.1861625886796,35.336949238163],[127.18618616844985,35.33694300100961],[127.18476847171013,35.33352272337263],[127.18457580491621,35.33306108540124],[127.22079332289984,35.33481120619014],[127.25716334578512,35.31246204476745],[127.30649673356126,35.304564565216864],[127.30703584359638,35.304520246951995],[127.35425609533232,35.32235514693111],[127.39269870979484,35.30734642920864],[127.42989720595266,35.357582185871756],[127.47076600039318,35.36533563242244],[127.49791515607255,35.35988730066129],[127.57748101119101,35.308901047086536],[127.61928665504827,35.23560294672704],[127.61802616782602,35.19974210224065],[127.64837175889599,35.16039172804812],[127.69384835949954,35.12793103599479],[127.69485365614574,35.106293177747915],[127.7399444289998,35.06336237694283],[127.7634466557152,35.05483227864091],[127.7848410359362,35.02093533857523],[127.78057078303326,34.990400197859394],[127.75939185548094,34.9667763940651],[127.71316088211343,34.94358805671044],[127.69584619029445,34.91896498899687],[127.67147668687379,34.93086403318809],[127.64860992957516,34.90886933582593],[127.60510343323814,34.90352352315238],[127.5895018278927,34.8747533202411],[127.63933652960456,34.82660800435056],[127.64070523876761,34.82881529654956],[127.72043768222134,34.858881579201935],[127.77604968088586,34.85611800466198],[127.76621537494506,34.80814081502857],[127.74521301166736,34.77470258173824],[127.75067400948473,34.736333221662136],[127.73346392247548,34.7373298095877],[127.70452720801279,34.72045046792375],[127.67331518036679,34.7458643380002],[127.65529803773528,34.74610166421868],[127.62467674261043,34.69874672465178],[127.63809596839641,34.63639649505358],[127.55174639454991,34.66308781308944],[127.54897629011101,34.71316534439065],[127.59282989195707,34.743701248473066],[127.55745035426435,34.807213884137695],[127.52373825666723,34.81473340882784],[127.52629214497772,34.84475342805074],[127.51428762312204,34.87821888352689],[127.48993951469765,34.87396410013356],[127.49243296857928,34.846939840893256],[127.4170219308701,34.83267025233004],[127.39839079231895,34.81672535362477],[127.37280362226512,34.741622257594955],[127.40743593518617,34.696383567230264],[127.47510836964224,34.65807758356249],[127.50584766191525,34.60415018641663],[127.47520497061127,34.575479878146666],[127.41209415084045,34.59059114594007],[127.39383788649532,34.581616098612116],[127.4374007548783,34.550488722582344],[127.4038079823676,34.50506710901957],[127.37776045382728,34.50431376419851],[127.32757532895116,34.46623751653524],[127.26807649280514,34.48187159964602],[127.2740569078886,34.50275751443096],[127.22086793833958,34.53473728014733],[127.16921341188598,34.522689169784044],[127.13661877933988,34.52350142376284],[127.11241131345679,34.54657926483723],[127.12444728757583,34.56978966464019],[127.17117150233258,34.59415111960909],[127.17291318666861,34.62687973758133],[127.18988702843005,34.64351444755596],[127.22794507999797,34.65451385503068],[127.23970622576783,34.69733553657164],[127.26481513158998,34.71326193431922],[127.28582269977272,34.69181974347565],[127.27933840546069,34.67231170213225],[127.31461942748318,34.66438624117745],[127.33282647826154,34.71517947143443],[127.32703049150244,34.751960752380626],[127.2595667391744,34.73343894314494],[127.240828808402,34.76484357122786],[127.2094399958658,34.73805602011503],[127.19748039318631,34.70627723073437],[127.17709905105437,34.69195536742911],[127.14325458656423,34.69318582328455],[127.06752200128915,34.66352474035848],[127.05297382428803,34.64185409062141],[126.9950091839228,34.621908243959226],[127.00433767724,34.607666575268944],[126.9888251624598,34.561801982631295],[126.96053604571841,34.5306297871],[126.96300617170738,34.49538685526845],[126.97859367264732,34.4779403532871],[126.92539334835693,34.45285500675654],[126.80511379941221,34.456160682822166],[126.79006971906794,34.53598297056433],[126.79463559465435,34.56767392725873],[126.77120865395847,34.59684052616049],[126.76144968554094,34.502650627036836],[126.72728681619276,34.44589554307058],[126.64983628423366,34.42203102905879],[126.61658568972574,34.402853064834005],[126.61993869728732,34.35908368500759],[126.59958627301424,34.31344206827946],[126.52664663421615,34.331200845858824],[126.47455356979127,34.37769746245521],[126.49353929832397,34.40808178786968],[126.51685361867197,34.41432013725699],[126.50666634135905,34.44072342400421],[126.47647210714435,34.42962015042624],[126.45657116092522,34.47723611444887],[126.47175879332175,34.506601669245605],[126.46058473814738,34.532124040157996],[126.4168398985067,34.55432675734659],[126.33399113983465,34.57343164036183],[126.28051714784428,34.599617290490315],[126.28892100701412,34.62627138348064],[126.26769024792586,34.637926013637745],[126.25618833250455,34.66794212296782],[126.28952574726131,34.759665997579404],[126.30728224412401,34.74781836533304],[126.3072666334005,34.74779813038658],[126.30728224412401,34.74781836533304],[126.33051488669715,34.73347146397072],[126.3548410162417,34.69346732607159],[126.38550987825435,34.73166436110586],[126.38139249681181,34.76866008808708],[126.449717581901,34.78238533708457],[126.44098888178992,34.79939051306529],[126.38852613954485,34.78061199314673],[126.35090748561437,34.79709056386648],[126.40739167829658,34.85191220951071],[126.38966420523658,34.88969748348053],[126.39147480473771,34.92167154517543],[126.37366610545673,34.94132813090596],[126.33252679740653,34.91710253127618],[126.29493763047185,34.965280792681384],[126.34881060281188,34.97653058963966],[126.34120186075307,34.99739580676165],[126.3902309340226,35.02427375505141],[126.38202464506503,35.048477487587824],[126.35229882176532,35.03927966669749],[126.34476732274355,35.07078683593501],[126.27450544266561,35.03448749674384],[126.24899912295481,35.011853463523025],[126.23098550821858,35.02420390470456],[126.22254376100126,35.057927397176094],[126.19525892890809,35.053066562098756],[126.16268511988909,35.0675287079931],[126.16046485929783,35.09853599392067],[126.19036981651337,35.11260557962025],[126.2597435474835,35.09317427869212],[126.24654440837173,35.12118975520357],[126.33295465249607,35.148544247308855],[126.34658943808034,35.13873343433966],[126.32964711761353,35.10807040158012],[126.35332252180903,35.07841198145494],[126.39219977058931,35.06630537308725],[126.403833059352,35.026454996433195],[126.44514564260437,35.05831037291338],[126.46186309028806,35.1024266622492],[126.41885816876933,35.110367354670736],[126.35520087413958,35.184072452484294],[126.35369608553172,35.201833784601526],[126.29975668079076,35.21101365110296],[126.30121768738599,35.23436576017169],[126.32424066008988,35.252661401427844],[126.33445774733833,35.283318468289984],[126.37049481145708,35.28416543015378],[126.37913577744895,35.3284876502078],[126.40643732788617,35.386993613576806],[126.40705103904715,35.417116989887425],[126.44778723471107,35.42961117426382]];

        var 전남34 = [[126.45043675495965,34.58579777866635],[126.47836161772558,34.60069823199372],[126.43720868226623,34.62470109545563],[126.40480730095831,34.693853312467375],[126.37846560933541,34.71072916798341],[126.35918306481973,34.650871498818276],[126.37398391944625,34.61759535422937],[126.45043675495965,34.58579777866635]];

        var 전남35 = [[126.38020024541183,34.71081494922385],[126.3994827417131,34.71175518020031],[126.43172437269943,34.66297011884164],[126.47126286285759,34.641191964410126],[126.5171347721366,34.63163613707847],[126.51984377355937,34.67480244463182],[126.48894751753596,34.71359382873557],[126.48087725467613,34.73963908179341],[126.4509969928973,34.73114970105469],[126.40700433925079,34.743934595463934],[126.38020024541183,34.71081494922385]];

        var 광주 = [[126.81854759156532,35.05274880030051],[126.81858369706448,35.05276913668439],[126.84576249794966,35.06830917467154],[126.8466080213474,35.068573005989016],[126.86553230105955,35.075475138174994],[126.86554376598264,35.075484020461545],[126.891976503078,35.07794528948988],[126.89200901807288,35.07796630415403],[126.92057624543109,35.091686217003165],[126.93599500180206,35.07448169791126],[126.98895069186668,35.09498758195269],[127.01183207654151,35.127816213066616],[127.02022158694889,35.167341875145965],[127.02033133505184,35.16740499858744],[127.01352393222386,35.18025295804714],[127.01338536018856,35.18038352350489],[126.99608026829445,35.18873754045418],[126.9958179574043,35.188560368954185],[126.96637535930356,35.18428217716569],[126.9663490945926,35.1843149787202],[126.9653054691594,35.20356495554572],[126.96515321155596,35.20368574468748],[126.94818070936816,35.229750467803235],[126.9481083156739,35.22995534739311],[126.93262980863729,35.24155908602746],[126.93271357845201,35.241966568078254],[126.91466128579398,35.25820163147467],[126.91460840627687,35.25820258501885],[126.90409045612985,35.25780489767774],[126.90406610001455,35.25779064477204],[126.87134448550367,35.24767798721501],[126.87133988884251,35.24765291600128],[126.85595024263006,35.238717340868114],[126.85594235361212,35.238711688988744],[126.8482145317627,35.2358016742667],[126.84807441163919,35.2357409341446],[126.84789397868984,35.23612067503027],[126.84780405762314,35.23628463216459],[126.84776928522056,35.23633810969541],[126.84774485714527,35.236370608102916],[126.80622442692977,35.219308075819725],[126.78853603427024,35.224090876325924],[126.78821187029571,35.22361498287838],[126.77063405555518,35.23240800881879],[126.77030451785828,35.23282580081196],[126.76339995509737,35.25299425100298],[126.76344014914422,35.253043335777164],[126.76341100658749,35.25649484164315],[126.76329755712361,35.25659728074544],[126.7611833594247,35.25854689294732],[126.76104901664232,35.258570431400145],[126.74259214600683,35.251166609324166],[126.74258923537597,35.252137649849246],[126.74246154737597,35.25196020983384],[126.74203664978286,35.251305541901225],[126.7417753668995,35.25080966966922],[126.73723965580083,35.25291405600285],[126.73724171834623,35.25281011925512],[126.7238644210549,35.23123200004791],[126.72356145527581,35.230682470092695],[126.7165855108462,35.212273542551664],[126.71652310959337,35.21225720762573],[126.69043445279867,35.214977876885655],[126.69042922880816,35.21499700795926],[126.68933175493807,35.214915884503405],[126.68932695917701,35.21486897534845],[126.68920926698361,35.2146793897672],[126.68916920517975,35.21456633981315],[126.68910306867478,35.21462869528608],[126.6890475258756,35.21470375992788],[126.68902856442055,35.214768075293144],[126.68895610767868,35.21482309598694],[126.68889747299863,35.21485364400606],[126.68882423033935,35.21489021196288],[126.68878835887709,35.214801670712454],[126.68874994283594,35.214706516046526],[126.68872317083003,35.214481949796884],[126.68872510627712,35.21442689184631],[126.68868486056239,35.214448050544185],[126.6883818750914,35.21460809333021],[126.68803903944917,35.214731709318606],[126.68795548128918,35.21477163875986],[126.68788695577955,35.21492088569891],[126.68791946937107,35.21498842627778],[126.68709817726398,35.21520628728193],[126.68705342465856,35.21519404805095],[126.65320393105286,35.19251802509505],[126.65328988395234,35.19239926815664],[126.65506049581671,35.16528229294483],[126.65489171832519,35.165164634328846],[126.65219851928092,35.1512942936463],[126.65128463001516,35.15067803542778],[126.64737401709452,35.14417723046713],[126.64756409792108,35.1440356877617],[126.65172349583983,35.12050978661622],[126.65165860814174,35.120411856200505],[126.65519808873626,35.11485587172661],[126.65561902070772,35.114456529010276],[126.66814924973009,35.10502808409706],[126.6686072324061,35.10480301997311],[126.69723645349613,35.107572441135325],[126.697275599475,35.10757560382388],[126.72838657284282,35.10741097987782],[126.72843710557488,35.107417276548404],[126.76480740695249,35.07874719393346],[126.76485196273434,35.078684320595045],[126.75673721539022,35.05824441396908],[126.75700772132487,35.05845537416754],[126.77634613694235,35.052951494646514],[126.77804197501646,35.053987966010325],[126.78092447870833,35.05399323922972],[126.78133852212922,35.053900329604666],[126.81854759156532,35.05274880030051]];

        var 전북1 = [[126.40662660129111,35.80938309188012],[126.40662704590957,35.80938397044015],[126.40662660129111,35.80938309188012],[126.40662704590957,35.80938397044015],[126.40728727175566,35.81324359693282],[126.40662660129111,35.80938309188012]];

        var 전북2 = [[126.88282411119397,36.13207402130215],[126.8829864565131,36.13227863881684],[126.91969151941561,36.13629942248683],[126.93886165840367,36.15073702662024],[127.04003005195446,36.13933847885477],[127.05610632279303,36.126784876503415],[127.06045334788973,36.093914250955784],[127.12318778724037,36.06424768168607],[127.13392417256723,36.07296569971566],[127.1339394804531,36.07299187213333],[127.17775379674602,36.09275173960877],[127.17823746184253,36.09350184514853],[127.2183686724855,36.097514192146335],[127.21842119386484,36.09749692900462],[127.21953313651936,36.096713948378294],[127.21994196552679,36.09679740389796],[127.25213056541672,36.1131313408029],[127.2733991892519,36.1072797732042],[127.30169075209774,36.12520368549892],[127.34009324309051,36.128979280260644],[127.37649530932696,36.02288908915842],[127.4012230492714,36.008735861650685],[127.43724344610126,36.009332495848824],[127.45674606514737,35.983276216973415],[127.51975623930784,35.98322110869326],[127.53665554267045,35.996450570563944],[127.53760098986022,36.03248840228802],[127.61644151664615,36.01905629497314],[127.62055095983361,36.064205251579],[127.63829543249358,36.06793987054469],[127.63806332620011,36.06866712834684],[127.67273573114998,36.0416300964636],[127.67225098334296,36.04247149554254],[127.74730505299453,36.02970113951056],[127.76618288478659,36.012206835240264],[127.85280793458601,36.03910627747606],[127.87677397179243,36.0225117710674],[127.87548706050532,35.99697795874106],[127.8941552911934,35.98543360657659],[127.90859300752213,35.94159919105396],[127.88320637395968,35.930008203667875],[127.88505877208561,35.909605639189444],[127.85954023332997,35.9064905882214],[127.8536752012163,35.88134317699036],[127.73947140873071,35.82971057160425],[127.71938601485208,35.79731600195028],[127.69657211023363,35.785872892274554],[127.69485538285537,35.78460954984325],[127.69374113744114,35.78316863691442],[127.69279455056633,35.782745979566464],[127.69085656637307,35.781723564605095],[127.68936902320515,35.7805484781616],[127.68779258158887,35.7793012215172],[127.68481111971487,35.77767939006939],[127.68462371025349,35.775861602651],[127.6843422441043,35.77496842676834],[127.6825552114993,35.773580732070315],[127.68123311388325,35.77214232457461],[127.67943626552834,35.76849873637032],[127.66951338210485,35.771373664283324],[127.66841372238778,35.771062927545586],[127.6598729020388,35.71582562931561],[127.66033467394449,35.71497183392206],[127.66064678339477,35.71489888041999],[127.65749982254958,35.705794552242125],[127.65674693467376,35.70622224245349],[127.6554460779875,35.706379565402635],[127.65472431790133,35.70539802741328],[127.65391446661236,35.70483279147546],[127.65349395365298,35.70492675532446],[127.65315589902676,35.70509475036119],[127.65274271804533,35.70507009301312],[127.64985460227933,35.703639451649416],[127.64943840017595,35.7037961768478],[127.64903852326454,35.70328009869072],[127.64907492725418,35.702999531672745],[127.64975002719397,35.701406030990135],[127.64929963355473,35.7011331496353],[127.6485079661575,35.70090759684395],[127.64500151750653,35.698595658810866],[127.64512308798939,35.69713976108367],[127.640800246472,35.686810039386856],[127.64030273050489,35.686738326676036],[127.63305843993352,35.66643681904102],[127.63254262420274,35.66652219497405],[127.63235775544645,35.66645091860926],[127.62725083403896,35.655001403778],[127.62675950540404,35.65465541874915],[127.62211103328731,35.65075164268945],[127.62281328742067,35.649999278966725],[127.6200982250574,35.64613880136798],[127.61993587834712,35.64376578555697],[127.61977132487729,35.64345541464443],[127.61997406551045,35.64292277177771],[127.6199160670928,35.64273942786061],[127.62444489893235,35.63368204179607],[127.62450837139669,35.63303674058354],[127.62850388180762,35.625679413713385],[127.62927223848152,35.62481316122353],[127.63024039659574,35.62453195514021],[127.63084401413495,35.623865110390355],[127.63213090507831,35.623058641640384],[127.63486339951871,35.61909619814092],[127.63533525863222,35.61848395480906],[127.6346528484473,35.61776652881464],[127.62835313791203,35.61794606218605],[127.62745113752787,35.61719072979245],[127.62736555965456,35.61656690190047],[127.62724237116095,35.61636011484716],[127.62262726889718,35.61483508375381],[127.62139707930378,35.61511812697947],[127.62095261548794,35.61491157120156],[127.6208958767314,35.6145755901309],[127.62038518163796,35.61427853346022],[127.61876344923533,35.61129788297745],[127.61851309305688,35.61094316316292],[127.61822303943455,35.61040557228759],[127.61773621275252,35.61026878969559],[127.61748192781043,35.609806495022504],[127.6159335000761,35.609711322985184],[127.6149826592008,35.60942085722551],[127.61495367554703,35.6093974906535],[127.61283907605431,35.60773271328146],[127.6125886148827,35.607247441889015],[127.61286233002919,35.60349085474678],[127.61270605617713,35.60312113495046],[127.61229454762552,35.602881437458244],[127.6120307544127,35.60259112289517],[127.61226328789482,35.60117410138184],[127.61283053238691,35.60094252744414],[127.61265182059451,35.60054701867993],[127.61301551399849,35.59910131064195],[127.61291387851922,35.59884270962409],[127.61277393789479,35.5988507378709],[127.612084647124,35.598903387641606],[127.61140907077692,35.59871880339836],[127.61109844494328,35.59882064273873],[127.61013804723967,35.59852385828458],[127.6095383016413,35.59803751315953],[127.60808301816664,35.591060272540815],[127.60846462327758,35.59081838732404],[127.60908189288035,35.590073276857524],[127.6097504201027,35.58926917754791],[127.60980760022709,35.588781075279],[127.60967293869003,35.588437297943976],[127.60975869670959,35.58737589368225],[127.60995178418851,35.58682923392648],[127.60972550709317,35.58654421261054],[127.60971535770639,35.586204456580234],[127.60999906528261,35.58601446908278],[127.61023823324798,35.58547658062333],[127.61020771192338,35.585156781757206],[127.61107636367898,35.584104237411125],[127.61119353010471,35.58389254805806],[127.6079923797262,35.58274507323255],[127.60632579763248,35.58158530450096],[127.60642178473266,35.58107673000645],[127.60678931673738,35.5800916564128],[127.60452541923614,35.57737931403302],[127.60347105376357,35.57787113764806],[127.60277105082108,35.57738990747548],[127.58801786698824,35.55987220077352],[127.58720806916114,35.55866448401108],[127.58761351504363,35.55804175742319],[127.6094537893867,35.54049454633937],[127.60957781033692,35.54026226410641],[127.6286936171308,35.535984818282856],[127.62871653663093,35.53594033807085],[127.65038819777656,35.49789988422553],[127.6503354743223,35.49749036323248],[127.63668808903907,35.45935201664813],[127.67345486646288,35.44670993242778],[127.67406961587486,35.44572001925498],[127.66047407430055,35.41443375312688],[127.62554815430423,35.37677968664314],[127.62429905965813,35.37522702926713],[127.61019736628758,35.365918117680735],[127.62073946811742,35.332491214172805],[127.57748101119101,35.308901047086536],[127.49791515607255,35.35988730066129],[127.47076600039318,35.36533563242244],[127.42989720595266,35.357582185871756],[127.39269870979484,35.30734642920864],[127.35425609533232,35.32235514693111],[127.30703584359638,35.304520246951995],[127.30649673356126,35.304564565216864],[127.25716334578512,35.31246204476745],[127.22079332289984,35.33481120619014],[127.18457580491621,35.33306108540124],[127.18476847171013,35.33352272337263],[127.18618616844985,35.33694300100961],[127.1861625886796,35.336949238163],[127.1858260060263,35.336771190221384],[127.1849547278505,35.33567756664991],[127.1813278000281,35.33345696605739],[127.18059032521792,35.33300841613451],[127.18043016323527,35.33291100359157],[127.17862819923089,35.33275865659177],[127.17827008337234,35.3322986208255],[127.17742288260042,35.3320954719876],[127.17744414620226,35.3318887306898],[127.17358798889337,35.33063886890225],[127.17295957980738,35.33046686936548],[127.17262854723613,35.33066205224945],[127.17256993130992,35.330827141217426],[127.17263520909228,35.331093454114445],[127.17264529122808,35.331133431729334],[127.17267320340076,35.331455553596186],[127.17142475608024,35.33264895982783],[127.17114964646127,35.332894272901925],[127.17083551449639,35.3327354669605],[127.17011606265578,35.332735679629415],[127.16931165754936,35.33226902842657],[127.16882184447488,35.33196507694609],[127.16804631870174,35.33201469355465],[127.16658165816749,35.330685172072684],[127.16643178941244,35.330533196549915],[127.16608661225018,35.33052458169732],[127.16451940338342,35.32927590634057],[127.1640349200868,35.32896822362261],[127.16004808310434,35.327053032680205],[127.15960130385054,35.326618141236416],[127.15950714390685,35.3265195058391],[127.15869562117817,35.3256932438144],[127.15805290221157,35.324976728772015],[127.15463997280601,35.32265899005966],[127.15433555908128,35.32269961967882],[127.1541624344386,35.322722732207744],[127.15371856584441,35.32219767306813],[127.15369730450495,35.32202000285028],[127.1541888914754,35.32115379161315],[127.15065016229933,35.31788385172148],[127.15046548583464,35.31794116966128],[127.14944442162346,35.317212211452706],[127.14894569353878,35.31676463460685],[127.14868795653396,35.316531197844306],[127.14678771909428,35.31542012902741],[127.1463412608553,35.31528671804217],[127.14664010335267,35.313544908652815],[127.1467785128271,35.31302145705678],[127.14624829060881,35.31237787621489],[127.14656682973099,35.31149820139978],[127.14667632214237,35.31113772699643],[127.14143753014562,35.30897550109277],[127.14132057566219,35.30917769680384],[127.14080279051538,35.30918727182148],[127.1400594513729,35.308863006982975],[127.13944074408472,35.30918029805634],[127.13908937790721,35.309351149180934],[127.13887608292089,35.30929341814497],[127.13848062536618,35.30917291728182],[127.13798198959074,35.30914029425733],[127.1373767235316,35.30909820792542],[127.13714559523326,35.30907334739325],[127.1368548422201,35.30903174336955],[127.13654140869407,35.30887313515568],[127.13637845823862,35.308830503846806],[127.13610552010198,35.308749426877675],[127.13594106691146,35.30858914589776],[127.13589531764383,35.308551557178404],[127.13548148917783,35.30856124616763],[127.13523641075896,35.308523814859555],[127.13485161313807,35.30846116478681],[127.13415434294224,35.30847350502835],[127.13393521391927,35.3085027501255],[127.13370548941093,35.30853476448698],[127.13358572888312,35.30859157110539],[127.1334348016618,35.308618388282504],[127.13296280203362,35.3086939743696],[127.13284367078069,35.30872560538878],[127.13242562348444,35.308983848597485],[127.13219791278382,35.30901806617514],[127.13101149489636,35.309108331493405],[127.1306201769908,35.30911468086046],[127.12990535658757,35.307871406867925],[127.1296414819273,35.30770254302678],[127.12931131100288,35.3074884297737],[127.12897701121976,35.307556941439536],[127.11348108956689,35.2998720918963],[127.11316330287869,35.300087083294194],[127.10395283454883,35.29964981050685],[127.10373204769054,35.29969692081593],[127.10327586201244,35.2998793028764],[127.1029214241412,35.30011085572432],[127.10278460060118,35.30033417648629],[127.10224645111698,35.30137301550287],[127.10186136557188,35.301456609952865],[127.10180443635889,35.301680422027005],[127.10180131480939,35.30170791525981],[127.10063677868119,35.301767561704416],[127.09678789631059,35.30179659742181],[127.09676395611213,35.30181144321267],[127.09523263376956,35.30302832158915],[127.09495499816926,35.30306459914037],[127.09167394906493,35.30441777372614],[127.09155372161388,35.30451089975722],[127.09116745349826,35.3046622042613],[127.09076268171701,35.305006046627035],[127.08609713229059,35.307774301178505],[127.08606722420363,35.30780587773453],[127.0859808421887,35.307826353311846],[127.08562596741463,35.30774902322928],[127.08534040410152,35.30777308893211],[127.08119591891057,35.31003877620464],[127.08029442086502,35.31019729865082],[127.07885488453985,35.31072115412658],[127.07819348710204,35.31082575156882],[127.07782566021662,35.3108610101869],[127.07519936644825,35.31082680352278],[127.07409038731383,35.311589352139265],[127.07400357193664,35.31167422854567],[127.0727904976067,35.31195609356018],[127.07238424830457,35.3122118869943],[127.06687123013808,35.312083364994145],[127.06675629219451,35.312417866072494],[127.06642106154997,35.31318767529073],[127.06606836032994,35.31319473243346],[127.06528290593637,35.31333662255914],[127.06366185206501,35.314806474690904],[127.06357975437511,35.31495344284351],[127.06300450119736,35.31566268779791],[127.06283328816552,35.315785491015674],[127.06282750106499,35.31585448180523],[127.06271448305328,35.316022601242175],[127.06262965823912,35.31618815554111],[127.062615177182,35.3162633338429],[127.06261095777496,35.31628237208028],[127.06258857664727,35.316322519652296],[127.06258473993887,35.31635327499313],[127.06259631170056,35.31637211596498],[127.06255000185492,35.316485689005916],[127.06249957581186,35.31656564447459],[127.06247867818429,35.316648460265036],[127.06244850979897,35.316686791051325],[127.06180508784814,35.3171162734673],[127.06178389556734,35.31712925419019],[127.06152426915612,35.31715657660681],[127.06129571811792,35.317241469094334],[127.05941962357299,35.31710785956365],[127.05938254246585,35.317092807090106],[127.05932207101704,35.31704678707264],[127.0593502156522,35.316990305239955],[127.05751463695337,35.317215313200755],[127.05726365566707,35.31751950217612],[127.05731915052061,35.3175100306022],[127.05732200136679,35.317529867568574],[127.05726999323034,35.31754037406406],[127.05733692148021,35.31763784006241],[127.05726470174329,35.31771353110105],[127.05720362449122,35.31782522510863],[127.05718488149225,35.31781909568998],[127.05711645712366,35.31781707217921],[127.05696626313976,35.317772119781395],[127.05689607580068,35.31781328870971],[127.0568290231615,35.31783926874357],[127.0567713685317,35.31782658637846],[127.05667851866585,35.31779032323696],[127.05664861859148,35.31772648664285],[127.05623331150619,35.31735594929619],[127.05593880240097,35.317287932780886],[127.05563060068826,35.317447705930256],[127.05550432733774,35.31755282153123],[127.05547823512458,35.317574537231486],[127.05547013313162,35.317578641905335],[127.05455834656077,35.31789865762723],[127.05454252098768,35.31789719540907],[127.05432950814587,35.317877477517804],[127.05371731198328,35.317815533893196],[127.05323052861972,35.317188786871284],[127.05305451067632,35.317167969284725],[127.05131426872714,35.316683423137626],[127.05090789146271,35.316716443555734],[127.05083236200521,35.31709056267865],[127.04552467224886,35.31971124024936],[127.04533349321167,35.31998929804711],[127.04362718971772,35.3227745191811],[127.0439424436527,35.323082699600164],[127.04531213708567,35.32438809277344],[127.04530817993552,35.32439192485951],[127.0456656829221,35.324627672555636],[127.04601434784841,35.32548856646887],[127.04837359944564,35.32694945847083],[127.048702784534,35.32698477952202],[127.04872842895199,35.326941253326986],[127.04876173084732,35.326940239823145],[127.048755036193,35.32700242513702],[127.04888358537276,35.3271194303738],[127.04917076762719,35.32728303476045],[127.0492491789343,35.32740354752738],[127.04945979693206,35.327741165002294],[127.04945986661212,35.328044993950336],[127.049443416129,35.32851523277849],[127.05021484894843,35.32870766421248],[127.05066926310411,35.329094438531136],[127.0506975981423,35.329099348246324],[127.05096806097077,35.32942298603152],[127.05100820443432,35.32952926327554],[127.0508309473598,35.33033510558824],[127.0507482320825,35.33056148097651],[127.05134481748526,35.33203961313012],[127.0511674051233,35.33236189306574],[127.05115750877609,35.332384223036755],[127.05109141778544,35.33247660028903],[127.0504076106798,35.33340053325112],[127.05042454593782,35.33357739400516],[127.05049742437443,35.33437593207955],[127.05050299636095,35.33444112287039],[127.05050755775149,35.33479968729829],[127.05071013723136,35.335027749029905],[127.05127777007137,35.33526767518573],[127.05168152922933,35.33536883535238],[127.0519214833391,35.3355874335789],[127.05247785084048,35.335917284246776],[127.05242988762515,35.33653840939203],[127.05253927871046,35.336977291724416],[127.0524645167142,35.33740026223462],[127.0530624980214,35.34035688464747],[127.05366108900317,35.340688252825586],[127.05404440220032,35.340765041945815],[127.05452581377912,35.34077318681698],[127.05525206456464,35.341063273286686],[127.05570103265576,35.34073319595565],[127.0583765342189,35.33747718278416],[127.05876650153357,35.33741246345884],[127.06281923267169,35.33634478927542],[127.06303206303716,35.33623140218362],[127.06354222814151,35.336519286634356],[127.06434930707978,35.33652370049524],[127.06508262553842,35.33653057238946],[127.06542259189682,35.33702604198018],[127.06759248137807,35.33833342128034],[127.0677174736016,35.33860579701793],[127.06907581260067,35.33893690440889],[127.06943822896982,35.33911461408646],[127.07025672476883,35.33983965618674],[127.07005340288181,35.34004872639606],[127.07000980207705,35.34007833268581],[127.07002438480437,35.34008754498932],[127.07036778030292,35.34055245244157],[127.07046151248713,35.3407088603066],[127.07026453411567,35.34149949033905],[127.06803584362882,35.34361151940662],[127.06801220397746,35.344429927815725],[127.06744822182513,35.345463869058705],[127.06717304945089,35.345638975425565],[127.06719563261115,35.34566452475486],[127.06839939306981,35.35015287231702],[127.06860493715867,35.350346633401635],[127.06990030348723,35.3514044953778],[127.06966295424525,35.35183265091608],[127.06933362601063,35.35252011482651],[127.06902341310692,35.35308857414409],[127.0687635995155,35.35355629050004],[127.0684985440412,35.35400826302434],[127.06783563586043,35.35471713341283],[127.06647100309539,35.354996781230405],[127.06524178643107,35.35597802351653],[127.0653278911671,35.35623227776914],[127.06760836995804,35.359372121266865],[127.06752290013365,35.359518425890435],[127.07060767149419,35.36551344051835],[127.06994761491211,35.36572747511732],[127.06768477387317,35.367362799213595],[127.06713756729249,35.36791261644664],[127.06623656831921,35.368556845637016],[127.06570624562612,35.36863433610766],[127.06359463226285,35.36989715704783],[127.06347680528391,35.37037682933448],[127.06498367162645,35.37595386005495],[127.06433718690923,35.37600241896709],[127.06196380232598,35.37702640559902],[127.06187386753679,35.37779105962054],[127.06052420274135,35.37928219699011],[127.05995242481774,35.379847910000215],[127.0578485962123,35.381632885952534],[127.05773278811307,35.381986924691496],[127.05586016282943,35.384537735688674],[127.05575781380713,35.384120776824815],[127.04122858380285,35.37959273635295],[127.04072017772309,35.379583745255225],[127.03880148044851,35.38059275178686],[127.03936421344798,35.38085591546481],[127.03948994013903,35.3809496133285],[127.03972426647208,35.381129983782294],[127.04015638001651,35.38194368482429],[127.04014801596051,35.38228982174388],[127.04047985516888,35.38239530472432],[127.04038677948814,35.382600430301125],[127.04032438872024,35.382578953893336],[127.04015464514879,35.382528101797696],[127.03573021431465,35.390018598154214],[127.03542681196188,35.3902244821893],[127.03424413485386,35.38948949443105],[127.03391711529682,35.3894331331135],[127.03354944637344,35.389537694334145],[127.03322957233095,35.38971061598333],[127.03245491736568,35.389441710269566],[127.03205128833648,35.38957703819909],[127.0316727010411,35.389808511301155],[127.03117170736853,35.38974472303234],[127.03076229746911,35.38982284131084],[127.0307314499903,35.39010882851421],[127.03046305467696,35.39008991148688],[127.02852432773533,35.39974016160258],[127.0301482690323,35.39955316871038],[127.03161670968387,35.40006171314916],[127.03289383052407,35.400500022893475],[127.03383134738776,35.399664072991456],[127.03460525564647,35.39955309101973],[127.03527121420714,35.39961947773986],[127.03592061791802,35.399686253080475],[127.03661522360524,35.39942769899288],[127.0368517044435,35.39934227507404],[127.04330650882598,35.39933871455648],[127.04391856370897,35.400302307460166],[127.04513498893077,35.401208590553786],[127.04711760287674,35.40256442169659],[127.04696050212435,35.403055284532],[127.045647934864,35.40791333142809],[127.04607394687136,35.409173864671104],[127.04661838609519,35.41111713521302],[127.04692186543743,35.41201800422833],[127.04716080476295,35.41302335031932],[127.04739392077425,35.41378719035257],[127.04753006006736,35.414233839714285],[127.04792367829032,35.41557386447706],[127.04809534206042,35.41699372198661],[127.04978424823443,35.42193169722564],[127.04972910226891,35.42275790945067],[127.05180773182055,35.42563021670324],[127.05231520673998,35.42651610400503],[127.05124923076106,35.42737535639796],[127.05036107948413,35.428897948413955],[127.04982266488538,35.42977546800286],[127.04902726752323,35.431083607989024],[127.04656852935756,35.431367843577696],[127.0446107360711,35.43354548312563],[127.04458314281041,35.43355383013197],[127.04163519773559,35.432533677451744],[127.04146835546568,35.432572858872284],[127.04105060984836,35.43228741549701],[127.04018290673311,35.43178880201124],[127.0384147087126,35.43275148118751],[127.03762510903665,35.4333668305347],[127.03765653962057,35.43821380178567],[127.03736688550653,35.43889775003858],[127.03738695697355,35.439578252842665],[127.03536542938814,35.454873680687925],[127.03495437783886,35.455576763087215],[127.03492368070546,35.456994630897235],[127.03590218614035,35.45903711932686],[127.03651957821656,35.45980827294474],[127.03501326604173,35.46519966321813],[127.0350920080802,35.46568488766705],[127.034722145982,35.46657185043678],[127.03385807239927,35.46638431601602],[127.03283834292246,35.4664255499773],[127.03239820332358,35.465894757049476],[127.03074502867472,35.46520077467249],[127.03074866427387,35.46520077378999],[127.0291804967069,35.46433046230842],[127.02856895113885,35.46419844240113],[127.02713385577457,35.46413284363445],[127.02629739828845,35.46483216372786],[127.01512457698058,35.45863365363193],[127.01429200694616,35.457819348933704],[127.01308406078981,35.45864787395788],[127.01221673010828,35.46012009894374],[127.00986941307139,35.46168544477608],[127.00240995939612,35.46432081910151],[127.00080670615814,35.463473302779796],[126.99802433884389,35.45730383115422],[126.99928203213432,35.45573541911993],[127.00055766709909,35.45396330664118],[127.000199920382,35.45242710136436],[126.99911126708133,35.45077430721556],[126.9985937468211,35.44990575713109],[126.99866828829536,35.44947556325777],[126.99818404738402,35.446921848807946],[126.99814309123863,35.446757863143446],[126.9979859098758,35.44610437205876],[126.99768710994626,35.44567795275578],[126.99711303955439,35.44514836803308],[126.99680545442045,35.44479214030243],[126.99673290659237,35.44474714402516],[126.99669799248767,35.444732685621865],[126.99651292241902,35.444532740278326],[126.99523591466007,35.44388042023074],[126.99486536049696,35.44316707552896],[126.99476666638598,35.44274229090244],[126.9945455264679,35.439804127564244],[126.99403019951039,35.43985798648168],[126.99245941621865,35.439585368074525],[126.99222323073624,35.43950150119181],[126.98970236623965,35.439144254565285],[126.98955851630913,35.439094370882124],[126.98935492693623,35.43862191879127],[126.98909907589751,35.43833321155611],[126.9869854668179,35.43692321602824],[126.98642575255825,35.43695402668631],[126.98596375067814,35.43678936161702],[126.98530662167069,35.436731861973676],[126.98468889281799,35.431278238897306],[126.9850747046107,35.43005496593356],[126.98394909763395,35.43024475997275],[126.98295503565755,35.42996074314335],[126.97316388349759,35.427796072664734],[126.97138061224311,35.42767121552887],[126.97180142972071,35.41408468970997],[126.97199090573584,35.41358729070377],[126.9721026890174,35.41328525983161],[126.97219465553984,35.41303914170079],[126.97254873498083,35.4126011331523],[126.97336941599238,35.41177814546328],[126.97348999197477,35.411465587881366],[126.97384035660316,35.411290876152556],[126.97392361360514,35.4111224481128],[126.97454863442105,35.41004503788803],[126.971144946711,35.39828604025331],[126.97063047858866,35.39774896769892],[126.97016548975512,35.39697397564639],[126.9693299273364,35.397230001316295],[126.96059731263581,35.39532359926493],[126.96010370108398,35.39546128809056],[126.9583362486606,35.39611060233968],[126.95746586894255,35.39633501444315],[126.95690322827392,35.396392465686596],[126.9563840150702,35.396444080955206],[126.95609653473554,35.39647384309569],[126.95473345400274,35.39654530310143],[126.95433524094311,35.39662333787836],[126.95402022970652,35.396464086840716],[126.95366796228,35.39622465697087],[126.94992783224771,35.395337736717046],[126.94964352224568,35.39549015434296],[126.94930036354121,35.39567917550438],[126.94906343743153,35.39593546213478],[126.9487938504562,35.396225461403795],[126.94824079399703,35.39599500432027],[126.9436079237102,35.394889607198024],[126.94360313138249,35.39489536433102],[126.94358627366391,35.39488750577274],[126.93694694790977,35.394674154702116],[126.9363007741364,35.39464350569241],[126.9351052860024,35.395450725205656],[126.93472695922588,35.39558436270435],[126.93352175560183,35.395130399985305],[126.93292635521576,35.395244711534744],[126.9315892815473,35.39821827874009],[126.9313405319149,35.39836431945949],[126.93092707709799,35.39857850243897],[126.930638361364,35.39875552371252],[126.93052140803864,35.39906315610533],[126.93049246290578,35.39934554910195],[126.93056566534013,35.399799270495215],[126.92999647240362,35.400185068843705],[126.93032692111483,35.40104195743098],[126.93080492433836,35.40150455079075],[126.93081402195929,35.40151170355945],[126.93129476427728,35.40158901928909],[126.93221024229275,35.40249704809808],[126.93214495032753,35.40271688708445],[126.93248592662519,35.40331123070263],[126.93315850314926,35.40465734267412],[126.93326286355588,35.40481695280053],[126.93323960885114,35.40608979778246],[126.93276639041746,35.406038028423644],[126.93188175773308,35.40591069793874],[126.93138718357588,35.405795773615715],[126.93096276936195,35.40568192473548],[126.93062161410573,35.40593554511449],[126.93003364421064,35.406005645919656],[126.92922676185937,35.40567980881713],[126.92819817192566,35.4053014295107],[126.92774695647795,35.40538321099899],[126.9233737700358,35.40390868506437],[126.92312133397012,35.40318891889135],[126.92311900658089,35.40318228368624],[126.92070490648416,35.40302519009454],[126.92014672194888,35.40306762833104],[126.91978523205236,35.402579925007544],[126.91945074241465,35.40194226918781],[126.9194259107278,35.40195528485962],[126.91742715344168,35.402139050990066],[126.91721388388636,35.402651166281565],[126.9171377187438,35.403262269450536],[126.91717509351845,35.403885655598046],[126.91719291538723,35.40418296752334],[126.91660833816219,35.40492479310507],[126.91748879873921,35.405942030737336],[126.91786791286805,35.40631458258049],[126.91789497873417,35.40640491325671],[126.91802607765223,35.40661452397906],[126.91810677134862,35.406745000223516],[126.9181489265887,35.40689311565436],[126.91817256886826,35.407144292895865],[126.91821857139949,35.40722347823792],[126.91823911338685,35.407213677048816],[126.91823908558251,35.407240734559316],[126.91818259345332,35.40726659947966],[126.91823899922397,35.40732477327545],[126.9184082070714,35.40761634849894],[126.91867452403696,35.40836408330997],[126.91887197708381,35.40865300928876],[126.91897337514641,35.40882325613596],[126.91889610925374,35.409074274091836],[126.91977149479966,35.40994604554338],[126.92077872666371,35.410863000519534],[126.91923152843023,35.41216598160903],[126.91875381049495,35.4123758874901],[126.91853534788714,35.41247921783141],[126.91823355272173,35.41262425738091],[126.91754641889308,35.41295447489759],[126.91739399721439,35.413093604215405],[126.91614824943737,35.41584470008619],[126.91514546821341,35.41606287225239],[126.91272575972722,35.415262048976786],[126.91272292082645,35.415260478602555],[126.91271022152154,35.41525461973635],[126.9121058819343,35.41537688837122],[126.91207103424024,35.41513799595271],[126.91165523012751,35.41517314533191],[126.91163490989636,35.4151492363504],[126.91157025260138,35.41506513157179],[126.91145607798555,35.4150250732209],[126.9113674132715,35.41501529996455],[126.9110170737524,35.414943816240886],[126.910994111441,35.41495922957069],[126.91096757841069,35.414958010949434],[126.91086183859842,35.41505515660745],[126.91077716856964,35.41509634629401],[126.91066482787207,35.41514921420358],[126.91042294656197,35.415070338315836],[126.91014859538303,35.415178253075815],[126.91010654566638,35.41520925357927],[126.90999697683634,35.41526397967221],[126.90993842547493,35.41528285394209],[126.90983196739455,35.41529328258456],[126.90978343343778,35.415294291290174],[126.90963967583951,35.415311811845],[126.90960375233365,35.41531915729699],[126.90953478501335,35.415328514572394],[126.9093321851173,35.41533003668885],[126.90921997944531,35.41532126238875],[126.90907327958928,35.41534086206146],[126.9082686496784,35.415872551938364],[126.90824857951402,35.41627287370026],[126.9088030901786,35.41896729516245],[126.90875770044215,35.419009045300044],[126.90835348594797,35.41933601089107],[126.9081633324955,35.41960209456604],[126.90776441315575,35.41987775940083],[126.90771136509956,35.419952148819256],[126.90777325527513,35.42002006583572],[126.90737758166178,35.420228629006715],[126.90721484628801,35.42027178328913],[126.90243678811161,35.422100297518035],[126.90187454827371,35.42301512002082],[126.90258873865201,35.42475235877762],[126.90256371343638,35.42550615221524],[126.90256332085367,35.42551308384036],[126.90256248381036,35.42553919337571],[126.90256209473529,35.42555120757132],[126.9025258764352,35.426011623107655],[126.90284260903245,35.427371757211404],[126.90405213800433,35.428000611726056],[126.9043168221165,35.42969572672347],[126.90261990479503,35.43014959434956],[126.89944982253803,35.43155078167623],[126.89947638516871,35.43157729374833],[126.89944816259207,35.431617791983506],[126.89866957328407,35.43217454884736],[126.89855421872893,35.432208403075826],[126.89846088987797,35.43228483597104],[126.89836338706654,35.43235266670596],[126.89830874356862,35.43248186830878],[126.89815545727043,35.43257066082055],[126.89809007157406,35.43259995162266],[126.89777053183997,35.43278074244562],[126.89776007848847,35.43279124277777],[126.89768136144664,35.43290235209438],[126.8975468417296,35.43343493927795],[126.89749741813785,35.433528344841434],[126.89749998765177,35.433568419413],[126.89747350471376,35.43364359312774],[126.89748738920514,35.43372264118435],[126.89749579118757,35.433834582429064],[126.89747862418609,35.43383319765571],[126.89748401526678,35.43386290054685],[126.89752797085634,35.4338598378639],[126.89754663642854,35.434169229463336],[126.89747950349634,35.43446857869261],[126.89748113908979,35.43491826291582],[126.8975935079355,35.43518894260251],[126.89874763220858,35.4363187241501],[126.89953621893915,35.43652060116125],[126.89950561202612,35.436670445520306],[126.89960802425148,35.4365991660302],[126.89959548835455,35.43654909657813],[126.90019405530593,35.43663129487643],[126.90072965824658,35.43711425122881],[126.9051134748784,35.440817821388144],[126.90431364430854,35.44112791684279],[126.90233241630044,35.44178287627239],[126.90168275338225,35.441902666351844],[126.90122679954341,35.441986732652545],[126.90050732793125,35.44212406105309],[126.89892387586708,35.444196734236435],[126.89889237679188,35.44469074309284],[126.89879529440027,35.445023199273734],[126.89816766532202,35.44541610430172],[126.89787037555426,35.44578013245027],[126.89701503658758,35.446061767359325],[126.8967384327835,35.44695506018014],[126.89677487813742,35.447985695312845],[126.89496827533235,35.44856016115368],[126.8936939469299,35.44888655779365],[126.89283716549883,35.44927193849106],[126.89259373369272,35.44941467608486],[126.89255880658007,35.44959396025344],[126.8920720627109,35.449674151515865],[126.88684576435345,35.45048000540203],[126.88578459748736,35.45099385780145],[126.88280747061759,35.45280073596256],[126.88248577808339,35.45325906881721],[126.88266112623434,35.454274341222074],[126.8695134078482,35.46164012727802],[126.86890175569471,35.4614359238733],[126.84029137628622,35.46211821965313],[126.84024650929517,35.46217238144506],[126.83954288015578,35.462321562593075],[126.83949307474691,35.46234881441951],[126.8431951528395,35.478341069781955],[126.84329985257736,35.47833050143945],[126.84320869669347,35.47846346784241],[126.84320766974518,35.47845896898295],[126.84238395280157,35.4792804623838],[126.8423070711508,35.47932669713233],[126.81398838330378,35.46883369709475],[126.8139730484842,35.46879903520319],[126.77406919988032,35.46845866773163],[126.77400506229051,35.468433193177496],[126.74807576322272,35.45058156475165],[126.75266867155027,35.42948787784144],[126.73006035431877,35.401321052235154],[126.73000840962884,35.401329966706506],[126.72999584108452,35.40133239905505],[126.72314082665403,35.40022466991154],[126.722468633855,35.399932544731236],[126.72213530453159,35.398258438722735],[126.71482279219542,35.36471211480868],[126.71472192081235,35.364760087139935],[126.69683157576904,35.34965814313397],[126.69681420358695,35.34972002013913],[126.66644498172303,35.35148689385442],[126.65282060763234,35.32779209210265],[126.64427527468914,35.32720412262489],[126.6284430217814,35.321291727532376],[126.62835084027834,35.32127535425656],[126.62773027983206,35.32129515156291],[126.62770611059254,35.321268225803024],[126.62768402471951,35.321247373331886],[126.62525310626734,35.322394889704405],[126.62523865067575,35.32244110975098],[126.62207389690353,35.32366672004993],[126.6220201726449,35.32371875606943],[126.6177696260541,35.32594092191477],[126.61775175032527,35.32594877927378],[126.61771728248459,35.32604886985686],[126.61657149312519,35.327505730306875],[126.61655542041589,35.32755543224958],[126.61654450879932,35.32756732204266],[126.61655422040144,35.32760899467752],[126.61655615352782,35.32762598074029],[126.61612428157636,35.328014256076614],[126.61609182531079,35.32805381081442],[126.60938171040297,35.33098960202234],[126.60940403505144,35.331037940293925],[126.58281320418715,35.32650630509403],[126.58288028043897,35.32648500467381],[126.58274285605277,35.326494280661784],[126.58273440344566,35.32648276007876],[126.58330935870652,35.31813193058833],[126.58333423980565,35.31812860095517],[126.58285550144198,35.31782548835397],[126.58277574955434,35.3177493568896],[126.58093070740068,35.31725071593543],[126.58098100338347,35.31723661400133],[126.58125494122604,35.31671395155593],[126.58129124126344,35.31670124259706],[126.58133974889077,35.31669037920206],[126.58258241120295,35.31591767710573],[126.58262012423734,35.31590380179876],[126.58264261357928,35.315879976591475],[126.58856948042231,35.30976361562962],[126.58850449433886,35.30973136031499],[126.5884478664414,35.309666416083004],[126.58291631607774,35.30200311678191],[126.58289775860862,35.301994273225326],[126.57949549963331,35.30301984997589],[126.57942167246685,35.30303005652224],[126.57668730743042,35.30438340478464],[126.57615286768142,35.304886358669116],[126.57374832083589,35.3083143923683],[126.57375135873343,35.30832647171702],[126.5609909265218,35.311851253748074],[126.56096353631119,35.3118651429593],[126.56095652271071,35.31177977098941],[126.54813037159654,35.31347150213078],[126.54742353334318,35.312930373817096],[126.52542771928326,35.313233788151116],[126.52506639958594,35.31375814986733],[126.5240252143082,35.31463848314596],[126.52395124751249,35.31467307221013],[126.52382499973507,35.31471746841448],[126.52380631833928,35.314739747122275],[126.52377303800574,35.314742454786156],[126.52385440946414,35.315002807758084],[126.52385322067535,35.3150178819206],[126.52384061132496,35.315036146802406],[126.52391404606881,35.31633814184709],[126.52388086435639,35.316365085867496],[126.52142162015853,35.32376125807467],[126.5213976259249,35.32380540800229],[126.52134342427647,35.32380638215208],[126.52126165454303,35.323925933855186],[126.5212583934378,35.32393069702968],[126.51380202523578,35.32702079804872],[126.51380907526746,35.32702443150604],[126.51928432554321,35.34123715138708],[126.51923750493889,35.341293378836],[126.51912518760057,35.341663010982174],[126.51913237180281,35.34169618144296],[126.51913068096628,35.34170852211815],[126.51913570636344,35.34174959694914],[126.51914144770852,35.34202004178711],[126.51918185133854,35.34202361919095],[126.51909655897333,35.34228437191918],[126.51905372606444,35.342320983808825],[126.51900049261732,35.342379113880796],[126.51891067436465,35.34328418139129],[126.51896094710743,35.34324690502196],[126.51901141833905,35.34323917457084],[126.51972569846563,35.3434909844618],[126.51975968944419,35.34348737131583],[126.51984063981033,35.343467134773626],[126.51983972161243,35.343484571529366],[126.51994441356548,35.34958587487752],[126.51991511661167,35.34956930034717],[126.49043259396268,35.39535419331815],[126.49039558613765,35.39534745803128],[126.49011605877041,35.39703644117422],[126.49008789556632,35.39707246419958],[126.48945336210042,35.39831274178437],[126.48950602645535,35.39832963907149],[126.48980456227366,35.398380827338556],[126.48986528531196,35.3984324950198],[126.48987459300147,35.398441898501474],[126.48991976964668,35.39842444278838],[126.48997148794042,35.39838018195581],[126.49001148833558,35.39841010368609],[126.49058541544481,35.39935670473539],[126.49062557769443,35.39940117284265],[126.49061243387489,35.399429265344374],[126.49141447947802,35.40049877287015],[126.49136443614417,35.40053909370343],[126.49134556231358,35.400564484910724],[126.49100891940448,35.403466458110316],[126.49099565856889,35.40351653157793],[126.49095652522342,35.403547587954534],[126.49115872498481,35.40463637234767],[126.49117547517282,35.40468613206834],[126.49130089762365,35.40488690491225],[126.49128658004899,35.404901931944885],[126.49280133192686,35.40809141465478],[126.49280343291207,35.40810914303305],[126.49280001986523,35.40824068325571],[126.49282719872643,35.40829710263593],[126.49203677663772,35.410278363528626],[126.49200733680728,35.410278356755015],[126.49173273515109,35.41114847191515],[126.49171372244099,35.411150157933115],[126.48343195636737,35.41825188878329],[126.48336600403343,35.41831202080751],[126.48332867362288,35.41835244599619],[126.48331148058459,35.41836204341172],[126.4832781523694,35.41839794361347],[126.48292594669692,35.418658008041184],[126.48291724861096,35.41865274317097],[126.48113326081179,35.420001297718294],[126.48107159076122,35.42004921497349],[126.48103033014931,35.420109613526094],[126.48103073742811,35.42012327942672],[126.48104695765062,35.42015905879759],[126.48101872461649,35.42018338017983],[126.48100171816851,35.42018939122988],[126.48076611914391,35.42118426137248],[126.48074303804088,35.42119654607353],[126.48071882953917,35.42122662582197],[126.48071608582431,35.421273310012374],[126.4805261497978,35.42168355773534],[126.4805470245424,35.42170276385447],[126.48073932937251,35.42169765378972],[126.48077260790045,35.42171416499248],[126.48041383101777,35.422054219673086],[126.48036423744233,35.42210043252807],[126.47961302990234,35.42365553190477],[126.47958218554844,35.4236865020445],[126.47957000590301,35.42371576893322],[126.47911585598195,35.424688860958334],[126.47907553267243,35.42470941629675],[126.47901841692101,35.424772440832996],[126.47896694555334,35.42474590062686],[126.47897122124452,35.42476583763303],[126.4789806315154,35.42480914060581],[126.47906403888058,35.425193455669316],[126.47913878798117,35.425400808724895],[126.47917905936399,35.425489237858756],[126.47926939145827,35.425553242954344],[126.47930755345544,35.42560160907221],[126.47944885888073,35.425948607755096],[126.47958264320889,35.42629087044135],[126.47966308670222,35.42650360984718],[126.47280034655553,35.42679103963738],[126.47252460236884,35.426685489112714],[126.45806155384369,35.426492420737766],[126.45747234452949,35.426594553365895],[126.45539576848046,35.426852048456624],[126.45390783548653,35.426875324163134],[126.44778723471107,35.42961117426382],[126.44224235187986,35.451904333263734],[126.48400031358919,35.5190147296582],[126.56692099578483,35.54312575817838],[126.59421628967657,35.53485737975926],[126.65119245390532,35.58061168508246],[126.5934492448972,35.59013764381323],[126.5030885989878,35.58291035940023],[126.46194038948121,35.61021264898739],[126.46772005447264,35.642071625862194],[126.51462791040613,35.66582606237443],[126.5563581209862,35.69782727825446],[126.51904716502465,35.735531586029495],[126.4771725118369,35.82358974152395],[126.49724491132432,35.848222002426745],[126.53223171978836,35.93329428796698],[126.52299628674419,35.96836565923923],[126.54720363326648,35.97474756450664],[126.6278544535276,35.978035389298434],[126.72938707515475,35.98523011719879],[126.74725557505863,35.99174536587142],[126.74156052854424,36.0119448809583],[126.74804736799979,36.025750585898905],[126.81216365863716,36.039334864787975],[126.81216381904285,36.039337388457774],[126.87081796412734,36.06740464723523],[126.88282411119397,36.13207402130215]];

        var 전북3 = [[126.48455174696744,35.811897928115336],[126.519784130596,35.737556517946096],[126.56902853441134,35.69280494043047],[126.62842610946204,35.749414568422374],[126.62222875434642,35.786304645570326],[126.70676209153791,35.79651495084742],[126.66760995518878,35.88362404204325],[126.61878905418055,35.88836483661466],[126.61633290058255,35.942487923313564],[126.59361993644583,35.9484037159965],[126.54066239566455,35.9431057691648],[126.48455174696744,35.811897928115336]];

        var 제주 = [[126.76810769405087,33.5641592794216],[126.80811250530077,33.55627895764881],[126.86073654031928,33.52469704921349],[126.89281325620627,33.52643714304505],[126.91310370824057,33.503334977089686],[126.90168871448753,33.48095034803912],[126.92437630387386,33.45302162962542],[126.90554917633473,33.39164571578218],[126.88014972201171,33.38231096757103],[126.86817869146073,33.35472313256807],[126.82909341898826,33.306514278037525],[126.77572999969814,33.307005033700115],[126.74335319543825,33.278851795358314],[126.65307277375895,33.270175945090955],[126.59928143623368,33.23621090573838],[126.58901738387941,33.24371564909495],[126.51977134812242,33.240820434842114],[126.47090148793191,33.22657848742092],[126.4099359336251,33.24602771368301],[126.37017572943468,33.23173079763588],[126.32680296262788,33.241410210952026],[126.2697908923715,33.19605392476859],[126.23541484105488,33.235896226081785],[126.18352078770103,33.259388011660334],[126.16164603240452,33.292265061029646],[126.16411862524699,33.3369143591478],[126.23418093173848,33.389208508446195],[126.26290374315803,33.41728391732652],[126.26334752626512,33.4358175090436],[126.38550757278685,33.48898413837508],[126.40833057042097,33.48576086437714],[126.4540006929407,33.49777855202679],[126.49490785068467,33.52054046470463],[126.51135964980969,33.51555085312057],[126.58622640244599,33.525532579400924],[126.73025492918568,33.5603612390647],[126.76810769405087,33.5641592794216]];

        var 충남1 = [[126.37135933786443,36.565926959390126],[126.39888210022842,36.488212359083896],[126.39875898302249,36.48820089576915],[126.39888210022842,36.488212359083896],[126.42115411592046,36.44611215815776],[126.42109697440229,36.4460597669801],[126.42115411592046,36.44611215815776],[126.42102658373433,36.442197742534006],[126.42431795001366,36.41349322580223],[126.42400989785833,36.413607760417975],[126.42431795001366,36.41349322580223],[126.38119433169943,36.421189486436774],[126.33599288530081,36.44074025460638],[126.34110724172221,36.46488856776719],[126.32817388495558,36.51164870773635],[126.32808716750829,36.55597034617559],[126.3166913563884,36.5742265706474],[126.3319072376847,36.602477247807755],[126.3385853250801,36.60635275684677],[126.35978697161717,36.6117143265054],[126.37135933786443,36.565926959390126]];

        var 충남2 = [[126.23564062509978,36.86640113458453],[126.24014863190058,36.85571910089119],[126.24293617078659,36.860290024427],[126.27220207250045,36.876025808459445],[126.29478432960873,36.92912977326503],[126.31328915259776,36.90549865703278],[126.31289253406115,36.90549396255662],[126.31328915259776,36.90549865703278],[126.29329395717618,36.843033593573615],[126.30162178982232,36.82841928228409],[126.30141750236437,36.82830054204264],[126.30162178982232,36.82841928228409],[126.32973391103106,36.81358358482278],[126.3295674521577,36.81344159943906],[126.32973391103106,36.81358358482278],[126.31941046100707,36.83882084684469],[126.32791104237994,36.860898432295826],[126.37042155886003,36.85713581667248],[126.42112642747156,36.92727201106454],[126.38558672341092,36.93308108066885],[126.37197136587424,36.95114217349622],[126.37649095830157,36.9806341203674],[126.35348509948861,37.0050058820071],[126.43101768633787,37.013692674973754],[126.45022959799948,37.00601648841061],[126.49675135100698,37.052811981614845],[126.55498837982789,37.03582192207963],[126.62767159633376,37.003427708680526],[126.69538369137689,36.99960370935343],[126.77958940321619,36.96680085646616],[126.8169656460083,36.8961446522021],[126.8628467698425,36.87968542597973],[126.90970519398604,36.90160135376443],[126.91674289720265,36.906208052378744],[126.92665722447109,36.91102794197184],[126.93962592593128,36.91733090247394],[126.95224372958063,36.92013834912196],[126.95612652718258,36.9211417876591],[126.96523748576564,36.92383185217811],[126.98485932304035,36.93197386996364],[126.98555125761096,36.93248561003929],[127.02579668130889,36.92874638176359],[127.08566264370494,36.94753201566842],[127.08620069149451,36.94773239509572],[127.09862448810053,36.94858231044132],[127.0986368226935,36.948592308584516],[127.10168401655243,36.96361966398055],[127.10171462812292,36.963680451767225],[127.10454715602945,36.965762911884845],[127.104831297411,36.965700138527076],[127.14366362142856,36.97105116272797],[127.20129177056114,36.952000450433935],[127.21948575107018,36.93036048735337],[127.27328610692291,36.912245904108374],[127.28782886465115,36.893778879374906],[127.3057883326854,36.86337595078646],[127.33649498326743,36.85468681579156],[127.35444506107174,36.82947489475663],[127.35567274838394,36.82884865074712],[127.35799215163566,36.82530991543043],[127.35740718093452,36.8244559673313],[127.38559664332352,36.8103944816441],[127.38626891857713,36.809636513022454],[127.39951636598008,36.7992190104284],[127.40080776000384,36.79909022160435],[127.40171110874012,36.795144025611286],[127.40156670151883,36.79504792157813],[127.41970261711634,36.75766636753183],[127.41969821506609,36.757661597439544],[127.41950986338645,36.757616644523814],[127.41946720341356,36.7575911665612],[127.4193158355259,36.75752439472185],[127.41255760172533,36.757412208517515],[127.41246507917853,36.75738746052049],[127.4124188132621,36.75737439019386],[127.41231231733892,36.75732069303673],[127.41092394866334,36.75605716180904],[127.41079618230324,36.756118434990974],[127.41104263838217,36.75577206765415],[127.41149159552327,36.75507441718566],[127.41138263107432,36.75468844262284],[127.41161882477783,36.75422299074846],[127.41159388723038,36.75417464206343],[127.41150670340583,36.754033019416646],[127.41150380367569,36.754014160230064],[127.41137120271004,36.753559277395375],[127.41124127489792,36.753442302641766],[127.40528488556252,36.74927532625473],[127.40549004055883,36.74916058643606],[127.40558289821271,36.748717321863815],[127.40512708002474,36.74820917449292],[127.4047850699395,36.74708057014262],[127.40464994087588,36.74643195211971],[127.40465495664701,36.74642151749521],[127.40455739908599,36.74629963941605],[127.40454335303988,36.745153307508836],[127.40445904470441,36.745057848309514],[127.40400151421318,36.74488480764086],[127.40386779860714,36.7449750925582],[127.39967889318721,36.74700934836424],[127.39908818700137,36.74693275488238],[127.39880039448443,36.747037345119914],[127.39799115420058,36.747399359335105],[127.3968636071928,36.74781987425627],[127.39609867681499,36.74792266140986],[127.39602104156374,36.74793305499299],[127.3959481472609,36.748217993016084],[127.39557663331938,36.748992492768245],[127.39537778821087,36.74887008676813],[127.394552319407,36.750482986322076],[127.39470495872118,36.75074014412565],[127.39471215980183,36.75098397768617],[127.39434483746348,36.7513822470532],[127.3941991543109,36.751602084406656],[127.39356097420261,36.75165600290051],[127.39339405907076,36.75193195852084],[127.39338173191169,36.751952273946706],[127.3936479855419,36.752526132027306],[127.39268859557409,36.7525918073319],[127.39250900950658,36.752507919417646],[127.39195219901964,36.752590603565054],[127.3874713442858,36.755567287345],[127.38719448464474,36.7558004996253],[127.38717338225909,36.75595629706721],[127.38757441474996,36.75612817224702],[127.38614053728412,36.75929711536788],[127.38583236984675,36.759433834654736],[127.38559351403714,36.75953963915663],[127.38525976430454,36.75959928816687],[127.38501727007728,36.75964259232461],[127.38446913318042,36.75924083438087],[127.37146317722723,36.75856362964276],[127.37142559611287,36.75893517357545],[127.37108580002435,36.75923274752971],[127.36986979616373,36.76010551929043],[127.36987267132544,36.76023138413806],[127.36988675383476,36.7608691532589],[127.36959549873247,36.76155264438211],[127.36958598620322,36.76157521025155],[127.36935811755826,36.76156971443709],[127.36693465740068,36.76094021812491],[127.36644165037256,36.76092821403964],[127.3659149129258,36.760923908256856],[127.365671809878,36.761026314316794],[127.36549300822298,36.76096152312665],[127.36549090889436,36.7609626640737],[127.36516316816605,36.76111431284153],[127.36492708442623,36.76121866162285],[127.36482576120817,36.76129388125441],[127.36419274592504,36.761500534538065],[127.36419158656942,36.76148724716407],[127.36360934582895,36.76109596432656],[127.36320335438944,36.76105523727404],[127.36245401763121,36.76108652851983],[127.36191455797945,36.76075727620836],[127.36183354774985,36.76072232284601],[127.36058953904316,36.760045749258914],[127.36007720983599,36.75971670446865],[127.35881971720102,36.76057541372113],[127.35796838980298,36.760953053266356],[127.35783110121614,36.760971206996885],[127.35557056169563,36.756017069385656],[127.35534328625646,36.755983106297165],[127.35453624883587,36.755862167675346],[127.3512830399688,36.75412728520964],[127.3511595015494,36.754124838112425],[127.35036215841274,36.753975115406284],[127.35018430745433,36.75368586676159],[127.34932609856254,36.75353885809989],[127.34882147772905,36.75334687216561],[127.34862961501578,36.753326030751985],[127.34784166312835,36.752926208284734],[127.34704543078854,36.75305692940395],[127.34653341023413,36.753476305382016],[127.34420772227543,36.75340953050981],[127.34392050274607,36.75370602915355],[127.34337621882464,36.75356201077784],[127.34304040498726,36.75347371232596],[127.34288397910535,36.753433889534854],[127.34251083922003,36.753213910155864],[127.34229056069452,36.753178495972215],[127.34215146821724,36.75321916440582],[127.33942261923146,36.75282538481086],[127.33938535784823,36.75278859892733],[127.3392227260632,36.752729929545396],[127.337357726973,36.75265353955952],[127.33712870480853,36.75253844797707],[127.33687562226609,36.75272022991],[127.33675553971192,36.75278871961554],[127.33339993628871,36.746739292066685],[127.33407928372287,36.74693789215954],[127.34302027832825,36.735467619067286],[127.34316990690118,36.73524247074315],[127.3429440504803,36.73504121541998],[127.34239490093142,36.73309245085569],[127.34245324819338,36.73287939666746],[127.34246857289172,36.732823312586234],[127.34002797205588,36.731542247807496],[127.33999552302105,36.73152065837309],[127.33976749742958,36.730940090036285],[127.33682044020753,36.72950073722707],[127.33670220291013,36.72986432626049],[127.33061728691243,36.73302507322357],[127.33037776145846,36.73362835364368],[127.3303560209606,36.73365713175537],[127.32986696736869,36.734203374734655],[127.329651473405,36.734370674784685],[127.32939940305259,36.734454155419684],[127.32921036637458,36.734470166174624],[127.32860548678413,36.734558282864725],[127.32846154420501,36.734562894699835],[127.32759534197665,36.7343295760973],[127.3273813683941,36.73427835005677],[127.32638092419019,36.733900364480974],[127.32590652382305,36.733736646737206],[127.3257386914077,36.73367515272282],[127.3257134789789,36.733669868621696],[127.32426218393853,36.731391187467345],[127.32411937459216,36.73133412024304],[127.32397170473563,36.731284120842226],[127.32389342532969,36.73126208341419],[127.32174738757128,36.72976922015923],[127.32147216343012,36.72941317340951],[127.32140903911949,36.72933280175185],[127.32088026995834,36.72861840431166],[127.32077907130528,36.72846661352305],[127.32052221835228,36.728068558529365],[127.32045390940586,36.727962861306615],[127.32027193831892,36.727609941161425],[127.32021677299863,36.72751011922042],[127.32012433214935,36.72736224993287],[127.31983658454006,36.726891621028585],[127.31977182452026,36.72679689795098],[127.31907033805915,36.726478876499364],[127.31904078424871,36.72647895555367],[127.31898277091327,36.72636647035111],[127.31885922695406,36.726055356140144],[127.31846113810116,36.72525020199194],[127.31810637177938,36.72498052353968],[127.31800731708759,36.72492334027041],[127.31744602187891,36.72462380507206],[127.31044263006774,36.72386104030946],[127.31068923953676,36.72381562305768],[127.31107414821676,36.72379913256861],[127.31102567595418,36.72361988317482],[127.31090938048797,36.72318990313556],[127.30622365906316,36.708127179504864],[127.30657512503815,36.70794351450154],[127.3074720767881,36.706408756077856],[127.30742016638128,36.7058882150271],[127.30811017384863,36.70531113021256],[127.3080405245885,36.70490102260394],[127.3083579078984,36.70481628463837],[127.29732436246708,36.698649316428515],[127.29733816709121,36.69859802602446],[127.28897671338312,36.694611351197985],[127.288738575142,36.69427822364798],[127.28792939926464,36.693803706636814],[127.28756773109804,36.693351483818006],[127.28732508905433,36.69302906909087],[127.28722318431579,36.6928930198191],[127.28610846593655,36.69219253572303],[127.28589327787154,36.692106038438205],[127.28529006643944,36.690671454249056],[127.28127028658162,36.69055905464245],[127.28126367067202,36.69057059579415],[127.28125389722467,36.69051337150437],[127.28126367067202,36.69057059579415],[127.22823057936279,36.70846556314337],[127.22822551880574,36.708468998779054],[127.22822008391248,36.70845514952263],[127.22822551880574,36.708468998779054],[127.20789089293503,36.719119287386114],[127.20792754283481,36.71917583461923],[127.20787710929177,36.71918850565105],[127.2078769797854,36.71919046333673],[127.20787710929177,36.71918850565105],[127.20792684751393,36.71917607776152],[127.20792754283481,36.71917583461923],[127.20793603234716,36.71918904581354],[127.15964389368695,36.732843948327705],[127.13437853561463,36.7067919896922],[127.15485840345418,36.6642746537941],[127.15547820292068,36.606702898566276],[127.1786181246923,36.59671264216109],[127.17865507176774,36.59668359063944],[127.19378772255222,36.564812513911036],[127.17266844902414,36.536143615637876],[127.17346586866955,36.499206669441534],[127.20473351147956,36.45929024006822],[127.20138964906599,36.44197527604719],[127.25790805131376,36.40823236399692],[127.28212428234082,36.414603964631645],[127.27912600112028,36.3448265782094],[127.25975274393714,36.32724953025797],[127.25877186484053,36.2760505815688],[127.28624581898431,36.264895312282356],[127.28650666227946,36.26495018611541],[127.2831547927397,36.23529359092193],[127.31564105913714,36.22081536998303],[127.32394583489626,36.203158372814976],[127.36419718015068,36.21890129271374],[127.35950194982368,36.262586342451286],[127.39025797769695,36.2622709500042],[127.40799929928723,36.212892945867274],[127.44871641082584,36.19672289194393],[127.49257720191125,36.23795395068193],[127.53257275463189,36.25088933599963],[127.58358227723754,36.231296129019526],[127.59802031438574,36.21708890108369],[127.5894370546603,36.134455110589975],[127.61307558211817,36.111807480744794],[127.63791587136105,36.06890166403231],[127.63829543249358,36.06793987054469],[127.62055095983361,36.064205251579],[127.61644151664615,36.01905629497314],[127.53760098986022,36.03248840228802],[127.53665554267045,35.996450570563944],[127.51975623930784,35.98322110869326],[127.45674606514737,35.983276216973415],[127.43724344610126,36.009332495848824],[127.4012230492714,36.008735861650685],[127.37649530932696,36.02288908915842],[127.34009324309051,36.128979280260644],[127.30169075209774,36.12520368549892],[127.2733991892519,36.1072797732042],[127.25213056541672,36.1131313408029],[127.21994196552679,36.09679740389796],[127.21953313651936,36.096713948378294],[127.21842119386484,36.09749692900462],[127.2183686724855,36.097514192146335],[127.17823746184253,36.09350184514853],[127.17775379674602,36.09275173960877],[127.1339394804531,36.07299187213333],[127.13392417256723,36.07296569971566],[127.12318778724037,36.06424768168607],[127.06045334788973,36.093914250955784],[127.05610632279303,36.126784876503415],[127.04003005195446,36.13933847885477],[126.93886165840367,36.15073702662024],[126.91969151941561,36.13629942248683],[126.8829864565131,36.13227863881684],[126.88282411119397,36.13207402130215],[126.87081796412734,36.06740464723523],[126.81216381904285,36.039337388457774],[126.81216365863716,36.039334864787975],[126.74804736799979,36.025750585898905],[126.74156052854424,36.0119448809583],[126.73648302924722,36.00043186834239],[126.67649645277267,36.00923289097959],[126.65751325719616,36.045375386727514],[126.63206023106217,36.055674584903734],[126.63253686687762,36.08154379342677],[126.59120897653774,36.12908105684259],[126.57003510957698,36.14066888379984],[126.5092235319487,36.15129905270466],[126.52610700099113,36.167672899104176],[126.53822981568102,36.21169156950544],[126.53007085205448,36.23861976149242],[126.54732360572413,36.2683451886003],[126.50454522129277,36.328789069148996],[126.54319534351617,36.33865500442114],[126.54577832019235,36.35519704548644],[126.5102300558316,36.38087617788107],[126.48058601093365,36.38503110228303],[126.50292188756616,36.43400816610959],[126.47964104399883,36.48830638815451],[126.48816725661445,36.526522222058375],[126.46421805998273,36.546321848156516],[126.46837073172844,36.563893266037],[126.45646406403513,36.595210697608685],[126.39851440705851,36.619111945022325],[126.33732401654287,36.620099378113274],[126.31943478794052,36.594243531108866],[126.28980868264557,36.61535924193671],[126.29324351083045,36.61744165270686],[126.30206037378963,36.62590094644257],[126.30217000812155,36.62580117902779],[126.30206037378963,36.62590094644257],[126.29085369319621,36.66530104140731],[126.26432191537079,36.6777527498345],[126.27372693692732,36.72028657990935],[126.23492459115923,36.71807007755431],[126.21491446796753,36.69533596216724],[126.19258828720272,36.676991773682154],[126.15575471287599,36.677462665244214],[126.15000998843874,36.69361078170776],[126.17654567314271,36.71395826078249],[126.17612669723607,36.71412287664024],[126.17606137293885,36.71418616691899],[126.17612669723607,36.71412287664024],[126.17654567314271,36.71395826078249],[126.20740006916357,36.70517178253705],[126.22295628479088,36.722122235428294],[126.16634350992854,36.75852936606826],[126.1346055789919,36.740324711760486],[126.13463500703597,36.74032314198581],[126.1346055789919,36.740324711760486],[126.124458369645,36.756571074910866],[126.15520278894294,36.81178370779131],[126.16122307201523,36.84077447960923],[126.16089022940153,36.84085189026031],[126.16122307201523,36.84077447960923],[126.18497287249882,36.830192509404235],[126.18812351855028,36.8689287713721],[126.2034419511592,36.89782853473829],[126.23564062509978,36.86640113458453]];

        var 경남1 = [[128.23750525453912,34.83847431622219],[128.2650079729256,34.81817780627467],[128.2458629952553,34.7997001008867],[128.21105222125095,34.81728362928168],[128.23750525453912,34.83847431622219]];

        var 경남2 = [[128.35072153741078,34.840512181770144],[128.394255425078,34.82476637402933],[128.439715373643,34.82327303151168],[128.43998764236903,34.794816957607594],[128.42491470775138,34.765363155741305],[128.40654067888497,34.76245883142321],[128.37760418278043,34.79820631192208],[128.37966468310015,34.814965359023276],[128.35072153741078,34.840512181770144]];

        var 경남3 = [[128.03112185610084,34.921749000161284],[128.02594479509096,34.90300647726385],[128.06053959297688,34.87909391371691],[128.06075989967817,34.84452643896623],[128.0454734862283,34.83643556131408],[127.97122165988009,34.842159253669536],[127.96204210650735,34.86937003095663],[127.99606465172157,34.909913260997676],[128.03112185610084,34.921749000161284]];

        var 경남4 = [[127.89106754839186,34.946782582585655],[127.91578565948346,34.93857554087098],[127.9287644877845,34.915538318642994],[127.89743199972452,34.87444042498757],[127.9172533664082,34.83703613838743],[127.94388345052782,34.80947201584017],[127.9905193187689,34.83306652899046],[128.03058196045637,34.83405394211196],[128.06359670683403,34.817033839760235],[128.0488878485309,34.782429847267665],[128.05618006969073,34.74606674852907],[128.0265727658508,34.718143264200265],[127.95915307901794,34.710216484946734],[127.94635300637042,34.733862983990434],[127.94945832867883,34.777729097306],[127.9025983442099,34.763368298973816],[127.91239772724435,34.73650501067413],[127.88528163475372,34.723037054892025],[127.85254141674102,34.73933488401947],[127.85242792250969,34.76898056183158],[127.8128772129533,34.83465970158568],[127.81042062420264,34.85943168917592],[127.85454293648279,34.92715025247965],[127.89106754839186,34.946782582585655]];

        var 경남5 = [[128.65072413036103,35.01790292307531],[128.64388144572314,34.9785191000604],[128.62167462232082,34.98342644728641],[128.65072413036103,35.01790292307531]];

        var 경남6 = [[128.67846642563012,35.04067796621054],[128.71953580718176,35.02270196317772],[128.69477663010105,34.98012270975303],[128.72543431865395,34.94576110365383],[128.69548414322318,34.8805867135303],[128.70974251683063,34.81217364247148],[128.67247515773383,34.81468346465669],[128.65798600304254,34.77468128930166],[128.63790095413853,34.76131487145811],[128.61901225779485,34.706941871785176],[128.58543387790698,34.714750919618794],[128.57969883686266,34.7621024564617],[128.56128703221833,34.778362113739576],[128.58422852538783,34.79784783340432],[128.5889728995839,34.84644198067213],[128.51908783987707,34.822306287881034],[128.48199942872955,34.84030399260013],[128.47278941412648,34.87674108245676],[128.52290544576837,34.921234398667444],[128.56531368138752,34.89896505816888],[128.60491190227225,34.90347067552349],[128.59944207472697,34.96730197899637],[128.64727880218152,34.95991865488404],[128.67846642563012,35.04067796621054]];

        var 경남7 = [[128.63232638164914,35.2210461459464],[128.58764882333477,35.20972807927401],[128.56447730495185,35.186741932343274],[128.59659562008295,35.143486240206315],[128.60160764640713,35.10209039334326],[128.6213830902723,35.09019942171972],[128.6068678237243,35.05786562535917],[128.58110610918496,35.05432223264224],[128.56890788064177,35.09343664948254],[128.53875363538867,35.11447757246145],[128.50726525462636,35.09884808558423],[128.45967457831745,35.10582516642382],[128.47094033853787,35.08137539806341],[128.37325797591066,35.049903613465645],[128.37409814271007,35.030089647699704],[128.4328038374786,35.04730883739747],[128.46007087485444,35.062648172740104],[128.5014787524543,35.01473571935748],[128.4199173676379,34.95443400310661],[128.42948979501986,34.9175552524979],[128.4672002359022,34.88155771252477],[128.4520956883925,34.84737796468825],[128.39702952509572,34.83139698759034],[128.37770075705922,34.845729385704885],[128.38678397956042,34.867253864989806],[128.31060426212025,34.8863121423009],[128.30789254940828,34.908548980771585],[128.3559013708727,34.909010296413726],[128.32875384085048,34.95526684882298],[128.30038368834238,34.93654775531431],[128.27989432991674,34.9083053469223],[128.2557510158405,34.93719332758607],[128.22257872267446,34.946609353566174],[128.19943018949948,34.933474674137905],[128.19975833178316,34.89351002133104],[128.1250803884766,34.901692779691814],[128.11961360554128,34.922657684469144],[128.0550566262862,34.92879964366244],[128.03080973177853,34.95572606455542],[128.05013200492604,34.96914371448986],[128.03878538388156,34.997826919142796],[128.01984419504026,35.00465170558703],[127.96777040112366,34.9920792254238],[127.94540284023313,34.97774334351513],[127.91641328426952,34.99691335561181],[127.89816224508381,34.95978393437195],[127.87220530916592,34.94647272551175],[127.8441719975975,34.95127865545397],[127.79134463000813,34.94138885941036],[127.75939185548094,34.9667763940651],[127.78057078303326,34.990400197859394],[127.7848410359362,35.02093533857523],[127.7634466557152,35.05483227864091],[127.7399444289998,35.06336237694283],[127.69485365614574,35.106293177747915],[127.69384835949954,35.12793103599479],[127.64837175889599,35.16039172804812],[127.61802616782602,35.19974210224065],[127.61928665504827,35.23560294672704],[127.57748101119101,35.308901047086536],[127.62073946811742,35.332491214172805],[127.61019736628758,35.365918117680735],[127.62429905965813,35.37522702926713],[127.62554815430423,35.37677968664314],[127.66047407430055,35.41443375312688],[127.67406961587486,35.44572001925498],[127.67345486646288,35.44670993242778],[127.63668808903907,35.45935201664813],[127.6503354743223,35.49749036323248],[127.65038819777656,35.49789988422553],[127.62871653663093,35.53594033807085],[127.6286936171308,35.535984818282856],[127.60957781033692,35.54026226410641],[127.6094537893867,35.54049454633937],[127.58761351504363,35.55804175742319],[127.58720806916114,35.55866448401108],[127.58801786698824,35.55987220077352],[127.60277105082108,35.57738990747548],[127.60347105376357,35.57787113764806],[127.60452541923614,35.57737931403302],[127.60678931673738,35.5800916564128],[127.60642178473266,35.58107673000645],[127.60632579763248,35.58158530450096],[127.6079923797262,35.58274507323255],[127.61119353010471,35.58389254805806],[127.61107636367898,35.584104237411125],[127.61020771192338,35.585156781757206],[127.61023823324798,35.58547658062333],[127.60999906528261,35.58601446908278],[127.60971535770639,35.586204456580234],[127.60972550709317,35.58654421261054],[127.60995178418851,35.58682923392648],[127.60975869670959,35.58737589368225],[127.60967293869003,35.588437297943976],[127.60980760022709,35.588781075279],[127.6097504201027,35.58926917754791],[127.60908189288035,35.590073276857524],[127.60846462327758,35.59081838732404],[127.60808301816664,35.591060272540815],[127.6095383016413,35.59803751315953],[127.61013804723967,35.59852385828458],[127.61109844494328,35.59882064273873],[127.61140907077692,35.59871880339836],[127.612084647124,35.598903387641606],[127.61277393789479,35.5988507378709],[127.61291387851922,35.59884270962409],[127.61301551399849,35.59910131064195],[127.61265182059451,35.60054701867993],[127.61283053238691,35.60094252744414],[127.61226328789482,35.60117410138184],[127.6120307544127,35.60259112289517],[127.61229454762552,35.602881437458244],[127.61270605617713,35.60312113495046],[127.61286233002919,35.60349085474678],[127.6125886148827,35.607247441889015],[127.61283907605431,35.60773271328146],[127.61495367554703,35.6093974906535],[127.6149826592008,35.60942085722551],[127.6159335000761,35.609711322985184],[127.61748192781043,35.609806495022504],[127.61773621275252,35.61026878969559],[127.61822303943455,35.61040557228759],[127.61851309305688,35.61094316316292],[127.61876344923533,35.61129788297745],[127.62038518163796,35.61427853346022],[127.6208958767314,35.6145755901309],[127.62095261548794,35.61491157120156],[127.62139707930378,35.61511812697947],[127.62262726889718,35.61483508375381],[127.62724237116095,35.61636011484716],[127.62736555965456,35.61656690190047],[127.62745113752787,35.61719072979245],[127.62835313791203,35.61794606218605],[127.6346528484473,35.61776652881464],[127.63533525863222,35.61848395480906],[127.63486339951871,35.61909619814092],[127.63213090507831,35.623058641640384],[127.63084401413495,35.623865110390355],[127.63024039659574,35.62453195514021],[127.62927223848152,35.62481316122353],[127.62850388180762,35.625679413713385],[127.62450837139669,35.63303674058354],[127.62444489893235,35.63368204179607],[127.6199160670928,35.64273942786061],[127.61997406551045,35.64292277177771],[127.61977132487729,35.64345541464443],[127.61993587834712,35.64376578555697],[127.6200982250574,35.64613880136798],[127.62281328742067,35.649999278966725],[127.62211103328731,35.65075164268945],[127.62675950540404,35.65465541874915],[127.62725083403896,35.655001403778],[127.63235775544645,35.66645091860926],[127.63254262420274,35.66652219497405],[127.63305843993352,35.66643681904102],[127.64030273050489,35.686738326676036],[127.640800246472,35.686810039386856],[127.64512308798939,35.69713976108367],[127.64500151750653,35.698595658810866],[127.6485079661575,35.70090759684395],[127.64929963355473,35.7011331496353],[127.64975002719397,35.701406030990135],[127.64907492725418,35.702999531672745],[127.64903852326454,35.70328009869072],[127.64943840017595,35.7037961768478],[127.64985460227933,35.703639451649416],[127.65274271804533,35.70507009301312],[127.65315589902676,35.70509475036119],[127.65349395365298,35.70492675532446],[127.65391446661236,35.70483279147546],[127.65472431790133,35.70539802741328],[127.6554460779875,35.706379565402635],[127.65674693467376,35.70622224245349],[127.65749982254958,35.705794552242125],[127.66064678339477,35.71489888041999],[127.66033467394449,35.71497183392206],[127.6598729020388,35.71582562931561],[127.66841372238778,35.771062927545586],[127.66951338210485,35.771373664283324],[127.67943626552834,35.76849873637032],[127.68123311388325,35.77214232457461],[127.6825552114993,35.773580732070315],[127.6843422441043,35.77496842676834],[127.68462371025349,35.775861602651],[127.68481111971487,35.77767939006939],[127.68779258158887,35.7793012215172],[127.68936902320515,35.7805484781616],[127.69085656637307,35.781723564605095],[127.69279455056633,35.782745979566464],[127.69374113744114,35.78316863691442],[127.69485538285537,35.78460954984325],[127.69657211023363,35.785872892274554],[127.71938601485208,35.79731600195028],[127.73947140873071,35.82971057160425],[127.8536752012163,35.88134317699036],[127.85954023332997,35.9064905882214],[127.88505877208561,35.909605639189444],[127.91851559817607,35.890380731912416],[127.93320824377928,35.864240181434354],[127.97397994848514,35.852068137096325],[128.01178052397384,35.82893401788106],[128.06978578914513,35.84120189922742],[128.1239926673559,35.82004082305081],[128.135780106429,35.78483992960689],[128.18927940890092,35.75175972130561],[128.20481849565567,35.683923204812984],[128.16009486257687,35.66750003969656],[128.20123098632968,35.64372192041228],[128.26234380965622,35.6427369390892],[128.30598968155272,35.65547619211512],[128.34916806155442,35.64644569059973],[128.36116780921128,35.63073410608916],[128.3612046355595,35.63065965939595],[128.37174762364575,35.61088094277428],[128.4309803226448,35.621638800488626],[128.45901827212916,35.64026787811151],[128.45909489107632,35.640273388200384],[128.50623621037877,35.639556969852805],[128.50945505836145,35.67471463736342],[128.52985121593642,35.68301533440054],[128.53655427839593,35.62449660165868],[128.59996923435432,35.58042255229453],[128.6582924691291,35.5976868287585],[128.7246203000859,35.58147668577971],[128.72532038585584,35.580718666418896],[128.78773290510975,35.56749680240848],[128.7914404749125,35.56988286291462],[128.80956359316463,35.58898423737319],[128.85407515875346,35.59718199537517],[128.87387627861364,35.621636067237816],[128.9150536923295,35.640618745998836],[128.93731713189825,35.63570616369819],[128.94114515487408,35.635073438255475],[128.98264227078357,35.60870517564692],[129.0027397894968,35.62025845634497],[129.02245485986256,35.614223360138915],[129.0188954322724,35.58381993366389],[128.9779054757717,35.56344699876552],[129.01087789233605,35.52321416542541],[129.10672323039563,35.4951358538811],[129.13282238343888,35.455497542379725],[129.13567038505516,35.4534908245544],[129.16804993410835,35.431792540813404],[129.19650268927376,35.43834331409561],[129.2188837828047,35.40697148198228],[129.201169890842,35.3877816761035],[129.19434645852135,35.383448266903635],[129.19444476205146,35.38307857878882],[129.19359479280885,35.38208857969253],[129.19918182757723,35.37597718880569],[129.1978282063966,35.371410063967375],[129.19846244655747,35.36982255405108],[129.19800787878762,35.36846243961606],[129.19869864677105,35.36732567156994],[129.19851094127776,35.36717273913641],[129.19876242016983,35.36649634208822],[129.1824081179675,35.355156260080655],[129.18279025016287,35.35395686584915],[129.16104931232326,35.3588187217035],[129.16110614139436,35.35940388197445],[129.15911557755632,35.360272383530784],[129.14510682976172,35.36503987563977],[129.14512880038998,35.365012728021426],[129.14512802183398,35.36469735615101],[129.1451719190132,35.36458900964531],[129.1450613233778,35.36434583795521],[129.14506166394102,35.36446297301507],[129.13859423146087,35.36592163384613],[129.13874798638977,35.36565111559254],[129.13873664258801,35.36553388464632],[129.13874738624213,35.365497793783426],[129.13874740914972,35.36540768733408],[129.13876947592107,35.365344641586624],[129.13849377449924,35.365110575967144],[129.13848295938226,35.36518272091261],[129.13847199152966,35.365209808524746],[129.13862677143646,35.365669307467336],[129.13859397169733,35.36576845489894],[129.13858315642796,35.36584059104385],[129.1384952213077,35.36603898104478],[129.13845161983105,35.36609311964499],[129.11817629128237,35.369034609521165],[129.11817896370542,35.36901850803685],[129.1183072113967,35.368268339623704],[129.11808624793184,35.3675745436646],[129.12114245387997,35.36567887407824],[129.1211527675642,35.365219118288394],[129.12670549420386,35.36262616217485],[129.12667235921074,35.362527634790894],[129.12707909321546,35.362319835821665],[129.12708972049123,35.36214857226193],[129.1272764088294,35.36188706651472],[129.12745202233472,35.36154436292243],[129.1274298493799,35.36147223514707],[129.1275065217239,35.36144467342097],[129.12748452823183,35.36135498822276],[129.1275507372529,35.36133691886838],[129.1275504112542,35.36121977381275],[129.12795698854953,35.360921346735765],[129.1279127505889,35.360813809372054],[129.1313085450876,35.35812427906383],[129.13134116772363,35.3579529116156],[129.13180272709602,35.357582916792836],[129.13182445355025,35.3574026007957],[129.13331729528633,35.35614609361373],[129.13324093077094,35.355869641258735],[129.13340590939185,35.35560724016797],[129.13330495410912,35.35440855991351],[129.1346777959218,35.35301012731486],[129.1345121170586,35.352604596069774],[129.13455598761445,35.352469358418276],[129.1344668210102,35.35178453016032],[129.13458728959856,35.351450825501665],[129.12716218522547,35.345086445917154],[129.12842504435397,35.34370584330998],[129.12635445269856,35.34186956321738],[129.12627711743167,35.341646213698205],[129.1239600475882,35.33714007098977],[129.1257161023207,35.33443428750269],[129.12578140111967,35.33400159154616],[129.12594533876754,35.33342452625021],[129.1119392611366,35.314131695272685],[129.1120377560807,35.31374404280619],[129.11204819920943,35.31331300734739],[129.11209204204582,35.313176091145124],[129.1121029772709,35.3130679024924],[129.1123438250838,35.31249992494977],[129.11237590078395,35.311751707241804],[129.11238676001895,35.3117066049417],[129.05894500090474,35.29497908232251],[129.05836190721868,35.2948355324119],[129.0445979187947,35.27450352632453],[129.017120481692,35.27545953165717],[128.98627453532288,35.23060236073151],[128.98608726921503,35.230527187113836],[128.97842106334699,35.22847199726106],[128.97808528883698,35.228396093374045],[128.9749787561858,35.227681228840105],[128.97469436045435,35.22761574703039],[128.96068072878808,35.22585186434257],[128.9596157715651,35.22569449506154],[128.9577864485801,35.22541965967409],[128.9527547424582,35.22525814024004],[128.95067833086742,35.22524091984352],[128.9499184594479,35.22523977888191],[128.9485347467171,35.22524204781821],[128.9482706322187,35.225334022726756],[128.94571052222085,35.227253276979816],[128.94570713684303,35.22725543767479],[128.91665298961416,35.21696081385831],[128.91421739486552,35.220141906411094],[128.91171964373433,35.22262692056897],[128.91086498352706,35.22278290248008],[128.91078605710703,35.222797670341876],[128.9102851230928,35.22289076359769],[128.9075987436609,35.22179494612635],[128.90643274187053,35.221008578140804],[128.90601056663485,35.22072670138926],[128.9059694218441,35.22069890758166],[128.90511088248212,35.22013002920298],[128.90775741270662,35.217354707431255],[128.90810497423345,35.2170139701118],[128.90895201989997,35.21618308288308],[128.90916306462597,35.215977980095026],[128.90892304056365,35.21532615897994],[128.90857247524372,35.21527366659441],[128.90750283027768,35.21511112263966],[128.9069158180091,35.21510192273846],[128.9046679925146,35.2153013274454],[128.90307926891003,35.214878956113395],[128.90109855343792,35.214333728861824],[128.89661225429313,35.21314239454059],[128.89546681440714,35.21337829824597],[128.8853132469155,35.21402874549333],[128.88490550945943,35.21380275565569],[128.8828635526315,35.21163829895658],[128.88273697268224,35.21155099673224],[128.87394155300692,35.20426161118658],[128.87372939512176,35.20415196436847],[128.87559125923957,35.19363025628856],[128.87595938831475,35.19316819263701],[128.87608865171592,35.191806522509296],[128.87591583380288,35.191138100854424],[128.8782127612832,35.18622287399454],[128.8784546717492,35.18592763854361],[128.87919206848966,35.18514682385321],[128.8794132116773,35.184873315575125],[128.88075603721077,35.18357082117523],[128.88141714948162,35.182815812877024],[128.88067549520954,35.18090724045797],[128.88027117800036,35.18030083894472],[128.88014678301641,35.17973938949457],[128.8800443781628,35.17886668864722],[128.8801159673433,35.177580685549245],[128.8801415574966,35.175548107728915],[128.88059099356644,35.171499727930495],[128.88043426208856,35.17152975865671],[128.87594519993388,35.17312008055802],[128.874016703843,35.17391677321857],[128.87709433579258,35.1687662985467],[128.877534171623,35.168489411422684],[128.88077427663129,35.16204228091022],[128.8816730860033,35.16174318381414],[128.88139369576734,35.1613304481836],[128.8814329262813,35.161276892048136],[128.87984646721904,35.15946983430609],[128.87931119821084,35.15936703782111],[128.87929776696134,35.159409486272175],[128.879210219067,35.15947969442886],[128.87503504206947,35.15319687170203],[128.8752927199552,35.15288985777624],[128.87658841951404,35.15124161048615],[128.87567696161133,35.15073077166292],[128.87527708328554,35.15114629625637],[128.87436278890456,35.15063127026431],[128.87411134447225,35.150925929821575],[128.87401887904477,35.15103564559747],[128.87401716645243,35.15103552632151],[128.87398521251404,35.15103264424935],[128.86850978738406,35.15420726587],[128.8679702786203,35.154862192068016],[128.86747602127375,35.15545740598176],[128.8673864579176,35.155589319907975],[128.86738250564798,35.15559656308447],[128.86721884817058,35.155862686683484],[128.8660973179306,35.15708544322157],[128.86597345842853,35.1572328011464],[128.865547809227,35.15913721144942],[128.86560479950168,35.159200406824745],[128.86652798016496,35.159742258853974],[128.8666465053035,35.159757529121464],[128.86675969172862,35.159640830428934],[128.86679997533707,35.159645616319594],[128.8675045369461,35.159092295045696],[128.86758335621585,35.15895533976436],[128.86334373937126,35.1678354592772],[128.86189476031447,35.167724717566216],[128.85763374998777,35.16693734102218],[128.85637982224003,35.166903749794166],[128.85413617720576,35.166207991434355],[128.8531496421853,35.166365300491776],[128.84599970902946,35.16354171047499],[128.84492910315922,35.16310375263311],[128.844541465186,35.16285563085456],[128.84407390585486,35.16046303043565],[128.84416987277123,35.159974503623594],[128.84418311810745,35.15990783948597],[128.84364598511286,35.15880795715872],[128.84360339665156,35.15866821990179],[128.84354473240487,35.15846971787538],[128.84293309138636,35.15798870605143],[128.8349959811177,35.15823965342557],[128.83395407960285,35.15759332513056],[128.82752650377512,35.15558862721815],[128.8270573475437,35.155601753880205],[128.8257722315986,35.15571475589506],[128.82534164321078,35.15596541168969],[128.8035597431441,35.14186061216291],[128.8045656207218,35.14193547641024],[128.80515689866908,35.14211493991196],[128.8066853695431,35.14250378060486],[128.80715198734205,35.14214929653768],[128.80766971141267,35.14044294688121],[128.80731620984454,35.13947956188185],[128.82580642694262,35.12999224676259],[128.82657180449294,35.12952660343006],[128.8280851864696,35.12827971072031],[128.82908642439637,35.12832206021285],[128.8329750327898,35.129940986011654],[128.83371285406793,35.129410523165284],[128.83748295121924,35.10352002367108],[128.83553728257522,35.10213291210307],[128.8217153474745,35.097742993072465],[128.80248857076774,35.08980784643391],[128.8286558122081,35.08993281542374],[128.82643223135477,35.08621402273716],[128.82455549915403,35.08623761986571],[128.81809381762187,35.08300068674461],[128.81150291250765,35.08298883134139],[128.8115148972471,35.077580388338006],[128.69463678217758,35.097241611612155],[128.696311570911,35.138780238664076],[128.64349326557416,35.14961728336067],[128.61036497573133,35.14363474280598],[128.58932213050224,35.19939927835733],[128.63232638164914,35.2210461459464]];

        var 경북1 = [[129.57892484909377,36.051757803182724],[129.57496230901245,36.00405632913812],[129.55193490757762,35.985599706358016],[129.54656060093734,35.95289811371602],[129.51834909698266,35.92045680300987],[129.5317361184686,35.871394208170365],[129.4906139907768,35.78430693006976],[129.4962947804238,35.77201522495758],[129.46462992148147,35.66672349437062],[129.44962644856716,35.651018328769396],[129.35355872503268,35.67938023112894],[129.2962573065231,35.64474149715338],[129.25474620474972,35.666403863359136],[129.2547450479585,35.6664117699837],[129.26187932662864,35.69340314612147],[129.2054662229613,35.72117420654348],[129.10175903636122,35.70606714334869],[129.06987683104623,35.682372231460334],[129.0703591470812,35.658635907201706],[129.0027397894968,35.62025845634497],[128.98264227078357,35.60870517564692],[128.94114515487408,35.635073438255475],[128.93731713189825,35.63570616369819],[128.9150536923295,35.640618745998836],[128.87387627861364,35.621636067237816],[128.85407515875346,35.59718199537517],[128.80956359316463,35.58898423737319],[128.7914404749125,35.56988286291462],[128.78773290510975,35.56749680240848],[128.72532038585584,35.580718666418896],[128.7246203000859,35.58147668577971],[128.6582924691291,35.5976868287585],[128.59996923435432,35.58042255229453],[128.53655427839593,35.62449660165868],[128.52985121593642,35.68301533440054],[128.52790486607597,35.71274079417096],[128.58051590399288,35.73866660199441],[128.61479842452982,35.73094200818587],[128.6244976030435,35.70335495481642],[128.6832397085274,35.72145444422488],[128.6891106166496,35.73923002367715],[128.68912569787108,35.739772794681855],[128.68251170282812,35.79014861991538],[128.7085215601008,35.80292115122969],[128.71019923491795,35.80426598751514],[128.7143282855512,35.80475816185505],[128.7170897650298,35.8085205572397],[128.71706571802,35.80852810680546],[128.70866725043237,35.82287907671741],[128.70857062454414,35.823372132268055],[128.7087452139889,35.826212003391824],[128.70862298975973,35.826381997054476],[128.71001922945322,35.82783281735054],[128.71023528608177,35.827796795312196],[128.71030266593868,35.82785919873221],[128.71031656709215,35.828043493285605],[128.71035361434193,35.82829975382099],[128.71037257507487,35.828428769399615],[128.71090650498414,35.82910699057312],[128.71119570554396,35.82941763838131],[128.71227892371564,35.83022053274917],[128.71239815491782,35.830323246360734],[128.71267678310016,35.83070759673058],[128.71317004718932,35.831066398302426],[128.71412235160616,35.83178805529844],[128.7154888327596,35.83317869947243],[128.72115320889262,35.83548668806004],[128.7212847338874,35.83535926959967],[128.72139001748337,35.8351749029518],[128.7215565374535,35.834883790585714],[128.72169664697066,35.8346782442631],[128.72180163715853,35.834671585024196],[128.72199394103438,35.834721736258885],[128.72209886003142,35.83478591484457],[128.72226501840004,35.834843476234504],[128.72238701227232,35.83497176409156],[128.72240445355493,35.83500728788938],[128.72440707802312,35.835761228003854],[128.72507251360403,35.83604898872359],[128.72507972759868,35.83615857082713],[128.7242141017945,35.83866793458516],[128.72406310338536,35.839426060178475],[128.72434784131892,35.84031296046613],[128.72613197307535,35.842317815982895],[128.7263471311609,35.84256087986203],[128.72676964616883,35.844842050756206],[128.72653353651162,35.84800548731046],[128.72557729319746,35.85034325988758],[128.72497076697286,35.85329074769074],[128.73628227309777,35.851284856918596],[128.7374535240631,35.85116064830068],[128.73988154210204,35.85199427699523],[128.74032326310075,35.85220076728609],[128.75981857260155,35.866784111738006],[128.7598178227882,35.86685930984265],[128.76128637388868,35.88706562490887],[128.7613815432334,35.88723788944046],[128.75565181427106,35.91439938622806],[128.75550760597136,35.91464484971569],[128.7397672408868,35.9375029898236],[128.73983979749383,35.93760678987219],[128.74304792451628,35.942274788373474],[128.74381378715702,35.9429783690565],[128.74408670694478,35.943958073105826],[128.7437041617869,35.94492522278742],[128.74363020524913,35.94510567122465],[128.73319290390504,35.98310317364049],[128.73223979296566,35.98375306944311],[128.73097394553133,35.985361435873465],[128.73140117827168,35.98601429264223],[128.73118684774465,35.98751143292643],[128.73159182966748,35.98938130012162],[128.73206401923736,35.99010720002594],[128.73316403261364,35.99068829761383],[128.73415626662583,35.991806537428346],[128.73485570688902,35.99295604003034],[128.73470063430165,35.993075802741764],[128.73187299735793,35.997527171299716],[128.7309901087172,35.99767247099226],[128.72189352615018,36.00619860741209],[128.7213262450712,36.00636035178296],[128.67745313563154,36.013246491457856],[128.6736468735633,36.01338298645338],[128.66418455167434,36.01011287618484],[128.66417966762262,36.01011125779763],[128.65426791497893,36.00944685050893],[128.6541914088714,36.00945538853135],[128.64078254646668,36.010549961362074],[128.6401301090318,36.00980897061375],[128.63995920834478,36.00957135211684],[128.6373973372334,36.009192102800334],[128.6362433291671,36.009095372613835],[128.63484631574687,36.00903035901048],[128.63302527467488,36.008270052417316],[128.63242994354897,36.008139888634005],[128.61748582034008,36.00673736606678],[128.61742843564923,36.00652384430621],[128.61665188806717,36.00364199882694],[128.61628770994176,36.00255767890544],[128.6161513579533,36.00214219240173],[128.61571659335465,36.000977155652464],[128.61355287406565,35.99952105019799],[128.6125159054562,35.99929678594049],[128.6120432935831,35.99837696954391],[128.6118236547161,35.997955764150866],[128.61137821381337,35.99767457704121],[128.6110300993498,35.99751170226147],[128.6108091786371,35.99714492462769],[128.61083393147302,35.99711812176804],[128.61085797653803,35.997093352744294],[128.61069255357995,35.99705018683192],[128.61055192736796,35.99698504796746],[128.61038938542632,35.99691570088881],[128.61005254997616,35.996747147072654],[128.61006373148894,35.996681555757654],[128.61013693501997,35.99644656652364],[128.61019819522159,35.99632353305128],[128.6101956776179,35.996285269423865],[128.61019523767132,35.996280201782646],[128.61019018001957,35.996116379107306],[128.61021862722347,35.996102756639374],[128.60957858135694,35.99507703075352],[128.60954479511366,35.9950512986295],[128.60900277604858,35.99463980333418],[128.60883809343383,35.99393624011929],[128.60864341837433,35.99359652607783],[128.60830937859535,35.99341143755218],[128.60769318375165,35.99311392448162],[128.60704146144633,35.99255381861844],[128.6065089805702,35.99208347593722],[128.60613397041328,35.991203584643976],[128.60599289304102,35.99082503096723],[128.6048102308872,35.9894207330141],[128.60360071742093,35.98822601388796],[128.60335923053947,35.98798734396207],[128.60349379380537,35.9868109907817],[128.60349908416848,35.986422356373005],[128.60350435358643,35.986013434130804],[128.59839560696295,35.98506039671276],[128.5961238206889,35.984548824754626],[128.59416334635716,35.98378610378364],[128.59292518288288,35.98336183401906],[128.59304155877055,35.98084165111779],[128.59087467316112,35.98007802177191],[128.59015554229657,35.97923540064925],[128.58798603283356,35.97897598918454],[128.5873638411499,35.97939366083716],[128.58509702240704,35.977957602650015],[128.58322029710388,35.97728087943594],[128.58331417591256,35.97785468280457],[128.58233771498902,35.97824716519045],[128.5812427078083,35.97804535550383],[128.57856128906258,35.97843202265338],[128.57503192622565,35.977924174254525],[128.57430153839093,35.97782284818138],[128.57283756882677,35.97831254293741],[128.5690717857875,35.97651703426509],[128.56567040421973,35.974920818802445],[128.5656770998791,35.9737329674323],[128.5616645865135,35.97253036133529],[128.5283538521437,35.98034994120992],[128.5282794993138,35.979008268449114],[128.52665053698558,35.97544743179838],[128.53505485985718,35.937888859399976],[128.50478828611696,35.89137522049469],[128.47916501839438,35.89661456382814],[128.47847679821518,35.89682429582409],[128.46909837797443,35.899013522731224],[128.4683790422405,35.89947083416591],[128.47641886601411,35.934439337455935],[128.43103622596146,35.93052647248881],[128.39806677041497,35.89270855459797],[128.38351017125282,35.85283465086274],[128.46899205350073,35.83963096777291],[128.468919315182,35.839345827153906],[128.47254620952359,35.833608330168374],[128.47278363274324,35.83344939550027],[128.47318775873808,35.833179456892],[128.47415503649057,35.83254327338718],[128.4752834681512,35.83215067319142],[128.4767314903397,35.8316469716899],[128.48121712907113,35.8300864765222],[128.48145861204262,35.828751339419235],[128.481969925052,35.82721759931332],[128.4824594965352,35.826002999737355],[128.48299736685053,35.8224215904517],[128.48306896006807,35.82113880777162],[128.4830589247011,35.82050544251713],[128.48302581262448,35.8197281752041],[128.48301345875836,35.81943615495395],[128.48299134847161,35.81891557318833],[128.48295230525162,35.81800575212713],[128.48288998679786,35.81735036892825],[128.4828275850767,35.816692669593934],[128.48271590445026,35.81551710952425],[128.47043315408257,35.8059223363035],[128.42082951598775,35.809354575222386],[128.38329416135437,35.758585218680025],[128.3932443940482,35.74708427426636],[128.3936963726598,35.74682288793781],[128.4086866758349,35.73973535132349],[128.41150864211912,35.73855726955638],[128.43398078084127,35.707070292041124],[128.41220175603553,35.69584190063279],[128.35887829808627,35.70870122987159],[128.35693445710064,35.68263837560539],[128.35718642311096,35.6821952331281],[128.38266941694133,35.65954413424245],[128.38368627024056,35.65848588282504],[128.4014182978501,35.633438194198014],[128.40125141360602,35.632728696053555],[128.37174762364575,35.61088094277428],[128.3612046355595,35.63065965939595],[128.36116780921128,35.63073410608916],[128.34916806155442,35.64644569059973],[128.30598968155272,35.65547619211512],[128.26234380965622,35.6427369390892],[128.20123098632968,35.64372192041228],[128.16009486257687,35.66750003969656],[128.20481849565567,35.683923204812984],[128.18927940890092,35.75175972130561],[128.135780106429,35.78483992960689],[128.1239926673559,35.82004082305081],[128.06978578914513,35.84120189922742],[128.01178052397384,35.82893401788106],[127.97397994848514,35.852068137096325],[127.93320824377928,35.864240181434354],[127.91851559817607,35.890380731912416],[127.88505877208561,35.909605639189444],[127.88320637395968,35.930008203667875],[127.90859300752213,35.94159919105396],[127.8941552911934,35.98543360657659],[127.87548706050532,35.99697795874106],[127.87677397179243,36.0225117710674],[127.91633961504998,36.05446515430419],[127.96087453614521,36.07033909612214],[127.9652008702575,36.11282884583447],[127.98885337529603,36.13265626056785],[127.99048049320282,36.158876308337476],[127.9753318809786,36.18771063385873],[128.00974801427887,36.20936207025149],[128.05626552838424,36.20208421678039],[128.03071520831807,36.23971847304449],[128.04735242811847,36.256551061730676],[128.01134201125134,36.271954453601715],[127.96811502866179,36.25032935861153],[127.93090725095732,36.27801330222353],[127.8921011759705,36.291927645555795],[127.8826355451056,36.273749669087096],[127.8523154076773,36.273832544014454],[127.84157007064496,36.30820893621638],[127.85203284069158,36.330405187217906],[127.88260664878368,36.345915495344336],[127.88416671288164,36.380013131337115],[127.86386560737145,36.403042547476275],[127.8825947084849,36.421546958339704],[127.87260858608312,36.4416661943449],[127.88046639130204,36.49327056480706],[127.9008184715932,36.50001604172172],[127.89635417470201,36.53119578689157],[127.87032170764256,36.55915369883506],[127.79847590645255,36.586442258169036],[127.79742505057503,36.60029872741854],[127.84784290774962,36.62493563401806],[127.87393601330069,36.655045525084304],[127.88935142472846,36.62865889712323],[127.93140134549455,36.624107639598805],[127.93356916917772,36.70648737047725],[127.95996461808097,36.73710194888855],[127.960554982286,36.73718856178432],[127.98009222111637,36.720297292097136],[128.0148421825491,36.730191321011496],[128.04969493578923,36.707755432024236],[128.06798796789695,36.72223411321158],[128.0323246888969,36.74757585504346],[128.054977945753,36.79266267750069],[128.09006779244228,36.79663752938811],[128.0934537206215,36.7967751669718],[128.1351506862293,36.832922767075594],[128.1363324594925,36.83289148914985],[128.19079446839692,36.81641991818853],[128.19174747262184,36.816650852480585],[128.21645545955306,36.81483623572454],[128.2164910704189,36.814962864748054],[128.24184104244344,36.87232867325182],[128.28243416343443,36.856398985856124],[128.32084903488584,36.8156399494895],[128.4204789204469,36.811513707912184],[128.4490310613387,36.84784214171434],[128.42396974840685,36.87652844713069],[128.44159366551497,36.927348572261764],[128.51547480028876,36.98682342048962],[128.54420698281524,36.99257171365918],[128.57773407585816,37.035567102191905],[128.57772866927505,37.0365458640583],[128.63292476584823,37.0405018707677],[128.65185642082642,37.06485125282934],[128.65216473898778,37.06542780371934],[128.65238950466954,37.065602054858005],[128.6530791609286,37.065714363868544],[128.65600637417563,37.06446289882839],[128.65667394196217,37.063074538735684],[128.66245878574495,37.06089611558329],[128.66319111651526,37.06093710590403],[128.6633131673814,37.06094384113092],[128.66340091570643,37.06094007453868],[128.68176894633635,37.05365688296091],[128.68198032284965,37.05354154906156],[128.68232569814728,37.05335308394942],[128.69027731274488,37.05164459053626],[128.69038660106966,37.05153576603032],[128.69449897156974,37.047411275596275],[128.6945044019952,37.047307873976095],[128.69683559413986,37.04424200699947],[128.69711056637763,37.044082096452875],[128.69878866919018,37.04237442716063],[128.72104016901915,37.04309446580895],[128.72225255383114,37.042497738886],[128.72294525131548,37.04252676855807],[128.7311763751362,37.04084927722144],[128.7320039199267,37.04038306342082],[128.73311121408972,37.040520913770266],[128.73378138434126,37.040296683008556],[128.74714236724688,37.03056409310133],[128.74775093373395,37.029995342145654],[128.7537649458286,37.02783249082943],[128.75377273439562,37.02820945160366],[128.75401944083814,37.02878853292738],[128.7597845889418,37.03561604842704],[128.76091360009417,37.03602889712068],[128.7562766860167,37.04944757883273],[128.75519342799527,37.05016463004839],[128.75501081003895,37.050907305424325],[128.75471625017468,37.05125112535855],[128.75447592838992,37.05238274262855],[128.75469855808424,37.05263164794954],[128.7542717445225,37.05297018066278],[128.75414907275652,37.05298983918211],[128.75395874359018,37.05311733145523],[128.7530212428212,37.05371794071414],[128.75293209641546,37.053971530411],[128.75301722255048,37.05438919903203],[128.7552518181005,37.0644535702407],[128.75568691868764,37.064824188182115],[128.75585349757026,37.06667175956804],[128.75611606514875,37.066806742625225],[128.7567554093457,37.068844555318414],[128.75698427164454,37.06907861040456],[128.75807872166195,37.06979409817234],[128.75814832617112,37.06972387809066],[128.76284255872676,37.065037917103915],[128.76342644116406,37.06454329001844],[128.76592581185443,37.064750118061006],[128.76652178529744,37.06549363232606],[128.76708052849906,37.06597438222479],[128.76718272677005,37.06619040746805],[128.76719625405693,37.066661510937415],[128.76736139622034,37.066928713794574],[128.7674144559089,37.06689640787321],[128.767807300437,37.06723608054055],[128.76882748420147,37.071042421061925],[128.7687003768805,37.071338882553555],[128.7685758504157,37.07270619009102],[128.76869437394194,37.07284298920557],[128.7688252135772,37.072963456618204],[128.76926667855497,37.07323442369666],[128.76944722213764,37.07340359162708],[128.76999067896665,37.07434013789405],[128.7700310474564,37.07448536903096],[128.77005104199313,37.07468164091945],[128.77005300686432,37.07512976176954],[128.772017121463,37.076582935854574],[128.77202033542,37.0765507928232],[128.7720525504998,37.07652567060007],[128.7742317569294,37.077346849684304],[128.77501823491934,37.078101588130366],[128.77541366724563,37.07865313441059],[128.77655569101378,37.0787919974217],[128.77698927061456,37.07884847814508],[128.77788263533614,37.07887432357988],[128.77792828362627,37.07893482538085],[128.7779558936613,37.07907641591308],[128.78064580483795,37.0923519521352],[128.78127783113626,37.09226975188506],[128.78162196336328,37.09177153581155],[128.78238209741818,37.09150597656299],[128.7826911510882,37.09144075164313],[128.78518099550237,37.08851075477799],[128.78580641535552,37.08785353400863],[128.7881885083232,37.08772197954246],[128.7907704546675,37.08761588109886],[128.7913842169662,37.08732363120454],[128.79187859495627,37.08754203023271],[128.8010927983599,37.08560032038205],[128.80151360186676,37.08439414921599],[128.80027474997283,37.08152331542],[128.8001137047593,37.081275584611106],[128.80218570585248,37.07771226549804],[128.8038128228762,37.07794158708094],[128.80437823553464,37.07761421613409],[128.80521489826617,37.07713095786804],[128.8056553374044,37.07721038538205],[128.8061062415388,37.07688381801899],[128.80800350318356,37.07575679682841],[128.8089767404385,37.0767120202652],[128.81256962565848,37.07871178740773],[128.81437091589447,37.07846571578772],[128.8243527925529,37.07785183188365],[128.82580517651408,37.07869862168359],[128.82634601905934,37.07883054403071],[128.8266920968244,37.07868163087922],[128.82840950973844,37.078897810200324],[128.82938357321646,37.07845905861575],[128.82990123435874,37.077721638690655],[128.8320818770073,37.07507545762714],[128.83141819095889,37.06810663276492],[128.83166598873817,37.06740405953454],[128.83511959079271,37.066200237986656],[128.83595268934945,37.06594274294764],[128.8406474723684,37.05935650154915],[128.84096621494658,37.0590584547389],[128.8438413924731,37.05723084927045],[128.8440168408719,37.057168880679825],[128.84403479334244,37.05647859713259],[128.84370605423243,37.05574709016701],[128.8460576915738,37.05292524164609],[128.84610653596798,37.052281663474126],[128.8480488757149,37.051350343209414],[128.84810750840919,37.051313205741465],[128.85108140504124,37.05019990624839],[128.8514266027787,37.050281277419266],[128.8520369011085,37.05037618956492],[128.85698539530242,37.04892219437424],[128.85751692663445,37.049210651797814],[128.85813423805695,37.04920445967169],[128.85897878650795,37.049657373235235],[128.85960213503753,37.04955041477679],[128.86220867334106,37.04889489603779],[128.8625583060358,37.048916670303754],[128.86309828283498,37.04883065407776],[128.86462754867173,37.04803294686014],[128.86503110159353,37.0481300064702],[128.8654989920083,37.04799307613609],[128.8659485146247,37.04794272618727],[128.86636381492835,37.04762805005152],[128.86736639394147,37.04620731107804],[128.8684207209602,37.04605212802358],[128.86946164324476,37.04559763746743],[128.86970757374556,37.04555259607306],[128.87032486565667,37.04495375526292],[128.8732844040576,37.044203327195724],[128.87343703980804,37.044339220075166],[128.87435494340195,37.04454560526311],[128.87566375801973,37.044745903582175],[128.87636308561736,37.04562000330495],[128.87684218705334,37.04607807808882],[128.87695180180432,37.04724671869133],[128.87854418259712,37.05325513255148],[128.87865988395052,37.05317316413975],[128.89255567957687,37.047484852711435],[128.8928373832333,37.047481363183586],[128.89325488523448,37.04670725786571],[128.8939837623581,37.04592304351404],[128.8942199191496,37.04589019865822],[128.89479361709897,37.045251055052205],[128.895394833915,37.04503412215564],[128.8964199880587,37.044515505609276],[128.8971367088834,37.0451174485665],[128.89764874361745,37.04546052004957],[128.897408192608,37.047964837932945],[128.89746469315455,37.04818674928906],[128.89739454396303,37.04890382959527],[128.8976916454551,37.04974772432323],[128.89698177926687,37.05056537913623],[128.89929684553178,37.0587390048582],[128.90030626790963,37.059061750539996],[128.9006831007711,37.059301142232215],[128.90141441225032,37.05971234039724],[128.9019789745721,37.06021297120707],[128.90344055180657,37.06130859710159],[128.90436206198413,37.06170603166004],[128.90486079149107,37.06204214971449],[128.91031992655576,37.068295931261886],[128.92331552487704,37.09211695115822],[128.9593156110934,37.07747589871296],[128.98406379353784,37.084627079799915],[129.0643014127368,37.06806645854358],[129.0657375730951,37.07878578456749],[129.06715037820123,37.080978777221056],[129.06878239377656,37.08200053412779],[129.07016001358912,37.083887446461226],[129.0708160857543,37.08401508778707],[129.07087023518363,37.085281779547735],[129.07009294257193,37.08757455318089],[129.0703288490029,37.087742113554455],[129.0704550573929,37.08840469945121],[129.0714155655376,37.08878140285179],[129.07293730299313,37.090277655682975],[129.07695400899226,37.09298920446337],[129.09578084558726,37.100402009172434],[129.09623206172787,37.1003827260375],[129.09733932052322,37.09977552234335],[129.0982024483741,37.09897413040739],[129.10039965308604,37.09943657338867],[129.1017251450751,37.09916488098148],[129.10449647984643,37.09770466207038],[129.10773516190636,37.09347636851376],[129.1179893324325,37.09272677078686],[129.1264433780128,37.08506920351565],[129.12713478775902,37.0844513986353],[129.1279107154668,37.08416509080931],[129.1293927430936,37.08383831742286],[129.13071818410089,37.0833468832353],[129.13169890762666,37.08314441439327],[129.1335784919524,37.08178257776872],[129.1422452396809,37.0803855054191],[129.1443047207046,37.07666768097185],[129.14806112986437,37.076247023094744],[129.14977168549302,37.07459049061353],[129.15126863947617,37.07423226566126],[129.15185622851573,37.07381401476102],[129.15224810338682,37.07318389891497],[129.1526548327795,37.07338312096338],[129.15480056890752,37.07172005607892],[129.16177319377238,37.068825965140825],[129.16613638667226,37.06915780031283],[129.16580523851493,37.06734052336908],[129.16676224062914,37.065261104079454],[129.16730962355228,37.065034730699004],[129.16732696390198,37.06491645114691],[129.1682010336835,37.064469217613606],[129.16921490514662,37.06346669584046],[129.16932765643426,37.062772409468145],[129.1697461108316,37.06146355018983],[129.17032908942483,37.06034509380444],[129.17569702199782,37.057780288047894],[129.177082289142,37.05663605563445],[129.17910165945278,37.0545889075259],[129.179088470298,37.05413007671623],[129.17977304834878,37.05379171738125],[129.18042938584952,37.053207360195195],[129.18511877536537,37.046480748609554],[129.18540948720124,37.04171908095918],[129.2253141304669,37.04455999175614],[129.22537770639696,37.073720111851664],[129.271238269404,37.1163805689057],[129.32482985566594,37.142286218870495],[129.3633972863588,37.146000904866405],[129.37559718594102,37.102292876720455],[129.42701265969222,37.06366180220856],[129.4095204957632,37.02324015986531],[129.408044758406,36.97998390066946],[129.42046510708906,36.93617132507833],[129.41502396226983,36.89091143243099],[129.42097847570903,36.863459659980926],[129.4562368723018,36.81470224740685],[129.47728337174513,36.765549342301796],[129.46750619845278,36.75093369409175],[129.4760048453454,36.69934469006651],[129.43756428157917,36.67070391500671],[129.41684294130974,36.63757118192944],[129.40952088461378,36.59345806894733],[129.4396627324017,36.55228244301653],[129.44643815114426,36.50328357030193],[129.42921981737751,36.40912376800384],[129.3887164719868,36.3582624852254],[129.37898064765773,36.33250405529773],[129.37410112461208,36.24992448676851],[129.3859575050885,36.21723500142891],[129.3728548554947,36.194963145750854],[129.3933764197631,36.18075518027329],[129.39487919141362,36.14029548684086],[129.4322196339956,36.1106619710472],[129.41790346342864,36.073685632108095],[129.38262558368166,36.06335512161263],[129.37606860509854,36.0435147253601],[129.39498829945563,36.018454360490516],[129.44998637171923,35.99096140231839],[129.54045802824794,36.06751877273871],[129.5698775205237,36.07757297020797],[129.57892484909377,36.051757803182724]];

        var 경북2 = [[130.90612384417247,37.54948524523772],[130.91714575719595,37.51555862625239],[130.91392381798556,37.486733383095604],[130.87538927218014,37.4576714250322],[130.81173147106864,37.47345108025812],[130.79403709591136,37.512787922519294],[130.8467156845152,37.53536855012106],[130.90612384417247,37.54948524523772]];

        var 충북 = [[128.2120658419042,37.2453766796712],[128.21310799513117,37.245810487177344],[128.21312993163184,37.24581673334306],[128.21464565687177,37.24607460368154],[128.21464911981417,37.24604838867643],[128.22192376716953,37.23777918691112],[128.2219315740039,37.237695198893256],[128.22622808500896,37.232835365626784],[128.22678263034567,37.23237434884643],[128.22866517935825,37.22799014564228],[128.22867885618203,37.22798718983743],[128.22903128711602,37.22772478780986],[128.22921533305686,37.22758801523648],[128.22992804089554,37.227373677139525],[128.2301291739914,37.22731359211561],[128.2307249093862,37.227376956080924],[128.23081009608165,37.227332422630106],[128.23119134673985,37.22713250763008],[128.23172392208104,37.22701434974962],[128.2330236155464,37.22701914167552],[128.23368355535402,37.227544706973006],[128.2342644654073,37.2274113889588],[128.23445984318704,37.22734403323364],[128.2349207609648,37.22771258007291],[128.2353294759457,37.22833423308814],[128.2362413871383,37.228892905584686],[128.23665002448465,37.22894720902761],[128.23702619398793,37.22927777883599],[128.2375591677585,37.228934300864275],[128.23757680602714,37.22888376639821],[128.23909765329861,37.229061031034],[128.23912957104395,37.22905365762641],[128.23914130386288,37.22903889364867],[128.23928686856462,37.228853796916844],[128.23976744160035,37.22869982261746],[128.24002831732022,37.228503673049495],[128.24036362120287,37.22844497311983],[128.24039627808344,37.22843928209956],[128.24049918371256,37.22814369687041],[128.2405898824744,37.227983952752595],[128.2409039329313,37.227638014761474],[128.24096271851988,37.22757291379606],[128.24294568444267,37.22707322133592],[128.2437213401026,37.22700708690474],[128.24388840128887,37.226824006435116],[128.24695351468725,37.22817707440681],[128.24730866635502,37.22851205583721],[128.25266683545522,37.227902303572236],[128.25269347661705,37.227787996416765],[128.25394423268168,37.22545108227851],[128.25395376914935,37.22506947088503],[128.26844378159873,37.2079346362895],[128.2699374617589,37.20842347641739],[128.27032993334342,37.20867464556908],[128.2709998418064,37.20877624248121],[128.2713162040269,37.208921707381634],[128.27243261740094,37.20945679097235],[128.2878715527057,37.21464449720947],[128.2881743998463,37.21506494733294],[128.29468531596223,37.21563316820246],[128.29488957943465,37.21588574574785],[128.29998488664094,37.216241067709085],[128.30002860032175,37.216285079481665],[128.30036525822734,37.216332340205184],[128.30073882930293,37.21643749164224],[128.30124717905946,37.216580293127684],[128.30137967775784,37.21689530871503],[128.3053143763837,37.21710940054178],[128.3079354336886,37.217110639449814],[128.3165654109816,37.223320291688346],[128.31631785484444,37.222446270704594],[128.31639628743292,37.222421190246514],[128.318649047726,37.22166157881868],[128.31868369263347,37.22164937112725],[128.3192351812649,37.22080700976725],[128.32005731624642,37.219859719687335],[128.32090433907524,37.2194127535124],[128.32099575078033,37.21936456957408],[128.32100656081397,37.219358964374976],[128.32102544415346,37.21935142970625],[128.32311231881638,37.21930225855913],[128.32357414551433,37.21927739393437],[128.32382898252072,37.21923372004943],[128.32394442015078,37.21917077774351],[128.33338112710643,37.21578828466599],[128.33339658604686,37.21578670332568],[128.3333870278274,37.215743734955275],[128.33337557652033,37.215693184958226],[128.33292077012013,37.21453350188129],[128.33287463033867,37.21447151325647],[128.3320717124015,37.21377496186078],[128.33195686677212,37.21365011496835],[128.33129119269643,37.21288978598889],[128.33115573211055,37.21275362236439],[128.33111224044393,37.21270231613951],[128.33101504829594,37.21256008676082],[128.33046113013714,37.211165565930344],[128.33036435580135,37.21096646873306],[128.33028889348114,37.21083892385385],[128.3302131682865,37.21069618650319],[128.33004288156016,37.210420481609],[128.3299515452432,37.210009590237775],[128.3299318627806,37.20991069891893],[128.32989509842534,37.20978159904837],[128.32986945670933,37.209704171437544],[128.32987441267417,37.20797930895102],[128.32989862756332,37.207915122122834],[128.32986122243682,37.20790935121091],[128.32988009563869,37.20786183741896],[128.32988456905105,37.20779561991841],[128.32970985315197,37.20742676781449],[128.3296910290104,37.207397701979076],[128.32865079288592,37.20510285416609],[128.32865856233676,37.20500422693854],[128.3286556327612,37.204877273587115],[128.32866094257886,37.204838641249346],[128.32868100664234,37.20471791853183],[128.3290185708993,37.20447650229231],[128.32908511003677,37.20443718088024],[128.3291559689995,37.20438317082901],[128.3292394949544,37.20426876276059],[128.32925606404834,37.20420945158919],[128.3292543702497,37.20411317634397],[128.32925749287764,37.20403036282981],[128.32968813688905,37.20317552387995],[128.32969675046212,37.20310475068714],[128.32970770883924,37.202966387878135],[128.3297089626318,37.20289739473334],[128.32964782929182,37.20248222297736],[128.32965321640663,37.20238783587105],[128.329162509864,37.201782931146404],[128.32904887114577,37.20166538644335],[128.3289221063814,37.20158177136632],[128.32872206783938,37.201414521599304],[128.32858496922952,37.201202921163954],[128.32821886700668,37.20051720425972],[128.32810553285265,37.20027577776865],[128.32766754729792,37.199805978018404],[128.3274995272808,37.19959697461042],[128.32746421279205,37.19946953829117],[128.32650087537536,37.19741623235329],[128.32640325842675,37.1973083546797],[128.3263874755521,37.197291082843535],[128.3263359938717,37.197285742736696],[128.32621568143352,37.19728905714322],[128.32606718689468,37.19723075279221],[128.32602140432923,37.19720901995001],[128.32585999939792,37.19705596929184],[128.32491534116198,37.196995851151605],[128.32491113254196,37.19700683875248],[128.32469569393103,37.1974780786532],[128.32428008117424,37.19750130243029],[128.32400198479505,37.197640398623705],[128.32367421138974,37.19797770809627],[128.32315282176285,37.198111345558374],[128.32243504924102,37.19834741201958],[128.3215033611607,37.19757704884675],[128.32158576711683,37.19703413024669],[128.32166850956267,37.19691466911658],[128.32184600858312,37.19665817447297],[128.32181038983,37.19621003951756],[128.32175803063564,37.19554756604474],[128.32073770697602,37.19568816722346],[128.31986873460238,37.195911258180296],[128.31593357548022,37.1965634310136],[128.31535238229642,37.196698833894764],[128.3132494894373,37.19664161217329],[128.31308061146365,37.196482429511654],[128.31320287540026,37.195757757131176],[128.31285490789296,37.19505265323858],[128.3136855853135,37.19336931980811],[128.31370740977687,37.193328532624626],[128.31343612195496,37.192579219515885],[128.31299386062506,37.19114253647916],[128.31388476927575,37.190297580828016],[128.3141984077434,37.18999733928166],[128.3076562585243,37.18600312045852],[128.30638889548237,37.186260911690454],[128.305986081681,37.187065815561404],[128.30492385962583,37.1867708939883],[128.3044465615867,37.18688764422266],[128.30359954015762,37.186787149630035],[128.3026434102342,37.186623932842735],[128.3020739595793,37.18604622914226],[128.29992347589712,37.18358197605638],[128.29945233414094,37.183564048435976],[128.29813431668944,37.18361678051094],[128.29765006813165,37.18365586730464],[128.2975806068023,37.18364761560317],[128.29751182826323,37.183638510374664],[128.29562354674266,37.18328833784228],[128.29565567816795,37.18277865412453],[128.29566291751948,37.182563459387936],[128.29575022094943,37.182173959421874],[128.2960605989876,37.178463574157995],[128.29649368164206,37.17761388466526],[128.29668380357464,37.17718721592857],[128.2762992706756,37.1726817659202],[128.2764508643482,37.172280608993994],[128.27014547954823,37.16171970099609],[128.2696442667453,37.16170394742977],[128.26886108088124,37.16163602632232],[128.26862785441864,37.161615717229395],[128.2680448779367,37.16152846737003],[128.2661086734393,37.156993227512864],[128.26612358806193,37.15630522026867],[128.27189700636964,37.15214986835713],[128.27189077789834,37.151714360561684],[128.30072782871449,37.13527140612107],[128.30099303433897,37.13594865219474],[128.30544529431393,37.137159697299694],[128.30636092183022,37.13752592615662],[128.30931728065966,37.142803404611456],[128.30948115146052,37.14314636847305],[128.30951502022572,37.144925329503224],[128.3111120152932,37.14578388364735],[128.3121140941975,37.14500061796596],[128.31357611318018,37.1458646369062],[128.3145305480285,37.14629462248417],[128.3154777667783,37.146703359039],[128.31550299698418,37.14672270615014],[128.31586194509998,37.14721531402746],[128.31672041570542,37.147559330326985],[128.31978525334273,37.14726422850341],[128.3201016379758,37.14742815378128],[128.32201917127662,37.149221951691196],[128.32305526910022,37.1485090311701],[128.32444352256556,37.14795684008882],[128.32473294539147,37.14807344777398],[128.32598715807657,37.149105638585354],[128.3260364566901,37.14940847760239],[128.3261286997793,37.14994656097672],[128.32617888689612,37.14996236294622],[128.32659662990943,37.15025518282263],[128.32797017997697,37.1529418925218],[128.32837815416514,37.15256525234406],[128.33067274423158,37.15034316085705],[128.33218610232035,37.1515727288309],[128.3362324229027,37.15757189124545],[128.33709310260446,37.157852427275905],[128.339482148088,37.157994428654824],[128.3396304658002,37.158035703850416],[128.33988496877515,37.15807421195677],[128.33999732195616,37.158090516159184],[128.3400901060617,37.1581034960009],[128.3404862878113,37.15809257771607],[128.3406673243622,37.15797183157567],[128.34076985909869,37.15791575315009],[128.34343480914717,37.1563064463469],[128.34371785299808,37.15630500857857],[128.34402654625308,37.15628350163415],[128.34469950465535,37.156264102362826],[128.3448823693746,37.156313394147425],[128.34501928063744,37.15632379385347],[128.34519567540053,37.156120189714414],[128.3452590936522,37.15607498419483],[128.34537732398616,37.15610143652642],[128.3457006340632,37.15621366571567],[128.34601151761493,37.156317670162075],[128.34690447349686,37.157138233385766],[128.347044265332,37.157177840304456],[128.34763143652293,37.15649975402411],[128.34822141092337,37.15650759351882],[128.34844000935303,37.156858940752805],[128.34874921104407,37.156987887734246],[128.35015061810756,37.15693075078569],[128.3505121830571,37.1570342654611],[128.35068285815595,37.15728747442534],[128.35080180282074,37.15757156637235],[128.3531189163721,37.15611764997317],[128.35398483033825,37.15567479368149],[128.36216949914186,37.15269621058484],[128.3622651298246,37.15345118321971],[128.36338935908412,37.154622598361776],[128.36342006751522,37.15466971755409],[128.3642432809063,37.15618701365589],[128.3642601064152,37.15622510099031],[128.36445715817277,37.156243370955984],[128.36442736212024,37.15641635236091],[128.3644337373079,37.15643056062648],[128.36442172996234,37.15763210153895],[128.36486813084719,37.15772138646985],[128.3653528900645,37.157638013036284],[128.36539176902917,37.15760068453273],[128.37671733690877,37.15170410742981],[128.3768438615283,37.151695979695646],[128.3778054720022,37.15170535835291],[128.37801529707778,37.15171332900444],[128.3814068524935,37.155803084769],[128.38145942862639,37.155966599985774],[128.3814922804012,37.155985559430114],[128.3814616721895,37.155898754549185],[128.3815776656469,37.15587131115258],[128.38171841780542,37.15585582031335],[128.38174072691024,37.15521332531885],[128.38180608352246,37.15521501908288],[128.38185344813238,37.155223881363526],[128.38195760453732,37.15536794189669],[128.38197168579265,37.15543862153445],[128.38203553750884,37.15559313242544],[128.38210453585498,37.15571986262687],[128.38214339815465,37.155799591458816],[128.38221771759828,37.15593627131921],[128.382404189776,37.15606114627915],[128.3826812278282,37.15621339976097],[128.3831100506408,37.15649823136689],[128.38320157429587,37.15654506785673],[128.38331158416744,37.15695818978093],[128.38331306841954,37.15697774080017],[128.3836390804932,37.15773583526156],[128.38367258389272,37.157838330571174],[128.3837371497002,37.15802453373832],[128.3837005371175,37.15813150496589],[128.38369725107552,37.15820618346056],[128.38383144959775,37.15818844746048],[128.38398435220412,37.158030327864296],[128.3840973117386,37.157977862931695],[128.38419040106135,37.15797622117183],[128.38432159622428,37.15808572280659],[128.38433562082741,37.15810234816754],[128.38447995064402,37.15804635372467],[128.3847570197492,37.15783178083836],[128.39008168778156,37.15495197134438],[128.3901861159657,37.15498458640648],[128.3902387777601,37.15499142778386],[128.3902420217223,37.15501495088047],[128.39053990508452,37.1550222807434],[128.39072707893422,37.15508097499148],[128.39106769653094,37.15512131216391],[128.3918766843487,37.155133550001864],[128.4030242054581,37.14085703392318],[128.4036634141039,37.139618482207275],[128.40182222189745,37.13851620047973],[128.4014655816235,37.13759869403894],[128.40187145675395,37.13678264560131],[128.40131949186897,37.13542506576708],[128.4017929724072,37.134808472628855],[128.3993178970894,37.132354336475146],[128.3980926756441,37.13165303420509],[128.39792103665383,37.13103475528628],[128.39790020207914,37.1306158821457],[128.39702641985014,37.13007442684624],[128.3968297171765,37.12937063716483],[128.39600247257084,37.128594069263066],[128.400316006495,37.12799651928389],[128.40076767653593,37.12794930431678],[128.40728535089954,37.1263783761826],[128.40855466962736,37.125112673915254],[128.40989410827558,37.12331893530342],[128.41027545393231,37.12282983178875],[128.4110441137311,37.122134407307655],[128.41215492192535,37.1218851647154],[128.41241746811934,37.12175907011329],[128.42002011240442,37.11800339074528],[128.41974230328978,37.117217326703546],[128.41989480729282,37.11629900809491],[128.42075100819937,37.114941958359864],[128.4210462656199,37.11370344868739],[128.4235494631296,37.112250746862],[128.42354945048206,37.11223763547374],[128.42344745199492,37.11217670528493],[128.42311580143644,37.111457854724414],[128.42294127642796,37.11121860554058],[128.4221617776945,37.110157682906184],[128.4223726247659,37.10915011693627],[128.42236933136434,37.10866058067932],[128.42213584314433,37.10812446209927],[128.4224845528092,37.107328106855554],[128.42247670374076,37.10700368243483],[128.42300058335425,37.10411649136583],[128.4230628229648,37.10372197315185],[128.4230531614131,37.10365501572185],[128.4261130016276,37.10281019301557],[128.42798950809387,37.10336951758423],[128.42843200626848,37.103288696979845],[128.43012317391282,37.10367086579479],[128.4352483481222,37.11154934824687],[128.43524169917512,37.111568988049555],[128.4352377949797,37.11159313627573],[128.4375746166629,37.111240600530145],[128.43773715269714,37.11113029260474],[128.4380772925122,37.11098785895719],[128.43813726741652,37.110954562496914],[128.4387045497415,37.11053766478443],[128.4388029492312,37.11044606337066],[128.4392788196963,37.110239665257],[128.4394557146017,37.110149605685685],[128.43977406459186,37.10998270823074],[128.4398173992135,37.10995716235432],[128.4401313969218,37.10989059247727],[128.4401930025231,37.109887487098746],[128.44023173196382,37.10988232749392],[128.4403533601174,37.10987458758004],[128.44065149837564,37.10985045270889],[128.4410845490587,37.10965833260278],[128.44111816609112,37.10963954278194],[128.4417605979529,37.109375455149895],[128.44181715933513,37.10937463833819],[128.44232216736404,37.10934861149619],[128.44240642423281,37.1093422608306],[128.4425973565769,37.10927605082842],[128.44269186878364,37.10924113829867],[128.44291561610984,37.10901451663492],[128.44297547845005,37.10890277975545],[128.44307333383992,37.108688188092884],[128.44315849618079,37.10842324889159],[128.44316904020576,37.10838312046853],[128.4433047226748,37.10809728031233],[128.4434937983464,37.10792162656943],[128.4437280418224,37.10774037551015],[128.44391131633063,37.10763021894919],[128.44430750141444,37.10703098413105],[128.44443210980603,37.10682027290385],[128.4445841002295,37.10655554775038],[128.44461948503067,37.10649829861074],[128.44476428984328,37.106291341892465],[128.4448012632306,37.10626583435209],[128.44486822921613,37.106270888493015],[128.44500147737313,37.10651665274074],[128.44503636462684,37.1066011722576],[128.44502299840912,37.10666896953288],[128.445012642812,37.10674501344524],[128.44500579234264,37.106808089088986],[128.44505582537354,37.106935029953384],[128.44507203080863,37.106969634964],[128.4452787157783,37.10739285311425],[128.44532174237978,37.107467527504575],[128.44570419717434,37.10784367057105],[128.44574906592263,37.107870858253136],[128.44588531440368,37.107961907221764],[128.4461050881449,37.108108167905215],[128.4461325524881,37.10812039708222],[128.44627769483415,37.10820161320182],[128.44665766958636,37.109016010224956],[128.44670245284513,37.10905215430962],[128.4467513900341,37.10907243984066],[128.44702969145968,37.10912140687681],[128.44711690011175,37.109157713674314],[128.44720737159577,37.10919682606845],[128.4472880890317,37.10924368876153],[128.44737275118246,37.10929714718586],[128.44740091342965,37.10931241729436],[128.44835623736495,37.110135541667006],[128.44840646315635,37.110189108729706],[128.448441485882,37.11028494566559],[128.448478637455,37.11038866701579],[128.44848144829825,37.110447744638265],[128.44850068600198,37.11054975225372],[128.4493237943928,37.111252601591445],[128.4494754767584,37.111398170538266],[128.4495649679561,37.1114923496999],[128.449699873272,37.11155004087736],[128.44984178858058,37.11168663233226],[128.44986335105858,37.1117076097438],[128.44991333033707,37.11176432008837],[128.45001811191548,37.11182297146357],[128.4509972501361,37.11231160882524],[128.45109999349864,37.11224134291057],[128.45221660374241,37.111797340996624],[128.45238224404181,37.11174501820505],[128.45252130435142,37.11172150524785],[128.4526223056253,37.1117163950118],[128.45275444158693,37.11171684406164],[128.45326976857172,37.11177803197581],[128.45369248715554,37.1117990959344],[128.45531105839106,37.11184546973999],[128.4554232747641,37.111785869103635],[128.45550428528267,37.11173215255821],[128.45580849378672,37.11144357799125],[128.45585499532476,37.11138211484387],[128.4559771232511,37.11126417177427],[128.45608176332075,37.11112817002228],[128.45628846156234,37.11093797188215],[128.4564006663053,37.11088762413936],[128.45648233768839,37.1108398939674],[128.45651440723918,37.110809459290515],[128.4566164872112,37.11075252218291],[128.4605454792997,37.11042486988767],[128.46063241893125,37.1104240786141],[128.46110644738232,37.110432139259416],[128.4611980228958,37.11047248304686],[128.46127413241803,37.11044072618918],[128.46149819119884,37.11032451249076],[128.4615528460296,37.11034040290062],[128.46166829700357,37.110155338291186],[128.46174250540597,37.1101618404648],[128.46212794108573,37.110381556891255],[128.46225354828664,37.11045368975178],[128.4624989442835,37.11039522752812],[128.4625757687527,37.11037541300251],[128.4626679332447,37.11041186398495],[128.4627416865551,37.11041907397686],[128.46282916198686,37.11038980863883],[128.46294959849757,37.1103628743784],[128.46541938453228,37.10986838873928],[128.4655997461171,37.10986950203748],[128.46576316775372,37.10986837502908],[128.4658038589228,37.109868494682445],[128.4658777456058,37.10987091138453],[128.4659339402216,37.109879273401155],[128.4660455215535,37.10990963857785],[128.4660854367401,37.10991795470056],[128.46618930981774,37.109838032715544],[128.46623095319634,37.10987747936859],[128.4661843690461,37.10992481687061],[128.46816741780978,37.11020505941585],[128.46962452955256,37.110079645095176],[128.4723007663423,37.109843507793826],[128.4732157831679,37.11016371918566],[128.47780569753422,37.11015482631454],[128.4784042699038,37.110604773731325],[128.47927782709942,37.11132820199548],[128.48006807602027,37.111413504280335],[128.4808699409498,37.11168754027461],[128.48520014771321,37.11761606494184],[128.48542038259373,37.11762662812505],[128.48555587660493,37.117767224221545],[128.48684925381903,37.120066172922506],[128.48785916540388,37.120354194384],[128.48944601143114,37.121011993432276],[128.48953320303318,37.12171579869844],[128.49099654001336,37.12381778275022],[128.49110403970943,37.123852529709794],[128.49261700239006,37.12461219341837],[128.49325799482764,37.12462959455256],[128.4938498748175,37.124602359623914],[128.4940850339942,37.12486384112449],[128.49524464883913,37.12534536205976],[128.4956149946817,37.12561989686196],[128.4965539218214,37.12579069302723],[128.49655669776803,37.125787767090095],[128.49749337182817,37.124801835343355],[128.4983260473348,37.12373801766457],[128.4994642259731,37.12270797124816],[128.50175033247882,37.12085044305699],[128.5029852384731,37.119665059964056],[128.50607294999418,37.11628917489551],[128.50610690161025,37.11610890817465],[128.50616222464365,37.11599832889909],[128.50627090316297,37.11591330895752],[128.5062849636341,37.115898491747544],[128.50650112305377,37.11573286241528],[128.50655829740975,37.115674677067375],[128.5065950185275,37.115656377769696],[128.5065642423681,37.115567027102536],[128.5065561850825,37.11555166564275],[128.5066721093284,37.11544215794637],[128.50706390376234,37.115213963049406],[128.50729765885248,37.115108451314285],[128.5085106494332,37.114660345463456],[128.51003250480576,37.114003192769566],[128.51046681229883,37.11395734553267],[128.51075840545516,37.11395422719171],[128.51107968650635,37.111266455431355],[128.5111810735241,37.11089863252708],[128.51301048069166,37.10769756070016],[128.51305565630264,37.107615571239684],[128.51335059183342,37.10687575341611],[128.51347920011557,37.106511653385546],[128.51350340291097,37.10645480788542],[128.5135349882736,37.106355461705476],[128.5136461711679,37.10602589958114],[128.51382996143298,37.105381854666014],[128.51383504246823,37.105375361213596],[128.51391194815315,37.10511193016053],[128.51405534748213,37.10437126952911],[128.51423749778186,37.10326379805282],[128.51446628035026,37.101351625759854],[128.5176966669242,37.10236036741402],[128.5180775111592,37.10210426383507],[128.53029820402108,37.10027863386714],[128.53116570286377,37.10001434920085],[128.53193510974964,37.09952691052254],[128.53412694239137,37.098118121241534],[128.53471940964545,37.09590915524215],[128.5348631229665,37.09524282438663],[128.53491762222058,37.094833302458575],[128.53683430585662,37.0901360471432],[128.5370741465786,37.09009981006996],[128.5377472112929,37.08999833544124],[128.53813095689588,37.08962700712944],[128.5410375061322,37.08893898225535],[128.54155670608884,37.08902902058865],[128.542245714974,37.0886165755583],[128.54446543055698,37.08758589204345],[128.5453210924718,37.0876994572896],[128.54709824155816,37.08728154053655],[128.54974742987932,37.08618887720374],[128.5504583231733,37.086547274218134],[128.5519056499035,37.08673808942114],[128.5538489512943,37.08658977311861],[128.5684117361825,37.08736071578077],[128.5688828453016,37.08705854522273],[128.56917951913834,37.08671058514016],[128.5704831328927,37.086504511321415],[128.5709067145964,37.086217125259324],[128.57073424229756,37.08596868111311],[128.57036842497124,37.084474600473634],[128.57887481774705,37.08141783520322],[128.57971450789822,37.08159765713836],[128.5804233966175,37.08142110014397],[128.58127798273102,37.08156136155382],[128.58142385593928,37.081584558334555],[128.58252951244503,37.08124822925895],[128.58266486575897,37.08115369184195],[128.5826803693083,37.08111747881099],[128.58320255550754,37.0807493116776],[128.5837911134754,37.08073706631039],[128.58444539051098,37.080695352234535],[128.58556027523625,37.08037358183948],[128.5859170304552,37.080272030169404],[128.5861739670537,37.08024803295777],[128.58629277055232,37.08016352583165],[128.58643810812006,37.08015461740761],[128.58694368269326,37.08003603157366],[128.58709011511036,37.079968513854055],[128.58732143118954,37.08003555727884],[128.5874956695166,37.07995245762164],[128.58786041227742,37.07997579822639],[128.58993690108497,37.07926299462279],[128.59015605493207,37.07914760764049],[128.59280101727254,37.078480625661804],[128.59310380941704,37.07838903866617],[128.59322704876897,37.07852815341836],[128.59329635578274,37.07856600285103],[128.59356517075963,37.07884055243728],[128.59379011314266,37.079184313189735],[128.59403181901018,37.0797045225766],[128.5939837532181,37.08085631473939],[128.59448494511804,37.081191886011375],[128.5947838350074,37.08131898765021],[128.59503667243072,37.081536432624375],[128.59554104110651,37.08172115526072],[128.5992176998597,37.08209460994004],[128.59955809953175,37.082240898639796],[128.5990860812063,37.08295061076972],[128.5991261268537,37.083072378433535],[128.59969397792278,37.083153228337586],[128.6003164477916,37.08288985635899],[128.6016230291214,37.08305668492968],[128.60171769088075,37.08295358863532],[128.60177526839277,37.0828068836889],[128.60199476069621,37.082270286635215],[128.60201050719928,37.08220105723971],[128.60194831325273,37.08212201554935],[128.601881403928,37.08203075511393],[128.60168178659148,37.08185846788409],[128.60151040797518,37.08169254559074],[128.60146258866766,37.0816347257723],[128.6013669211955,37.0815224918176],[128.60411135360988,37.07917615732998],[128.60421361338217,37.07917404615614],[128.60422533751773,37.079183789371655],[128.60486073340786,37.078219154200376],[128.60487388895223,37.0781635935187],[128.60492595162938,37.07797478097231],[128.60499396177673,37.07792116841375],[128.60560421295042,37.077491860906264],[128.60567649427006,37.0774085113905],[128.6057118021251,37.077344545375325],[128.60573464111076,37.077296749043214],[128.60580960771998,37.077021437050014],[128.60583056877525,37.07692858045454],[128.60659138495444,37.07668540640147],[128.60665061027143,37.07669940842689],[128.60701469128645,37.076774739623936],[128.60703544204853,37.07679178594516],[128.6072012653145,37.07689691297704],[128.60733286764273,37.07698298834359],[128.60789589874088,37.07744279283751],[128.60796929234363,37.07750722701371],[128.60848669789254,37.078078610286084],[128.60863056616319,37.07826822816631],[128.60961262261114,37.07956820913152],[128.6097505669774,37.07973662063512],[128.61050406471847,37.0800826901728],[128.6106341244072,37.080056862649386],[128.6112964558571,37.07982414497852],[128.61166907525626,37.08030904041939],[128.61201595593528,37.08067987498192],[128.6126163196552,37.08092488749102],[128.61503175181736,37.08188109291547],[128.61521923776633,37.0821720054205],[128.6167131980782,37.08355945442611],[128.61754039879176,37.08423353203916],[128.6176557755176,37.08514206286106],[128.61838231449318,37.085474758350806],[128.62065192312406,37.08583027951265],[128.6226423191844,37.087401820062674],[128.6239471246612,37.0857957464563],[128.62785913811132,37.081781811485556],[128.62827850189603,37.081332593063145],[128.6277983118497,37.0805640460646],[128.62761868835074,37.07961778334325],[128.62765264976272,37.07838561978724],[128.62730358155162,37.07746507891147],[128.63352523521698,37.07232019270018],[128.63435719836446,37.07071059428392],[128.63739685195895,37.072257405654575],[128.6377362168288,37.07177667749838],[128.6388475709991,37.07117031517037],[128.6390999594068,37.07066228375282],[128.64133028768305,37.07082467320155],[128.64267079039365,37.070762452578215],[128.6441169928987,37.069750729502005],[128.64466936330294,37.06905218734183],[128.64593297225161,37.069096925598956],[128.64696043921617,37.06808500875296],[128.65209610523607,37.065440054137554],[128.65185642082642,37.06485125282934],[128.63292476584823,37.0405018707677],[128.57772866927505,37.0365458640583],[128.57773407585816,37.035567102191905],[128.54420698281524,36.99257171365918],[128.51547480028876,36.98682342048962],[128.44159366551497,36.927348572261764],[128.42396974840685,36.87652844713069],[128.4490310613387,36.84784214171434],[128.4204789204469,36.811513707912184],[128.32084903488584,36.8156399494895],[128.28243416343443,36.856398985856124],[128.24184104244344,36.87232867325182],[128.2164910704189,36.814962864748054],[128.21645545955306,36.81483623572454],[128.19174747262184,36.816650852480585],[128.19079446839692,36.81641991818853],[128.1363324594925,36.83289148914985],[128.1351506862293,36.832922767075594],[128.0934537206215,36.7967751669718],[128.09006779244228,36.79663752938811],[128.054977945753,36.79266267750069],[128.0323246888969,36.74757585504346],[128.06798796789695,36.72223411321158],[128.04969493578923,36.707755432024236],[128.0148421825491,36.730191321011496],[127.98009222111637,36.720297292097136],[127.960554982286,36.73718856178432],[127.95996461808097,36.73710194888855],[127.93356916917772,36.70648737047725],[127.93140134549455,36.624107639598805],[127.88935142472846,36.62865889712323],[127.87393601330069,36.655045525084304],[127.84784290774962,36.62493563401806],[127.79742505057503,36.60029872741854],[127.79847590645255,36.586442258169036],[127.87032170764256,36.55915369883506],[127.89635417470201,36.53119578689157],[127.9008184715932,36.50001604172172],[127.88046639130204,36.49327056480706],[127.87260858608312,36.4416661943449],[127.8825947084849,36.421546958339704],[127.86386560737145,36.403042547476275],[127.88416671288164,36.380013131337115],[127.88260664878368,36.345915495344336],[127.85203284069158,36.330405187217906],[127.84157007064496,36.30820893621638],[127.8523154076773,36.273832544014454],[127.8826355451056,36.273749669087096],[127.8921011759705,36.291927645555795],[127.93090725095732,36.27801330222353],[127.96811502866179,36.25032935861153],[128.01134201125134,36.271954453601715],[128.04735242811847,36.256551061730676],[128.03071520831807,36.23971847304449],[128.05626552838424,36.20208421678039],[128.00974801427887,36.20936207025149],[127.9753318809786,36.18771063385873],[127.99048049320282,36.158876308337476],[127.98885337529603,36.13265626056785],[127.9652008702575,36.11282884583447],[127.96087453614521,36.07033909612214],[127.91633961504998,36.05446515430419],[127.87677397179243,36.0225117710674],[127.85280793458601,36.03910627747606],[127.76618288478659,36.012206835240264],[127.74730505299453,36.02970113951056],[127.67225098334296,36.04247149554254],[127.67273573114998,36.0416300964636],[127.63806332620011,36.06866712834684],[127.63791587136105,36.06890166403231],[127.61307558211817,36.111807480744794],[127.5894370546603,36.134455110589975],[127.59802031438574,36.21708890108369],[127.58358227723754,36.231296129019526],[127.53257275463189,36.25088933599963],[127.49257720191125,36.23795395068193],[127.50134180998748,36.34006990064799],[127.5193690338617,36.35035287645941],[127.52480467423321,36.38380225513675],[127.55494637061842,36.39514713936509],[127.55508024348465,36.39518678315378],[127.55967899075192,36.39821888953578],[127.55919218532583,36.39914654004481],[127.55878010175535,36.399856150629894],[127.55816517314781,36.399675947569705],[127.54707951164634,36.408454519716564],[127.5470727467962,36.40845961594542],[127.54185998818646,36.41585756869269],[127.54228073457993,36.41927919632655],[127.53778279146553,36.42012291038361],[127.53743516505264,36.420317939994945],[127.49391176970472,36.42506434044689],[127.49376705635758,36.42524291590289],[127.5037888450623,36.45370091965119],[127.5035961999129,36.454045572323665],[127.49646645707624,36.45490693805522],[127.4960880025384,36.454788546508105],[127.48427610887815,36.4756241273186],[127.48423168252953,36.475797777779924],[127.48061100717518,36.47720999255097],[127.47987139318172,36.477063983032316],[127.4617928230305,36.455337148641355],[127.46155957004515,36.45509361223148],[127.43378989155006,36.45653731526793],[127.43213116720865,36.45662159419439],[127.40629396019843,36.454913086274914],[127.40583116302797,36.45493887822377],[127.40237162713332,36.486049226720844],[127.40150573442256,36.48679951624792],[127.39614094465608,36.491708392279],[127.39612055279709,36.49172147304118],[127.39612424170942,36.49172477764016],[127.3969998205258,36.49234724550459],[127.40029554490653,36.49344405572545],[127.40278189051706,36.493414713499995],[127.40982635082797,36.495320806621656],[127.40182466649642,36.54124048495118],[127.36825983291152,36.566196532635615],[127.34784963993853,36.56385581697319],[127.34738548273008,36.564087098689406],[127.34452911030007,36.56401482451396],[127.34339377058384,36.56439283337752],[127.34348871364591,36.56441327636665],[127.34446478563817,36.56432467521305],[127.34444211247006,36.56435856255148],[127.34324334759147,36.56462472183839],[127.34243191690224,36.56372112268328],[127.34086982579575,36.56363593369186],[127.34080478039098,36.56364152551656],[127.33688132076517,36.56419839168468],[127.33685970559493,36.56424247321924],[127.33684255298114,36.56427749450982],[127.33682386060448,36.56427923203463],[127.33662673183058,36.56515687250125],[127.336584401099,36.56534770780269],[127.33642085438704,36.565554012778996],[127.33584832797901,36.56667752799316],[127.33559099044388,36.56710112640649],[127.33546734029163,36.56726329843188],[127.33515454924374,36.568096137968155],[127.33575233431071,36.56890475763566],[127.33606719895977,36.56933078804634],[127.33620739544183,36.56952049958285],[127.33655020881913,36.569986073887144],[127.33617096660163,36.57025631710134],[127.33576934132576,36.5706065082213],[127.33573602887667,36.570702852165844],[127.3349901217512,36.571431247627494],[127.3344462746174,36.57160151508699],[127.32970417274994,36.57498935412286],[127.32942389524071,36.57531337451181],[127.32908280516796,36.57535742216015],[127.32881832948651,36.57556636316261],[127.3281758402883,36.57574150644202],[127.32805098940516,36.57577673759555],[127.32790905889074,36.5757729205331],[127.32788265003703,36.57583716261832],[127.32779035974866,36.57589447536298],[127.32573981497552,36.577526403721244],[127.3254549248763,36.57771238013681],[127.3254359215498,36.57782247653914],[127.32538481267486,36.57811842189787],[127.32531050395207,36.57837084280806],[127.32475727815836,36.579022822135805],[127.32502765818164,36.579588549165955],[127.32503258811488,36.579915938565144],[127.32492488890603,36.58009508817309],[127.3216283110897,36.581069354885386],[127.32149145640194,36.581309521278094],[127.32159783779174,36.58137155982673],[127.32177688022196,36.58142010061243],[127.32206277912906,36.581494307205766],[127.3227559560115,36.581734582798425],[127.32304543734186,36.581915155734585],[127.32272620113196,36.58213375067179],[127.32143936934834,36.583779683168714],[127.32088749519556,36.58377362866443],[127.32043558475397,36.58373853119033],[127.3198455901394,36.58373875608678],[127.31138358422945,36.58288038342038],[127.31118020778989,36.58288736434708],[127.31081598318389,36.58290160402119],[127.31034819768857,36.582895821859324],[127.30994418505533,36.582896563286084],[127.30972901381928,36.58289902849866],[127.30877554665159,36.582831194766015],[127.3085064868594,36.58290189765557],[127.30619480167914,36.582979457899576],[127.30576774283747,36.58299570596346],[127.30552151466463,36.583039788597276],[127.3052123595425,36.58309331129594],[127.30327772069175,36.583761998763855],[127.30302818816928,36.58396619033335],[127.30197765197165,36.585122167600574],[127.30182832566175,36.585324551786805],[127.30161150568016,36.58545427729559],[127.30000167360662,36.58586481294991],[127.29982091566156,36.58595324983658],[127.2996715620089,36.58617366479687],[127.29978682525449,36.587582670781764],[127.29984573680306,36.58767276063294],[127.29998377814003,36.58774076773492],[127.30049544412255,36.587936355001645],[127.30223806585866,36.58884760675026],[127.30250950787895,36.58905850659543],[127.30288110514343,36.589550102456734],[127.30300752377117,36.58968543753862],[127.30315798244679,36.589846974834884],[127.30480256565008,36.596238885867244],[127.3049473794867,36.596641433665724],[127.30505713854193,36.59675365254544],[127.30512342051841,36.596867674817496],[127.30532761615453,36.597211089828335],[127.30543640065345,36.59738778445304],[127.30574489208077,36.59798782781937],[127.30580654938737,36.59810728893466],[127.30591289254673,36.598313530131335],[127.3061252444229,36.59871432467949],[127.30632172368443,36.59923307340224],[127.30629392100103,36.602308124972],[127.30618464574755,36.60256305382366],[127.30572171142731,36.6033783125467],[127.30556397838414,36.603598282327894],[127.30360868658373,36.60537205291443],[127.30325392400887,36.60565669184328],[127.30287583178692,36.60600731269453],[127.30202753908316,36.60676631763875],[127.30193999755144,36.60685746996796],[127.30101381237412,36.60853820440824],[127.30129197178773,36.608613273338456],[127.30124089402007,36.60907623286527],[127.30120784386847,36.609197696050984],[127.30158956382209,36.60929574246767],[127.30143375493505,36.609851223353004],[127.30136195693741,36.610216740714094],[127.30145108811489,36.6102314206329],[127.30117659435365,36.61161939554949],[127.30118450511816,36.61169662990931],[127.30180732474165,36.612813742418105],[127.30165572963566,36.61282251041858],[127.30021766482857,36.61596656129217],[127.30026479634921,36.61645113396209],[127.30017576182085,36.616790668896314],[127.30006160734733,36.61719374990013],[127.29978773484743,36.6176502922248],[127.29960715850451,36.6179441706347],[127.2988830749215,36.61866137747316],[127.29640912078843,36.61897500928468],[127.29235957948262,36.624747976910825],[127.29218257100409,36.624836998546606],[127.29201158924211,36.62503680851586],[127.29188354422375,36.62533979195654],[127.29173502415274,36.633781504223585],[127.29167449391241,36.63385086559311],[127.29220512498176,36.63491176926981],[127.29220849637726,36.634928296802194],[127.29203474903925,36.63583253404632],[127.29140803581117,36.63643738428618],[127.28738504595137,36.63606344996632],[127.28724472009708,36.63612087143955],[127.28501783554661,36.63377242859195],[127.2849683694301,36.63399776355129],[127.27947818609803,36.63350317681572],[127.27939744629366,36.63351802624119],[127.2793510933541,36.633540825060926],[127.27932104825264,36.633555610274726],[127.27902427630545,36.63384677243725],[127.27892529425306,36.63402556131637],[127.27858432173299,36.63550038442548],[127.27837175171065,36.63574915743992],[127.27771025399251,36.636302642278146],[127.27736026492623,36.6365905052916],[127.27697767395216,36.63712828438764],[127.276855106548,36.63735861562898],[127.2767369516302,36.63767625620222],[127.27599535796874,36.64008410673377],[127.27605058136636,36.64008306205531],[127.27616210578105,36.640412381239344],[127.27835966321695,36.6413551168914],[127.27839024150103,36.64135365962691],[127.2795157376238,36.640696890590334],[127.27961014992174,36.64073834655767],[127.27988656819622,36.64080330486722],[127.28005813754115,36.640885328523275],[127.28058671166131,36.6413784785834],[127.28183221680469,36.64193460486294],[127.28277801148316,36.642293808669294],[127.28196914305916,36.64406615879597],[127.28161958747624,36.645142891240766],[127.28215673979534,36.645641130659904],[127.28269782918669,36.646682032028856],[127.28284968060139,36.64696494268962],[127.28332041653829,36.64714120012397],[127.28363057457275,36.64735889925182],[127.28346345107761,36.647798764912515],[127.28367087545615,36.64870082346342],[127.28410399092954,36.64873572508502],[127.28406227151227,36.64941340737435],[127.2844024803419,36.64999247286601],[127.28491958095898,36.6499578569263],[127.28517652597971,36.650072617724085],[127.28578748471577,36.65007050207586],[127.29209366753187,36.65945103727195],[127.29293929048616,36.65983513867207],[127.29505040306023,36.65971297941831],[127.29541403878942,36.65980079903912],[127.2985492684561,36.66154602975927],[127.29974560292538,36.6621899850743],[127.30101457836184,36.66204722630182],[127.30120529359405,36.663241312164345],[127.3059754062775,36.671330718487695],[127.3060918613474,36.67224860128498],[127.30598724495917,36.67248987335183],[127.30549221552579,36.67283651265932],[127.30542032525797,36.673168100096746],[127.30556452598307,36.67353875289289],[127.30524851798377,36.674294354514494],[127.30538838486908,36.674441673790525],[127.30553179956138,36.67468315246674],[127.30748615036502,36.681368114350946],[127.30762517941348,36.68202247597364],[127.30713492689173,36.68241042349506],[127.30675988177548,36.6827048689683],[127.30599100648968,36.68286949025073],[127.29666145531564,36.68577021395261],[127.29601000174823,36.686182800890414],[127.29555230314855,36.68662128819838],[127.29315875989967,36.686891527960476],[127.28802252401164,36.689552489604154],[127.28779203249857,36.68993638868247],[127.28778966925744,36.689957120324],[127.28695192725102,36.69042227135924],[127.28584071664231,36.69054597487386],[127.28529006643944,36.690671454249056],[127.28589327787154,36.692106038438205],[127.28610846593655,36.69219253572303],[127.28722318431579,36.6928930198191],[127.28732508905433,36.69302906909087],[127.28756773109804,36.693351483818006],[127.28792939926464,36.693803706636814],[127.288738575142,36.69427822364798],[127.28897671338312,36.694611351197985],[127.29733816709121,36.69859802602446],[127.29732436246708,36.698649316428515],[127.3083579078984,36.70481628463837],[127.3080405245885,36.70490102260394],[127.30811017384863,36.70531113021256],[127.30742016638128,36.7058882150271],[127.3074720767881,36.706408756077856],[127.30657512503815,36.70794351450154],[127.30622365906316,36.708127179504864],[127.31090938048797,36.72318990313556],[127.31102567595418,36.72361988317482],[127.31107414821676,36.72379913256861],[127.31068923953676,36.72381562305768],[127.31044263006774,36.72386104030946],[127.31744602187891,36.72462380507206],[127.31800731708759,36.72492334027041],[127.31810637177938,36.72498052353968],[127.31846113810116,36.72525020199194],[127.31885922695406,36.726055356140144],[127.31898277091327,36.72636647035111],[127.31904078424871,36.72647895555367],[127.31907033805915,36.726478876499364],[127.31977182452026,36.72679689795098],[127.31983658454006,36.726891621028585],[127.32012433214935,36.72736224993287],[127.32021677299863,36.72751011922042],[127.32027193831892,36.727609941161425],[127.32045390940586,36.727962861306615],[127.32052221835228,36.728068558529365],[127.32077907130528,36.72846661352305],[127.32088026995834,36.72861840431166],[127.32140903911949,36.72933280175185],[127.32147216343012,36.72941317340951],[127.32174738757128,36.72976922015923],[127.32389342532969,36.73126208341419],[127.32397170473563,36.731284120842226],[127.32411937459216,36.73133412024304],[127.32426218393853,36.731391187467345],[127.3257134789789,36.733669868621696],[127.3257386914077,36.73367515272282],[127.32590652382305,36.733736646737206],[127.32638092419019,36.733900364480974],[127.3273813683941,36.73427835005677],[127.32759534197665,36.7343295760973],[127.32846154420501,36.734562894699835],[127.32860548678413,36.734558282864725],[127.32921036637458,36.734470166174624],[127.32939940305259,36.734454155419684],[127.329651473405,36.734370674784685],[127.32986696736869,36.734203374734655],[127.3303560209606,36.73365713175537],[127.33037776145846,36.73362835364368],[127.33061728691243,36.73302507322357],[127.33670220291013,36.72986432626049],[127.33682044020753,36.72950073722707],[127.33976749742958,36.730940090036285],[127.33999552302105,36.73152065837309],[127.34002797205588,36.731542247807496],[127.34246857289172,36.732823312586234],[127.34245324819338,36.73287939666746],[127.34239490093142,36.73309245085569],[127.3429440504803,36.73504121541998],[127.34316990690118,36.73524247074315],[127.34302027832825,36.735467619067286],[127.33407928372287,36.74693789215954],[127.33339993628871,36.746739292066685],[127.33675553971192,36.75278871961554],[127.33687562226609,36.75272022991],[127.33712870480853,36.75253844797707],[127.337357726973,36.75265353955952],[127.3392227260632,36.752729929545396],[127.33938535784823,36.75278859892733],[127.33942261923146,36.75282538481086],[127.34215146821724,36.75321916440582],[127.34229056069452,36.753178495972215],[127.34251083922003,36.753213910155864],[127.34288397910535,36.753433889534854],[127.34304040498726,36.75347371232596],[127.34337621882464,36.75356201077784],[127.34392050274607,36.75370602915355],[127.34420772227543,36.75340953050981],[127.34653341023413,36.753476305382016],[127.34704543078854,36.75305692940395],[127.34784166312835,36.752926208284734],[127.34862961501578,36.753326030751985],[127.34882147772905,36.75334687216561],[127.34932609856254,36.75353885809989],[127.35018430745433,36.75368586676159],[127.35036215841274,36.753975115406284],[127.3511595015494,36.754124838112425],[127.3512830399688,36.75412728520964],[127.35453624883587,36.755862167675346],[127.35534328625646,36.755983106297165],[127.35557056169563,36.756017069385656],[127.35783110121614,36.760971206996885],[127.35796838980298,36.760953053266356],[127.35881971720102,36.76057541372113],[127.36007720983599,36.75971670446865],[127.36058953904316,36.760045749258914],[127.36183354774985,36.76072232284601],[127.36191455797945,36.76075727620836],[127.36245401763121,36.76108652851983],[127.36320335438944,36.76105523727404],[127.36360934582895,36.76109596432656],[127.36419158656942,36.76148724716407],[127.36419274592504,36.761500534538065],[127.36482576120817,36.76129388125441],[127.36492708442623,36.76121866162285],[127.36516316816605,36.76111431284153],[127.36549090889436,36.7609626640737],[127.36549300822298,36.76096152312665],[127.365671809878,36.761026314316794],[127.3659149129258,36.760923908256856],[127.36644165037256,36.76092821403964],[127.36693465740068,36.76094021812491],[127.36935811755826,36.76156971443709],[127.36958598620322,36.76157521025155],[127.36959549873247,36.76155264438211],[127.36988675383476,36.7608691532589],[127.36987267132544,36.76023138413806],[127.36986979616373,36.76010551929043],[127.37108580002435,36.75923274752971],[127.37142559611287,36.75893517357545],[127.37146317722723,36.75856362964276],[127.38446913318042,36.75924083438087],[127.38501727007728,36.75964259232461],[127.38525976430454,36.75959928816687],[127.38559351403714,36.75953963915663],[127.38583236984675,36.759433834654736],[127.38614053728412,36.75929711536788],[127.38757441474996,36.75612817224702],[127.38717338225909,36.75595629706721],[127.38719448464474,36.7558004996253],[127.3874713442858,36.755567287345],[127.39195219901964,36.752590603565054],[127.39250900950658,36.752507919417646],[127.39268859557409,36.7525918073319],[127.3936479855419,36.752526132027306],[127.39338173191169,36.751952273946706],[127.39339405907076,36.75193195852084],[127.39356097420261,36.75165600290051],[127.3941991543109,36.751602084406656],[127.39434483746348,36.7513822470532],[127.39471215980183,36.75098397768617],[127.39470495872118,36.75074014412565],[127.394552319407,36.750482986322076],[127.39537778821087,36.74887008676813],[127.39557663331938,36.748992492768245],[127.3959481472609,36.748217993016084],[127.39602104156374,36.74793305499299],[127.39609867681499,36.74792266140986],[127.3968636071928,36.74781987425627],[127.39799115420058,36.747399359335105],[127.39880039448443,36.747037345119914],[127.39908818700137,36.74693275488238],[127.39967889318721,36.74700934836424],[127.40386779860714,36.7449750925582],[127.40400151421318,36.74488480764086],[127.40445904470441,36.745057848309514],[127.40454335303988,36.745153307508836],[127.40455739908599,36.74629963941605],[127.40465495664701,36.74642151749521],[127.40464994087588,36.74643195211971],[127.4047850699395,36.74708057014262],[127.40512708002474,36.74820917449292],[127.40558289821271,36.748717321863815],[127.40549004055883,36.74916058643606],[127.40528488556252,36.74927532625473],[127.41124127489792,36.753442302641766],[127.41137120271004,36.753559277395375],[127.41150380367569,36.754014160230064],[127.41150670340583,36.754033019416646],[127.41159388723038,36.75417464206343],[127.41161882477783,36.75422299074846],[127.41138263107432,36.75468844262284],[127.41149159552327,36.75507441718566],[127.41104263838217,36.75577206765415],[127.41079618230324,36.756118434990974],[127.41092394866334,36.75605716180904],[127.41231231733892,36.75732069303673],[127.4124188132621,36.75737439019386],[127.41246507917853,36.75738746052049],[127.41255760172533,36.757412208517515],[127.4193158355259,36.75752439472185],[127.41946720341356,36.7575911665612],[127.41950986338645,36.757616644523814],[127.41969821506609,36.757661597439544],[127.41970261711634,36.75766636753183],[127.40156670151883,36.79504792157813],[127.40171110874012,36.795144025611286],[127.40080776000384,36.79909022160435],[127.39951636598008,36.7992190104284],[127.38626891857713,36.809636513022454],[127.38559664332352,36.8103944816441],[127.35740718093452,36.8244559673313],[127.35799215163566,36.82530991543043],[127.35567274838394,36.82884865074712],[127.35444506107174,36.82947489475663],[127.33649498326743,36.85468681579156],[127.3057883326854,36.86337595078646],[127.28782886465115,36.893778879374906],[127.28960128741868,36.894113629995054],[127.28993839303588,36.89425698769248],[127.33041472054747,36.93766463126555],[127.33077224356259,36.93800662143752],[127.37565790376988,36.94865962359563],[127.37564901158117,36.94913722281673],[127.3963181982531,36.96446970179323],[127.39702678490286,36.964692612005635],[127.40153404660329,36.96767809296368],[127.40051655807157,36.96851951420808],[127.40736882429556,36.99852901313694],[127.40795308089255,36.99854503386099],[127.44708787946097,37.01086831891267],[127.44714853474542,37.011965419357196],[127.45973058493531,37.0250860043428],[127.45963285791262,37.02524463620583],[127.4603317842726,37.04615558561884],[127.49467757530023,37.04944970682387],[127.49472805661466,37.0494055703042],[127.53429636183519,37.05234312782888],[127.53438585368731,37.05227965382116],[127.53480073762644,37.051961490217735],[127.53481250856242,37.05195194995274],[127.56689497607194,37.04738061898354],[127.56707389091,37.04751407739582],[127.56954254472399,37.0481699139382],[127.56952205968616,37.04822688682432],[127.57797674541946,37.07534104130867],[127.60465483856676,37.06876588072504],[127.60477873635023,37.06879228237433],[127.61194320164803,37.087254177767555],[127.61338662608749,37.087858045791606],[127.63574809895894,37.11497155376889],[127.63545082744736,37.115267954706944],[127.63193455331954,37.153929175299254],[127.63195661573504,37.15391819146927],[127.63197318192705,37.15390543594678],[127.64603579539634,37.15108063485405],[127.64604527629734,37.15109429632734],[127.67021249421336,37.13610800288655],[127.69472770074562,37.14997838844164],[127.69480590348178,37.150183474632804],[127.70712925192542,37.17082436011628],[127.70753173319338,37.17093346510742],[127.71451717235057,37.18112170704128],[127.71523778210312,37.18148566298708],[127.71763705125346,37.183831314570746],[127.71783109113159,37.18380818310866],[127.74473889229826,37.213747381839575],[127.74452465986985,37.21189740257894],[127.7555275181598,37.171440833401505],[127.78952364538557,37.14340827668379],[127.84739138408551,37.15293593643071],[127.87205003626993,37.164343968516285],[127.90163979883549,37.15180229570607],[127.93362553710759,37.17580286045303],[127.92158334535746,37.225045280425554],[127.97989775019303,37.258334282253266],[128.01921550291559,37.24437776806951],[128.03720306560032,37.18928064496871],[128.11150413136116,37.20767155165618],[128.1253222358382,37.23453731924993],[128.16404062128265,37.213308702545994],[128.17409861245437,37.23260505841317],[128.2120658419042,37.2453766796712]];

        var 대구 = [[128.7213262450712,36.00636035178296],[128.72189352615018,36.00619860741209],[128.7309901087172,35.99767247099226],[128.73187299735793,35.997527171299716],[128.73470063430165,35.993075802741764],[128.73485570688902,35.99295604003034],[128.73415626662583,35.991806537428346],[128.73316403261364,35.99068829761383],[128.73206401923736,35.99010720002594],[128.73159182966748,35.98938130012162],[128.73118684774465,35.98751143292643],[128.73140117827168,35.98601429264223],[128.73097394553133,35.985361435873465],[128.73223979296566,35.98375306944311],[128.73319290390504,35.98310317364049],[128.74363020524913,35.94510567122465],[128.7437041617869,35.94492522278742],[128.74408670694478,35.943958073105826],[128.74381378715702,35.9429783690565],[128.74304792451628,35.942274788373474],[128.73983979749383,35.93760678987219],[128.7397672408868,35.9375029898236],[128.75550760597136,35.91464484971569],[128.75565181427106,35.91439938622806],[128.7613815432334,35.88723788944046],[128.76128637388868,35.88706562490887],[128.7598178227882,35.86685930984265],[128.75981857260155,35.866784111738006],[128.74032326310075,35.85220076728609],[128.73988154210204,35.85199427699523],[128.7374535240631,35.85116064830068],[128.73628227309777,35.851284856918596],[128.72497076697286,35.85329074769074],[128.72557729319746,35.85034325988758],[128.72653353651162,35.84800548731046],[128.72676964616883,35.844842050756206],[128.7263471311609,35.84256087986203],[128.72613197307535,35.842317815982895],[128.72434784131892,35.84031296046613],[128.72406310338536,35.839426060178475],[128.7242141017945,35.83866793458516],[128.72507972759868,35.83615857082713],[128.72507251360403,35.83604898872359],[128.72440707802312,35.835761228003854],[128.72240445355493,35.83500728788938],[128.72238701227232,35.83497176409156],[128.72226501840004,35.834843476234504],[128.72209886003142,35.83478591484457],[128.72199394103438,35.834721736258885],[128.72180163715853,35.834671585024196],[128.72169664697066,35.8346782442631],[128.7215565374535,35.834883790585714],[128.72139001748337,35.8351749029518],[128.7212847338874,35.83535926959967],[128.72115320889262,35.83548668806004],[128.7154888327596,35.83317869947243],[128.71412235160616,35.83178805529844],[128.71317004718932,35.831066398302426],[128.71267678310016,35.83070759673058],[128.71239815491782,35.830323246360734],[128.71227892371564,35.83022053274917],[128.71119570554396,35.82941763838131],[128.71090650498414,35.82910699057312],[128.71037257507487,35.828428769399615],[128.71035361434193,35.82829975382099],[128.71031656709215,35.828043493285605],[128.71030266593868,35.82785919873221],[128.71023528608177,35.827796795312196],[128.71001922945322,35.82783281735054],[128.70862298975973,35.826381997054476],[128.7087452139889,35.826212003391824],[128.70857062454414,35.823372132268055],[128.70866725043237,35.82287907671741],[128.71706571802,35.80852810680546],[128.7170897650298,35.8085205572397],[128.7143282855512,35.80475816185505],[128.71019923491795,35.80426598751514],[128.7085215601008,35.80292115122969],[128.68251170282812,35.79014861991538],[128.68912569787108,35.739772794681855],[128.6891106166496,35.73923002367715],[128.6832397085274,35.72145444422488],[128.6244976030435,35.70335495481642],[128.61479842452982,35.73094200818587],[128.58051590399288,35.73866660199441],[128.52790486607597,35.71274079417096],[128.52985121593642,35.68301533440054],[128.50945505836145,35.67471463736342],[128.50623621037877,35.639556969852805],[128.45909489107632,35.640273388200384],[128.45901827212916,35.64026787811151],[128.4309803226448,35.621638800488626],[128.37174762364575,35.61088094277428],[128.40125141360602,35.632728696053555],[128.4014182978501,35.633438194198014],[128.38368627024056,35.65848588282504],[128.38266941694133,35.65954413424245],[128.35718642311096,35.6821952331281],[128.35693445710064,35.68263837560539],[128.35887829808627,35.70870122987159],[128.41220175603553,35.69584190063279],[128.43398078084127,35.707070292041124],[128.41150864211912,35.73855726955638],[128.4086866758349,35.73973535132349],[128.3936963726598,35.74682288793781],[128.3932443940482,35.74708427426636],[128.38329416135437,35.758585218680025],[128.42082951598775,35.809354575222386],[128.47043315408257,35.8059223363035],[128.48271590445026,35.81551710952425],[128.4828275850767,35.816692669593934],[128.48288998679786,35.81735036892825],[128.48295230525162,35.81800575212713],[128.48299134847161,35.81891557318833],[128.48301345875836,35.81943615495395],[128.48302581262448,35.8197281752041],[128.4830589247011,35.82050544251713],[128.48306896006807,35.82113880777162],[128.48299736685053,35.8224215904517],[128.4824594965352,35.826002999737355],[128.481969925052,35.82721759931332],[128.48145861204262,35.828751339419235],[128.48121712907113,35.8300864765222],[128.4767314903397,35.8316469716899],[128.4752834681512,35.83215067319142],[128.47415503649057,35.83254327338718],[128.47318775873808,35.833179456892],[128.47278363274324,35.83344939550027],[128.47254620952359,35.833608330168374],[128.468919315182,35.839345827153906],[128.46899205350073,35.83963096777291],[128.38351017125282,35.85283465086274],[128.39806677041497,35.89270855459797],[128.43103622596146,35.93052647248881],[128.47641886601411,35.934439337455935],[128.4683790422405,35.89947083416591],[128.46909837797443,35.899013522731224],[128.47847679821518,35.89682429582409],[128.47916501839438,35.89661456382814],[128.50478828611696,35.89137522049469],[128.5345213218195,35.93868815807367],[128.52665053698558,35.97544743179838],[128.5282794993138,35.979008268449114],[128.5283538521437,35.98034994120992],[128.5616645865135,35.97253036133529],[128.5656770998791,35.9737329674323],[128.56567040421973,35.974920818802445],[128.5690717857875,35.97651703426509],[128.57283756882677,35.97831254293741],[128.57430153839093,35.97782284818138],[128.57503192622565,35.977924174254525],[128.57856128906258,35.97843202265338],[128.5812427078083,35.97804535550383],[128.58233771498902,35.97824716519045],[128.58331417591256,35.97785468280457],[128.58322029710388,35.97728087943594],[128.58509702240704,35.977957602650015],[128.5873638411499,35.97939366083716],[128.58798603283356,35.97897598918454],[128.59015554229657,35.97923540064925],[128.59087467316112,35.98007802177191],[128.59304155877055,35.98084165111779],[128.59292518288288,35.98336183401906],[128.59416334635716,35.98378610378364],[128.5961238206889,35.984548824754626],[128.59839560696295,35.98506039671276],[128.60350435358643,35.986013434130804],[128.60349908416848,35.986422356373005],[128.60349379380537,35.9868109907817],[128.60335923053947,35.98798734396207],[128.60360071742093,35.98822601388796],[128.6048102308872,35.9894207330141],[128.60599289304102,35.99082503096723],[128.60613397041328,35.991203584643976],[128.6065089805702,35.99208347593722],[128.60704146144633,35.99255381861844],[128.60769318375165,35.99311392448162],[128.60830937859535,35.99341143755218],[128.60864341837433,35.99359652607783],[128.60883809343383,35.99393624011929],[128.60900277604858,35.99463980333418],[128.60954479511366,35.9950512986295],[128.60957858135694,35.99507703075352],[128.61021862722347,35.996102756639374],[128.61019018001957,35.996116379107306],[128.61019523767132,35.996280201782646],[128.6101956776179,35.996285269423865],[128.61019819522159,35.99632353305128],[128.61013693501997,35.99644656652364],[128.61006373148894,35.996681555757654],[128.61005254997616,35.996747147072654],[128.61038938542632,35.99691570088881],[128.61055192736796,35.99698504796746],[128.61069255357995,35.99705018683192],[128.61085797653803,35.997093352744294],[128.61083393147302,35.99711812176804],[128.6108091786371,35.99714492462769],[128.6110300993498,35.99751170226147],[128.61137821381337,35.99767457704121],[128.6118236547161,35.997955764150866],[128.6120432935831,35.99837696954391],[128.6125159054562,35.99929678594049],[128.61355287406565,35.99952105019799],[128.61571659335465,36.000977155652464],[128.6161513579533,36.00214219240173],[128.61628770994176,36.00255767890544],[128.61665188806717,36.00364199882694],[128.61742843564923,36.00652384430621],[128.61748582034008,36.00673736606678],[128.63242994354897,36.008139888634005],[128.63302527467488,36.008270052417316],[128.63484631574687,36.00903035901048],[128.6362433291671,36.009095372613835],[128.6373973372334,36.009192102800334],[128.63995920834478,36.00957135211684],[128.6401301090318,36.00980897061375],[128.64078254646668,36.010549961362074],[128.6541914088714,36.00945538853135],[128.65426791497893,36.00944685050893],[128.66417966762262,36.01011125779763],[128.66418455167434,36.01011287618484],[128.6736468735633,36.01338298645338],[128.67745313563154,36.013246491457856],[128.7213262450712,36.00636035178296]];

        var svg_map = d3.select(".map1")
                    .append("svg")
                    .attr('width', 400)
                    .attr('height', 400)

        if (this.state.year === "5년 평균") {
            var c = ['#f7f7f7','#cccccc','#969696','#636363','#252525'];

            for (var i = 0; i < 5; i++) {
                svg_map.append("rect")
                    .attr("x", 5)
                    .attr("y", 82 + (48 * i))
                    .attr("width", 20)
                    .attr("height", 48)
                    .attr("fill", c[i])        
            }

            var x = d3.scaleLinear().range([50, 400]);
            var y = d3.scaleLinear().range([400, 0]);
                x.domain([124, 131.7]);
                y.domain([32.5, 39.5]);

            //대구
            var color = "#969696";

            svg_map.data([대구]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)

            //대전
            var color = "#cccccc";
            
            svg_map.data([대전]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            //경기  
            var color = "#f7f7f7";

            svg_map.data([경기]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            //강원    
            var color = "#f7f7f7";
                    
            svg_map.data([강원]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            //부산
            var color = "#cccccc";
            
            svg_map.data([부산1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

                            svg_map.data([부산2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([부산2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([부산3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            //서울
            var color = "#cccccc";

            svg_map.data([서울]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
            
                            
            //세종
            var color = "#f7f7f7";

            svg_map.data([세종]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
            
            //울산
            var color = "#cccccc";
            
            svg_map.data([울산]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            //인천
            var color = "#f7f7f7";
            
            svg_map.data([인천1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([인천2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)


            svg_map.data([인천3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([인천4]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)


            svg_map.data([인천5]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([인천6]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([인천7]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([인천8]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([인천9]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([인천10]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            //제주
            var color = "#cccccc";
            
            svg_map.data([제주]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            //경남
            var color = "#f7f7f7";

            svg_map.data([경남1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([경남2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([경남3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([경남4]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([경남5]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([경남6]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([경남7]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            //경북
            var color = "#cccccc";

            svg_map.data([경북1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([경북2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            //충남
            var color = "#f7f7f7";

            svg_map.data([충남1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([충남2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            //충북 
            var color = "#cccccc";
            
            svg_map.data([충북]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            //전남
            var color = "#cccccc";

            svg_map.data([전남1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남4]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남5]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남6]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
                            
            svg_map.data([전남7]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남8]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남9]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남10]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남11]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남12]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남13]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남14]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남15]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남16]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남17]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남18]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남19]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남20]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남21]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남22]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남23]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남24]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남25]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남26]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남27]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남28]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남29]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남30]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남31]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남32]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남33]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남34]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전남35]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            //광주
            var color = "#cccccc";

            svg_map.data([광주]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            //전북
            var color = "#cccccc";
            
            svg_map.data([전북1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전북2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)

            svg_map.data([전북3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        }
        else if (this.state.year === "2014년도") {
            var c = ['#fee5d9','#fcae91','#fb6a4a','#de2d26','#a50f15'];

            for (var i = 0; i < 5; i++) {
                svg_map.append("rect")
                    .attr("x", 5)
                    .attr("y", 82 + (48 * i))
                    .attr("width", 20)
                    .attr("height", 48)
                    .attr("fill", c[i])        
            }
        
            var x = d3.scaleLinear().range([50, 400]);
            var y = d3.scaleLinear().range([400, 0]);
                x.domain([124, 131.7]);
                y.domain([32.5, 39.5]);
            
            //대구
            var color = "#de2d26";
            svg_map.data([대구]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
        
            //대전
            var color = "#fcae91";
            
            svg_map.data([대전]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //경기  
            var color = "#fcae91";
        
            svg_map.data([경기]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //강원    
            var color = "#fee5d9";
                    
            svg_map.data([강원]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //부산
            var color = "#fcae91";
            
            svg_map.data([부산1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
                            svg_map.data([부산2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([부산2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([부산3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //서울
            var color = "#fb6a4a";
            svg_map.data([서울]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
            
                            
            //세종
            var color = "#fee5d9";
        
            svg_map.data([세종]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
            
            //울산
            var color = "#fcae91";
            
            svg_map.data([울산]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //인천
            var color = "#fcae91";
            
            svg_map.data([인천1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
        
            svg_map.data([인천3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천4]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
        
            svg_map.data([인천5]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천6]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천7]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천8]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천9]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천10]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //제주
            var color = "#fcae91";
            
            svg_map.data([제주]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //경남
            var color = "#fcae91";
        
            svg_map.data([경남1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남4]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남5]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남6]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남7]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //경북
            var color = "#fcae91";
        
            svg_map.data([경북1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경북2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //충남
            var color = "#fee5d9";
        
            svg_map.data([충남1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([충남2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //충북 
            var color = "#fcae91";
            
            svg_map.data([충북]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //전남
            var color = "#fee5d9";
        
            svg_map.data([전남1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남4]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남5]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남6]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
                            
            svg_map.data([전남7]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남8]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남9]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남10]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남11]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남12]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남13]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남14]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남15]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남16]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남17]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남18]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남19]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남20]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남21]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남22]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남23]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남24]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남25]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남26]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남27]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남28]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남29]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남30]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남31]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남32]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남33]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남34]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남35]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //광주
            var color = "#fcae91";
        
            svg_map.data([광주]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //전북
            var color = "#fcae91";
            
            svg_map.data([전북1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전북2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전북3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
            
        }
        else if (this.state.year === "2015년도") {
            var c = ['#ffffd4','#fed98e','#fe9929','#d95f0e','#993404'];

            for (var i = 0; i < 5; i++) {
                svg_map.append("rect")
                    .attr("x", 5)
                    .attr("y", 82 + (48 * i))
                    .attr("width", 20)
                    .attr("height", 48)
                    .attr("fill", c[i])        
            }
        
            var x = d3.scaleLinear().range([50, 400]);
            var y = d3.scaleLinear().range([400, 0]);
                x.domain([124, 131.7]);
                y.domain([32.5, 39.5]);
        
            //대구
            var color = "#de2d26";
            svg_map.data([대구]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
        
            //대전
            var color = "#fed98e";
            
            svg_map.data([대전]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //경기  
            var color = "#fed98e";
        
            svg_map.data([경기]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //강원    
            var color = "#ffffd4";
                    
            svg_map.data([강원]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //부산
            var color = "#fed98e";
            
            svg_map.data([부산1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
                            svg_map.data([부산2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([부산2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([부산3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //서울
            var color = "#fe9929";
            svg_map.data([서울]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
            
                            
            //세종
            var color = "#ffffd4";
        
            svg_map.data([세종]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
            
            //울산
            var color = "#fed98e";
            
            svg_map.data([울산]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //인천
            var color = "#fed98e";
            
            svg_map.data([인천1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
        
            svg_map.data([인천3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천4]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
        
            svg_map.data([인천5]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천6]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천7]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천8]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천9]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천10]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //제주
            var color = "#fed98e";
            
            svg_map.data([제주]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //경남
            var color = "#ffffd4";
        
            svg_map.data([경남1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남4]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남5]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남6]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남7]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //경북
            var color = "#fed98e";
        
            svg_map.data([경북1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경북2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //충남
            var color = "#ffffd4";
        
            svg_map.data([충남1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([충남2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //충북 
            var color = "#fed98e";
            
            svg_map.data([충북]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //전남
            var color = "#fed98e";
        
            svg_map.data([전남1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남4]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남5]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남6]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
                            
            svg_map.data([전남7]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남8]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남9]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남10]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남11]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남12]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남13]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남14]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남15]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남16]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남17]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남18]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남19]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남20]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남21]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남22]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남23]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남24]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남25]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남26]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남27]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남28]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남29]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남30]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남31]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남32]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남33]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남34]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남35]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //광주
            var color = "#fed98e";
        
            svg_map.data([광주]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //전북
            var color = "#fed98e";
            
            svg_map.data([전북1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전북2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전북3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
            
        }
        else if (this.state.year === "2016년도") {
            var c = ['#edf8e9','#bae4b3','#74c476','#31a354','#006d2c'];

            for (var i = 0; i < 5; i++) {
                svg_map.append("rect")
                    .attr("x", 5)
                    .attr("y", 82 + (48 * i))
                    .attr("width", 20)
                    .attr("height", 48)
                    .attr("fill", c[i])        
            }
        
            var x = d3.scaleLinear().range([50, 400]);
            var y = d3.scaleLinear().range([400, 0]);
                x.domain([124, 131.7]);
                y.domain([32.5, 39.5]);
        
            //대구
            var color = "#74c476";
            svg_map.data([대구]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
        
            //대전
            var color = "#bae4b3";
            
            svg_map.data([대전]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //경기  
            var color = "#bae4b3";
        
            svg_map.data([경기]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //강원    
            var color = "#edf8e9";
                    
            svg_map.data([강원]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //부산
            var color = "#bae4b3";
            
            svg_map.data([부산1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
                            svg_map.data([부산2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([부산2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([부산3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //서울
            var color = "#74c476";
            svg_map.data([서울]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
            
                            
            //세종
            var color = "#edf8e9";
        
            svg_map.data([세종]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
            
            //울산
            var color = "#bae4b3";
            
            svg_map.data([울산]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //인천
            var color = "#edf8e9";
            
            svg_map.data([인천1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
        
            svg_map.data([인천3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천4]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
        
            svg_map.data([인천5]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천6]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천7]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천8]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천9]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천10]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //제주
            var color = "#bae4b3";
            
            svg_map.data([제주]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //경남
            var color = "#edf8e9";
        
            svg_map.data([경남1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남4]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남5]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남6]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남7]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //경북
            var color = "#bae4b3";
        
            svg_map.data([경북1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경북2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //충남
            var color = "#edf8e9";
        
            svg_map.data([충남1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([충남2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //충북 
            var color = "#bae4b3";
            
            svg_map.data([충북]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //전남
            var color = "#edf8e9";
        
            svg_map.data([전남1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남4]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남5]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남6]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
                            
            svg_map.data([전남7]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남8]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남9]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남10]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남11]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남12]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남13]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남14]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남15]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남16]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남17]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남18]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남19]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남20]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남21]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남22]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남23]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남24]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남25]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남26]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남27]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남28]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남29]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남30]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남31]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남32]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남33]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남34]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남35]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //광주
            var color = "#bae4b3";
        
            svg_map.data([광주]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //전북
            var color = "#bae4b3";
            
            svg_map.data([전북1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전북2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전북3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
        }
        else if (this.state.year === "2017년도") {
            var c = ['#eff3ff','#bdd7e7','#6baed6','#3182bd','#08519c'];

            for (var i = 0; i < 5; i++) {
                svg_map.append("rect")
                    .attr("x", 5)
                    .attr("y", 82 + (48 * i))
                    .attr("width", 20)
                    .attr("height", 48)
                    .attr("fill", c[i])        
            }
        
            var x = d3.scaleLinear().range([50, 400]);
            var y = d3.scaleLinear().range([400, 0]);
                x.domain([124, 131.7]);
                y.domain([32.5, 39.5]);
        
            //대구
            var color = "#6baed6";
            svg_map.data([대구]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
        
            //대전
            var color = "#bdd7e7";
            
            svg_map.data([대전]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //경기  
            var color = "#eff3ff";
        
            svg_map.data([경기]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //강원    
            var color = "#eff3ff";
                    
            svg_map.data([강원]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //부산
            var color = "#bdd7e7";
            
            svg_map.data([부산1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
                            svg_map.data([부산2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([부산2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([부산3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //서울
            var color = "#6baed6";
            svg_map.data([서울]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
            
                            
            //세종
            var color = "#eff3ff";
        
            svg_map.data([세종]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
            
            //울산
            var color = "#eff3ff";
            
            svg_map.data([울산]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //인천
            var color = "#eff3ff";
            
            svg_map.data([인천1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
        
            svg_map.data([인천3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천4]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
        
            svg_map.data([인천5]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천6]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천7]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천8]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천9]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천10]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //제주
            var color = "#eff3ff";
            
            svg_map.data([제주]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //경남
            var color = "#eff3ff";
        
            svg_map.data([경남1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남4]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남5]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남6]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남7]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //경북
            var color = "#bdd7e7";
        
            svg_map.data([경북1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경북2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //충남
            var color = "#eff3ff";
        
            svg_map.data([충남1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([충남2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //충북 
            var color = "#bdd7e7";
            
            svg_map.data([충북]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //전남
            var color = "#bdd7e7";
        
            svg_map.data([전남1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남4]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남5]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남6]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
                            
            svg_map.data([전남7]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남8]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남9]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남10]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남11]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남12]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남13]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남14]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남15]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남16]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남17]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남18]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남19]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남20]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남21]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남22]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남23]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남24]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남25]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남26]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남27]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남28]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남29]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남30]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남31]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남32]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남33]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남34]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남35]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //광주
            var color = "#bdd7e7";
        
            svg_map.data([광주]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //전북
            var color = "#bdd7e7";
            
            svg_map.data([전북1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전북2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전북3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
        }
        else if (this.state.year === "2018년도") {
            var c = ['#f2f0f7','#cbc9e2','#9e9ac8','#756bb1','#54278f'];

            for (var i = 0; i < 5; i++) {
                svg_map.append("rect")
                    .attr("x", 5)
                    .attr("y", 82 + (48 * i))
                    .attr("width", 20)
                    .attr("height", 48)
                    .attr("fill", c[i])        
            }
        
            var x = d3.scaleLinear().range([50, 400]);
            var y = d3.scaleLinear().range([400, 0]);
                x.domain([124, 131.7]);
                y.domain([32.5, 39.5]);
        
            //대구
            var color = "#cbc9e2";
        
            svg_map.data([대구]).append("polygon")
                        .attr("points", function (d) {
                                return d.map(function (d) {
                                return [x(d[0]), y(d[1])].join(",");
                            }).join(" ");
                        })
                        .attr("stroke", "black")
                        .attr('stroke-width', 0.5)
                        .attr("fill", color)
        
            //대전
            var color = "#f2f0f7";
            
            svg_map.data([대전]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //경기  
            var color = "#f2f0f7";
        
            svg_map.data([경기]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //강원    
            var color = "#f2f0f7";
                    
            svg_map.data([강원]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //부산
            var color = "#cbc9e2";
            
            svg_map.data([부산1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
                            svg_map.data([부산2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([부산2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([부산3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //서울
            var color = "#cbc9e2";
        
            svg_map.data([서울]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
            
                            
            //세종
            var color = "#f2f0f7";
        
            svg_map.data([세종]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
            
            //울산
            var color = "#f2f0f7";
            
            svg_map.data([울산]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //인천
            var color = "#f2f0f7";
            
            svg_map.data([인천1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
        
            svg_map.data([인천3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천4]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
        
            svg_map.data([인천5]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천6]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천7]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천8]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천9]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([인천10]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //제주
            var color = "#cbc9e2";
            
            svg_map.data([제주]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //경남
            var color = "#f2f0f7";
        
            svg_map.data([경남1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남4]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남5]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남6]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경남7]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //경북
            var color = "#cbc9e2";
        
            svg_map.data([경북1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([경북2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //충남
            var color = "#f2f0f7";
        
            svg_map.data([충남1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([충남2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //충북 
            var color = "#cbc9e2";
            
            svg_map.data([충북]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //전남
            var color = "#cbc9e2";
        
            svg_map.data([전남1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남4]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남5]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남6]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
                            
            svg_map.data([전남7]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남8]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남9]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남10]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남11]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남12]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남13]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남14]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남15]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남16]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남17]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남18]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남19]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남20]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남21]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남22]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남23]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남24]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남25]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남26]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남27]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남28]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남29]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남30]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남31]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남32]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남33]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남34]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전남35]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //광주
            var color = "#f2f0f7";
        
            svg_map.data([광주]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            //전북
            var color = "#f2f0f7";
            
            svg_map.data([전북1]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전북2]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
            svg_map.data([전북3]).append("polygon")
                            .attr("points", function (d) {
                                    return d.map(function (d) {
                                    return [x(d[0]), y(d[1])].join(",");
                                }).join(" ");
                            })
                            .attr("stroke", "black")
                            .attr('stroke-width', 0.5)
                            .attr("fill", color)
        
        }
    }
    pieChart_1 = () => {
        //사상자수 구성률
        var series = ["사상자수", "부상자수", "경상자수", "중상자수", "사망자수"];
        var data_set = ['자전거', '보행노인', '무단횡단', '보행어린이', '스쿨존어린이'];
        //52013
        var data_사상자수 = [18603/52013, 17087/52013, 12541/52013, 3178/52013, 604/52013];
        
        if (this.state.type === "전체") {
            var color = ["#f9ed69", "#f08a5d", "#b83b5e", "#6a2c70", "#08d9d6"];
        } else if (this.state.type === "자전거") {
            var color = ["#f9ed69", "gray", "gray", "gray", "gray"];
        } else if (this.state.type === "보행노인") {
            var color = ["gray", "#f08a5d", "gray", "gray", "gray"];
        } else if (this.state.type === "무단횡단") {
            var color = ["gray", "gray", "#b83b5e", "gray", "gray"];
        } else if (this.state.type === "보행어린이") {
            var color = ["gray", "gray", "gray", "#6a2c70", "gray"];
        } else if (this.state.type === "스쿨존어린이") {
            var color = ["gray", "gray", "gray", "gray", "#08d9d6"];
        }
        
        var svg1 = d3.select(".pie1")
                    .append("svg")
                    .attr("width", 300)
                    .attr("height", 300)

        var arc = d3.arc()
                    .innerRadius(0)
                    .outerRadius(100);

        var p1 = svg1.selectAll("path")
                .data(d3.pie()(data_사상자수))
                .enter()
                .append("path")
                .attr("class", "pie")
                .attr("transform", "translate(150, 150)")
                .style("fill",function(d, i) {
                    return color[i];
                })
                .attr('d', arc)

            svg1.append("text")
                .attr("x", 80)
                .attr("y", 280)
                .text("<사상자수 구성률>")
                .style("font-size", "16px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
            
            svg1.append("text")
                .attr("x", 180)
                .attr("y", 130)
                .text((data_사상자수[0] * 100).toFixed(1)+ "%")
                .style("font-size", "16px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg1.append("text")
                .attr("x", 120)
                .attr("y", 210)
                .text((data_사상자수[1] * 100).toFixed(1)+ "%")
                .style("font-size", "16px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg1.append("text")
                .attr("x", 70)
                .attr("y", 130)
                .text((data_사상자수[2] * 100).toFixed(1)+ "%")
                .style("font-size", "16px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg1.append("text")
                .attr("x", 90)
                .attr("y", 40)
                .text((data_사상자수[3] * 100).toFixed(1)+ "%")
                .style("font-size", "16px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg1.append("text")
                .attr("x", 150)
                .attr("y", 40)
                .text((data_사상자수[4] * 100).toFixed(1)+ "%")
                .style("font-size", "16px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
    }
    pieChart_2 = () => {
        //부상자수 구성률
        var series = ["사상자수", "부상자수", "경상자수", "중상자수", "사망자수"];
        var data_set = ['자전거', '보행노인', '무단횡단', '보행어린이', '스쿨존어린이'];
        //3610
        var data_부상자수 = [2396/3610, 551/3610, 440/3610, 201/3610, 22/3610];

        if (this.state.type === "전체") {
            var color = ["#f9ed69", "#f08a5d", "#b83b5e", "#6a2c70", "#08d9d6"];
        } else if (this.state.type === "자전거") {
            var color = ["#f9ed69", "gray", "gray", "gray", "gray"];
        } else if (this.state.type === "보행노인") {
            var color = ["gray", "#f08a5d", "gray", "gray", "gray"];
        } else if (this.state.type === "무단횡단") {
            var color = ["gray", "gray", "#b83b5e", "gray", "gray"];
        } else if (this.state.type === "보행어린이") {
            var color = ["gray", "gray", "gray", "#6a2c70", "gray"];
        } else if (this.state.type === "스쿨존어린이") {
            var color = ["gray", "gray", "gray", "gray", "#08d9d6"];
        }

        var svg2 = d3.select(".pie2")
                    .append("svg")
                    .attr("width", 300)
                    .attr("height", 300)

        var arc = d3.arc()
                    .innerRadius(0)
                    .outerRadius(100);

        var p2 = svg2.selectAll("path")
                .data(d3.pie()(data_부상자수))
                .enter()
                .append("path")
                .attr("class", "pie")
                .attr("transform", "translate(150, 150)")
                .style("fill",function(d, i) {
                    return color[i];
                })
                .attr('d', arc)

                svg2.append("text")
                .attr("x", 80)
                .attr("y", 280)
                .text("<부상자수 구성률>")
                .style("font-size", "16px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg2.append("text")
                .attr("x", 180)
                .attr("y", 180)
                .text((data_부상자수[0] * 100).toFixed(1)+ "%")
                .style("font-size", "16px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg2.append("text")
                .attr("x", 70)
                .attr("y", 160)
                .text((data_부상자수[1] * 100).toFixed(1)+ "%")
                .style("font-size", "16px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg2.append("text")
                .attr("x", 80)
                .attr("y", 110)
                .text((data_부상자수[2] * 100).toFixed(1)+ "%")
                .style("font-size", "16px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg2.append("text")
                .attr("x", 100)
                .attr("y", 40)
                .text((data_부상자수[3] * 100).toFixed(1)+ "%")
                .style("font-size", "16px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg2.append("text")
                .attr("x", 150)
                .attr("y", 40)
                .text((data_부상자수[4] * 100).toFixed(1)+ "%")
                .style("font-size", "16px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")


    }
    pieChart_3 = () => {
        //경상자수 구성률
        var series = ["사상자수", "부상자수", "경상자수", "중상자수", "사망자수"];
        var data_set = ['자전거', '보행노인', '무단횡단', '보행어린이', '스쿨존어린이'];
        //21215
        var data_경상자수 = [9542/21215, 5204/21215, 4222/21215, 1918/21215, 329/21215];

        if (this.state.type === "전체") {
            var color = ["#f9ed69", "#f08a5d", "#b83b5e", "#6a2c70", "#08d9d6"];
        } else if (this.state.type === "자전거") {
            var color = ["#f9ed69", "gray", "gray", "gray", "gray"];
        } else if (this.state.type === "보행노인") {
            var color = ["gray", "#f08a5d", "gray", "gray", "gray"];
        } else if (this.state.type === "무단횡단") {
            var color = ["gray", "gray", "#b83b5e", "gray", "gray"];
        } else if (this.state.type === "보행어린이") {
            var color = ["gray", "gray", "gray", "#6a2c70", "gray"];
        } else if (this.state.type === "스쿨존어린이") {
            var color = ["gray", "gray", "gray", "gray", "#08d9d6"];
        }
        var svg3 = d3.select(".pie3")
                    .append("svg")
                    .attr("width", 300)
                    .attr("height", 300)

        var arc = d3.arc()
                    .innerRadius(0)
                    .outerRadius(100);

        var p3 = svg3.selectAll("path")
                .data(d3.pie()(data_경상자수))
                .enter()
                .append("path")
                .attr("class", "pie")
                .attr("transform", "translate(150, 150)")
                .style("fill",function(d, i) {
                    return color[i];
                })
                .attr('d', arc)

            svg3.append("text")
                .attr("x", 80)
                .attr("y", 280)
                .text("<경상자수 구성률>")
                .style("font-size", "16px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
                
            svg3.append("text")
            .attr("x", 180)
            .attr("y", 150)
            .text((data_경상자수[0] * 100).toFixed(1)+ "%")
            .style("font-size", "16px")
            .attr("font-family", "맑은고딕")
            .attr("fill", "black")

            svg3.append("text")
            .attr("x", 110)
            .attr("y", 210)
            .text((data_경상자수[1] * 100).toFixed(1)+ "%")
            .style("font-size", "16px")
            .attr("font-family", "맑은고딕")
            .attr("fill", "black")

            svg3.append("text")
            .attr("x", 70)
            .attr("y", 140)
            .text((data_경상자수[2] * 100).toFixed(1)+ "%")
            .style("font-size", "16px")
            .attr("font-family", "맑은고딕")
            .attr("fill", "black")

            svg3.append("text")
            .attr("x", 90)
            .attr("y", 40)
            .text((data_경상자수[3] * 100).toFixed(1)+ "%")
            .style("font-size", "16px")
            .attr("font-family", "맑은고딕")
            .attr("fill", "black")

            svg3.append("text")
            .attr("x", 140)
            .attr("y", 40)
            .text((data_경상자수[4] * 100).toFixed(1)+ "%")
            .style("font-size", "16px")
            .attr("font-family", "맑은고딕")
            .attr("fill", "black")
    }
    pieChart_4 = () => {
        //중상자수 구성률
        var series = ["사상자수", "부상자수", "경상자수", "중상자수", "사망자수"];
        var data_set = ['자전거', '보행노인', '무단횡단', '보행어린이', '스쿨존어린이'];
        //24764
        var data_중상자수 = [6418/24764, 10044/24764, 7047/24764, 1036/24764, 219/24764];

        if (this.state.type === "전체") {
            var color = ["#f9ed69", "#f08a5d", "#b83b5e", "#6a2c70", "#08d9d6"];
        } else if (this.state.type === "자전거") {
            var color = ["#f9ed69", "gray", "gray", "gray", "gray"];
        } else if (this.state.type === "보행노인") {
            var color = ["gray", "#f08a5d", "gray", "gray", "gray"];
        } else if (this.state.type === "무단횡단") {
            var color = ["gray", "gray", "#b83b5e", "gray", "gray"];
        } else if (this.state.type === "보행어린이") {
            var color = ["gray", "gray", "gray", "#6a2c70", "gray"];
        } else if (this.state.type === "스쿨존어린이") {
            var color = ["gray", "gray", "gray", "gray", "#08d9d6"];
        }
        var svg4 = d3.select(".pie4")
                    .append("svg")
                    .attr("width", 300)
                    .attr("height", 300)

        var arc = d3.arc()
                    .innerRadius(0)
                    .outerRadius(100);

        var p4 =  svg4.selectAll("path")
                .data(d3.pie()(data_중상자수))
                .enter()
                .append("path")
                .attr("class", "pie")
                .attr("transform", "translate(150, 150)")
                .style("fill",function(d, i) {
                    return color[i];
                })
                .attr('d', arc)
            
                svg4.append("text")
                .attr("x", 80)
                .attr("y", 280)
                .text("<중상자수 구성률>")
                .style("font-size", "16px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg4.append("text")
                .attr("x", 180)
                .attr("y", 150)
                .text((data_중상자수[1] * 100).toFixed(1)+ "%")
                .style("font-size", "16px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg4.append("text")
                .attr("x", 120)
                .attr("y", 210)
                .text((data_중상자수[2] * 100).toFixed(1)+ "%")
                .style("font-size", "16px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg4.append("text")
                .attr("x", 80)
                .attr("y", 130)
                .text((data_중상자수[0] * 100).toFixed(1)+ "%")
                .style("font-size", "16px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg4.append("text")
                .attr("x", 90)
                .attr("y", 40)
                .text((data_중상자수[3] * 100).toFixed(1)+ "%")
                .style("font-size", "16px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
            
                svg4.append("text")
                .attr("x", 150)
                .attr("y", 40)
                .text((data_중상자수[4] * 100).toFixed(1)+ "%")
                .style("font-size", "16px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
    }
    pieChart_5 = () => {
        //사망자수 구성률
        var series = ["사상자수", "부상자수", "경상자수", "중상자수", "사망자수"];
        var data_set = ['자전거', '보행노인', '무단횡단', '보행어린이', '스쿨존어린이'];
        //2428
        var data_사망자수 = [247/2428, 1288/2428, 836/2428, 23/2428, 34/2428];

        if (this.state.type === "전체") {
            var color = ["#f9ed69", "#f08a5d", "#b83b5e", "#6a2c70", "#08d9d6"];
        } else if (this.state.type === "자전거") {
            var color = ["#f9ed69", "gray", "gray", "gray", "gray"];
        } else if (this.state.type === "보행노인") {
            var color = ["gray", "#f08a5d", "gray", "gray", "gray"];
        } else if (this.state.type === "무단횡단") {
            var color = ["gray", "gray", "#b83b5e", "gray", "gray"];
        } else if (this.state.type === "보행어린이") {
            var color = ["gray", "gray", "gray", "#6a2c70", "gray"];
        } else if (this.state.type === "스쿨존어린이") {
            var color = ["gray", "gray", "gray", "gray", "#08d9d6"];
        }
        var svg5 = d3.select(".pie5")
                    .append("svg")
                    .attr("width", 300)
                    .attr("height", 300)

        var arc = d3.arc()
                    .innerRadius(0)
                    .outerRadius(100);

        var p5 = svg5.selectAll("path")
                .data(d3.pie()(data_사망자수))
                .enter()
                .append("path")
                .attr("class", "pie")
                .attr("transform", "translate(150, 150)")
                .style("fill",function(d, i) {
                    return color[i];
                })
                .attr('d', arc)

                svg5.append("text")
                .attr("x", 80)
                .attr("y", 280)
                .text("<사망자수 구성률>")
                .style("font-size", "16px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
                    
            svg5.append("text")
            .attr("x", 180)
            .attr("y", 150)
            .text((data_사망자수[1] * 100).toFixed(1) + "%")
            .style("font-size", "16px")
            .attr("font-family", "맑은고딕")
            .attr("fill", "black")

            svg5.append("text")
            .attr("x", 80)
            .attr("y", 170)
            .text((data_사망자수[2] * 100).toFixed(1) + "%")
            .style("font-size", "16px")
            .attr("font-family", "맑은고딕")
            .attr("fill", "black")

            svg5.append("text")
            .attr("x", 100)
            .attr("y", 100)
            .text((data_사망자수[0] * 100).toFixed(1) + "%")
            .style("font-size", "16px")
            .attr("font-family", "맑은고딕")
            .attr("fill", "black")

            svg5.append("text")
            .attr("x", 100)
            .attr("y", 40)
            .text((data_사망자수[4] * 100).toFixed(1) + "%")
            .style("font-size", "16px")
            .attr("font-family", "맑은고딕")
            .attr("fill", "black")

            svg5.append("text")
            .attr("x", 150)
            .attr("y", 40)
            .text((data_사망자수[3] * 100).toFixed(1) + "%")
            .style("font-size", "16px")
            .attr("font-family", "맑은고딕")
            .attr("fill", "black")
    }

    drawChart = () => {
        d3.select('svg').remove();
        d3.select('svg').remove();
        d3.select('svg').remove();
        d3.select('svg').remove();
        d3.select('svg').remove();

        if (this.props.clickedSubMenu === "교통사고 발생건수와 사상자수") {
            this.firstSubMenu_1();
            this.firstSubMenu_2();
        } else if (this.props.clickedSubMenu === "사고유형별 발생건수") {
            this.secondSubMenu_1();
            this.secondSubMenu_2();
        } else if (this.props.clickedSubMenu === "사고유형별 사상자수 세부 구성") {
            this.thirdSubMenu_1();
        } else if (this.props.clickedSubMenu === "지역별 사상자 발생률") {
            this.fourthSubMenu_1();
            this.fifthSubMenu_1();
        }
    }

    SetChart = () => {
        var _chart = '';

        if (this.props.clickedSubMenu === "교통사고 발생건수와 사상자수") {
            _chart = 
                <div>
                    <div className = "line1"></div>
                    <div><p>[년도별 교통사고 발생건수와 사상자수]</p></div>
                    <div className = "bar1"></div>
                    <div><p>[년도별 교통사고 사상자수 세부 구성]</p></div>
                </div>;
        } else if (this.props.clickedSubMenu === "사고유형별 발생건수") {
            _chart = 
                <div>
                    <div className = "bar2"></div>
                    <div><p>[사고유형별 발생건수]</p></div>
                    <div className = "line2"></div>
                    <div><p>[사고유형별 년도에 따른 발생건수 추이]</p></div>
                </div>;
        } else if (this.props.clickedSubMenu === "사고유형별 사상자수 세부 구성") {
            _chart =
                <div>
                    <div id = "buttons">
                        <input type="button" value="전체" onClick = {function(e){this.setState({type: e.currentTarget.value});}.bind(this)}></input>
                        <input type="button" value="자전거" onClick = {function(e){this.setState({type: e.currentTarget.value});}.bind(this)}></input>
                        <input type="button" value="무단횡단" onClick = {function(e){this.setState({type: e.currentTarget.value});}.bind(this)}></input>
                        <input type="button" value="보행노인" onClick = {function(e){this.setState({type: e.currentTarget.value});}.bind(this)}></input>
                        <input type="button" value="보행어린이" onClick = {function(e){this.setState({type: e.currentTarget.value});}.bind(this)}></input>
                        <input type="button" value="스쿨존어린이" onClick = {function(e){this.setState({type: e.currentTarget.value});}.bind(this)}></input>
                    </div>

                    <div className = "row1">
                        <div className = "row1_1">
                            <div className = "pie1"></div>
                            <div className = "pie2"></div>
                            <div className = "pie3"></div>
                        </div>
                        <div className = "row1_2">
                            <div className = "pie4"></div>
                            <div className = "pie5"></div>
                        </div>
                    </div>
                    <div><p>[사고유형별 교통사고 사상자수 세부 구성]</p></div>
                </div>;
        } else if (this.props.clickedSubMenu === "지역별 사상자 발생률") {
            _chart = 
                <div>
                    <div id = "buttons">
                        <input type="button" value="5년 평균" onClick = {function(e){this.setState({year: e.currentTarget.value});}.bind(this)}></input>
                        <input type="button" value="2014년도" onClick = {function(e){this.setState({year: e.currentTarget.value});}.bind(this)}></input>
                        <input type="button" value="2015년도" onClick = {function(e){this.setState({year: e.currentTarget.value});}.bind(this)}></input>
                        <input type="button" value="2016년도" onClick = {function(e){this.setState({year: e.currentTarget.value});}.bind(this)}></input>
                        <input type="button" value="2017년도" onClick = {function(e){this.setState({year: e.currentTarget.value});}.bind(this)}></input>
                        <input type="button" value="2018년도" onClick = {function(e){this.setState({year: e.currentTarget.value});}.bind(this)}></input>
                    </div>

                    <div className = "scatter_plot1"></div>
                    <div><p>[년도별 지역의 사상자 발생률 (사상자수/인구)]</p></div>

                    <div className = "map1"></div>
                    <div><p>[년도에 따른 지역별 사상자 발생률]</p></div>
                </div>;
        }

        return _chart;
    }

    render() {
        var _chart = this.SetChart();
        return (
            <div className = "Main">
                {_chart}
            </div>
        );
    }
}

export default Main;