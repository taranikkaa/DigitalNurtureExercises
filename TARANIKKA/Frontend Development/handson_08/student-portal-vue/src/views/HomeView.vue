<template>
  <div class="home">
    <h1>Welcome to the Student Portal</h1>
    <p>Manage your academic schedule, explore course options, and check enrollment statistics.</p>
    <RouterLink to="/courses" class="btn">Explore Courses</RouterLink>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}
.btn {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
</style>