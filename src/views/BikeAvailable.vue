<template>
  <l-map
    ref="myMap"
    v-model:zoom="zoom"
    :center="center"
    :tap="false"
    :options="{ zoomControl: false }"
  >
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    ></l-tile-layer>
    <l-control-zoom position="bottomleft"></l-control-zoom>
    <l-marker :lat-lng="locationMarkerNow.coordinate">
      <l-icon v-bind="locationMarkerNow.icon" />
    </l-marker>
    <l-marker
      v-for="data of bikeMarkers"
      :lat-lng="[data.StationPosition.PositionLat, data.StationPosition.PositionLon]"
      :key="data.StationUID"
      :options="{
        id: data.StationUID,
        StationPosition: data.StationPosition,
      }"
      @click="getStationInfo"
    >
      <l-icon v-bind="data.icon" :icon-size="[35, 43]" />
    </l-marker>
  </l-map>
  <div>
    <Search />

    <Footer />

    <div
      v-if="stationInfoIsShow"
      @click="changeStationInfoIsShow"
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

import {
  ref,
  reactive,
  computed,
  watch,
  // 在等等
} from 'vue';

import {
  LMap,
  LControlZoom,
  LTileLayer,
  LMarker,
  LIcon,
  // LGeoJson,
} from '@vue-leaflet/vue-leaflet';
import Footer from '@/components/general/Footer.vue';
import Search from '@/components/general/Search.vue';

export default {
  components: {
    Search,
    Footer,
    LMap,
    LControlZoom,
    LTileLayer,
    LMarker,
    LIcon,
    // LGeoJson,
  },
  setup() {
    const store = useStore();

    // leaflet的方法都被存放在 myMap.value.leafletObject 中
    const myMap = ref(null);
    // 用 ref 去做設定的話，值變動時比較方便更改
    const center = ref([25.047675, 121.517055]);

    const locationMarkerNow = reactive({
      coordinate: [0, 0],
      icon: {
        'icon-url': './assets/locationMarker.png',
        'shadow-url': './assets/locationMarkerShadow.png',
        'icon-size': [20, 20],
        'shadow-size': [40, 40],
      },
    });

    const stationInfoIsShow = ref(false);

    const changeStationInfoIsShow = () => {
      stationInfoIsShow.value = !stationInfoIsShow.value;
    };

    store.dispatch('getBikeStation', center.value);
    const bikeMarkers = computed(() => store.state.bikeStations);

    // 取得目前所在位置
    const getUserLocation = () => {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      function success(pos) {
        const { latitude, longitude } = pos.coords;
        center.value = [latitude, longitude];
        myMap.value.leafletObject.flyTo(center.value);
        locationMarkerNow.coordinate = [latitude, longitude];
      }

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

      navigator.geolocation.getCurrentPosition(success, error, options);
    };

    // 取得自行車站詳細資料
    const stationInfo = computed(() => store.getters.stationInfo);
    const getStationInfo = async (e) => {
      if (e.target.options.id) {
        const { id, StationPosition } = e.target.options;
        await store.dispatch('getBikeAvailable', { id, StationPosition });
        // 打開車站詳細介紹欄位
        stationInfoIsShow.value = true;
      }
    };

    watch(stationInfo, (newVal, oldVal) => {
      if (oldVal.StationUID && oldVal.StationUID !== newVal.StationUID) {
        const { StationUID } = oldVal;
        const station = store.state.bikeStations.find((item) => item.StationUID === StationUID);
        station.icon = {
          'icon-url': './assets/bikeMarker.png',
        };
      }
    });

    return {
      myMap,
      center,
      stationInfoIsShow,
      changeStationInfoIsShow,
      locationMarkerNow,
      getUserLocation,
      bikeMarkers,
      getStationInfo,
      stationInfo,
    };
  },
  data() {
    return {
      zoom: 15,
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
