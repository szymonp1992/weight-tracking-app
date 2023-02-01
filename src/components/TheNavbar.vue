<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid ms-3 me-3">
      <router-link class="navbar-brand" style="font-weight: 600" to="/"
        ><img src="../../public/favicon.png" alt="" style="height: 30px" />
        Weight tracking app</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
          <li class="nav-item ms-5">
            <router-link to="/" class="nav-link"
              >My weight over time</router-link
            >
          </li>
          <li class="nav-item ms-5">
            <router-link to="/add-new-entry" class="nav-link"
              >Add new entry</router-link
            >
          </li>

          <li class="nav-item dropdown ms-5">
            <router-link
              class="nav-link dropdown-toggle"
              to="/"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              My account
              <!-- This will be generated for each user -->
            </router-link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link class="dropdown-item" to="/register"
                  >Register</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/my-profile"
                  >My profile</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link class="dropdown-item" to="/login"
                  >Login</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/">Log out</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>