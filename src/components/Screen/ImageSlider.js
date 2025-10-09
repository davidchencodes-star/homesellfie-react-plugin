import MainPicture from "../../assets/images/main.png";
import { useTotalContext } from "../../context/TotalContext";

// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "@wordpress/element";
import HeartSecondary from "../../assets/images/svg/heart-secondary.svg";
import { getImageSize } from "react-image-size";

const ImageSlider = () => {
    const { homedata } = useTotalContext();
    const parseData = JSON.parse(homedata);
    const images = parseData.images.filter(({type}) => { return type != "Grundriss" });
    const [sliderIndex, setSliderIndex] = useState(1);
    const [width, setWidth] = useState(0);
    const [height, setHeight]  = useState(0);
    getImageSize(images[0].src).then((response) => {
        setWidth(response.width);
        setHeight(response.height);
    });
    const calcSwiperSize = () => {
        if (width == 0 || height == 0) return;
        if (document.getElementById("main-swiper") == null) return;
        const swiperWidth = parseInt(getComputedStyle(document.getElementById("main-swiper")).width, 10);
        const swiperHeight = height * swiperWidth / width;
        document.getElementById("main-swiper").style.height = `${swiperHeight}px`;
    }
    window.addEventListener("resize", () => calcSwiperSize());
    useEffect(() => calcSwiperSize(), [width, height])
    useEffect(() => {
        setInterval(() => {
            const index = Number(document.getElementById("main-swiper").querySelector(".swiper-slide-active").getAttribute("aria-label").split(' ').at(0));
            setSliderIndex(index);
        }, 100);
        // const mainSwiper = document.getElementById("main-swiper");
        // if (window.innerWidth < 768) {
        //     mainSwiper.style.width = mainSwiper.parentElement.clientWidth + 20;
        // } else {
        //     mainSwiper.style.width = "100%";
        // }
    }, []);
    // window.addEventListener("resize", () => {
    //     const mainSwiper = document.getElementById("main-swiper");
    //     if (window.innerWidth < 768) {
    //         mainSwiper.style.width = mainSwiper.parentElement.clientWidth + 20;
    //     } else {
    //         mainSwiper.style.width = "100%";
    //     }
    // })
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => {}}
            //   width={1024}
            className="border-0 rounded-0 position-relative main-swiper"
            id="main-swiper"
        >
            {images.map((_image, id) => (
                <SwiperSlide key={id}>
                    <img src={_image.src} className="rounded-0 rounded-md-2 w-100 h-100 object-fit-cover" alt={_image.alt} />
                </SwiperSlide>
            ))}
            <div className="position-absolute w-100 bg-transparent d-flex image-slider-bottom" style={{ zIndex: 1000 }}>
                <div className="d-flex gap-5 px-2 align-items-center justify-content-center mx-auto rounded-1" style={{ backgroundColor: "#00000047" }}>
                    <p className="fs-sm-6 fs-md-5 text-white">{sliderIndex} von {images.length}</p>
                    <div className="d-flex gap-2">
                        {sliderIndex == 1 ? <div className="bg-white rounded" style={{ width: "20px", height: "6px" }}></div> : <div className="bg-white rounded" style={{ width: "6px", height: "6px" }}></div>}
                        {(sliderIndex != 1 && sliderIndex != images.length) ? <div className="bg-white rounded" style={{ width: "20px", height: "6px" }}></div> : <div className="bg-white rounded" style={{ width: "6px", height: "6px" }}></div>}
                        {sliderIndex == images.length ? <div className="bg-white rounded" style={{ width: "20px", height: "6px" }}></div> : <div className="bg-white rounded" style={{ width: "6px", height: "6px" }}></div>}
                    </div>
                </div>
            </div>
            <div onClick={btnMerklisteHandle} className="position-absolute d-flex d-md-none bg-white p-3 cursor-pointer" style={{ borderRadius: "100%", width: "34px", height: "34px", top: "15px", right: "15px", zIndex: 1000 }}>
                <img src={HeartSecondary} />
            </div>
        </Swiper>
    );
};

export default ImageSlider;