<template>
  <div class="mask-calculator">
    <h2>掩码计算器</h2>
    <div class="input-group">
      <input type="text" v-model="ipAddress" placeholder="请输入IP地址" />
      <input type="text" v-model="subnetMask" placeholder="请输入子网掩码" />
      <button @click="calculate">计算</button>
    </div>
    <div class="result" v-if="result">
      <p>网络地址：{{ result.networkAddress }}</p>
      <p>广播地址：{{ result.broadcastAddress }}</p>
      <p>可用主机数：{{ result.hostCount }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MaskCalculator',
  data() {
    return {
      ipAddress: '',
      subnetMask: '',
      result: null
    }
  },
  methods: {
    calculate() {
      // TODO: 实现掩码计算逻辑
    }
  }
}
</script>

<style scoped>
.mask-calculator {
  padding: 20px;
}
.input-group {
  margin: 20px 0;
}
.input-group input {
  margin-right: 10px;
}
.result {
  margin-top: 20px;
}
</style>
