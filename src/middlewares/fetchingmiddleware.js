import axios from "axios";

const fetchingmiddleware = (store) => (next) => (action) => {
    const fetchData = async (page) => {
        const res = await axios(
            `https://rickandmortyapi.com/api/character/?page=${page}`
        );
        action.payload = res.data.results;
    };
    if (action.type === "GET_ALL_CHARACTERS") {
        fetchData(action.payload);
        next(action);
    }
    return next(action);
};

export default fetchingmiddleware;
