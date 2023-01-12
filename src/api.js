import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID WFlFPOAVreB6WroKbaErZhFMyid1oJhlocHb41gubFQ'
        },
        params: {
            query: term
        }
    });


    return response.data.results;
}

export default searchImages;