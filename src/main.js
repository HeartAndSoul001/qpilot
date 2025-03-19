import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {
  create,
  NConfigProvider,
  NLayout,
  NLayoutSider,
  NLayoutContent,
  NMenu,
  NIcon,
  NCard,
  NButton,
  NSpace,
  NInput,
  NSelect,
  NForm,
  NFormItem,
  NInputGroup,
  NCheckbox,
  NCode,
  NAlert,
  NDescriptions,
  NDescriptionsItem,
  NCollapseTransition,
  NDataTable
} from 'naive-ui'

const naive = create({
  components: [
    NConfigProvider,
    NLayout,
    NLayoutSider,
    NLayoutContent,
    NMenu,
    NIcon,
    NCard,
    NButton,
    NSpace,
    NInput,
    NSelect,
    NForm,
    NFormItem,
    NInputGroup,
    NCheckbox,
    NCode,
    NAlert,
    NDescriptions,
    NDescriptionsItem,
    NCollapseTransition,
    NDataTable
  ]
})

const app = createApp(App)
app.use(router)
app.use(naive)
app.mount('#app')
