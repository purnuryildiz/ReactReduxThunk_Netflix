import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { baseImgUrl } from "../../utils/constants";
const ActorList = ({ actors, crews }) => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <div className="my-5">
          <h2 className="font-semibold text-lg md:text-2xl mb-5 ">Top Cast</h2>
          <Splide options={{ autoWidth: true, pagination: false, gap: "10px" }}>
            {actors
              .filter((actor) => actor.profile_path)
              .map((actor, key) => (
                <SplideSlide key={key}>
                  <div className="w-[160px] h-full  ">
                    <img className="rounded  " src={baseImgUrl + actor.profile_path} />
                    <h2 className="text-center">{actor.name} </h2>
                  </div>
                </SplideSlide>
              ))}
          </Splide>
        </div>
        <div className="my-5">
          <h2 className="font-semibold text-lg md:text-2xl mb-5 ">Crew</h2>
          <Splide options={{ autoWidth: true, pagination: false, gap: "10px" }}>
            {crews
              .filter((crews) => crews.profile_path)

              .map((crews, key) => (
                <SplideSlide key={key}>
                  <div className="w-[160px] h-full  ">
                    <img className="rounded  " src={baseImgUrl + crews.profile_path} />
                    <h2 className="text-center">{crews.name} </h2>
                    <h2 className="text-center">{crews.job} </h2>
                  </div>
                </SplideSlide>
              ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default ActorList;
