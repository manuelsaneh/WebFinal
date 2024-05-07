import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { Info } from "../../utils/types/types";
import "swiper/css";
import "swiper/css/effect-cards";
import "./instructions-card.css";

interface InstructionCardProps {
  data: Info;
}

const InstructionsCard = ({ data }: InstructionCardProps) => {
  return (
    <div className="swipe-container">
      <h2 className="title">Instructions</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="cards"
      >
        {data &&
          data.analyzedInstructions &&
          data.analyzedInstructions.length > 0 &&
          data.analyzedInstructions[0].steps.map((instruction) => (
            <SwiperSlide className="ingredient" key={instruction.number}>
              <div>
                {instruction.number}. {instruction.step}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default InstructionsCard;
