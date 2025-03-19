<template>
  <n-card title="IP格式转换" class="full-height">
    <n-space vertical>
      <n-input v-model:value="input" placeholder="请输入IP地址" />
      <n-select
        v-model:value="convertType"
        :options="[
          { label: '十进制转二进制', value: 'dec2bin' },
          { label: '二进制转十进制', value: 'bin2dec' }
        ]"
      />
      <n-button type="primary" @click="convert">转换</n-button>
      
      <n-collapse-transition :show="!!result">
        <n-alert v-if="result" type="success">
          转换结果：{{ result }}
        </n-alert>
      </n-collapse-transition>
    </n-space>
  </n-card>
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')
const convertType = ref('dec2bin')
const result = ref(null)

function convert() {
  // TODO: 实现转换逻辑
}
</script>

<style scoped>
.ip-converter {
  padding: 20px;
}
.input-group {
  margin: 20px 0;
}
.input-group input, .input-group select {
  margin-right: 10px;
}
.result {
  margin-top: 20px;
}

.full-height {
  height: calc(100vh - 40px);
  box-sizing: border-box;
}

:deep(.n-card-body) {
  height: calc(100% - 50px);
}

:deep(.n-space) {
  min-height: 100%;
}
</style>
