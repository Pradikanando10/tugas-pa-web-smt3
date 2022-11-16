<template>
  <!-- <div id="app"> -->

    <!-- <router-link to="/">Home</router-link>
    <router-link to="/create">Create</router-link>
    <router-link to="/edit">Edit</router-link>
    <router-view /> -->

    <div class="" style="border-bottom: 1px solid;">
        <nav class="navbar navbar-expand-lg bg-light" style="margin: 5px; padding-left: 20px;">
            <div class="container-fluid">
                <router-link class="navbar-brand" style="font-family: courier; font-size: 40px;  font-weight: bold; color: #256D85;" to="/">SI-KESMA</router-link>
                <!-- <a class="navbar-brand" href="#">Rumah Sakit</a> -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="font-family: courier; font-size: 20px; font-weight: bold; color: #256D85;">
                    <li class="nav-item">
                      <router-link class="nav-link" to="/">Beranda</router-link>

                        <!-- <router-link class="nav-link" to="/">Home</router-link> -->
                        <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/tentang">Tentang</router-link>
                        <!-- <router-link class="nav-link" to="/Home">Lainya</router-link> -->
                        <!-- <a class="nav-link" href="#">Link</a> -->
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/layanan">Layanan</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/partner">Partner</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/contact">Hubungi-Kami</router-link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>

    <router-view />

  <!-- </div> -->
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>

</style>
