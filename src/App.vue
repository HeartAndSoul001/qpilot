<template>
  <div id="app">
    <Sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>

<style>
:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #0f0f0f;
  background-color: #f6f6f6;
}

#app {
  display: flex;
  height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

/* 基础表单样式 */
input,
button,
select,
textarea {
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 8px 12px;
  font-size: 14px;
}

button {
  cursor: pointer;
  background-color: #4a9eff;
  color: white;
  border: none;
}

button:hover {
  background-color: #3a8eef;
}
</style>
