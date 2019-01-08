import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a6cc23b294fb8f69a481577134a4080c40bb3159bc847e9661ffdc9ff8eb402a'
    }
});
