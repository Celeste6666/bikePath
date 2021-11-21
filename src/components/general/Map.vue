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
    <!-- 目前位置 -->
    <l-marker :lat-lng="center">
      <l-icon v-bind="locationMarkerIcon" />
    </l-marker>
    <!-- 自行車站 -->
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
    <!-- 景點位置 -->
    <template v-if="scenicSpotMarkers[0].ScenicSpotID">
      <l-marker
        v-for="data of scenicSpotMarkers"
        :lat-lng="[data.Position.PositionLat, data.Position.PositionLon]"
        :key="data.ScenicSpotID"
        :options="{
          id: data.ScenicSpotID,
          scenicSpotsPosition: data.Position,
        }"
      >
        <l-icon v-bind="data.icon" :icon-size="[50, 50]" />
      </l-marker>
    </template>
    <!-- 餐廳位置 -->
    <template v-if="restaurantMarkers[0].RestaurantID">
      <l-marker
        v-for="data of restaurantMarkers"
        :lat-lng="[data.Position.PositionLat, data.Position.PositionLon]"
        :key="data.RestaurantID"
        :options="{
          id: data.RestaurantID,
          restaurantPosition: data.Position,
        }"
      >
        <l-icon v-bind="data.icon" :icon-size="[50, 50]" />
      </l-marker>
    </template>
  </l-map>
</template>
<script>
import { useStore } from 'vuex';
import {
  ref,
  toRefs,
  reactive,
  computed,
  watch,
  // watchEffect
} from 'vue';

import {
  LMap,
  LControlZoom,
  LTileLayer,
  LMarker,
  LIcon,
  // LGeoJson,
} from '@vue-leaflet/vue-leaflet';

export default {
  components: {
    LMap,
    LControlZoom,
    LTileLayer,
    LMarker,
    LIcon,
    // LGeoJson,
  },
  props: {
    center: Array,
  },
  setup(props, { emit }) {
    const store = useStore();
    // leaflet的方法都被存放在 myMap.value.leafletObject 中
    const myMap = ref(null);

    const { center } = toRefs(props);

    const locationMarkerIcon = reactive({
      'icon-url': './assets/locationMarker.png',
      'shadow-url': './assets/locationMarkerShadow.png',
      'icon-size': [20, 20],
      'shadow-size': [40, 40],
    });

    // 取得多個公車站點
    const bikeMarkers = computed(() => store.state.bikeStations);

    // 當點擊自行車 icon 時，就發出請求取得詳細資料
    const getStationInfo = async (e) => {
      if (e.target.options.id) {
        const { id, StationPosition } = e.target.options;
        await store.dispatch('getBikeAvailable', { id, StationPosition });
        emit('changeStationInfoToTrue', true);
      }
    };

    // 如果 center 及 stationInfo 的值有變化就會觸發
    watch(center, (newVal, oldVal) => {
      if (newVal !== oldVal) {
        myMap.value.leafletObject.flyTo(center.value);
      }
    });

    // 景點的 Icon
    const scenicSpotMarkers = computed(() => store.state.scenicSpots);
    const restaurantMarkers = computed(() => store.state.restaurants);

    return {
      myMap,
      locationMarkerIcon,
      bikeMarkers,
      getStationInfo,
      scenicSpotMarkers,
      restaurantMarkers,
    };
  },
  data() {
    return {
      zoom: 15,
    };
  },
};
</script>
