<template>
  <div class="footer">
    <div class="contact" id="contact">
      Feel free to reach out 👋🏼 <br />
      This is my email: kouikusen@gmail.com
    </div>

    <div class="footer__copyright">Copyright© 2021 Kiks</div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {},
};
</script>

<style scoped lang="scss">
.footer {
  background-color: var(--black);
  color: var(--white);
  padding: 80px 10px;

  .contact {
    margin: $gutter-s auto;
    font-size: 1.2em;
    font-weight: 700;
  }
}
</style>