import FloorPreview from "../../assets/images/png/floor-preview.png";
import ThreeDTour from "../../assets/images/svg/3dtour.svg";
import Gallery from "../../assets/images/svg/gallery.svg";
import FloorPlan from "../../assets/images/svg/floorplan.svg";
import { useTotalContext } from "../../context/TotalContext";
import { getImageSize } from "react-image-size";

// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "@wordpress/element";

const SecondScreen = () => {

    const { homedata } = useTotalContext();
    const parseData = JSON.parse(homedata);
    const grundrissImages = parseData.images.filter(({type}) => { return type == "Grundriss" });
    const galleryImages = parseData.images.filter(({type}) => { return type != "Grundriss" });
    const [galleryIndex, setGalleryIndex] = useState(1);
    const [galleryInfo, setGalleryInfo] = useState(Array.from({ length: galleryImages.length }, () => ({ width: 1280, height: 768 })));
    const [grundrissInfo, setGrundrissInfo] = useState(Array.from({ length: grundrissImages.length }, () => ({ width: 1280, height: 768 })));
    useEffect(() => {
        for (let i = 0; i < galleryImages.length; i++) {
            getImageSize(galleryImages[i].src).then((response) => {
                setGalleryInfo((prevItems) => {
                    const newItems = [...prevItems];
                    newItems[i].width = response.width;
                    newItems[i].height = response.height;
                    return newItems;
                })
            });
        }
        for (let i = 0; i < grundrissImages.length; i++) {
            getImageSize(grundrissImages[i].src).then((response) => {
                setGrundrissInfo((prevItems) => {
                    const newItems = [...prevItems];
                    newItems[i].width = response.width;
                    newItems[i].height = response.height;
                    return newItems;
                })
            });
        }
    }, []);
    useEffect(() => {
        setInterval(() => {
            const gallery_index = Number(document.getElementById("gallery-swiper").querySelector(".swiper-slide-active").getAttribute("aria-label").split(' ').at(0));
            setGalleryIndex(gallery_index);
        }, 100);
    }, []);
    const clickGrundriss = () => {
        if (document.getElementById("grundriss-swiper").querySelector(".swiper-slide-active")) {
            document.getElementById("grundriss-swiper").querySelector(".swiper-slide-active").click();
        }
    }
    const clickGallery = () => {
        if (document.getElementById("gallery-swiper").querySelector(".swiper-slide-active")) {
            document.getElementById("gallery-swiper").querySelector(".swiper-slide-active").click();
        }
    }
    const click3DTour = () => {
        document.getElementById("fullscreen-iframe").style.display = "flex";
    }
    return (
        <div className="d-flex flex-column mt-10 mt-md-0 gap-9 gap-md-10 position-relative">
            <p className="fs-2 fs-sm-1 lh-lg lh-md-sm fw-bold w-fit-content text-primary">Entdecke dieses Objekt</p>
            <div id="tour3d" style={{ position: "absolute", top: "-85px"}}></div>
            <div className="d-flex flex-column flex-md-row gap-9">
                <div className="card-item position-relative">
                    <iframe src={parseData["360GradRundgang"]} allowFullScreen allow="vr" className="w-100 object-fit-cover rounded-0 rounded-md-2 border image-card-png border-left-right-none" />
                    <div className="position-absolute card py-8 px-4 px-lg-8 border-0 shadow image-card-desc image-card-desc-center">
                        <div className="d-flex gap-5 flex-row flex-md-column">
                            <div className="d-flex gap-4 bg-danger rounded align-items-center pe-5 w-fit-content cursor-pointer" onClick={click3DTour}>
                                <img src={ThreeDTour} className="image-card-svg" style={{ padding: '0px' }} />
                                <p className="text-primary fw-normal fs-6 fs-sm-5">Tour 3D</p>
                            </div>
                            <p className="text-start text-gallery fw-normal my-auto fs-6 fs-sm-5">
                                Mach einen virtuellen Rundgang
                            </p>
                        </div>
                    </div>
                    <div className="mb-5 mt-8 image-card-alt"></div>
                </div>
                <div className="card-item position-relative">
                    <div id="gallery" style={{ position: "absolute", top: "-85px"}}></div>
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => {}}
                        className="w-100 rounded-0 rounded-md-2 border image-card-png position-relative border-left-right-none"
                        id="gallery-swiper"
                    >
                        {galleryImages.map((_image, id) => (
                            <SwiperSlide key={id} id="gallery-image">
                                <a href={_image.src} data-pswp-width={galleryInfo[id].width} data-pswp-height={galleryInfo[id].height}>
                                    <img id={`gallery-image-${id}`} src={_image.src} alt={_image.alt} className="w-100 h-100 object-fit-cover" />
                                </a>
                            </SwiperSlide>
                        ))}
                        <div className="position-absolute w-100 bg-transparent d-none d-md-flex" style={{ zIndex: 1000, bottom: "10px" }}>
                            <div className="d-flex gap-5 px-2 align-items-center justify-content-center mx-auto rounded-1" style={{ backgroundColor: "#00000047" }}>
                                <p className="fs-6 text-white">{galleryIndex} von {galleryImages.length}</p>
                                <div className="d-flex gap-1">
                                    {galleryIndex == 1 ? <div className="bg-white rounded" style={{ width: "15px", height: "5px" }}></div> : <div className="bg-white rounded" style={{ width: "5px", height: "5px" }}></div>}
                                    {(galleryIndex != 1 && galleryIndex != galleryImages.length) ? <div className="bg-white rounded" style={{ width: "15px", height: "5px" }}></div> : <div className="bg-white rounded" style={{ width: "5px", height: "5px" }}></div>}
                                    {galleryIndex == galleryImages.length ? <div className="bg-white rounded" style={{ width: "15px", height: "5px" }}></div> : <div className="bg-white rounded" style={{ width: "5px", height: "5px" }}></div>}
                                </div>
                            </div>
                        </div>
                    </Swiper>
                    <div className="position-absolute card py-8 px-4 px-lg-8 border-0 shadow image-card-desc image-card-desc-center" style={{ zIndex: 999 }}>
                        <div className="d-flex gap-5 flex-row flex-md-column">
                            <div className="d-flex gap-4 bg-danger rounded align-items-center pe-5 w-fit-content cursor-pointer" onClick={clickGallery}>
                                <img src={Gallery} className="image-card-svg" />
                                <p className="text-primary fw-normal fs-6 fs-sm-5">Gallerie</p>
                            </div>
                            <p className="text-start text-gallery fw-normal my-auto fs-6 fs-sm-5">
                                Detaillierte Galerie ansehen
                            </p>
                        </div>
                    </div>
                    <div className="mb-5 mt-8 image-card-alt"></div>
                </div>
                <div className="image-slider-two position-relative">
                    <div id="floor" style={{ position: "absolute", top: "-85px"}}></div>
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => {}}
                        className="w-100 rounded-0 rounded-md-2 border image-card-png border-left-right-none"
                        id="grundriss-swiper"
                    >
                        {grundrissImages.map((_image, id) => (
                            <SwiperSlide key={id} id="grundriss-image">
                                <a href={_image.src} data-pswp-width={grundrissInfo[id].width} data-pswp-height={grundrissInfo[id].height}>
                                    <img id={`grundriss-image-${id}`} src={_image.src} alt={_image.alt} className="w-100 h-100 object-fit-cover" />
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="position-absolute card py-8 px-4 px-lg-8 border-0 shadow image-card-desc image-card-desc-center" style={{ zIndex: 999 }}>
                        <div className="d-flex gap-5 flex-row flex-md-column">
                            <div className="d-flex gap-4 bg-danger rounded align-items-center pe-5 w-fit-content cursor-pointer" onClick={clickGrundriss}>
                                <img src={FloorPlan} className="image-card-svg" />
                                <p className="text-primary fw-normal fs-6 fs-sm-5">Grundrisse</p>
                            </div>
                            <p className="text-start text-gallery fw-normal my-auto fs-6 fs-sm-5">
                                Grundriss der Anlage
                            </p>
                        </div>
                    </div>
                    <div className="mb-5 mt-8 image-card-alt"></div>
                </div>
            </div>
        </div>
    );
};

export default SecondScreen;
