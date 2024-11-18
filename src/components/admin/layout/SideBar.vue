<template>
    <a-layout-sider v-model:collapsed="collapsed" collapsible width="250">
        <div class="logo">
            <Image src="/jimiw.png" fit="contain" />
        </div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
            <a-menu-item key="dashboard" @click="toPage('dashboard')">
                <desktop-outlined />
                <span>控制台</span>
            </a-menu-item>
            <a-sub-menu key="sub1">
                <template #title>
                    <span>
                        <user-outlined />
                        <span>用户</span>
                    </span>
                </template>
                <a-menu-item key="2">Tom</a-menu-item>
                <a-menu-item key="4">Bill</a-menu-item>
                <a-menu-item key="5">Alex</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <template #title>
                    <span>
                        <team-outlined />
                        <span>组别</span>
                    </span>
                </template>
                <a-menu-item key="6">Team 1</a-menu-item>
                <a-menu-item key="8">Team 2</a-menu-item>
            </a-sub-menu>
            <a-menu-item key="9">
                <file-outlined />
                <span>媒体</span>
            </a-menu-item>
            <a-menu-item key="apisettings" @click="toPage('apisettings')">
                <link-outlined />
                <span>接口</span>
            </a-menu-item>
            <a-menu-item key="settings" @click="toPage('settings')">
                <setting-outlined />
                <span>设置</span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>
<script>
import { PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined, SettingOutlined, LinkOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    components: {
        PieChartOutlined,
        DesktopOutlined,
        UserOutlined,
        TeamOutlined,
        FileOutlined,
        SettingOutlined,
        LinkOutlined
    },
    data() {
        return {
            collapsed: ref(false),
            selectedKeys: ref([])
        };
    },
    created(){
        this.selectedKeys.push(this.$route.name)
    },
    setup(){

    },
    methods:{
        toPage(url){
            this.$router.push(url)
        }
    }

});
</script>
<style>
#components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
}

.logo {
    margin: 15px 5px 15px 5px;
}
</style>