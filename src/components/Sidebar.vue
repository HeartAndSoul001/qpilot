<template>
  <div class="sidebar">
    <ul>
      <!-- IP工具箱菜单组 -->
      <li class="menu-group">
        <div class="menu-title" @click="toggleIpTools">
          <span>IP工具箱</span>
          <span class="arrow" :class="{ 'arrow-down': isIpToolsOpen }">▶</span>
        </div>
        <ul class="submenu" v-show="isIpToolsOpen">
          <li><router-link to="/ip-tools/mask-calculator">掩码计算</router-link></li>
          <li><router-link to="/ip-tools/ip-converter">格式转换</router-link></li>
          <li><router-link to="/ip-tools/ip-set-operations">集合运算</router-link></li>
        </ul>
      </li>
      <!-- 其他一级菜单 -->
      <li><router-link to="/info-extractor">信息提取</router-link></li>
      <li><router-link to="/script-generator">脚本生成</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      isIpToolsOpen: true, // 默认展开IP工具箱菜单
    };
  },
  methods: {
    toggleIpTools() {
      this.isIpToolsOpen = !this.isIpToolsOpen;
    },
  },
};
</script>

<style scoped>
.sidebar {
  min-width: 180px; /* 增加最小宽度，确保有足够空间容纳二级菜单 */
  width: fit-content;
  background-color: #f4f4f4;
  padding: 20px 10px;
  border-right: 1px solid #ddd;
  height: 100%;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
}

.menu-group {
  margin-bottom: 16px;
}

.menu-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  font-weight: 500;
}

.menu-title:hover {
  background-color: #e0e0e0;
}

.arrow {
  font-size: 12px;
  transition: transform 0.3s ease;
}

.arrow-down {
  transform: rotate(90deg);
}

.submenu {
  padding-left: 16px !important;
  margin-top: 4px !important;
  width: 100%; /* 确保子菜单宽度与父容器一致 */
  box-sizing: border-box; /* 包括内边距在宽度计算内 */
}

.submenu li {
  margin: 4px 0 !important;
  width: 100%; /* 确保列表项占满容器宽度 */
}

.submenu a {
  padding: 8px 16px;
  font-size: 14px;
  width: 100%; /* 子菜单项宽度与父容器一致 */
  box-sizing: border-box; /* 确保padding不会增加元素实际宽度 */
  white-space: nowrap; /* 保持文本不换行 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 超出部分显示省略号 */
  text-align: left; /* 文本左对齐 */
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: center;
}

.sidebar li {
  margin: 12px 0;
  white-space: nowrap;
}

.sidebar a {
  text-decoration: none;
  color: #333;
  display: block;
  padding: 10px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-size: 15px;
  font-weight: 500;
  box-sizing: border-box;
  width: 100%;
  text-align: left; /* 所有菜单项左对齐 */
}

.sidebar a:hover {
  background-color: #e0e0e0;
}

.sidebar a.router-link-active {
  background-color: #4a9eff;
  color: white;
}
</style>
