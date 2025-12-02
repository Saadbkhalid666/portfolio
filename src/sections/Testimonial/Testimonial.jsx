import Carousel from "../../components/Caraousel/Caraousel"

export const Testimonials = () =>{

    <div style={{ height: '600px', position: 'relative' }}>
  <Carousel
    baseWidth={300}
    autoplay={true}
    autoplayDelay={3000}
    pauseOnHover={true}
    loop={true}
    round={false}
  />
</div>
}