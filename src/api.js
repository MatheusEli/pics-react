import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID WFlFPOAVreB6WroKbaErZhFMyid1oJhlocHb41gubFQ'
        },
        params: {
            query: 'cars'
        }
    });


    return response;
}

export default searchImages;