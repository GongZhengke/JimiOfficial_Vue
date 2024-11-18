<template>
    <div class="demo-login">
        <Row justify="center">
            <Col>
                <Image src="/qrcode.jpg" fit="fill" width="150px" height="150px" />
            </Col>
        </Row>
        <Row justify="center" class="ivu-pt-8">
            <Col>
                <!-- <Checkbox v-model="autoLogin" size="large">7天内免登录</Checkbox> -->
            </Col>
        </Row>
        <Row justify="center" class="ivu-pt-8">
            <Col>
                <Text type="secondary">请使用企业微信扫码登录</Text>
            </Col>
        </Row>
        
    </div>
</template>
<script>
    export default {
        data () {
            return {
                autoLogin: false
            }
        },
        methods: {

        }
    }
</script>
<style>

</style>
