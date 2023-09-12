import './SectionCenter.css';
import mainImg from './image 1.png'

function SectionCenter() {
    return (
        <div className="main-img__block">
          <div className="main-img__text">
            <p>
              Swimming through a vast network of interconnected devices and
              servers, spreading joy and whimsy to users across the globe
            </p>
            <p className="signature">Artwork generated with midjourney</p>
          </div>
          <img src={mainImg} alt="" className="main-img-block__item" />
        </div>
    );
}

export default SectionCenter;