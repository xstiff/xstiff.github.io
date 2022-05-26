let inp = document.querySelector('.input_');
let time_el = document.querySelector('.timeleft');
let btn_ = document.querySelector('.btn');
let avgtime_el = document.querySelector('.avgtime');
let avg_time = [];
let total_el = document.querySelector('.total');
let correct_el = document.querySelector('.correct');
let total = -1;
let correct_ = 0;
let time_left = 5.0;
let showmore_list = document.querySelector('.showmore-list');
let equasion = document.querySelector('.equasion');
let playbtn = document.querySelector('.play-btn');
let result = -1;
let playing = false;


let answear = -1;

inp.addEventListener('input', (x) => {
    _temp = x.target;
    if (inp.value == answear) {
        correct();
        _temp.value = '';
    }
    else if (_temp.value.length > 5) {
        _temp.value = '';
    }
    else if (Number(_temp.value) == NaN) {
        _temp.value = '';
    }
})

btn_.addEventListener('click', () => {
    hide_btn();
    clearInterval(time_);
    console.log('😎');
})

playbtn.addEventListener('click', () => {
    toggle_screen();
    playing = true;
    hide_btn();
})

toggle_screen = () => {
    document.querySelector('.screen-cover').classList.add('active');
}

hide_btn = () => {
    btn_.classList.toggle('hidden');
    btn_.disabled = true;
    inp.value = '';
    update_avg();
    // anim(0);
    setTimeout(() => {
        btn_.classList.toggle('hidden');
        btn_.disabled = false;

        timer(10)
        generate_new();
        // console.log('-1')
    }, 500);
}


correct = () => {
    _t = +(String(10 - time_left).slice(0,3))
    answear = -1;
    clearInterval(time_);
    anim(1);
    console.log(`You answeard in ${_t}s`);
    avg_time.push(_t);
    // clearInterval(time_);
    correct_ += 1;
    hide_btn();
    
}


update_avg = () => {
    // console.log(avg_time);
    sum_ = 0;
    total = total + 1
    if (avg_time.length > 0) {
        avg_time.forEach((x)=>{
            sum_ += x 
        })
        avg_ = sum_ / avg_time.length;
        avg_ = +(String(avg_).slice(0,4))
        avgtime_el.innerHTML = avg_;
    }
    total_el.innerHTML = total;
    correct_el.innerHTML = correct_;
    update_show_more();
}




let timer = (tf) => { // Timer( czas )

    time_ = setInterval( () => {
    if (tf == 0) {
        setTimeout(() => {
            timer(10)
        }, 1000);
        anim(0);
        update_avg();
        // console.log('Im finished')
        return clearInterval(time_);
    }

    else {
        tf = String(tf - 0.1).slice(0,3);
        time_left = tf;
        if (tf.length == 1){
            time_el.innerHTML = `${tf}.0`;
        }
        else {
            time_el.innerHTML = `${tf}`;
        }
    }


}, 100);

}

generate_new = () => { // 1 - || 2 + 
    // console.log('generating new numbers');
    n = Math.round( Math.random() * 1 ) + 1;
    let num1, num2, separator;
    num1 = Math.round( Math.random() * 100 ) + 12
    num2 = Math.round( Math.random() * 100 ) + 12
    switch(n){
        case 1:
            separator = '-';
            break
        case 2:
            separator = '+';
            break
    }

    if (num1 >= num2) {
        answear = eval(`${num1}${separator}${num2}`);
        console.log(answear)
        return equasion.innerHTML = `${num1}${separator}${num2}`;
    }
    answear = eval(`${num2}${separator}${num1}`);
    console.log(answear)
    return equasion.innerHTML = `${num2}${separator}${num1}`;
}





anim = (j) => {
    let to_toggle = [
        document.querySelector('.time'),
        document.querySelector('.time span'),
        document.querySelector('.equasion'),
        document.querySelector('.input_'),
    ]

    if (j == "1") {
        to_toggle.forEach((x) => {
            x.classList.toggle('correct');
            // document.querySelector('.btn').style.opacity = "0";
            
        })
        setTimeout(() => {
            to_toggle.forEach((x) => {
                x.classList.toggle('correct');
                // document.querySelector('.btn').style.opacity = "1";
                // generate_new();
            })
        }, 450);

    }
    else if (j == "0") {
        to_toggle.forEach((x) => {
            x.classList.toggle('wrong');
        })

        setTimeout(() => {
            to_toggle.forEach((x) => {
                x.classList.toggle('wrong');
                generate_new();
            })
        }, 450);

    }

}


document.querySelector('.showmore').addEventListener('click',
()=>{
    show_more();
})


show_more = () => {
    document.querySelector('.stat-list').classList.toggle('active');
}

update_show_more = () => {
    showmore_list.innerHTML = '';
    avg_time.forEach((q) =>  {
        showmore_list.innerHTML += `<li>${q}s</li>`;
    })
}
