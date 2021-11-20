<template>
  <div
    class="nav-footer w-100 d-flex justify-content-evenly align-items-center bg-danger py-3"
  >
    <router-link
      to="/bikeAvailable"
      :class="[
        'border-0 nav-icon d-flex align-items-center justify-content-center',
        'nav-icon-active text-danger',
      ]"
    >
      <font-awesome-icon :icon="['fas', 'map-marked-alt']" class="fs-3" />
    </router-link>
    <router-link
      to="/bikeAvailable"
      :class="[
        'border-0 nav-icon d-flex align-items-center justify-content-center',
        'text-white',
      ]"
    >
      <font-awesome-icon :icon="['fas', 'bicycle']" class="fs-2" />
    </router-link>
    <router-link
      to="/bikePath"
      :class="[
        'border-0 nav-icon d-flex align-items-center justify-content-center',
        'text-white',
      ]"
    >
      <font-awesome-icon :icon="['fas', 'user']" class="fs-3" />
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
.nav-footer {
  height: 15%;
  bottom: 0px;
}
</style>
