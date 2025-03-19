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
  width: 100vw;
  overflow: hidden;
}

.content {
  flex: 1;
  padding: 20px;
  overflow: auto;
  height: 100vh;
  box-sizing: border-box;
  background-color: #f6f6f6;
}

:deep(.n-card) {
  margin: 0;
  height: 100%;
}

:deep(.n-card-body) {
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
}

:deep(.n-space) {
  height: 100%;
}
</style>
