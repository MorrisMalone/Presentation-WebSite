// CSS: get value of navigation bar height and return it

function getNavHeight() {
    let navHeight = document.getElementById('navigation-bar').clientHeight;
    document.documentElement.style.setProperty('--offset', `${navHeight}px`);
    console.log(navHeight);
}


getNavHeight();

window.addEventListener('resize', getNavHeight);

// move the box shadow
/*
const area = document.getElementById('presentation');
const profil = document.getElementById('text-presentation');
const walk = 10;

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height} = area;
    let { offsetX: x, offsetY: y } = e;
    
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    console.log(profil);

    profil.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(0, 0, 0, 0.7)`;
}

area.addEventListener('mousemove', shadow);
*/