// URL del backend: local en desarrollo, Render en producción
const API_BASE_URL = ["localhost", "127.0.0.1"].includes(location.hostname)
  ? "http://localhost:8081"
  : "https://URL-DEL-BACKEND-EN-RENDER";