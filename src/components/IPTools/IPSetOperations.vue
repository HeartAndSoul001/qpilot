<template>
  <div class="ip-set-operations">
    <h2>IP集合运算</h2>
    <div class="input-group">
      <textarea v-model="setA" placeholder="请输入第一组IP地址，每行一个"></textarea>
      <textarea v-model="setB" placeholder="请输入第二组IP地址，每行一个"></textarea>
      <select v-model="operation">
        <option value="union">并集</option>
        <option value="intersection">交集</option>
        <option value="difference">差集</option>
      </select>
      <button @click="calculate">计算</button>
    </div>
    <div class="result" v-if="result">
      <h3>计算结果：</h3>
      <textarea readonly v-model="result"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IPSetOperations',
  data() {
    return {
      setA: '',
      setB: '',
      operation: 'union',
      result: null
    }
  },
  methods: {
    calculate() {
      // TODO: 实现集合运算逻辑
    }
  }
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
</style>
