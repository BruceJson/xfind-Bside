<template>
    <div class='home_page'>
        <div class='company_info'>
            <div class='company_info_inner content_inner_width'>
                <img src="/static/imgs/test2.png">
                <div class='right_content'>
                    <div class='company_title'>
                        <p>小桔科技有限公司</p>
                    </div>
                    <div class='company_content'>
                        <div class='item'>
                            <p class='p1'>1000</p>
                            <p class='p2'>余额</p>
                        </div>
                        <div class='item'>
                            <p class='p1'>500</p>
                            <p class='p2'>获得</p>
                        </div>
                        <div class='item'>
                            <p class='p1'>200</p>
                            <p class='p2'>话费</p>
                        </div>
                        <div class='recharge_box'>
                            <div class='part1 align_center'>
                                <x-button class='xbtn xbtn_border xbtn_bradius' :padding='[10, 25]' :fontsize='16'>充值</x-button>
                            </div>
                            <p class='part2'>
                                <span>开票设置</span>
                                <span>|</span>
                                <span>金币规则</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import '@pages/home.css';

export default {
    name: 'home'
};

</script>
<style type="text/css">


</style>
