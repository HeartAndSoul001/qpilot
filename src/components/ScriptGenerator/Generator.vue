<template>
  <n-card title="脚本生成器" class="full-height">
    <n-space vertical>
      <n-select
        v-model:value="scriptType"
        :options="[
          { label: '备份脚本', value: 'backup' },
          { label: '监控脚本', value: 'monitor' },
          { label: '配置脚本', value: 'config' }
        ]"
      />
      
      <n-card title="参数设置" v-if="scriptType === 'backup'">
        <n-form>
          <n-form-item label="备份路径">
            <n-input v-model:value="backupPath" placeholder="请输入备份路径" />
          </n-form-item>
          <n-form-item label="备份间隔">
            <n-input v-model:value="backupInterval" placeholder="请输入备份间隔" />
          </n-form-item>
        </n-form>
      </n-card>
      
      <n-button type="primary" @click="generateScript">生成脚本</n-button>
      
      <n-collapse-transition :show="!!result">
        <n-card v-if="result" title="生成的脚本">
          <n-code :code="result" />
          <n-button 
            type="primary" 
            ghost 
            style="margin-top: 16px"
            @click="copyScript"
          >
            复制脚本
          </n-button>
        </n-card>
      </n-collapse-transition>
    </n-space>
  </n-card>
</template>

<script setup>
import { ref } from 'vue'

const scriptType = ref('backup')
const backupPath = ref('')
const backupInterval = ref('')
const result = ref(null)

function generateScript() {
  // TODO: 实现脚本生成逻辑
}

function copyScript() {
  // TODO: 实现复制功能
  navigator.clipboard.writeText(result.value)
}
</script>

<style scoped>
.script-generator {
  padding: 20px;
}
.input-group {
  margin: 20px 0;
}
.parameters {
  margin: 20px 0;
}
.parameters input {
  margin-right: 10px;
  margin-bottom: 10px;
}
.result pre {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
}
.result button {
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

:deep(.n-code) {
  flex: 1;
  min-height: 200px;
}
</style>
