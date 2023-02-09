const switchMode = document.querySelector('.switch input[type="checkbox"]')
function darkMode(s){
    if(s.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark')
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
    }
}
switchMode.addEventListener('change', darkMode, false);

const ul = document.querySelector('ul')
const aa = document.querySelectorAll('a')
ul.addEventListener('click', function(e){
    if(e.target.classList.contains('menu')){
        aa.forEach(function(a){
            a.className = "menu"
        })
        e.target.classList.add('active')
    }
})
function playAudio(){
    const audio = document.getElementById('myAudio')
    audio.play()
}
