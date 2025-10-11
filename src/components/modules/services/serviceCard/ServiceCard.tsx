"use client";

import { FaArrowRight, FaBitcoin, FaCode, FaLaptopCode } from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import "./serviceCard.css";

export default function ServicesCard() {
  return (
    <section className="services md:py-[90px] py-[60px]">
      <div className="mx-auto max-w-[1405px] px-[15px] md:px-0">
        <div className="flex flex-wrap ">
          {/* Item 1 */}
          <div className="w-full lg:w-[25%] md:w-[50%] sm:w-[50%]">
            <div className="serviceCard m-3">
              <h4 className="serviceCard__title">
                <a href="/web-development" className="sttl">
                  WEB DEVELOPMENT
                </a>
              </h4>

              <div className="serviceCard__thumb">
                <span className="serviceCard__overlay" />
                <div className="trans_shape">
                  <img src="/img/service/shp.png" alt="shape" />
                </div>
                <img
                  src="/img/service/sr1.jpg"
                  alt="Web Development"
                  className="serviceCard__img"
                />

                <div className="serviceCard__icon">
                  <FaLaptopCode className="text-4xl  text-[#74787C]" />
                </div>

                <a href="/web-development" className="serviceCard__btn">
                  <span>Read Details</span>
                  <FaArrowRight className="serviceCard__btnIcon rotate" />
                </a>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="w-full lg:w-[25%] md:w-[50%] sm:w-[50%]">
            <div className="serviceCard m-3">
              <h4 className="serviceCard__title">
                <a href="/web-apps" className="sttl">
                  WEB APPS
                </a>
              </h4>

              <div className="serviceCard__thumb">
                <span className="serviceCard__overlay" />
                <div className="trans_shape">
                  <img src="/img/service/shp.png" alt="shape" />
                </div>

                <img
                  src="/img/service/sr2.jpg"
                  alt="Web Apps"
                  className="serviceCard__img"
                />

                <div className="serviceCard__icon">
                  <FaCode className="text-4xl  text-[#74787C]" />
                </div>

                <a
                  href="/web-apps"
                  className="serviceCard__btn flex items-center gap-2"
                >
                  <span>Read Details</span>
                  <FaArrowRight className="text-sm rotate" />
                </a>
              </div>
            </div>
          </div>

          {/* Item 3 (highlight) */}
          <div className="w-full lg:w-[25%] md:w-[50%] sm:w-[50%]">
            <div className="serviceCard serviceCard--highlight m-3 ">
              <h4 className="serviceCard__title serviceCard__title--accent">
                <a href="/moderation" className="sttl">
                  MODERATION
                </a>
              </h4>

              <div className="serviceCard__thumb">
                <span className="serviceCard__overlay" />
                <div className="trans_shape">
                  <img src="/img/service/shp.png" alt="shape" />
                </div>
                <img
                  src="/img/service/sr3.jpg"
                  alt="Moderation"
                  className="serviceCard__img"
                />

                <div className="serviceCard__icon">
                  <FaShieldHalved className="text-4xl  text-[#74787C]" />
                </div>

                <a
                  href="/moderation"
                  className="serviceCard__btn flex items-center gap-2"
                >
                  <span>Read Details</span>
                  <FaArrowRight className="text-sm rotate" />
                </a>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="w-full lg:w-[25%] md:w-[50%] sm:w-[50%]">
            <div className="serviceCard m-3">
              <h4 className="serviceCard__title">
                <a href="/crypto-websites" className="sttl">
                  CRYPTO WEBSITES
                </a>
              </h4>

              <div className="serviceCard__thumb">
                <span className="serviceCard__overlay" />
                <div className="trans_shape">
                  <img src="/img/service/shp.png" alt="shape" />
                </div>
                <img
                  src="/img/service/sr4.jpg"
                  alt="Crypto Websites"
                  className="serviceCard__img"
                />

                <div className="serviceCard__icon">
                  <FaBitcoin className="text-4xl  text-[#74787C]" />
                </div>

                <a
                  href="/crypto-websites"
                  className="serviceCard__btn flex items-center gap-2"
                >
                  <span>Read Details</span>
                  <FaArrowRight className="text-sm rotate" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
