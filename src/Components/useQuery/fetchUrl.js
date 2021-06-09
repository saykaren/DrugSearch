const fetchURL = async ({ queryKey }) => {
    const [,baseURL, drugName] = queryKey;
    const limit = '&limit=10'
    const res = await fetch(`${baseURL}${drugName}${limit}`);
    return res.json();
};

export default fetchURL;