<template>
  <div class="info-extractor">
    <h2>信息提取</h2>
    <div class="input-group">
      <textarea v-model="input" placeholder="请输入需要提取信息的文本"></textarea>
      <div class="extract-options">
        <label><input type="checkbox" v-model="extractIP"> IP地址</label>
        <label><input type="checkbox" v-model="extractMAC"> MAC地址</label>
        <label><input type="checkbox" v-model="extractURL"> URL</label>
      </div>
      <button @click="extract">提取</button>
    </div>
    <div class="result" v-if="result">
      <h3>提取结果：</h3>
      <pre>{{ result }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Extractor',
  data() {
    return {
      input: '',
      extractIP: true,
      extractMAC: false,
      extractURL: false,
      result: null
    }
  },
  methods: {
    extract() {
      // TODO: 实现信息提取逻辑
    }
  }
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
</style>
