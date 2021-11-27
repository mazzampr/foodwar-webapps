const btn = document.querySelector('.btn-top');

const scrollFunction = () => {
    if(document.documentElement.scrollTop > 350) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
}

const topScroll = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


window.addEventListener('scroll', scrollFunction);
btn.addEventListener('click', topScroll);

