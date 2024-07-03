import React, { useState } from 'react';
import SliderData from '../../../assets/data/boxSlider';
import Countdown from '../../../components/countdown/Countdown.jsx';
import Progressbar from '../../../components/progressbar/Progressbar.jsx';
import BannerWrapper from './Banner.style.jsx';

import Slider from 'react-slick';
import Data from '../../../assets/data/networkInfo';
import Notification from '../../../components/notification/Notification.jsx';
import * as configModule1 from '../../../contracts/config';
// import { PayWith } from '@thirdweb-dev/react/solana';

const Banner = () => {
  const [isActiveNotification, setIsActiveNotification] = useState(false);
  const [notificationDone, setNotificationDone] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState('');

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    variableWidth: true,
    pauseOnHover: true,
  };


  const [currentStage, setCurrentStage] = useState(1);
  const [currentBonus, setCurrentBonus] = useState(20);
  const [stageEnd, setStageEnd] = useState(1733996440);
  const [presaleToken, setPresaleToken] = useState(1700000);
  const [tokenSold, setTokenSold] = useState(80000);
  const [tokenPercent, setTokenPercent] = useState(13);
  const [tokenDecimals, setTokenDecimals] = useState(6);
  const [tokenSubDecimals, setTokenSubDecimals] = useState(0);


  return (
    <>
      {/* <ThirdwebProvider desiredChainId={1}> */}
        <BannerWrapper>
          <div className="mb-20 container">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-20 text-center">
                  <h1 className="banner-title">
                    Unified Decentralized <br /> Platform
                  </h1>
                  <p className="banner-subtitle">
                    Buy tokens now and reap the benefits of the blockchain
                    revolution!
                  </p>

                  <div className="presale-card-wrapper">
                    <div className="presale-card">
                      <div className="presale-card-header">
                        <h5 className="ff-outfit fw-600 text-white text-uppercase">
                          ⚡ BUY IN BEFORE PRICE INCREASES!
                        </h5>
                      </div>

                      <div className="presale-card-counter">
                        <Countdown endDate={stageEnd} font="title2" />
                      </div>

                      <div className="presale-card-body">
                        <div className="mb-1 d-flex align-items-center justify-content-between flex-wrap">
                          <h5 className="fw-600 text-uppercase text-white">
                            Stage {currentStage} : {currentBonus}% Bonus !
                          </h5>
                          <h5 className="fw-600 text-uppercase text-white">
                            {tokenSold} / {presaleToken}
                          </h5>
                        </div>

                        <div className="mb-35">
                          <Progressbar done={tokenPercent} variant="green2" />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-slider-wrapper">
            <div className="scroll-slider-content">
              <Slider {...settings} className="gittu-slider">
                {SliderData?.map((item, i) => (
                  <div key={i} className="slider-item">
                    {item.text && <p>{item.text}</p>}
                    {item.socialLinks?.map((socialLinkItem, sid) => (
                      <a key={sid} href={socialLinkItem.url}>
                        <img src={socialLinkItem.icon} alt="icon" />
                      </a>
                    ))}
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </BannerWrapper>

        {/* notification modal */}
        {isActiveNotification && (
          <Notification
            notificationDone={notificationDone}
            textMessage={notificationMsg}
          />
        )}
    </>
  );
};

export default Banner;
