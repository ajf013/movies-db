
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import SingleContent from "../SingleContent/SingleContent";

const AutoPlayCarousel = ({ content, media_type }) => {
    const items = content.map((c) => (
        <div key={c.id} style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
            <SingleContent
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={c.media_type || media_type}
                vote_average={c.vote_average}
            />
        </div>
    ));

    const responsive = {
        0: {
            items: 1,
        },
        512: {
            items: 2,
        },
        768: {
            items: 3,
        },
        1024: {
            items: 4,
        },
        1280: {
            items: 5,
        },
    };

    return (
        <AliceCarousel
            mouseTracking
            infinite
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            items={items}
            autoPlay
            autoPlayInterval={2000}
            animationDuration={1500}
        />
    );
};

export default AutoPlayCarousel;
