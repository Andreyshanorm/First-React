const Clock = () => {
    const clock = document.getElementById('self-clock')
    window.onload = () => {
        window.setInterval(() => {
            let date = new Date();

            let hours = date.getHours();
            let min = date.getMinutes();
            let sec = date.getSeconds();

            let CountClock = hours + ':' + min + ':' + sec;
        }
        );
    }
}

Clock()