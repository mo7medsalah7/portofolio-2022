import React from 'react';
import Image from 'next/image';
import BackgroundImage from './moSalah.png';
import VanillaTilt from 'vanilla-tilt';
import HeadShake from 'react-reveal/HeadShake';
import Slide from 'react-reveal/Slide';
import SocialMedia from './SocialMedia';

function HeaderData() {
  const tiltRef = React.useRef();

  React.useEffect(() => {
    const tiltNode = tiltRef.current;
    VanillaTilt.init(tiltNode, {
      max: 25,
      perspective: 800,
    });
  }, []);

  return (
    <div class="hero">
      <div class="snow z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1536"
          preserveAspectRatio="xMidYMax slice"
        >
          <g fill="#000" fill-opacity=".15" transform="translate(55 42)">
            <g id="snow-bottom-layer">
              <ellipse cx="6" cy="1009.5" rx="6" ry="5.5" />
              <ellipse cx="138" cy="1110.5" rx="6" ry="5.5" />
              <ellipse cx="398" cy="1055.5" rx="6" ry="5.5" />
              <ellipse cx="719" cy="1284.5" rx="6" ry="5.5" />
              <ellipse cx="760" cy="1155.5" rx="6" ry="5.5" />
              <ellipse cx="635" cy="1459.5" rx="6" ry="5.5" />
              <ellipse cx="478" cy="1335.5" rx="6" ry="5.5" />
              <ellipse cx="322" cy="1414.5" rx="6" ry="5.5" />
              <ellipse cx="247" cy="1234.5" rx="6" ry="5.5" />
              <ellipse cx="154" cy="1425.5" rx="6" ry="5.5" />
              <ellipse cx="731" cy="773.5" rx="6" ry="5.5" />
              <ellipse cx="599" cy="874.5" rx="6" ry="5.5" />
              <ellipse cx="339" cy="819.5" rx="6" ry="5.5" />
              <ellipse cx="239" cy="1004.5" rx="6" ry="5.5" />
              <ellipse cx="113" cy="863.5" rx="6" ry="5.5" />
              <ellipse cx="102" cy="1223.5" rx="6" ry="5.5" />
              <ellipse cx="395" cy="1155.5" rx="6" ry="5.5" />
              <ellipse cx="826" cy="943.5" rx="6" ry="5.5" />
              <ellipse cx="626" cy="1054.5" rx="6" ry="5.5" />
              <ellipse cx="887" cy="1366.5" rx="6" ry="5.5" />
              <ellipse cx="6" cy="241.5" rx="6" ry="5.5" />
              <ellipse cx="138" cy="342.5" rx="6" ry="5.5" />
              <ellipse cx="398" cy="287.5" rx="6" ry="5.5" />
              <ellipse cx="719" cy="516.5" rx="6" ry="5.5" />
              <ellipse cx="760" cy="387.5" rx="6" ry="5.5" />
              <ellipse cx="635" cy="691.5" rx="6" ry="5.5" />
              <ellipse cx="478" cy="567.5" rx="6" ry="5.5" />
              <ellipse cx="322" cy="646.5" rx="6" ry="5.5" />
              <ellipse cx="247" cy="466.5" rx="6" ry="5.5" />
              <ellipse cx="154" cy="657.5" rx="6" ry="5.5" />
              <ellipse cx="731" cy="5.5" rx="6" ry="5.5" />
              <ellipse cx="599" cy="106.5" rx="6" ry="5.5" />
              <ellipse cx="339" cy="51.5" rx="6" ry="5.5" />
              <ellipse cx="239" cy="236.5" rx="6" ry="5.5" />
              <ellipse cx="113" cy="95.5" rx="6" ry="5.5" />
              <ellipse cx="102" cy="455.5" rx="6" ry="5.5" />
              <ellipse cx="395" cy="387.5" rx="6" ry="5.5" />
              <ellipse cx="826" cy="175.5" rx="6" ry="5.5" />
              <ellipse cx="626" cy="286.5" rx="6" ry="5.5" />
              <ellipse cx="887" cy="598.5" rx="6" ry="5.5" />
            </g>
          </g>
          <g fill="#000" fill-opacity=".3" transform="translate(65 63)">
            <g id="snow-top-layer">
              <circle cx="8" cy="776" r="8" />
              <circle cx="189" cy="925" r="8" />
              <circle cx="548" cy="844" r="8" />
              <circle cx="685" cy="1115" r="8" />
              <circle cx="858" cy="909" r="8" />
              <circle
                cx="874"
                cy="1438"
                r="8"
                transform="rotate(180 874 1438)"
              />
              <circle
                cx="657"
                cy="1256"
                r="8"
                transform="rotate(180 657 1256)"
              />
              <circle
                cx="443"
                cy="1372"
                r="8"
                transform="rotate(180 443 1372)"
              />
              <circle
                cx="339"
                cy="1107"
                r="8"
                transform="rotate(180 339 1107)"
              />
              <circle cx="24" cy="1305" r="8" transform="rotate(180 24 1305)" />
              <circle cx="8" cy="8" r="8" />
              <circle cx="189" cy="157" r="8" />
              <circle cx="548" cy="76" r="8" />
              <circle cx="685" cy="347" r="8" />
              <circle cx="858" cy="141" r="8" />
              <circle cx="874" cy="670" r="8" transform="rotate(180 874 670)" />
              <circle cx="657" cy="488" r="8" transform="rotate(180 657 488)" />
              <circle cx="443" cy="604" r="8" transform="rotate(180 443 604)" />
              <circle cx="339" cy="339" r="8" transform="rotate(180 339 339)" />
              <circle cx="24" cy="537" r="8" transform="rotate(180 24 537)" />
            </g>
          </g>
        </svg>
      </div>

      <div className="z-50">
        <div
          className=" flex w-full min-h-screen z-[1] bg-[#fff]"
          style={{ width: 'min(100% - 0rem)' }}
        >
          <div className=" m-auto">
            <div className="flex flex-col">
              <div className="mb-6">
                <HeadShake>
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold brandName">
                    Mohamed Salah
                  </h1>
                </HeadShake>
                <p className="border-b-2 border-solid border-[#40a8cc]">
                  Your Next
                </p>
                <div className="ml-2">
                  <span className="block sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-7xl">
                    DevOps Engineer
                  </span>
                  <span>Ex Frontend Engineer</span>
                </div>
              </div>
              {/* <div className="buttons flex gap-[12px]">
                <div className="">
                  <button className="hero_button" type="submit">
                    See My Works
                  </button>
                </div>
              </div> */}
              <SocialMedia />
            </div>
          </div>
          {/* Portofolio Image */}
          <div
            ref={tiltRef}
            className="m-auto hidden md:hidden lg:flex border-8 border-solid border-[#46b9de] border-opacity-90"
          >
            <Image
              src={BackgroundImage}
              className=""
              alt="Picture of Mo Salah"
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderData;
