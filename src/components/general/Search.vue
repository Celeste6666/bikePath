<template>
  <div class="search position-absolute container-fluid">
    <div
      class="rounded-pill border border-2 border-dark p-1 bg-white fs-5 d-flex align-items-center"
    >
      <input
        type="text"
        class="form-control border-0 bg-transparent fs-5"
        placeholder="找地方"
        @click.prevent.stop="test"
      />
      <font-awesome-icon :icon="['fas', 'search']" class="me-3 fs-4" />
    </div>
    <div class="my-4 fs-5">
      <button class="border border-2 border-dark rounded-pill px-3 py-2 bg-white me-3">
        <font-awesome-icon :icon="['fas', 'camera']" class="me-1" @click.stop="findScenicSpot" />
        周邊景點
      </button>
      <button class="border border-2 border-dark rounded-pill px-3 py-2 bg-white">
        <font-awesome-icon :icon="['fas', 'utensils']" class="me-1" />
        周邊餐廳
      </button>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex';
import { toRefs } from 'vue';

export default {
  name: 'Search',
  props: {
    center: Array,
  },
  setup(props) {
    const store = useStore();
    const { center } = toRefs(props);

    // 找出附近景點
    const findScenicSpot = async () => {
      await store.dispatch('getScenicSpot', center);
    };

    return {
      findScenicSpot,
    };
  },
};
</script>
