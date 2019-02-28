<template>
  <a href="#" class="btn">
  <span class="btn-inner text-white">{{ buttonLabel }}</span>
</a>
</template>

<script>
export default {
  name: 'buttonComponent',
  props: {
    buttonLabel: String
  }
}
</script>

<style scoped lang="scss">
  .btn {
    background-color: #f7890b;
    color: white;
    font-weight: 500;
    @media (max-width: 480px) {
      padding: .2rem .8rem;
      font-size: .8rem;
    }
  }
</style>
