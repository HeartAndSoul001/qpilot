<template>
  <n-card class="full-height">
    <n-space vertical :size="24">
      <div class="ip-input-group">
        <div v-for="(value, index) in ipParts" :key="index" class="ip-part-container">
          <n-input
            v-model:value="ipParts[index]"
            @input="(value) => handleInput(index, value)"
            @keydown="(e) => handleKeyDown(e, index)"
            @focus="(e) => handleFocus(e)"
            @mouseup="(e) => handleMouseUp(e)"
            class="ip-part"
            maxlength="3"
            placeholder="0-255"
            :ref="el => inputRefs[index] = el"
          />
          <span v-if="index < 3" class="dot">.</span>
        </div>
      </div>

      <!-- Result table -->
      <n-data-table
        :columns="columns"
        :data="tableData"
        :pagination="false"
        :bordered="true"
        :single-line="false"
      />
    </n-space>
  </n-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const ipParts = ref(['192', '168', '0', '1'])
const ipValid = ref(true)
const inputRefs = ref([])

// 修改键盘输入处理函数
function handleKeyDown(e, index) {
  // 点号处理逻辑保持不变
  if (e.key === '.') {
    e.preventDefault()
    if (index < 3) {
      inputRefs.value[index + 1]?.focus()
    } else {
      inputRefs.value[index]?.blur()
    }
    return
  }

  // 处理删除键
  if (e.key === 'Backspace' && !ipParts.value[index]) {
    e.preventDefault()
    if (index > 0) {
      // 跳转到上一个输入框
      inputRefs.value[index - 1]?.focus()
      // 将光标移动到内容末尾
      const input = inputRefs.value[index - 1]?.$el.querySelector('input')
      if (input) {
        setTimeout(() => {
          input.setSelectionRange(input.value.length, input.value.length)
        }, 0)
      }
    } else {
      // 第一个输入框，失去焦点
      inputRefs.value[index]?.blur()
    }
  }
}

// 处理输入值
function handleInput(index, value) {
  validateIpPart(index, value)
  
  // 如果输入了点号，移动焦点
  if (value.includes('.')) {
    // 移除点号
    ipParts.value[index] = value.replace('.', '')
    if (index < 3) {
      inputRefs.value[index + 1]?.focus()
    } else {
      inputRefs.value[index]?.blur()
    }
  }
}

// 处理输入框获得焦点
function handleFocus(e) {
  // 使用 setTimeout 确保在浏览器完成默认行为后执行
  setTimeout(() => {
    e.target.select()
  }, 0)
}

// 处理鼠标抬起事件
function handleMouseUp(e) {
  // 如果没有选中文本，则全选
  if (window.getSelection().toString() === '') {
    e.target.select()
  }
}

// 验证单个IP段
function validateIpPart(index, value) {
  const num = parseInt(value, 10)
  if (isNaN(num) || num < 0 || num > 255) {
    ipParts.value[index] = ''
    ipValid.value = false
    return
  }
  ipParts.value[index] = num.toString()
  validateFullIp()
}

// 验证完整IP
function validateFullIp() {
  const isValid = ipParts.value.every(part => {
    const num = parseInt(part, 10)
    return !isNaN(num) && num >= 0 && num <= 255
  })
  ipValid.value = isValid
}

// 计算完整IP地址
const fullIpAddress = computed(() => {
  return ipParts.value.join('.')
})

// Table columns definition
const columns = [
  { 
    title: '子网前缀', 
    key: 'prefix',
    align: 'center'
  },
  { 
    title: '子网掩码', 
    key: 'mask',
    align: 'center'
  },
  { 
    title: '反掩码', 
    key: 'wildcard',
    align: 'center'
  },
  { 
    title: '地址范围', 
    key: 'range',
    align: 'center',
    render: (row) => `${row.firstIp} - ${row.lastIp}`
  },
  { 
    title: '子网号', 
    key: 'network',
    align: 'center'
  },
  { 
    title: '广播地址', 
    key: 'broadcast',
    align: 'center'
  },
  { 
    title: '地址数量', 
    key: 'hosts',
    align: 'center'
  }
]

// Table data computation
const tableData = computed(() => {
  if (!ipValid.value) return []
  
  const data = []
  for (let i = 32; i >= 1; i--) {
    data.push({
      prefix: `${i}`,
      mask: calculateMask(i),
      wildcard: calculateWildcard(i),
      firstIp: calculateFirstIp(fullIpAddress.value, i),
      lastIp: calculateLastIp(fullIpAddress.value, i),
      network: calculateNetwork(fullIpAddress.value, i),
      broadcast: calculateBroadcast(fullIpAddress.value, i),
      hosts: calculateHosts(i)
    })
  }
  return data
})

// Calculation helper functions
function calculateMask(prefix) {
  // TODO: Implement mask calculation
  return '255.255.255.0'
}

function calculateWildcard(prefix) {
  // TODO: Implement wildcard calculation
  return '0.0.0.255'
}

function calculateFirstIp(ip, prefix) {
  // TODO: Implement first IP calculation
  return ip
}

function calculateLastIp(ip, prefix) {
  // TODO: Implement last IP calculation
  return ip
}

function calculateNetwork(ip, prefix) {
  // TODO: Implement network calculation
  return ip
}

function calculateBroadcast(ip, prefix) {
  // TODO: Implement broadcast calculation
  return ip
}

function calculateHosts(prefix) {
  // TODO: Implement hosts calculation
  return Math.pow(2, 32 - prefix) - 2
}
</script>

<style scoped>
.full-height {
  height: calc(100vh - 40px);
  box-sizing: border-box;
}

:deep(.n-card-body) {
  height: calc(100% - 50px);
  display: flex;
}

:deep(.n-space) {
  width: 100%;
}

.ip-input-group {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
  padding: 0 16px;
}

.ip-part-container {
  display: flex;
  align-items: center;
  position: relative;
  margin: 0;
}

.ip-part {
  width: 80px !important;
  margin: 0 16px; /* 修改边距，使点号位置更加均匀 */
}

.dot {
  position: absolute; /* 使用绝对定位 */
  right: -4px;        /* 微调点号位置 */
  font-weight: bold;
  font-size: 16px;
  color: #666;
  transform: translateX(50%); /* 确保点号居中对齐 */
}

:deep(.n-input__input) {
  text-align: center;
}

:deep(.n-data-table) {
  flex: 1;
  overflow: auto;
  padding: 0 16px;
}

:deep(.n-data-table-wrapper) {
  width: 100%;
}

:deep(.n-data-table-td) {
  text-align: center;
}
</style>
