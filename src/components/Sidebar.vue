<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="50"
    :width="140"
    show-trigger
    class="sidebar"
  >
    <n-menu
      :options="menuOptions"
      :expanded-keys="expandedKeys"
      @update:expanded-keys="handleExpandedKeys"
      :value="selectedKey"
      @update:value="handleUpdateValue"
    />
  </n-layout-sider>
</template>

<script setup>
import { h, ref } from 'vue'
import { useRouter } from 'vue-router'
import { NIcon } from 'naive-ui'
import { 
  BuildOutline, 
  InformationCircleOutline, 
  CodeSlashOutline,
  CalculatorOutline,
  SwapHorizontalOutline,
  GitCompareOutline 
} from '@vicons/ionicons5'

const router = useRouter()
const selectedKey = ref(null)
const expandedKeys = ref(['ip-tools'])

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: 'IP工具箱',
    key: 'ip-tools',
    icon: renderIcon(BuildOutline),
    children: [
      {
        label: '掩码计算',
        key: 'mask-calculator',
        icon: renderIcon(CalculatorOutline)
      },
      {
        label: '格式转换',
        key: 'ip-converter',
        icon: renderIcon(SwapHorizontalOutline)
      },
      {
        label: '集合运算',
        key: 'ip-set-operations',
        icon: renderIcon(GitCompareOutline)
      }
    ]
  },
  {
    label: '信息提取',
    key: 'info-extractor',
    icon: renderIcon(InformationCircleOutline)
  },
  {
    label: '脚本生成',
    key: 'script-generator',
    icon: renderIcon(CodeSlashOutline)
  }
]

function handleUpdateValue(key) {
  switch (key) {
    case 'mask-calculator':
      router.push('/ip-tools/mask-calculator')
      break
    case 'ip-converter':
      router.push('/ip-tools/ip-converter')
      break
    case 'ip-set-operations':
      router.push('/ip-tools/ip-set-operations')
      break
    case 'info-extractor':
      router.push('/info-extractor')
      break
    case 'script-generator':
      router.push('/script-generator')
      break
  }
}

function handleExpandedKeys(keys) {
  expandedKeys.value = keys
}
</script>

<style scoped>
.sidebar {
  height: 100vh;
  background: #fff;
}

:deep(.n-menu-item-content) {
  padding: 12px 16px !important;
}

/* 仅应用于二级菜单的样式 */
:deep(.n-submenu-children .n-menu-item-content) {
  font-size: 13px;
  opacity: 0.9;
}

:deep(.n-submenu-children .n-menu-item-content .n-icon) {
  font-size: 14px;
}

/* 选中状态加强 */
:deep(.n-menu .n-menu-item-content--selected) {
  background-color: #4098fc !important;
}
</style>
