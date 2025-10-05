"use client";

import { FaArrowRight, FaLaptopCode } from "react-icons/fa";

export default function ServicesCard() {
  return (
    <section className="services">
      <div className="mx-auto max-w-[1405px]">
        <div className="flex flex-wrap ">
          {/* Item 1 */}
          <div className="w-full md:w-[25%]">
            <div className="serviceCard m-3">
              <h4 className="serviceCard__title">
                <a href="/web-development" className="sttl">
                  /WEB DEVELOPMENT
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
                  <FaLaptopCode className="serviceCard__iconSvg" />
                </div>

                <a href="/web-development" className="serviceCard__btn">
                  <span>Read Details</span>
                  <FaArrowRight className="serviceCard__btnIcon" />
                </a>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="w-full md:w-[25%]">
            <div className="serviceCard m-3">
              <h4 className="serviceCard__title">
                <a href="/web-apps" className="sttl">
                  /WEB APPS
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
                  <i className="fa-solid fa-code" />
                </div>

                <a href="/web-apps" className="serviceCard__btn">
                  <span>Read Details</span>
                  <i className="fa-regular fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>

          {/* Item 3 (highlight) */}
          <div className="w-full md:w-[25%]">
            <div className="serviceCard serviceCard--highlight m-3 ">
              <h4 className="serviceCard__title serviceCard__title--accent">
                <a href="/moderation" className="sttl">
                  /MODERATION
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
                  <i className="fa-solid fa-shield-halved" />
                </div>

                <a href="/moderation" className="serviceCard__btn">
                  <span>Read Details</span>
                  <i className="fa-regular fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="w-full md:w-[25%]">
            <div className="serviceCard m-3">
              <h4 className="serviceCard__title">
                <a href="/crypto-websites" className="sttl">
                  /CRYPTO WEBSITES
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
                  <i className="fa-brands fa-bitcoin" />
                </div>

                <a href="/crypto-websites" className="serviceCard__btn">
                  <span>Read Details</span>
                  <i className="fa-regular fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
