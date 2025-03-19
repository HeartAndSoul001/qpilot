<template>
  <n-card title="信息提取" class="full-height">
    <n-space vertical>
      <n-input
        type="textarea"
        v-model:value="input"
        placeholder="请输入需要提取信息的文本"
        :rows="8"
      />
      
      <n-space>
        <n-checkbox v-model:checked="extractIP">IP地址</n-checkbox>
        <n-checkbox v-model:checked="extractMAC">MAC地址</n-checkbox>
        <n-checkbox v-model:checked="extractURL">URL</n-checkbox>
      </n-space>
      
      <n-button type="primary" @click="extract">提取</n-button>
      
      <n-collapse-transition :show="!!result">
        <n-card v-if="result" title="提取结果">
          <n-code :code="result" />
        </n-card>
      </n-collapse-transition>
    </n-space>
  </n-card>
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')
const extractIP = ref(true)
const extractMAC = ref(false)
const extractURL = ref(false)
const result = ref(null)

function extract() {
  // TODO: 实现信息提取逻辑
}
</script>

<style scoped>
.info-extractor {
  padding: 20px;
}
.input-group {
  margin: 20px 0;
}
.input-group textarea {
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
}
.extract-options {
  margin: 10px 0;
}
.extract-options label {
  margin-right: 20px;
}
.result pre {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
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

:deep(.n-input) {
  flex: 1;
}
</style>
