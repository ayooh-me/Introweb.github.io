const switchMode = document.querySelector('.switch input[type="checkbox"]')
const switchMode2 =  document.querySelector('.switch-responsive input[type="checkbox"]')
function darkMode(s){
    if(s.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark')
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
    }
}
switchMode.addEventListener('change', darkMode, false);
switchMode2.addEventListener('change', darkMode, false);

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

// FILL PROJECT HTML
function getRepositories(){
    var ul = $('div.project-wrapper');
    var count = 15; // number of images
    axios.get('https://api.github.com/users/Zynfinity/subscriptions').then(async ({data}) => {
        const filter = data.filter(s => s.language != null)
        data = filter
        for(var i = 0; i < data.length; i++) {
            ul.append(`<div class="list animate__animated animate__bounceInLeft" id=${i}></div>`);
            const div = $(`div > #${i}`)
            //img and title
            div.append(`<div class="repo-title" id=title-${i}></div>`)
            const title = $(`div > #title-${i}`)
            title.append(`<img class="github-picture" src=${data[i].owner.avatar_url}/>`)
            title.append(`<h3>${data[i].name}</h3>`)
            //language
            div.append(`<span class="language">${data[i].language ? data[i].language : ''}</span>`)
            //desc
            div.append(`<p class="description">${data[i].description ? data[i].description : 'Tidak ada Deskripsi'}</p>`)
            //github
            div.append(`<button class="github"><a class="github-url" href="${data[i].html_url}" target="_blank">See On Github</a></button>`)
        }
    })
}
getRepositories()
