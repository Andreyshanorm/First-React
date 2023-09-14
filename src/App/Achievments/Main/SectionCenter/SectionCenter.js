import './SectionCenter.css';
import { Cards } from "./data/acheivments"



function SectionCenter() {
    return (
        <div className="main-acheiv__block">
          <div className="main-acheiv__content">
            <h2 className="achiev-content__title">Achievments</h2>
            <div className="filter__block">
              <p className="filter__title">Filter</p>
              <div className="filter__menu">
                <label className="in-progress filter active">
                  <input type="checkbox" className="toggle__real"/>
                  <span className="toggle__fake"></span>
                  <p>Achieved</p>
                </label>
                <label className="achieved filter">
                  <input type="checkbox" className="toggle__real"/>
                  <span className="toggle__fake"></span>
                  <p>To DO</p>
                </label>
              </div>
            </div>
            <div className="cards-list__container">
              <div className="cards-list">
                {Cards.map((item) => 
                  <div className={item.classLink}>
                    <div className="card-list-item__img-container">
                      <img src={item.img} alt="" />
                      <div className="card__tag"><span>{item.type}</span></div>
                    </div>
                    <h3 className="card-list-item__title">{item.text}</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
    );
}

export default SectionCenter;