import axios from 'axios';
export default axios.create(
    {
        baseURL: 'https://products-project-3e404-default-rtdb.europe-west1.firebasedatabase.app/'
    }
)
