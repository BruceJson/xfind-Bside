<template>
    <div class='info_content'>
        <Flexbox class='part1'>
            <Flexbox direction='column' :full='true' :center='true' class='item'>
                <i-circle :percent="80" :stroke-color='circleColor' class='circle'>
                    <p class="demo-Circle-inner" style="font-size:28px">
                        <span class='span1'>40</span>
                        <span class='span2'>个</span>
                    </p>
                </i-circle>
                <p class='title'>发布的职位</p>
                <x-button class='xbtn xbtn_border xbtn_bradius btn_job_manage' :padding='[14, 27]' :fontsize='16'>职位管理</x-button>
            </Flexbox>
            <Flexbox direction='column' :full='true' class='item'>
                <i-circle :percent="80" :stroke-color='circleColor' class='circle'>
                    <p class="demo-Circle-inner" style="font-size:28px">
                        <span class='span1'>40</span>
                        <span class='span2'>个</span>
                    </p>
                </i-circle>
                <p class='title'>收到的简历</p>
                <x-button class='xbtn xbtn_border xbtn_bradius btn_job_manage' :padding='[14, 27]' :fontsize='16'>简历管理</x-button>
            </Flexbox>
            <Flexbox direction='column' :full='true' class='item'>
                <i-circle :percent="80" :stroke-color='circleColor' class='circle'>
                    <p class="demo-Circle-inner" style="font-size:28px">
                        <span class='span1'>40</span>
                        <span class='span2'>个</span>
                    </p>
                </i-circle>
                <p class='title'>选材库简历</p>
                <x-button class='xbtn xbtn_border xbtn_bradius btn_job_manage' :padding='[14, 27]' :fontsize='16'>企业人才库</x-button>
            </Flexbox>
            <Flexbox direction='column' :full='true' class='item'>
                <i-circle :percent="80" :stroke-color='circleColor' class='circle'>
                    <p class="demo-Circle-inner" style="font-size:28px">
                        <span class='span1'>40</span>
                        <span class='span2'>个</span>
                    </p>
                </i-circle>
                <p class='title'>企业定制</p>
                <x-button class='xbtn xbtn_border xbtn_bradius btn_job_manage' :padding='[14, 27]' :fontsize='16'>企业定制</x-button>
            </Flexbox>
        </Flexbox>
        <div class='part2'>
            <Flexbox class='up'>
                <p class='p1'>您有一条未读消息</p>
                <p class='p2'>2018-03-09 21:09</p>
            </Flexbox>
            <Flexbox class='down'>
                <p class='p1'>有人查看了您发布的
                    <span>UI设计师</span>的岗位</p>
                <router-link class='a1' to=''>查看详情>></router-link>
            </Flexbox>
        </div>
        <div class='part3'>
            <div class='title'>
                <p>为您推荐</p>
            </div>
            <div class='recommand_list clx'>
                <div class='item'>
                    <div class='up'>
                        <img src="@imgs/home/1.png">
                        <div class='content'>
                            <div class='line1'>
                                <p class='p1'>张小美</p>
                                <p class='p2'>UI设计师</p>
                            </div>
                            <p class='line2'>
                                <span>
                                    <span class='span1'>本科</span>
                                    <span class='span2'>|</span>
                                </span>
                                <span>
                                    <span class='span1'>动漫设计</span>
                                    <span class='span2'>|</span>
                                </span>
                                <span>
                                    <span class='span1'>山东艺术学院</span>
                                    <span class='span2'>|</span>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class='down'>
                        <div class='progress_box'>
                            <p>简历匹配度</p>
                            <Progress :percent="90" :stroke-width="7" class='progress'>
                                <span class='progress_info'>90%</span>
                            </Progress>
                        </div>
                        <div class='progress_box'>
                            <p>性格匹配度</p>
                            <Progress :percent="90" :stroke-width="7" class='progress'>
                                <span class='progress_info'>90%</span>
                            </Progress>
                        </div>
                        <div class='time_box'>
                            <p>2018-03-09</p>
                            <router-link class='a1' to=''>简历详情>></router-link>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div class='up'>
                        <img src="@imgs/home/1.png">
                        <div class='content'>
                            <div class='line1'>
                                <p class='p1'>张小美</p>
                                <p class='p2'>UI设计师</p>
                            </div>
                            <p class='line2'>
                                <span>
                                    <span class='span1'>本科</span>
                                    <span class='span2'>|</span>
                                </span>
                                <span>
                                    <span class='span1'>动漫设计</span>
                                    <span class='span2'>|</span>
                                </span>
                                <span>
                                    <span class='span1'>山东艺术学院</span>
                                    <span class='span2'>|</span>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class='down'>
                        <div class='progress_box'>
                            <p>简历匹配度</p>
                            <Progress :percent="90" :stroke-width="7" class='progress'>
                                <span class='progress_info'>90%</span>
                            </Progress>
                        </div>
                        <div class='progress_box'>
                            <p>性格匹配度</p>
                            <Progress :percent="90" :stroke-width="7" class='progress'>
                                <span class='progress_info'>90%</span>
                            </Progress>
                        </div>
                        <div class='time_box'>
                            <p>2018-03-09</p>
                            <router-link class='a1' to=''>简历详情>></router-link>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div class='up'>
                        <img src="@imgs/home/1.png">
                        <div class='content'>
                            <div class='line1'>
                                <p class='p1'>张小美</p>
                                <p class='p2'>UI设计师</p>
                            </div>
                            <p class='line2'>
                                <span>
                                    <span class='span1'>本科</span>
                                    <span class='span2'>|</span>
                                </span>
                                <span>
                                    <span class='span1'>动漫设计</span>
                                    <span class='span2'>|</span>
                                </span>
                                <span>
                                    <span class='span1'>山东艺术学院</span>
                                    <span class='span2'>|</span>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class='down'>
                        <div class='progress_box'>
                            <p>简历匹配度</p>
                            <Progress :percent="90" :stroke-width="7" class='progress'>
                                <span class='progress_info'>90%</span>
                            </Progress>
                        </div>
                        <div class='progress_box'>
                            <p>性格匹配度</p>
                            <Progress :percent="90" :stroke-width="7" class='progress'>
                                <span class='progress_info'>90%</span>
                            </Progress>
                        </div>
                        <div class='time_box'>
                            <p>2018-03-09</p>
                            <router-link class='a1' to=''>简历详情>></router-link>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div class='up'>
                        <img src="@imgs/home/1.png">
                        <div class='content'>
                            <div class='line1'>
                                <p class='p1'>张小美</p>
                                <p class='p2'>UI设计师</p>
                            </div>
                            <p class='line2'>
                                <span>
                                    <span class='span1'>本科</span>
                                    <span class='span2'>|</span>
                                </span>
                                <span>
                                    <span class='span1'>动漫设计</span>
                                    <span class='span2'>|</span>
                                </span>
                                <span>
                                    <span class='span1'>山东艺术学院</span>
                                    <span class='span2'>|</span>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class='down'>
                        <div class='progress_box'>
                            <p>简历匹配度</p>
                            <Progress :percent="90" :stroke-width="7" class='progress'>
                                <span class='progress_info'>90%</span>
                            </Progress>
                        </div>
                        <div class='progress_box'>
                            <p>性格匹配度</p>
                            <Progress :percent="90" :stroke-width="7" class='progress'>
                                <span class='progress_info'>90%</span>
                            </Progress>
                        </div>
                        <div class='time_box'>
                            <p>2018-03-09</p>
                            <router-link class='a1' to=''>简历详情>></router-link>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div class='up'>
                        <img src="@imgs/home/1.png">
                        <div class='content'>
                            <div class='line1'>
                                <p class='p1'>张小美</p>
                                <p class='p2'>UI设计师</p>
                            </div>
                            <p class='line2'>
                                <span>
                                    <span class='span1'>本科</span>
                                    <span class='span2'>|</span>
                                </span>
                                <span>
                                    <span class='span1'>动漫设计</span>
                                    <span class='span2'>|</span>
                                </span>
                                <span>
                                    <span class='span1'>山东艺术学院</span>
                                    <span class='span2'>|</span>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class='down'>
                        <div class='progress_box'>
                            <p>简历匹配度</p>
                            <Progress :percent="90" :stroke-width="7" class='progress'>
                                <span class='progress_info'>90%</span>
                            </Progress>
                        </div>
                        <div class='progress_box'>
                            <p>性格匹配度</p>
                            <Progress :percent="90" :stroke-width="7" class='progress'>
                                <span class='progress_info'>90%</span>
                            </Progress>
                        </div>
                        <div class='time_box'>
                            <p>2018-03-09</p>
                            <router-link class='a1' to=''>简历详情>></router-link>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div class='up'>
                        <img src="@imgs/home/1.png">
                        <div class='content'>
                            <div class='line1'>
                                <p class='p1'>张小美</p>
                                <p class='p2'>UI设计师</p>
                            </div>
                            <p class='line2'>
                                <span>
                                    <span class='span1'>本科</span>
                                    <span class='span2'>|</span>
                                </span>
                                <span>
                                    <span class='span1'>动漫设计</span>
                                    <span class='span2'>|</span>
                                </span>
                                <span>
                                    <span class='span1'>山东艺术学院</span>
                                    <span class='span2'>|</span>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class='down'>
                        <div class='progress_box'>
                            <p>简历匹配度</p>
                            <Progress :percent="90" :stroke-width="7" class='progress'>
                                <span class='progress_info'>90%</span>
                            </Progress>
                        </div>
                        <div class='progress_box'>
                            <p>性格匹配度</p>
                            <Progress :percent="90" :stroke-width="7" class='progress'>
                                <span class='progress_info'>90%</span>
                            </Progress>
                        </div>
                        <div class='time_box'>
                            <p>2018-03-09</p>
                            <router-link class='a1' to=''>简历详情>></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import '@pages/home/info-content.css';
export default {
    name: 'info-content',
    data() {
        return {
            circleColor: require('@/assets/style/variables.js').mainColor
        }
    }
};

</script>
