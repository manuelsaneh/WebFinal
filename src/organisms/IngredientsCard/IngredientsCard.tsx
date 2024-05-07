import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { Info } from "../../utils/types/types";
import "swiper/css";
import "swiper/css/effect-cards";

interface IngredientsCardProps {
  data: Info;
}

const IngredientsCard = ({ data }: IngredientsCardProps) => {
  return (
    <div className="swipe-container">
      <h2 className="title">Ingredients</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="cards"
      >
        {data &&
          data.extendedIngredients &&
          data.extendedIngredients.length > 0 &&
          data.extendedIngredients.map((ingredient) => (
            <SwiperSlide className="ingredient" key={ingredient.id}>
              <div>{ingredient.original}</div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default IngredientsCard;
