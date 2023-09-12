import './Main.css';
import Corner from './img/Vector 6.svg'
import profileImg from './img/Rectangle 6.png'
import mainImg from './img/image 1.png'
import firstAchievImg from './img/Screenshot 2023-03-17 at 07.13 1.png'
import secondAchievImg from './img/Screenshot 2023-03-17 at 07.14 1.png'


function Main() {
    return(
        <main class="main">
        <div class="profile__block">
          <div class="profile__top-part">
            <div class="profile__img-container">
              <img src={profileImg} alt="" class="img__profile" />
              <img
                src={Corner}
                alt=""
                class="top-left profile-borders"
              />
              <img
                src={Corner}
                alt=""
                class="top-right profile-borders"
              />
              <img
                src={Corner}
                alt=""
                class="bottom-left profile-borders"
              />
              <img
                src={Corner}
                alt=""
                class="bottom-right profile-borders"
              />
            </div>
            <div class="profile__info-container">
              <ul class="profile__info-list">
                <li class="info-list__item">
                  <p class="info-item-li__head">NAME</p>
                  <p class="info-item-li__body">Andrey Gorbachev</p>
                </li>
                <li class="info-list__item">
                  <p class="info-item-li__head">occupation</p>
                  <p class="info-item-li__body">Frontend Beginner</p>
                </li>
                <li class="info-list__item">
                  <p class="info-item-li__head">corporation</p>
                  <p class="info-item-li__body">Legacy.ai</p>
                </li>
                <li class="info-list__item">
                  <p class="info-item-li__head">availability</p>
                  <p class="info-item-li__body">open for hire</p>
                </li>
                <li class="info-list__item-withouthover">
                  <p class="info-item-li__head">social</p>
                  <a href="https://t.me/Adreyshanorm">
                    <div class="info-item-li__body">
                      open connection
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                      >
                        <path
                          d="M14.341 12.0301L18.684 16.3731L13.028 22.0291H11.028V15.3431L6.66402 19.7071L5.24902 18.2931L11.028 12.5151V11.5451L5.24902 5.76505L6.66402 4.35105L11.028 8.71505V2.02905H13.028L18.684 7.68605L14.341 12.0301ZM13.028 13.5441V19.2011L15.856 16.3731L13.028 13.5441ZM13.028 10.5141L15.856 7.68605L13.028 4.85805V10.5151V10.5141Z"
                          fill="#E84A4A"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="profile__bottom-part">
            <p class="notes__title">Beatiful Note:</p>
            <p class="notes__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
              beatae?
            </p>
          </div>
        </div>
        <div class="main-img__block">
          <div class="main-img__text">
            <p>
              Swimming through a vast network of interconnected devices and
              servers, spreading joy and whimsy to users across the globe
            </p>
            <p class="signature">Artwork generated with midjourney</p>
          </div>
          <img src={mainImg} alt="" class="main-img-block__item" />
        </div>
        <div class="active-quest__block">
            <div class="tabs__nav">
                <div class="tabs__nav-btn active" data-tab="#tab-1">
                    <div class="btn__items">
                        <p class="tabs-btn__title">Active Quest</p>
                        <p class="tabs-btn__sub-title">the react skill-up line</p>
                        <p class="quest__title">Quest name</p>
                        <p class="quest__name">React website</p>

                        <p class="quest__title">Quest name</p>
                        <p class="quest__content">
                            Build next website. Implement a full react website with
                            multiple routers, UI elements and tricky styling. Make it all
                            work great!
                        </p>
                        <p class="quest__title last">Rewards</p>
                        <div class="rewards__list">
                        <div class="rewards-list__item">
                            <img
                            src={firstAchievImg}
                            alt=""
                            />
                            <p class="score">+5</p>
                        </div>
                        <div class="rewards-list__item">
                            <img
                            src={secondAchievImg}
                            alt=""
                            />
                            <p class="score">+25</p>
                        </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
}

export default Main;