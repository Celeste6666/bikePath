<template>
  <div class="home">
    <div
      class="home-step1 h-100 d-flex justify-content-center align-items-center"
      v-if="step === 0"
      @click="changeStep"
    >
      <img alt="bike-logo" src="/assets/logo.svg" class="w-25 img-fluid" />
      <h3 class="fw-bold ms-2 pe-4">BikeFun</h3>
    </div>
    <Start v-if="step === 1" />
  </div>
</template>

<script>
import { ref } from 'vue';
// @ is an alias to /src
import Start from '@/components/home/Start.vue';

export default {
  name: 'Home',
  components: {
    Start,
  },
  setup() {
    const step = ref(0);
    const changeStep = () => {
      step.value += 1;
    };

    return {
      step,
      changeStep,
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/scss/main.scss';

.home {
  width: 100vw;
  height: 100vh;
  &-step1 {
    background: linear-gradient(to bottom, $warning 0%, lighten($warning, 25%) 50%, $warning 100%);
  }
  &-step2 {
    background: linear-gradient(
      to bottom,
      lighten($warning, 25%) 0%,
      lighten($warning, 25%) 35%,
      $warning 100%
    );
  }
}
</style>
