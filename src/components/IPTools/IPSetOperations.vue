<template>
  <n-card title="IP集合运算" class="full-height">
    <n-space vertical>
      <n-input-group>
        <n-input
          type="textarea"
          v-model:value="setA"
          placeholder="请输入第一组IP地址，每行一个"
          :rows="6"
        />
        <n-input
          type="textarea"
          v-model:value="setB"
          placeholder="请输入第二组IP地址，每行一个"
          :rows="6"
        />
      </n-input-group>
      
      <n-select
        v-model:value="operation"
        :options="[
          { label: '并集', value: 'union' },
          { label: '交集', value: 'intersection' },
          { label: '差集', value: 'difference' }
        ]"
      />
      
      <n-button type="primary" @click="calculate">计算</n-button>
      
      <n-collapse-transition :show="!!result">
        <n-card v-if="result" title="计算结果">
          <n-input
            type="textarea"
            v-model:value="result"
            readonly
            :rows="8"
          />
        </n-card>
      </n-collapse-transition>
    </n-space>
  </n-card>
</template>

<script setup>
import { ref } from 'vue'

const setA = ref('')
const setB = ref('')
const operation = ref('union')
const result = ref(null)

function calculate() {
  // TODO: 实现集合运算逻辑
}
</script>

<style scoped>
.ip-set-operations {
  padding: 20px;
}
.input-group {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.input-group textarea {
  height: 100px;
  margin-bottom: 10px;
}
.input-group select {
  width: 200px;
}
.result textarea {
  width: 100%;
  height: 150px;
  margin-top: 10px;
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

:deep(.n-input-group) {
  display: flex;
  gap: 16px;
  flex: 1;
}

:deep(.n-input) {
  flex: 1;
}
</style>
