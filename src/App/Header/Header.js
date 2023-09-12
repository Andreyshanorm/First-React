import './Header.css';



function Header() {
    return(
        <header class="header">
            <div class="header__left-part">
            <div class="level">
                <p class="level__num header-text-green">48</p>
                <p class="level__text left-header-text">Level</p>
            </div>
            <div class="header__left-part-add-icon">
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
            <div class="coins">
                <p class="coins__num header-text-green">1,425</p>
                <p class="coins__text left-header-text">Coins Awarded</p>
            </div>
            </div>
            <div class="header__right-part">
            <p class="rigth-part__text-white">Credits</p>
            <div class="rigth-part__text-grey">
                Server Time: <span>8 : 42</span>
            </div>
            <div class="rigth-part__text-grey">
                Local Time: <span>15 : 42</span>
            </div>
            </div>
        </header>
    );
}

export default Header;