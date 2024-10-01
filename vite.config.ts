import {fileURLToPath, URL} from 'node:url'

import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd())
    return {
        base: './', // 设置打包路径
        plugins: [
            vue(),
            // element-plus按需导入:https://cn.element-plus.org/zh-CN/guide/quickstart.html
            AutoImport({
                imports: ["vue", "vue-router", "pinia", "vue-i18n", "@vueuse/core"],//自动导入Vue相关函数，如：ref, reactive等等
                resolvers: [
                    ElementPlusResolver(),//自动导入ElementPlus相关函数
                ],

                //dts: false,
                dts: "src/types/auto-imports.d.ts",
            }),
            Components({
                resolvers: [
                    ElementPlusResolver(),//自动导入ElementPlus组件
                ],

                //指定自定义组件位置
                dirs: ["src/components", "src/**/components"],

                //dts: false,
                dts: "src/types/components.d.ts",
            }),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        // 服务配置
        server: {
            host: "0.0.0.0",// 允许IP访问
            port: Number(env.VITE_APP_PORT),//端口
            open: false,//是否自动打开浏览器
            cors: true, // 允许跨域
            proxy: {//代理配置
                [env.VITE_APP_BASE_API]: {//前缀为 /dev-api 的请求
                    changeOrigin: true,
                    target: env.VITE_APP_API_URL,
                    secure: false,
                    rewrite: (path) => path.replace(new RegExp("^" + env.VITE_APP_BASE_API), ""),
                },
            },
        },
        css: {
            preprocessorOptions: {// CSS 预处理器
                // 定义全局 SCSS 变量
                scss: {
                    javascriptEnabled: true,
                    additionalData: `
                      @use "@/styles/variables.scss" as *;
                    `,
                },
            },
        },
    }
});
