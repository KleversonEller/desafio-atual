import axios from 'axios';

const URL = 'https://desafio-atual-api.onrender.com';

const getPost = async () => {
    const response = await axios.get(URL);

    return response.data;
};

export {getPost};