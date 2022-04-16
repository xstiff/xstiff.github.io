const target = document.querySelector('.check');
const circle = document.querySelector('.circle');
const btn = document.querySelector('.button-send-1');
const container = document.querySelector('.send-container');
const h1 = document.querySelector('.sent-h1');



var elements = [document.querySelector('.news-in'), document.querySelector('.news')];



var tl = anime.timeline({
    autoplay: false
})

tl.add({ //1
    targets: btn,
    scale: 0,
    opacity: 0,
    easing: 'linear',
    duration:150,
    complete: () => {
        btn.style.display = 'none';
    },
})
tl.add({ //1.25
    targets:elements,
    duration:250,
    opacity:0,
    easing:'linear',
},'-=40')
tl.add({ //1.5
    targets: container,
    translateY: -150,
    duration:250,
    easing:'linear',
    complete: () => {
        btn.style.display = 'none';
    },
},'-=40')
tl.add({ //2
    targets: target.parentElement.parentElement,
    scale: 1.5,
    opacity:1,
    duration:450,
    easing: 'easeOutBack',
    begin: () => {
        target.parentElement.parentElement.style.display = 'inline-block';
    },
    
})
tl.add({ //3
    targets: target,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutCirc',
    fill: '#fff',
    duration:450,
    begin: () => {
        target.parentElement.style.display = 'block';
    },
})
tl.add({ //3
    targets: h1,
    duration:150,
    opacity:1
},'-=600')
  




btn.onclick = tl.restart;

