import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
function DealerSingle() {
  return (
    <>
      <div className="container-lg">
        {/* Dealer information */}
        <section className="card dealer-info">
          <div className="row">
            <div className="col-md-5">
              <div className="dealer-name">
                <h4>SHREE HEMKUNT TYRES AND SERVICES</h4>
                <span className="verified">
                  <i className="bi bi-patch-check-fill"></i>
                  Verified
                </span>
              </div>
              <div className="dealer-reviews">
                <span className="rating-no">4.9</span>
                <span className="rating-stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </span>
                <span className="total-reviews">2278 Reviews</span>
                <button className="rate-us btn">Rate</button>
              </div>
              <div className="location-time">
                <div className="dealer-location">
                  <i className="bi bi-geo-alt"></i>
                  PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
                  INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
                </div>
                <div className="dealer-timing">
                  <i className="bi bi-clock"></i>
                  Open - Monday to Sunday - 10:00AM to 8:00PM
                </div>
              </div>
              <Link to="#" className="btn get-direction btn-primary">
                Get Direction
              </Link>
            </div>
            <div className="col-md-7 mt-md-0 mt-3">
              <Swiper
                slidesPerView={1.4}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300-w450"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300-w450"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300-w450"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300-w450"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        {/* customer revies */}
        <section className="customer-reviews">
          <div className="row">
            <div className="col-md-4">
              <h2 className="heading">
                <em>Ultimate</em> <br />
                Service Review
              </h2>
              <p className="fw-medium">
              Discover the secret to peak performance with our Ultimate Tyre and Service review.
              </p>
              <h5 className="mt-md-5 mt-2 mb-md-4 mb-3">
                +2.3k trust to our awesome services
              </h5>
              <Link to="/" className="btn btn-outline-primary py-3 px-5">
                Rate Us
                <i className="bi bi-arrow-up-right ms-2"></i>
              </Link>
            </div>
            <div className="col-md-8 mt-md-0 mt-3">
              <div className="row testimonials-row">
                <div className="col-md-6">
                  <div className="card testimonials-card">
                    <p className="review-text">
                      Excellent service from start to finish. 100% satisfaction
                      with the job, professionalism and overall service.We were
                      delighted with your courteous , prompt and professional
                      service. We would plan to reuse your services and
                      recommend these to friends and family. You came to us as a
                      recommendation and this proved accurate.
                    </p>
                    <div className="testimonials-card-footer">
                      <div className="user-details">
                        <img
                          src="https://lh3.googleusercontent.com/a/AATXAJwZ5yHTyhlbUnanuJwLGdscP95OtAMhFGiAD8Bf=s128-c0x00000000-cc-rp-mo"
                          alt=""
                        />
                        <span>Md Nasir</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card testimonials-card">
                    <p className="review-text">
                      Went for Tyre change . Ultimate service by shoppe boys.
                      Owner behavior very cool. Guide as per ur budget. Highly
                      recommend
                    </p>
                    <div className="testimonials-card-footer">
                      <div className="user-details">
                        <img
                          src="https://lh3.googleusercontent.com/a/AATXAJxi1FTLTnIbF-wcCFLUqffCFFV07qiTPPBbLVaO=s128-c0x00000000-cc-rp-mo"
                          alt=""
                        />
                        <span>Rohit Bhati</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card testimonials-card">
                    <p className="review-text">
                      Best tyre shop in Indirapuram. Good dealing with customer.
                      All types tyre available here. Price also responsible.
                      Overall good experience
                    </p>
                    <div className="testimonials-card-footer">
                      <div className="user-details">
                        <img
                          src="https://lh3.googleusercontent.com/a/AATXAJwahszZQxSMoUOJ3FOQwAgtMOeWI7bFaQnSRl1a=s128-c0x00000000-cc-rp-mo"
                          alt=""
                        />
                        <span>Pradeep Kumar</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card testimonials-card">
                    <p className="review-text">
                      Genuine and Authorized Tyre shop in indirapuram having
                      latest manufactured stock. Well equipped workshop with
                      professional staff. I change my care Tyre there, highly
                      satisfied with service and lasted available stock.. Keep
                      it up !!!
                    </p>
                    <div className="testimonials-card-footer">
                      <div className="user-details">
                        <img
                          src="https://lh3.googleusercontent.com/a-/AOh14GhHSizwMQ5QJNIXpB3wdFKkkIEzs8WwYdQUngn6uw=s128-c0x00000000-cc-rp-mo"
                          alt=""
                        />
                        <span>Surjit Kumar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="deals-in">
        <div className="container-lg">
          <h2 className="heading mb-2">Deals in</h2>
          <div className="deals-in-wrapper">
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              loop={true}
              navigation={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Link to="#" className="deals-in-box">
                  <img
                    src="https://cdn.ayroui.com/1.0/images/client-logo/graygrids.svg"
                    alt=""
                  />
                  <span>MRF</span>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="#" className="deals-in-box">
                  <img
                    src="https://cdn.ayroui.com/1.0/images/client-logo/graygrids.svg"
                    alt=""
                  />
                  <span>MRF</span>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="#" className="deals-in-box">
                  <img
                    src="https://cdn.ayroui.com/1.0/images/client-logo/graygrids.svg"
                    alt=""
                  />
                  <span>MRF</span>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="#" className="deals-in-box">
                  <img
                    src="https://cdn.ayroui.com/1.0/images/client-logo/graygrids.svg"
                    alt=""
                  />
                  <span>MRF</span>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="#" className="deals-in-box">
                  <img
                    src="https://cdn.ayroui.com/1.0/images/client-logo/graygrids.svg"
                    alt=""
                  />
                  <span>MRF</span>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="#" className="deals-in-box">
                  <img
                    src="https://cdn.ayroui.com/1.0/images/client-logo/graygrids.svg"
                    alt=""
                  />
                  <span>MRF</span>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="services-offered">
        <div className="container-lg">
          <h2 className="heading">Services offered by this dealer</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img
                  src="https://www.tyremarket.com/tyremantra/wp-content/uploads/2019/12/8-Wheel-Balancing-and-Wheel-Alignment.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body px-0 pb-0">
                  <h5 className="card-title">Wheel Balancing</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's
                  </p>
                  <a href="#" className="btn btn-primary w-100">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  src="https://di-uploads-pod9.dealerinspire.com/stonemountainnissan/uploads/2024/01/tire-alignment.jpeg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Wheel Alignment</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's
                  </p>
                  <a href="#" className="btn btn-primary w-100">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  src="https://www.tyremarket.com/tyremantra/wp-content/uploads/2019/12/8-Wheel-Balancing-and-Wheel-Alignment.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body px-0 pb-0">
                  <h5 className="card-title">Wheel Balancing</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's
                  </p>
                  <a href="#" className="btn btn-primary w-100">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  src="https://www.tyremarket.com/tyremantra/wp-content/uploads/2019/12/8-Wheel-Balancing-and-Wheel-Alignment.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body px-0 pb-0">
                  <h5 className="card-title">Wheel Balancing</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's
                  </p>
                  <a href="#" className="btn btn-primary w-100">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-tyre">
        <div className="container-lg">
          <h2 className="heading">Tyres sold by this Dealer</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <Link to="#">
                  <div className="row">
                    <div className="col-7">
                      <div className="tyre_brand">
                        <span className="brand-img">
                          <img
                            src="https://www.point-s.co.in/sites/default/files/styles/parapraphe_media_picture_mobile/public/medias/picture/2023/11/Apollo_BI1530522536_0.webp?itok=UhgLxiwe"
                            className="img-fluid"
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="m-name">AMAZER 4G LIFE</div>
                      <div className="v-name">145/80 R12</div>
                      <div className="d-flex align-items-center gap-1 py-3 my-1 common-rating">
                        <div className="rating-no">
                          <i className="bi bi-star-fill"></i>
                          <span>4</span>
                        </div>
                        <span className="review-text-">320 Reviews</span>
                      </div>
                      <div className="product-price">₹ 3,136 </div>
                      <div className="offer-text">Offer available</div>
                      <div className="product-feature"> Tube Type </div>
                    </div>
                    <div className="col-5 img-section">
                      <span className="warranty-tag"> 5 Year Warranty</span>
                      <img
                        className="img-fluid bg-img"
                        src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                        alt="Apollo AMAZER 4G LIFE"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <Link to="#">
                  <div className="row">
                    <div className="col-7">
                      <div className="tyre_brand">
                        <span className="brand-img">
                          <img
                            src="https://www.point-s.co.in/sites/default/files/styles/parapraphe_media_picture_mobile/public/medias/picture/2023/11/Apollo_BI1530522536_0.webp?itok=UhgLxiwe"
                            className="img-fluid"
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="m-name">AMAZER 4G LIFE</div>
                      <div className="v-name">145/80 R12</div>
                      <div className="d-flex align-items-center gap-1 py-3 my-1 common-rating">
                        <div className="rating-no">
                          <i className="bi bi-star-fill"></i>
                          <span>4</span>
                        </div>
                        <span className="review-text-">320 Reviews</span>
                      </div>
                      <div className="product-price">₹ 3,136 </div>
                      <div className="offer-text">Offer available</div>
                      <div className="product-feature"> Tube Type </div>
                    </div>
                    <div className="col-5 img-section">
                      <span className="warranty-tag"> 5 Year Warranty</span>
                      <img
                        className="img-fluid bg-img"
                        src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                        alt="Apollo AMAZER 4G LIFE"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <Link to="#">
                  <div className="row">
                    <div className="col-7">
                      <div className="tyre_brand">
                        <span className="brand-img">
                          <img
                            src="https://www.point-s.co.in/sites/default/files/styles/parapraphe_media_picture_mobile/public/medias/picture/2023/11/Apollo_BI1530522536_0.webp?itok=UhgLxiwe"
                            className="img-fluid"
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="m-name">AMAZER 4G LIFE</div>
                      <div className="v-name">145/80 R12</div>
                      <div className="d-flex align-items-center gap-1 py-3 my-1 common-rating">
                        <div className="rating-no">
                          <i className="bi bi-star-fill"></i>
                          <span>4</span>
                        </div>
                        <span className="review-text-">320 Reviews</span>
                      </div>
                      <div className="product-price">₹ 3,136 </div>
                      <div className="offer-text">Offer available</div>
                      <div className="product-feature"> Tube Type </div>
                    </div>
                    <div className="col-5 img-section">
                      <span className="warranty-tag"> 5 Year Warranty</span>
                      <img
                        className="img-fluid bg-img"
                        src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                        alt="Apollo AMAZER 4G LIFE"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <Link to="#">
                  <div className="row">
                    <div className="col-7">
                      <div className="tyre_brand">
                        <span className="brand-img">
                          <img
                            src="https://www.point-s.co.in/sites/default/files/styles/parapraphe_media_picture_mobile/public/medias/picture/2023/11/Apollo_BI1530522536_0.webp?itok=UhgLxiwe"
                            className="img-fluid"
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="m-name">AMAZER 4G LIFE</div>
                      <div className="v-name">145/80 R12</div>
                      <div className="d-flex align-items-center gap-1 py-3 my-1 common-rating">
                        <div className="rating-no">
                          <i className="bi bi-star-fill"></i>
                          <span>4</span>
                        </div>
                        <span className="review-text-">320 Reviews</span>
                      </div>
                      <div className="product-price">₹ 3,136 </div>
                      <div className="offer-text">Offer available</div>
                      <div className="product-feature"> Tube Type </div>
                    </div>
                    <div className="col-5 img-section">
                      <span className="warranty-tag"> 5 Year Warranty</span>
                      <img
                        className="img-fluid bg-img"
                        src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                        alt="Apollo AMAZER 4G LIFE"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-outline-primary">
              View More
              <i className="bi bi-chevron-down ms-1 fs-6"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="payment-mode">
        <div className="card py-5">
          <div className="container-lg">
            <h2 className="heading">Payment Mode</h2>
            <ul className="pay-option">
              <li>Deposit to Account</li>
              <li>Net Banking</li>
              <li>Credit Card/Debit Card</li>
              <li>UPI</li>
              <li>Wallets (PayTM/PhonePe/Amazon etc.)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="have-a-question">
        <div className="container-lg">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="card">
                <h2 className="heading mb-2">Have a question about Tyres?</h2>
                <p>Get an answer in 24 hours from our experts.</p>
                <form action="">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ask or Search your question"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DealerSingle;
