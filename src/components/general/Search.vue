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
      <button
        class="border border-2 border-dark rounded-pill px-3 py-2 bg-white me-3"
        data-url="ScenicSpot"
        @click="getTourism"
      >
        <font-awesome-icon :icon="['fas', 'camera']" class="me-1" data-url="ScenicSpot" />
        周邊景點
      </button>
      <button
        class="border border-2 border-dark rounded-pill px-3 py-2 bg-white"
        data-url="Restaurant"
        @click="getTourism"
      >
        <font-awesome-icon :icon="['fas', 'utensils']" class="me-1" data-url="Restaurant" />
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
  setup(props, { emit }) {
    const store = useStore();
    const { center } = toRefs(props);

    const getTourism = async (e) => {
      const { url } = e.target.dataset;
      if (url === 'ScenicSpot') {
        // 找出附近景點
        await store.dispatch('getScenicSpots', center.value);
      } else if (url === 'Restaurant') {
        // 找出附近餐廳
        await store.dispatch('getRestaurants', center.value);
      }
      emit('changeDetailSwiperShow', true);
    };

    return {
      getTourism,
    };
  },
};
</script>
