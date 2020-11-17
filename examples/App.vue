<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">vue-all-count-down</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/Example1">Example-1</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Example2">Example-2</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Example3">Example-3</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Example4">Example-4</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Example5">Example-5</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>