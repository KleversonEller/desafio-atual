import axios from 'axios';

const URL = 'http://localhost:3015/';

const getPost = async () => {
    const response = await axios.get(URL);

    return response.data;
};

export {getPost};