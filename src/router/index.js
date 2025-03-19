import { createRouter, createWebHistory } from "vue-router";
import MaskCalculator from "../components/IPTools/MaskCalculator.vue";
import IPConverter from "../components/IPTools/IPConverter.vue";
import IPSetOperations from "../components/IPTools/IPSetOperations.vue";
import Extractor from "../components/InfoExtractor/Extractor.vue";
import Generator from "../components/ScriptGenerator/Generator.vue";

const routes = [
  {
    path: '/',
    redirect: '/ip-tools/mask-calculator'
  },
  { path: "/ip-tools/mask-calculator", component: MaskCalculator },
  { path: "/ip-tools/ip-converter", component: IPConverter },
  { path: "/ip-tools/ip-set-operations", component: IPSetOperations },
  { path: "/info-extractor", component: Extractor },
  { path: "/script-generator", component: Generator },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
