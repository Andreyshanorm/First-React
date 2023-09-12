import './SectionRight.css';
import firstAchievImg from './Screenshot 2023-03-17 at 07.13 1.png'
import secondAchievImg from './Screenshot 2023-03-17 at 07.14 1.png'


function SectionRight(props) {
    return (
        <div className="active-quest__block">
            <div className="tabs__nav">
                <div className="tabs__nav-btn active" data-tab="#tab-1">
                    <div className="btn__items">
                        <p className="tabs-btn__title">Active Quest</p>
                        <p className="tabs-btn__sub-title">the react skill-up line</p>
                        <p className="quest__title">Quest name</p>
                        <p className="quest__name">React website</p>

                        <p className="quest__title">Quest name</p>
                        <p className="quest__content">
                            Build next website. Implement a full react website with
                            multiple routers, UI elements and tricky styling. Make it all
                            work great!
                        </p>
                        <p className="quest__title last">Rewards</p>
                        <div className="rewards__list">
                        <div className="rewards-list__item">
                            <img
                            src={firstAchievImg}
                            alt=""
                            />
                            <p className="score">+5</p>
                        </div>
                        <div className="rewards-list__item">
                            <img
                            src={secondAchievImg}
                            alt=""
                            />
                            <p className="score">+25</p>
                        </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default SectionRight;