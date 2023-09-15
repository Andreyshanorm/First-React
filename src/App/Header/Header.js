import './Header.css';
import { useEffect } from 'react';



function Header() {
    useEffect(() => {
        window.setInterval(function () {
            const clock = document.getElementById('self-clock')
            let date = new Date();
            let hours = date.getHours();
            let min = date.getMinutes();
            let sec = date.getSeconds();


            if (hours < 10){hours='0' + hours}
            if (min < 10){min='0' + min}
            if (sec < 10){sec='0' + sec}

            
            let countClock = hours + ':' + min + ':' + sec;
            clock.innerHTML = countClock
        })
        
    })



    return(
        <header className="header">
            <div className="header__left-part">
                <div className="level">
                    <p className="level__num header-text-green">48</p>
                    <p className="level__text left-header-text">Level</p>
                </div>
                <div className="header__left-part-add-icon">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    >
                    <path
                        d="M4.147 10.595V6.448H0V4.147H4.147V0H6.461V4.147H10.608V6.448H6.461V10.595H4.147Z"
                        fill="#E84A4A"
                    />
                    </svg>
                </div>
                <div className="coins">
                    <p className="coins__num header-text-green">1,425</p>
                    <p className="coins__text left-header-text">Coins Awarded</p>
                </div>
                </div>
                <div className="header__right-part">
                <p className="rigth-part__text-white">Credits</p>
                <div className="rigth-part__text-grey">
                    Server Time: <span>8 : 42</span>
                </div>
                <div className="rigth-part__text-grey">
                    Local Time: <span id='self-clock'></span>
                </div>
            </div>
        </header>
    );
}

export default Header;