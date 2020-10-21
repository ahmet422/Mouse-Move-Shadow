const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 15;

function shadow(e){
    // console.log(e);
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    // upper two lines are the same as the line below
    const {offsetWidth: width , offsetHeight: height} = hero;
   
    let {offsetX: x, offsetY: y } = e;

    // console.log(this, e.target) this and e.target are different when you hover to actual div
    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x/width*walk) - (walk/2));
    const yWalk = Math.round((x/height*walk) - (walk/2));
    // console.log(xWalk,yWalk);
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
    
}

hero.addEventListener('mousemove', shadow);