<template>
    <GlobalFooter :links="links" :copyright="copyright" />
</template>
<script>
    export default {
        data () {
            return {
                links: [
                    {
                        key: '浙ICP备2024060113号-1',
                        title: '浙ICP备2024060113号-1',
                        href: 'https://beian.miit.gov.cn',
                        blankTarget: true
                    },
                    {
                        key: '浙公网安备33019202002426',
                        title: '浙公网安备33019202002426',
                        href: 'https://beian.mps.gov.cn/#/query/webSearch?code=33019202002426',
                        blankTarget: true
                    },
                ],
                copyright: '2023-2024 © 杭州叽咪文化传媒有限公司'
            }
        }
    }
</script>
<style>
    .ivu-global-footer-links a {
    margin-right: 5px !important;
    margin-left: 5px !important;
}
</style>