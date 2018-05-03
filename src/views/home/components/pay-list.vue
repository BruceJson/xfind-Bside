<template>
    <div class='pay_list'>

        <Page class='align_center' :total="100"></Page>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'pay-list',
    data() {
        return {
            typeList: [{
                value: '金币流水'
            }, {
                value: '充值记录'
            }, {
                value: '消费记录'
            }],
            curType: typeList[0]
        }
    },
    computed: {
        tableData() {
            return {
                columns: [{
                    title: '序号',
                    key: 'index'
                }, {
                    title: '日期',
                    key: 'index'
                }, {
                    title: '事项',
                    key: 'index'
                }, {
                    title: '序号',
                    key: 'index'
                }, {
                    title: '序号',
                    key: 'index'
                }, {
                    title: '序号',
                    key: 'index'
                }, ],
                data: [{
                    index: '1',
                    time: '2017-11-30  12:12:12',
                    event: '下载简历',
                    money: '-10',
                    remain: '400',
                    receipt: '--'
                }, {
                    index: '1',
                    time: '2017-11-30  12:12:12',
                    event: '下载简历',
                    money: '-10',
                    remain: '400',
                    receipt: '--'
                }, {
                    index: '1',
                    time: '2017-11-30  12:12:12',
                    event: '下载简历',
                    money: '-10',
                    remain: '400',
                    receipt: '--'
                }, {
                    index: '1',
                    time: '2017-11-30  12:12:12',
                    event: '下载简历',
                    money: '-10',
                    remain: '400',
                    receipt: '--'
                }, {
                    index: '1',
                    time: '2017-11-30  12:12:12',
                    event: '下载简历',
                    money: '-10',
                    remain: '400',
                    receipt: '--'
                }, {
                    index: '1',
                    time: '2017-11-30  12:12:12',
                    event: '下载简历',
                    money: '-10',
                    remain: '400',
                    receipt: '--'
                }, {
                    index: '1',
                    time: '2017-11-30  12:12:12',
                    event: '下载简历',
                    money: '-10',
                    remain: '400',
                    receipt: '--'
                }, {
                    index: '1',
                    time: '2017-11-30  12:12:12',
                    event: '下载简历',
                    money: '-10',
                    remain: '400',
                    receipt: '--'
                }, {
                    index: '1',
                    time: '2017-11-30  12:12:12',
                    event: '下载简历',
                    money: '-10',
                    remain: '400',
                    receipt: '--'
                }, {
                    index: '1',
                    time: '2017-11-30  12:12:12',
                    event: '下载简历',
                    money: '-10',
                    remain: '400',
                    receipt: '--'
                }]
            }
        }
    }
};

</script>
