import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snipet',
        maxResults: 5,
        key: 'AIzaSyDP5H-at1mGbGGI9ZJ3vuWxCtMbv4o5GPI'
    }
})