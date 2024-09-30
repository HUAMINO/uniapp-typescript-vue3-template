import { defineStore } from "pinia";
import { ref } from "vue";

import type { GlobalDataType } from "@/typings/index";

const defaultGlobalState: GlobalDataType = {
  userName: "张三",
  taken: ""
};

// 定义 Store
export const useGlobalStore = defineStore(
  "User",
  () => {
    const globalData = ref<GlobalDataType>(defaultGlobalState);

    // 设置全局信息
    const setGlobalState = <T extends keyof GlobalDataType>(
      key: T,
      val: GlobalDataType[T]
    ) => {
      globalData.value[key] = val;
    };

    return {
      globalData,
      setGlobalState
    };
  },

  {
    persist: {
      storage: {
        setItem(key, value) {
          uni.setStorageSync(key, value);
        },
        getItem(key) {
          return uni.getStorageSync(key);
        }
      }
    }
  }
);
