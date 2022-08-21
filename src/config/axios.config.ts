import axios from "axios";

const BASE_PATH = import.meta.env.VITE_BASE_PATH_API || '';
const APP_ID = import.meta.env.VITE_API_ID || '';

axios.defaults.baseURL = BASE_PATH;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['app-id'] = APP_ID 