import Navbar from '../../components/Navbar'
import Events from '../../components/Events'
import { useState } from 'react';

const Home = () => {
    const [searchText, setSearchText] = useState('');

    function handleNavbarSearch(text) {
        setSearchText(text);
    };


    return (
        <>
            <Navbar onSearch={handleNavbarSearch} />
            <Events searchText={searchText} />
        </>
    )
}

export default Home;