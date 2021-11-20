<template>
  <div
    class="home-step2 h-100 d-flex justify-content-center align-items-center flex-column"
    @click="changeInfo"
  >
    <img :src="info.picture" class="w-75 img-fluid" alt="" />
    <p class="my-5">
      <span>
        <!--新的 font-awesome 中，綁定的icon不需要用 fa  -->
        <font-awesome-icon
          v-for="num of 3"
          :key="num"
          :class="[
            'mx-3',
            infoStep == num - 1 ? 'text-process fs-4' : 'text-warning fs-5',
          ]"
          :icon="['fas', 'circle']"
        />
      </span>
    </p>
    <h3 class="text-secondary fw-bolder">{{ info.title }}</h3>
    <p class="text-secondary m-4">
      {{ info.content }}
    </p>
  </div>
</template>
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Start',
  setup() {
    const router = useRouter();
    const infoStep = ref(0);
    const infos = [
      {
        step: 0,
        title: '方便租車',
        content:
          'YouBike自行車甲租乙還，一卡在手就能輕鬆租借，也可達到環保與節能。',
        picture: '/assets/start01.png',
      },
      {
        step: 1,
        title: '規劃路線',
        content:
          '找到你的位置和附近自行車站點，也可查詢周邊景點和餐廳，方便你規劃路徑。',
        picture: '/assets/start02.png',
      },
      {
        step: 2,
        title: '自行車道推薦',
        content:
          '全台各個縣市都設置自行車路線，尋找自己喜愛的路線，來趟自行車之旅。',

        picture: '/assets/start03.png',
      },
    ];
    const info = ref(infos[infoStep.value]);

    const changeInfo = () => {
      infoStep.value += 1;
      if (infoStep.value > 2) {
        // 改變路由到 bikeAvailable
        router.push('bikeAvailable');
        return;
      }
      info.value = infos[infoStep.value];
    };

    return {
      info,
      infoStep,
      changeInfo,
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/scss/main.scss';

.text-process {
  color: darken($warning, 13%);
}
</style>
