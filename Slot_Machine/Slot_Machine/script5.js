window.onload = function(){
    let value1 = document.getElementById('value1')
    let value2 = document.getElementById('value2')
    let value3 =  document.getElementById('value3')

    let inspeed = document.getElementById('inspeed')
    let btn1 = document.getElementById('btn1')
    let btn2 = document.getElementById('btn2')

    let flag = 0
    let sspeed
    let values=[
        'ds', 'os', 'ml', 'Na', 'da', 'ph', 'ch'
    ]

    let val1
    let val2
    let val3

    function getrandom(){
        return values[Math.floor(Math.random() *7)]
    }

    let animationid;
    function updateAnimation(newspeed){
        if(animationid) clearInterval(animationid)
        // console.log('n',newspeed)
        val1=value1.innerText
        val2=value2.innerText
        val3=value3.innerText
        if(newspeed==-5){
            animationid = setInterval(() => {
                value1.innerText=val1
                value2.innerText=val2
                value3.innerText=val3
            },100000)
        }
        if(newspeed>0){
            animationid = setInterval(() => {
                value1.innerText=getrandom()
                value2.innerText=getrandom()
                value3.innerText=getrandom()
            },1000/ newspeed)
        }
    }

    inspeed.onchange = function (event) {
        console.log('value changed ',event.target.value)
        // document.documentElement => this is 'root' of css
        document.documentElement.style.setProperty('--speed', event.target.value)
        sspeed=event.target.value
        if(flag==1){
            updateAnimation(event.target.value)
        }
    }

    btn1.onclick = function(){
        console.log('start')
        flag=1
        updateAnimation(sspeed)
        value1.style.animationPlayState='running'
        value2.style.animationPlayState='running'
        value3.style.animationPlayState='running'
        btn1.disabled=true
    }

    btn2.onclick = function(){
        btn2.disabled=true
        console.log('stop')
        if(sspeed-2 > 8){
            // console.log('1')
            setTimeout(function(){
                document.documentElement.style.setProperty('--speed', sspeed-2)
                updateAnimation(sspeed-2)
                sspeed=sspeed-2
            },1000)
        }
        if(sspeed-2 > 0){
            // console.log('6')
            setTimeout(function(){
                document.documentElement.style.setProperty('--speed', sspeed-2)
                updateAnimation(sspeed-2)
                sspeed=sspeed-2
            },2000)
        }
        if(sspeed-2 > 4){
            // console.log('3')
            setTimeout(function(){
                document.documentElement.style.setProperty('--speed', sspeed-2)
                updateAnimation(sspeed-2)
                sspeed=sspeed-2
            },3000)
        }
        if(sspeed-2 > 2){
            // console.log('4')
            setTimeout(function(){
                document.documentElement.style.setProperty('--speed', sspeed-2)
                updateAnimation(sspeed-2)
                sspeed=sspeed-2
            },4000)
        }
        if(sspeed-2 > 1){
            // console.log('5')
            setTimeout(function(){
                document.documentElement.style.setProperty('--speed', sspeed-2)
                updateAnimation(sspeed-2)
                sspeed=sspeed-2
            },5000)
        }
        if(sspeed>=0){
            // console.log('one')
            setTimeout(function(){
                document.documentElement.style.setProperty('--speed', 1)
                updateAnimation(1)
                updateAnimation(-5)

                value1.style.animationPlayState='paused'
                value2.style.animationPlayState='paused'
                value3.style.animationPlayState='paused'

                value1.style.transform='translateY(400px)'
                
                if(val1== val2 && val1==val3){
                    alert('YOU WIN!')
                }
                else{
                    alert('YOU LOSS!')
                    
                }
                //console.log('position ',value1.style.transform)
            },6000)
        }
        console.log('out')
    }
}