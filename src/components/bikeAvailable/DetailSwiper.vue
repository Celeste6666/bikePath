<template>
  <div class="container-fluid px-0">
    <button
      type="button"
      class="btn-close btn-sm bg-white p-2 rounded-circle m-3"
      aria-label="Close"
      @click="closeDetailSwiper"
    ></button>
    <swiper
      :modules="modules"
      :centeredSlides="true"
      :slidesPerView="1.1"
      :spaceBetween="20"
      :freeMode="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <template v-if="restaurants[0].RestaurantID">
        <swiper-slide
          v-for="restaurant of restaurants"
          :key="restaurant.RestaurantID"
          data-type="restaurant"
          :data-id="restaurant.RestaurantID"
        >
          <div class="card bg-white shadow-lg rounded-3 h-100">
            <div class="card-body lh-sm p-3">
              <img
                :src="restaurant.Picture.PictureUrl1"
                class="rounded-3 mb-2 w-100"
                :alt="restaurant.Picture.PictureDescription1"
                style="height: 100px; object-fit: cover"
              />
              <div class="small">{{ restaurant.RestaurantName }}</div>
              <small class="text-muted">{{ restaurant.Address }}</small>
            </div>
          </div>
        </swiper-slide>
      </template>
      <template v-if="scenicSpots[0].ScenicSpotID">
        <swiper-slide
          v-for="scenicSpot of scenicSpots"
          :key="scenicSpot.ScenicSpotID"
          data-type="scenicSpot"
          :data-id="scenicSpot.ScenicSpotID"
        >
          <div class="card bg-white shadow-lg rounded-3 h-100">
            <div class="card-body lh-sm p-3">
              <img
                :src="scenicSpot.Picture.PictureUrl1"
                class="rounded-3 mb-2 w-100"
                :alt="scenicSpot.Picture.PictureDescription1"
                style="height: 100px; object-fit: cover"
              />
              <div class="small">{{ scenicSpot.ScenicSpotName }}</div>
              <small class="text-muted">{{ scenicSpot.Address || '未提供' }}</small>
            </div>
          </div>
        </swiper-slide>
      </template>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';

// swiper bundle styles
import 'swiper/swiper-bundle.min.css';
// swiper core styles
import 'swiper/swiper.min.css';
import 'swiper/modules/free-mode/free-mode.min.css';
// import Swiper core and required modules
import { FreeMode } from 'swiper';

import { useStore } from 'vuex';
import { computed, nextTick } from 'vue';

export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props, { emit }) {
    const store = useStore();
    const restaurants = computed(() => store.state.restaurants);
    const scenicSpots = computed(() => store.state.scenicSpots);

    const closeDetailSwiper = () => {
      // 關閉 swiper 會連資料都清空(icon 也會消失)
      store.commit('getRestaurants', [
        {
          RestaurantID: '',
          RestaurantName: '',
          Address: '',
          OpenTime: '',
          WebsiteUrl: '',
          Position: {
            PositionLon: '',
            PositionLat: '',
          },
          Picture: {
            PictureUrl1: '',
            PictureDescription1: '',
          },
          icon: {
            'icon-url': '',
          },
        },
      ]);

      store.commit('getScenicSpots', [
        {
          ScenicSpotID: '',
          ScenicSpotName: '',
          Position: {
            PositionLon: '',
            PositionLat: '',
          },
          Picture: {
            PictureUrl1: '',
            PictureDescription1: '',
          },
          icon: {
            'icon-url': '',
          },
        },
      ]);

      emit('changeDetailSwiperShow', false);
    };

    const changeMarker = () => {
      const activeDom = document.querySelector('.swiper-slide-active');
      const prevDom = document.querySelector('.swiper-slide-prev');
      const nextDom = document.querySelector('.swiper-slide-next');
      // 為了只顯示一個 active 狀態的 marker
      // 所以不論是swiper-slide-prev及swiper-slide-next 的 marker 都應該不是 active 狀態的
      // 如果 DOM 不存在的話，dataset的值為空
      let { id: prevID, type: prevType } = { id: '', type: '' };
      let { id: nextID, type: nextType } = { id: '', type: '' };

      if (prevDom) {
        const { id, type } = prevDom.dataset;
        prevID = id;
        prevType = type;
      }
      if (nextDom) {
        const { id, type } = nextDom.dataset;
        nextID = id;
        nextType = type;
      }

      const { id: newID, type: newType } = activeDom.dataset;

      store.commit('changeTourismMarker', {
        prevID,
        prevType,
        nextID,
        nextType,
        newID,
        newType,
      });
    };

    const onSwiper = () => {
      if (
        restaurants.value[0].RestaurantID === '' &&
        restaurants.value[0].RestaurantID === undefined &&
        scenicSpots.value[0].ScenicSpotID === '' &&
        scenicSpots.value[0].ScenicSpotID === undefined
      ) {
        emit('changeDetailSwiperShow', false);
      } else {
        nextTick(() => {
          changeMarker();
        });
      }
    };
    const onSlideChange = () => {
      nextTick(() => {
        changeMarker();
      });
    };

    return {
      restaurants,
      scenicSpots,
      onSwiper,
      onSlideChange,
      closeDetailSwiper,
      modules: [FreeMode],
    };
  },
};
</script>
<style lang="scss" scoped>
.swiper-slide {
  width: 85%;
}
.card-body {
  letter-spacing: 1px;
}
</style>
