<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h3 class="card-header-title">
          {{ title }}
        </h3>
        
        <img :src="image" alt="" class="card-img">
      </div>
      <div class="card-content">
        <div class="content" v-html="description">
        </div>
      </div>
      <footer class="card-footer">
        <a :href="link" class="card-footer-item" target="_blank">View</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        link: String,
        image: String
    }
}
</script>

<style scoped lang="scss">
.card {
    margin: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 0.5rem;
    overflow: hidden;
    width: 300px;
    height: 600px;
    background-color: #f5f5f5;
    position: relative;
}

.card-header {
    background-color: #f5f5f5;
    padding: 1rem;
}

.card-img {
    width: 270px;
    height: 200px;
    object-fit: contain;
    margin-top: 20px;
}

.card-header-title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
}

.card-content {
    padding: 1rem;
    background: #f5f5f5;
    text-align: left;
}

.card-footer {
    background-color: #f5f5f5;
    padding: 1rem;
    
    /* put at bottom */
    position: absolute;
    bottom: 0;
}

.card-footer-item {
    color: #4a4a4a;
    text-decoration: none;
    font-weight: 700;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    transition: all 0.3s ease-out;
}
</style>