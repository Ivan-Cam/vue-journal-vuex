<template>
  <nav class="navbar bg-primary">
    <a class="navbar-brand text-white" href="#">
      <img
        src="@/assets/logo.png"
        alt="Vue logo"
        height="24"
        class="d-inline-block align-text-top mx-4"
      />

      Daybook
    </a>

    <div class="d-flex">
        <button class="btn btn-outline-info mx-4">
            <i class="fa fa-sign-out-alt"></i>
        </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar-componenet",
};
</script>