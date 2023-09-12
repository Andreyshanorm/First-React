const changeProfileBackground = () => {
    const profileListItem =  document.querySelectorAll('.info-list__item')
    console.log(profileListItem);
    profileListItem.forEach((item, index) => {
        item.addEventListener('mouseover', () => {
            item.classList.add('focus');
        })

        item.addEventListener('mouseout', () => {
            item.classList.remove('focus');
        })
    })
}

changeProfileBackground()