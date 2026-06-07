import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Gallery() {
  const photos = [
    "/images/photo1.jpeg",
    "/images/photo2.jpeg",
    "/images/photo3.jpeg",
    "/images/photo4.jpeg",
    "/images/photo5.jpeg",
  ];

  return (
    <section
      style={{
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            color: "#ff4d6d",
            marginBottom: "10px",
          }}
        >
          📸 Nossos Momentos
        </h2>

        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "600",
            color: "#ff4d6d",
          }}
        >
          Vinícius ❤️ Elizangela
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img
              src={photo}
              alt={`Foto ${index + 1}`}
              style={{
                width: "100%",
                maxWidth: "700px",
                height: "500px",
                objectFit: "contain",
                borderRadius: "20px",
                margin: "auto",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Gallery;