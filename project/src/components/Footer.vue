<template>
    <footer>
      <div class="footer-container">
        <div class="mailing-address">
          <h4>Who we are</h4>
          <h6>Rosey Flower</h6>
          <p>
            Laboris duis ut est fugiat et reprehenderit magna labore aute.<br>
            Laboris duis ut est fugiat et reprehenderit magna labore aute.<br>
            Laboris duis ut est fugiat et reprehenderit magna labore aute.
          </p>
        </div>
  
        <div class="contact-info">
          <h6>Contact Us</h6>
          <p><strong>Phone:</strong> 123-456-789</p>
          <p><strong>Email:</strong> <a href="mailto:info@company.com">info@company.com</a></p>
        </div>
  
        <div class="location-info">
          <h4>Our Location</h4>
          <div class="map-container">
            <img src="../images/map_thumb.jpg" alt="Map" />
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped>
    footer {
      background-color: #f8f8f8;
      padding: 30px 0;
    }
  
    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
  
    .mailing-address,
    .contact-info,
    .location-info {
      flex: 1;
      padding: 0 20px;
    }
  
    h4, h6 {
      color: #333;
      font-weight: bold;
    }
  
    h6 {
      margin-top: 15px;
    }
  
    p {
      color: #666;
    }
  
    .map-container img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }
  </style>
  