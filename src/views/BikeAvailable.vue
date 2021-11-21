<template>
  <div>
    <Search :center="center" />

    <Map
      :center="center"
      class="position-absolute top-0 left-0 w-100 h-100"
      @changeStationInfoToTrue="changeStationInfoToTrue"
    />

    <Footer />

    <div
      v-if="stationInfoIsShow && stationInfo.StationName.Zh_tw"
      @click="changeStationInfoToFalse"
      :class="[
        'nav-stationInfo rounded-circle bg-white border border-2 border-warning ',
        'd-flex align-items-center justify-content-center',
      ]"
    >
      <div class="nav-stationInfo-content">
        <p class="text-wrap text-center lh-sm small p-2">
          {{ stationInfo.StationName.Zh_tw }}
        </p>
        <div class="fs-3 text-secondary d-flex lh-sm px-3">
          <div class="me-auto">
            <font-awesome-icon :icon="['fas', 'bicycle']" />
            <div class="small text-center">
              {{ stationInfo.AvailableRentBikes }}
            </div>
          </div>
          <div>
            <font-awesome-icon :icon="['fas', 'expand']" />
            <div class="small text-center">
              {{ stationInfo.AvailableReturnBikes }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="nav-position d-flex flex-column" v-if="!stationInfoIsShow">
      <button class="border-0 nav-icon nav-icon-active my-2" @click.prevent="getUserLocation">
        <img src="/assets/position.svg" alt="" srcset="" />
      </button>
      <button class="border-0 nav-icon nav-icon-active text-warning my-2">
        <font-awesome-icon :icon="['fas', 'location-arrow']" style="font-size: 32px" />
      </button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';

import { ref, computed } from 'vue';

import Map from '@/components/general/Map.vue';
import Footer from '@/components/general/Footer.vue';
import Search from '@/components/general/Search.vue';

export default {
  components: {
    Map,
    Search,
    Footer,
  },
  setup() {
    const store = useStore();

    // 用 ref 去做設定的話，值變動時比較方便更改
    const center = ref([25.047675, 121.517055]);

    const stationInfoIsShow = ref(false);

    // 取得目前所在位置
    const getUserLocation = () => {
      console.log('getUserLocation');
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      function success(pos) {
        const { latitude, longitude } = pos.coords;
        center.value = [latitude, longitude];
        // 取得附近1000公尺的自行車站
        store.dispatch('getBikeStations', center.value);
      }

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

      navigator.geolocation.getCurrentPosition(success, error, options);
    };

    const changeStationInfoToFalse = () => {
      stationInfoIsShow.value = false;
    };

    const changeStationInfoToTrue = (val) => {
      stationInfoIsShow.value = val;
    };

    // 取得自行車站詳細資料
    const stationInfo = computed(() => store.getters.stationInfo);

    return {
      center,
      stationInfoIsShow,
      changeStationInfoToFalse,
      changeStationInfoToTrue,
      getUserLocation,
      stationInfo,
    };
  },
};
</script>
<style lang="scss">
@import '@/scss/main.scss';

.search {
  z-index: 999;
  top: 20px;
}
.nav {
  &-footer,
  &-stationInfo,
  &-position {
    position: absolute;
    z-index: 999;
  }

  &-stationInfo {
    z-index: 998;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 250px;
    height: 250px;
    &-content {
      width: 170px;
      height: 170px;
      p {
        border-bottom: 1px dashed $danger;
      }
    }
  }

  &-position {
    bottom: 15%;
    right: 10px;
  }
  &-icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: transparent;
    &-active {
      background-color: white;
    }
  }
}

.leaflet {
  &-bottom {
    bottom: 15%;
  }
}
</style>
