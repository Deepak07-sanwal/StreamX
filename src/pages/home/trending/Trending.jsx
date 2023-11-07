import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTab from '../../../components/switchTab/SwitchTab';
import Carousel from '../../../components/carousel/Carousel';
import useFetch from '../../../hooks/useFetch';


const Trending = () => {
    const [endpoints, setEndpoints] = useState("day")

    const { data, loading } = useFetch(`/trending/all/${endpoints}`);
    const onTabChange = (tab) => {
        setEndpoints(tab.toLowerCase());
    };
    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    )
}

export default Trending