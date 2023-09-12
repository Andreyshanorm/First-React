import Corner from './Vector 6.svg'
import profileImg from './Rectangle 6.png'
import './SectionLeft.css'

function SectionLeft(props) {
    return (
        <div className="profile__block">
          <div className="profile__top-part">
            <div className="profile__img-container">
              <img src={profileImg} alt="" className="img__profile" />
              <img
                src={Corner}
                alt=""
                className="top-left profile-borders"
              />
              <img
                src={Corner}
                alt=""
                className="top-right profile-borders"
              />
              <img
                src={Corner}
                alt=""
                className="bottom-left profile-borders"
              />
              <img
                src={Corner}
                alt=""
                className="bottom-right profile-borders"
              />
            </div>
            <div className="profile__info-container">
              <ul className="profile__info-list">
                <li className="info-list__item">
                  <p className="info-item-li__head">NAME</p>
                  <p className="info-item-li__body">Andrey Gorbachev</p>
                </li>
                <li className="info-list__item">
                  <p className="info-item-li__head">occupation</p>
                  <p className="info-item-li__body">Frontend Beginner</p>
                </li>
                <li className="info-list__item">
                  <p className="info-item-li__head">corporation</p>
                  <p className="info-item-li__body">Legacy.ai</p>
                </li>
                <li className="info-list__item">
                  <p className="info-item-li__head">availability</p>
                  <p className="info-item-li__body">open for hire</p>
                </li>
                <li className="info-list__item-withouthover">
                  <p className="info-item-li__head">social</p>
                  <a href="https://t.me/Adreyshanorm">
                    <div className="info-item-li__body">
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
          <div className="profile__bottom-part">
            <p className="notes__title">Beatiful Note:</p>
            <p className="notes__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
              beatae?
            </p>
          </div>
        </div>
    );
}

export default SectionLeft;