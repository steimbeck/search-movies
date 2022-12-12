const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'b7be2e8b',
            s: searchTerm

        }

    });

    console.log(response.data)

};


const input = document.querySelector('input');
const debounce = (func) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, 1000);
    };

};
const onInput = event => {
    fetchData(event.target.value);
};
input.addEventListener('input', debounce(onInput));
