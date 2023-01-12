import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';
import { useState } from 'react';


function App() {

    const [images, setImages] = useState([]);

    const handleSubmit = async (text) => {
        const result = await searchImages(text);
        setImages(result);
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />

        </div>);
}

export default App;