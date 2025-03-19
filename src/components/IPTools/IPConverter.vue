<template>
  <div class="ip-converter">
    <h2>IP格式转换</h2>
    <div class="input-group">
      <input type="text" v-model="input" placeholder="请输入IP地址" />
      <select v-model="convertType">
        <option value="dec2bin">十进制转二进制</option>
        <option value="bin2dec">二进制转十进制</option>
      </select>
      <button @click="convert">转换</button>
    </div>
    <div class="result" v-if="result">
      <p>转换结果：{{ result }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IPConverter',
  data() {
    return {
      input: '',
      convertType: 'dec2bin',
      result: null
    }
  },
  methods: {
    convert() {
      // TODO: 实现转换逻辑
    }
  }
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
</style>
