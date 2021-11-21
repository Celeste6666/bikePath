import { createStore } from 'vuex';
import hmacSHA1 from 'crypto-js/hmac-sha1';
import Base64 from 'crypto-js/enc-base64';

export default createStore({
  state: {
    api: {
      bikeAvailable_url: 'https://ptx.transportdata.tw/MOTC/v2/Bike/Availability/NearBy?',
      bikeStation_url: 'https://ptx.transportdata.tw/MOTC/v2/Bike/Station/NearBy?',
      ScenicSpot_url: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?',
      Restaurant_url: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?',
      id: '0c672be3679e4f1e8441118a50a5d9f3',
      key: 'ovFaA4lsqC5GyOKZHEEo_IS1Vt4',
    },
    // 自行車站資料
    bikeStations: [
      {
        AuthorityID: '',
        BikesCapacity: 0,
        ServiceType: 0,
        SrcUpdateTime: '',
        StationAddress: {},
        StationID: '0',
        StationPosition: {
          PositionLat: '',
          PositionLon: '',
        },
        StationUID: '0',
        UpdateTime: '',
        icon: {
          'icon-url': './assets/bikeMarker.png',
        },
      },
    ],
    stationAvailable: {
      StationUID: '',
      StationName: {
        Zh_tw: '',
      },
    },
    // 景點資料
    scenicSpots: [
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
          'icon-url': './assets/scenicSpotMarker.png',
        },
      },
    ],
    // 餐廳資料
    restaurants: [
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
      },
    ],
  },
  getters: {
    headers: (state) => {
      const { key, id } = state.api;
      const GMTDate = new Date().toUTCString();
      const HAMC = hmacSHA1(`x-date: ${GMTDate}`, key);
      const toBase = Base64.stringify(HAMC);
      return {
        methods: 'GET',
        headers: {
          Authorization: `hmac username="${id}", algorithm="hmac-sha1", headers="x-date", signature="${toBase}"`,
          'x-date': GMTDate,
        },
      };
    },
    stationInfo: (state) => {
      const { bikeStations, stationAvailable } = state;
      const station = bikeStations.find((item) => item.StationUID === stationAvailable.StationUID);
      if (station !== undefined) {
        station.icon['icon-url'] = './assets/bikeMarkerActive.png';
      }
      return { ...station, ...state.stationAvailable };
    },
  },
  mutations: {
    getBikeStations(state, payload) {
      state.bikeStations = payload;
    },
    getBikeAvailable(state, payload) {
      const { StationUID: oldStationUID } = state.stationAvailable;
      if (state.stationAvailable.StationUID !== payload.StationUID) {
        const oldStationInfo = state.bikeStations.find((item) => item.StationUID === oldStationUID);
        if (oldStationInfo !== undefined) {
          oldStationInfo.icon['icon-url'] = './assets/bikeMarker.png';
        }
      }
      state.stationAvailable = payload;
    },
    getScenicSpots(state, payload) {
      state.scenicSpots = payload;
    },
    getRestaurants(state, payload) {
      state.restaurants = payload;
    },
  },
  actions: {
    // 找出方圓 1000 公尺的 YouBike
    async getBikeStations({ state, getters, commit }, payload) {
      const api = `${state.api.bikeStation_url}$top=30&$spatialFilter=nearby(${payload[0]},${payload[1]}, 1000)&$format=JSON`;
      const res = await fetch(api, getters.headers);
      const bikeStations = await res.json();
      bikeStations.forEach((item) => {
        const station = item;
        station.icon = {
          'icon-url': './assets/bikeMarker.png',
        };
      });
      commit('getBikeStations', bikeStations);
    },
    // 取得自行車站即時資料
    async getBikeAvailable({ state, getters, commit }, payload) {
      const { id, StationPosition } = payload;
      const api = `${state.api.bikeAvailable_url}$filter=StationUID eq '${id}'&$spatialFilter=nearby(${StationPosition.PositionLat},${StationPosition.PositionLon}, 100)&$format=JSON`;
      const res = await fetch(api, getters.headers);
      const stationAvailable = await res.json();
      commit('getBikeAvailable', ...stationAvailable);
    },
    // 取得附近1000公尺的景點
    async getScenicSpots({ state, getters, commit }, payload) {
      const api = `${state.api.ScenicSpot_url}&select=ScenicSpotID,ScenicSpotName,Position,Picture$top=30&$spatialFilter=nearby(${payload[0]},${payload[1]}, 1000)&$format=JSON`;
      const res = await fetch(api, getters.headers);
      const scenicSpots = await res.json();
      scenicSpots.forEach((item) => {
        const scenicSpot = item;
        scenicSpot.icon = {
          'icon-url': './assets/scenicSpotMarker.png',
        };
      });
      if (res.ok && scenicSpots.length !== 0) {
        commit('getScenicSpots', scenicSpots);
      }
    },
    // 取得附近1000公尺的餐廳
    async getRestaurants({ state, getters, commit }, payload) {
      const api = `${state.api.Restaurant_url}&select=RestaurantID,RestaurantName,Address,OpenTime,WebsiteUrl,Position,Picture$top=30&$spatialFilter=nearby(${payload[0]},${payload[1]}, 1000)&$format=JSON`;
      const res = await fetch(api, getters.headers);
      const restaurants = await res.json();
      restaurants.forEach((item) => {
        const restaurant = item;
        restaurant.icon = {
          'icon-url': './assets/restaurantMarker.png',
        };
      });
      if (res.ok && restaurants.length !== 0) {
        commit('getRestaurants', restaurants);
      }
    },
  },
});
