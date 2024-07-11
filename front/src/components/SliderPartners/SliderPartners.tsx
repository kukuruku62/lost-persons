"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/scss";
import "swiper/scss/autoplay";
import styles from "./SliderPartners.module.scss";

const breakpoints = {
  380: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4,
  },
  1200: {
    slidesPerView: 5,
  },
}


const SliderPartners = () => {

  const listPartners = [
    {
      id: "1",
      link: "https://www.microsoft.com/sk-sk",
      imageSrc: "/img/svg/microsoft-logo.svg",
      name: "Microsoft",
    },
    {
      id: "2",
      link: "https://www.waragod.sk/",
      imageSrc: "/img/svg/waragod-logo.svg",
      name: "Waragod",
    },
    {
      id: "3",
      link: "https://www.canis.sk/",
      imageSrc: "/img/svg/canis-logo.svg",
      name: "Canis",
    },

    {
      id: "4",
      link: "https://www.ibo.sk/ibo-polovnik",
      imageSrc: "/img/svg/ibo-logo.svg",
      name: "Ibo",
    },
    {
      id: "5",
      link: "https://vysielacky.com/",
      imageSrc: "/img/svg/vysielacky-logo.svg",
      name: "Vysielačky",
    },
    {
      id: "6",
      link: "https://www.tophasici.sk/",
      imageSrc: "/img/tophasici-logo.webp",
      name: "Tophasici",
    },
  ] as const;

  return (
    <section className={styles.container}>
      <Swiper
        grabCursor={true}
        spaceBetween={50}
        slidesPerView={"auto"}
        loop={true}
        modules={[Autoplay]}
        speed={6000}
        autoplay={{ delay: 0, pauseOnMouseEnter: true }}
        breakpoints={breakpoints}
      >
        {listPartners.map(({ id, imageSrc, link, name }) => (
          <SwiperSlide key={id}>
            <div className={styles.wrapperImg}>
              <Link href={link} rel="noopener noreferrer" target="_blank">
                <Image
                  src={imageSrc}
                  alt={`Logo partnerskej spoločnosti ${name}`}
                  className={styles.image}
                  fill={true}
                  sizes="(min-width: 320px) 100%"
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export { SliderPartners };
