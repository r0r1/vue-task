<template>
  <transition>
	  <keep-alive>
	    <router-view></router-view>
	  </keep-alive>
	</transition>
</template>

<script>
  export default {
    name: 'User',
    data() {
      return {
      };
    },
  };
</script>