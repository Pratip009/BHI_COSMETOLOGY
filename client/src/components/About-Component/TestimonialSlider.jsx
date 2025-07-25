import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const TestimonialSlide = ({ avatar, name, title, feedback }) => (
    <div className="group bg-white border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-indigo-600">
        <div className="flex items-center gap-5 mb-5 sm:mb-9">
            <img className="rounded-full object-cover w-12 h-12" src={avatar} alt="avatar" />
            <div className="grid gap-1">
                <h5 className="text-gray-900 font-medium transition-all duration-500">{name}</h5>
                <span className="text-sm leading-6 text-gray-500">{title}</span>
            </div>
        </div>
        <div className="flex items-center mb-5 sm:mb-9 gap-2 text-amber-500 transition-all duration-500">
            {[...Array(5)].map((_, index) => (
                <svg key={index} className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor"
                    />
                </svg>
            ))}
        </div>
        <p className="text-sm text-gray-500 leading-6 transition-all duration-500 min-h-24 group-hover:text-gray-800">
            {feedback}
        </p>
    </div>
);

const TestimonialSlider = () => {
    const testimonials = [
        {
            avatar: "https://pagedone.io/asset/uploads/1696229969.png",
            name: "Jane D",
            title: "CEO",
            feedback: "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance."
        },
        {
            avatar: "https://pagedone.io/asset/uploads/1696229994.png",
            name: "Harsh P.",
            title: "Product Designer",
            feedback: "I used to dread doing my taxes every year, but pagedone has made the process so much simpler and stress-free."
        },
        {
            avatar: "https://pagedone.io/asset/uploads/1696229969.png",
            name: "Jane D",
            title: "CEO",
            feedback: "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance."
        },
        {
            avatar: "https://pagedone.io/asset/uploads/1696229994.png",
            name: "Harsh P.",
            title: "Product Designer",
            feedback: "I used to dread doing my taxes every year, but pagedone has made the process so much simpler and stress-free."
        }
    ];

    return (
        <section className="py-24">
            <style>
                {`
                    .swiper-button-prev:after,
                    .swiper-rtl .swiper-button-next:after {
                        content: '' !important;
                    }
                    .swiper-button-next:after,
                    .swiper-rtl .swiper-button-prev:after {
                        content: '' !important;
                    }
                    .swiper-button-next svg,
                    .swiper-button-prev svg {
                        width: 24px !important;
                        height: 24px !important;
                    }
                    .swiper-button-next,
                    .swiper-button-prev {
                        position: relative !important;
                        margin-top: 32px;
                    }
                    .swiper-slide.swiper-slide-active {
                        --tw-border-opacity: 1 !important;
                        border-color: rgb(79 70 229 / var(--tw-border-opacity)) !important;
                    }
                `}
            </style>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
                    <div className="w-full lg:w-2/5">
                        <span className="text-sm text-gray-500 font-medium mb-4 block">Testimonial</span>
                        <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-8">
                            23k+ Customers gave their{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-violet-600">
                                Feedback
                            </span>
                        </h2>
                        <div className="flex items-center justify-center lg:justify-start gap-10">
                            <button
                                className="swiper-button-prev group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-lg hover:bg-indigo-600"
                            >
                                <FiArrowLeft className="h-6 w-6 text-indigo-600 group-hover:text-white" />
                            </button>
                            <button
                                className="swiper-button-next group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-lg hover:bg-indigo-600"
                            >
                                <FiArrowRight className="h-6 w-6 text-indigo-600 group-hover:text-white" />
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/5">
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={2}
                            spaceBetween={28}
                            centeredSlides={false}
                            loop={true}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                    centeredSlides: false,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 28,
                                    centeredSlides: false,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 32,
                                },
                            }}
                            className="mySwiper"
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <TestimonialSlide {...testimonial} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;