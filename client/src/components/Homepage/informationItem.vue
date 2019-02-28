<template>
  <ul class="nav">
    <li class="nav-item d-md-block d-none">
      <img src="../../assets/fill-1.svg" alt="" class="align-middle">
      <p>sevenhillsltd@gmail.com</p>
    </li>
    <li class="nav-item">
      <img src="../../assets/phoneIcon.svg" alt="" class="align-middle">
      <p><a class="nav-link md-last" href="tel:+84875789287">+84 875 789 28</a></p>
    </li>
    <li class="nav-item d-md-block d-none">
      <img src="../../assets/clockicon.svg" alt="" class="align-middle">
      <p class="last">9 AM - 6 PM</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'informationItem'
}
</script>

<style scoped lang="scss">
  ul {
    li {
      margin-right: 20px;
      .nav-link {
        padding: 0;
      }
      p {
        padding-right: 20px;
        margin-left: 10px;
        text-align: right;
        display: inline-block;
        color: white;
        border-right: 1px solid rgba(255, 255, 255, 0.5);
        a {
          color: white;
        }
      }
      @media (max-width: 767px) {
        .nav-link {
          padding: .5rem;
        }
        p {
          border-right : none;
        }
      }
      .last {
        border-right: none;
      }
    }
  }

</style>
