console.log('lets write some javascript');

// async function getsong(){
//     let a = await fetch("http://127.0.0.1:5501/OXZ%20THUNDER/MUSIC/")
//     let respone = await a.text()
//     console.log(respone);
//     let div = document.createElement("div")
//     div.innerHTML = respone;
//     let as = div.getElementsByTagName("a")
//     let songs = []
//     for (let i = 0; i < as.length; i++) {
//         const element = as[i];
//         if (element.href.endsWith(".mp3")) {
//             songs.push(element.href.split("/MUSIC/")[1]);
//         }
//     }
//     return songs
// }

// const playMusic = (track) => {
//     let audio = new Audio("/OXZ%20THUNDER/MUSIC/" + track);
//     audio.play();
// };


// async function main(){
//     let songs = await getsong()
//     console.log(songs)

//     let songUL = document.querySelector(".songList").getElementsByClassName("innerSong")[0]
//     for (const song of songs) {
//         songUL.innerHTML = songUL.innerHTML + `<li> ${song.replaceAll("%20", " ")} </li>`
//     }
//     Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
//         e.addEventListener("click",element=>{
//             // console.log(e.querySelector(".info").firstElementChild.innerHTML)
//             playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
//         })
//     });


//     var audio = new Audio(songs[0]);
//     audio.muted = true;     
//     audio.play();

//     audio.addEventListener("loadeddata", ()=>{
//         let duration = audio.duration;
//         console.log(duration)
//     })
// }
// main()   


let play = document.querySelector(".play")
let pause = document.querySelector(".pause")
function transform1(){    
    play.addEventListener("click", ()=>{
        play.style.display = "none"
        play.style.position = "absolute"
        pause.style.display = "block"
        pause.style.position = "relative"
        audio.play()
    });
    pause.addEventListener("click", ()=>{
        pause.style.display = "none"
        pause.style.position = "absolute"
        play.style.display = "block"
        play.style.position = "relative"
        audio.pause();   
    });

    let volume = document.querySelector(".volume")
    let mute = document.querySelector(".mute")
    volume.addEventListener("click", ()=>{
        volume.style.display = "none"
        volume.style.position = "absolute"
        mute.style.display = "block"
        mute.style.position = "relative"
        audio.muted = true;
    })
    mute.addEventListener("click", ()=>{
        mute.style.display = "none"
        mute.style.position = "absolute"
        volume.style.display = "block"
        volume.style.position = "relative"
        audio.muted = false;
    })
}
transform1()

function bounce() {
    let oxzCard = document.querySelectorAll(".a")
    oxzCard.forEach(element => {
        element.addEventListener("click", ()=>{
            element.style.transition = "all .08s ease-in-out"
            element.style.transform = "scale(0.9)"
            setTimeout(() => {
                element.style.transform = "scale(1)"
            }, 50);
        })
    });
}
bounce()

let songs = [
    {name: "1 2 3", src:"/MUSIC/1%20%202%20%203.mp3"},
    {name: "300 Miles", src:"/MUSIC/3000%20Miles.mp3"},
    {name: "After Hours", src:"/MUSIC/After%20Hours.mp3"},
    {name: "Alan Walker Faded", src:"/MUSIC/Alan%20Walker%20%20Faded.mp3"},
    {name: "Deep End", src:"/MUSIC/Deep%20End.mp3"},
    {name: "Despacito", src:"/MUSIC/Despacito.mp3"},
    {name: "Die For You", src:"/MUSIC/Die%20For%20You.mp3"},
    {name: "Eastside", src:"/MUSIC/Eastside.mp3"},
    {name: "Fire Again", src:"/MUSIC/Fire%20Again.mp3"},
    {name: "Greater than One", src:"/MUSIC/Greater%20than%20One.mp3"},
    {name: "All Girls Are The Same", src:"/MUSIC/All%20Girls%20Are%20The%20Same.mp3"},
    {name: "Happier", src:"/MUSIC/Happier.mp3"},
    {name: "Har Funn Maula", src:"/MUSIC/Har%20Funn%20Maula.mp3"},
    {name: "Heartbreak anniversary", src:"/MUSIC/Heartbreak%20anniversary.mp3"},
    {name: "Hurts So Good", src:"/MUSIC/Hurts%20So%20Good.mp3"}
]

let innerSong = document.querySelector(".innerSong");
let songList = document.querySelector(".songList");
let backword = document.querySelector(".backword");
let forword = document.querySelector(".forword");
let Name = document.querySelector(".name");
let popup = document.querySelector(".popup");
let popup2 = document.querySelector(".popup2");
let data = "";
songs.forEach((e,index)=>{
    data = data + `<div data-value=${index} class="my-2 a text-sm cursor-pointer border rounded-3xl font-semibold px-5 py-3">
    ${e.name} </div>`;
   innerSong.innerHTML = data;
    
})

let audio = new Audio();
songList.addEventListener("click",(e)=>{
    console.log(songs[e.target.dataset.value].src);
    audio.src = songs[e.target.dataset.value].src;
    audio.play();

let durationDisplay = document.querySelector(".timing");
let currentTimeDisplay = document.querySelector(".timing2");

audio.addEventListener("timeupdate", () => {
    let currentTime = audio.currentTime;
    let totalTime = audio.duration;
    currentTimeDisplay.textContent = formatTime(currentTime) + ' / ';
    durationDisplay.textContent = formatTime(totalTime);
    document.querySelector(".circle").style.transition = "all .5s linear";
    document.querySelector(".circle").style.left = (audio.currentTime/ audio.duration)*100 +"%";
});

function formatTime(timeInSeconds) {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = Math.floor(timeInSeconds % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

document.querySelector(".seekBar").addEventListener("click",(e)=>{
    let percentage = (e.offsetX/e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percentage + "%";
    audio.currentTime = ((audio.duration)*percentage)/100;
})

    play.style.display = "none"
    play.style.position = "absolute"
    pause.style.display = "block"
    pause.style.position = "relative"
    Name.innerHTML = e.target.innerHTML;
    
    let counter = 0;
    forword.onclick = () => {
        counter++;
    }
    forword.addEventListener("click",()=>{
        let vari2 = songs[parseInt(e.target.dataset.value) + counter]
        console.log(vari2.name);
        audio.src = songs[parseInt(e.target.dataset.value) + counter].src;
        audio.play();
        Name.innerHTML = vari2.name;
    })

    let revCounter = 0;
    backword.onclick = () => {
        revCounter--;
    }
    backword.addEventListener("click",()=>{
        let vari2 = songs[parseInt(e.target.dataset.value) + revCounter]
        console.log(vari2.name);
        audio.src = songs[parseInt(e.target.dataset.value) + revCounter].src;
        audio.play();
        Name.innerHTML = vari2.name;
    })
    function playMenu(){
            document.querySelector(".rightBottom").style.display = "block";
            document.querySelector(".rightMid").style.height = "77vh";
    }
    playMenu()
})



function slide() {
    let slide = document.querySelector(".slide2")
    slide.addEventListener("click",()=>{
        document.querySelector(".slide1").style.display = "block"
        document.querySelector(".slide2").style.display = "none"
        document.querySelector(".upper").style.height = "145px"
        document.querySelector(".home").style.display = "none"
        document.querySelector(".left").style.display = "block"
        document.querySelector(".left").style.background = "black"
        document.querySelector(".left").style.width = "92%"
        document.querySelector(".left").style.height = "88%"
        document.querySelector(".left").style.margin = "68px 12px"
    })
    let slide2 = document.querySelector(".slide1")
    slide2.addEventListener("click",()=>{
        document.querySelector(".left").style.display = "none"
        document.querySelector(".slide2").style.display = "block"
        document.querySelector(".slide1").style.display = "none"
    })
}
slide()


function applyBlur() {
    let blurr = document.querySelector(".blurr");
    let bl = document.querySelectorAll(".bl");
    
    blurr.addEventListener("click", () => {
    document.querySelector(".personalInfo").style.display = "block";
      bl.forEach(element => {
        element.style.filter = "blur(2px)";
      });
      popup.style.display = "block";
      popup.style.transition = "all .08s ease-in-out"
      popup.style.transform = "scale(0.5)"
      setTimeout(() => {
          popup.style.transform = "scale(1)"
      }, 1);
    });
    document.querySelector(".cross").addEventListener("click",()=>{
        popup.style.display = "none";
        bl.forEach(element => {
            element.style.filter = "blur(0)";
        });
        document.querySelector(".infoOxz").style.display = "none";

    });
    document.querySelector(".OxzInfo").addEventListener("click",()=>{
        document.querySelector(".infoOxz").style.display = "block";
        bl.forEach(element => {
            element.style.filter = "blur(2px)";
          });
          document.querySelector(".personalInfo").style.display = "none";
          popup.style.display = "block";
          popup.style.transition = "all .08s ease-in-out"
          popup.style.transform = "scale(0.5)"
          setTimeout(() => {
            popup.style.transform = "scale(1)"
        }, 1);
    });
    
}
applyBlur();


let search = document.querySelector(".search")
search.addEventListener("click", () => {
    search.style.display = "none"
    document.querySelector(".search2").style.display = "block"
})


function applyBlur2() {
    let bug = document.querySelector(".bug");
    let bl = document.querySelectorAll(".bl");
    
    document.querySelector(".cross2").addEventListener("click",()=>{
    popup2.style.display = "none";
    bl.forEach(element => {
        element.style.filter = "blur(0)";
    });
    document.querySelector(".bugg").style.display = "none";
    });
bug.addEventListener("click", () => {
document.querySelector(".bugg").style.display = "block";
document.querySelector(".aboutME").style.display = "none";
  bl.forEach(element => {
      element.style.filter = "blur(2px)";
  });
  popup2.style.display = "block";
  popup2.style.transition = "all .08s ease-in-out"
  popup2.style.transform = "scale(0.5)"
  setTimeout(() => {
      popup2.style.transform = "scale(1)"
  }, 1);
});
    document.querySelector(".about").addEventListener("click",()=>{
        document.querySelector(".aboutME").style.display = "block";
        bl.forEach(element => {
            element.style.filter = "blur(2px)";
          });
          document.querySelector(".bugg").style.display = "none";
          popup2.style.display = "block";
          popup2.style.transition = "all .08s ease-in-out"
          popup2.style.transform = "scale(0.5)"
          setTimeout(() => {
            popup2.style.transform = "scale(1)"
        }, 1);
    });
} 
applyBlur2()


let rock = [
    {name: "Baby", src:"/MUSIC/Baby.mp3"},
    {name: "After Hours", src:"/MUSIC/After%20Hours.mp3"},
    {name: "Alan Walker Faded", src:"/MUSIC/Alan%20Walker%20%20Faded.mp3"},
    {name: "Deep End", src:"/MUSIC/Deep%20End.mp3"},
    {name: "1 2 3", src:"/MUSIC/1%20%202%20%203.mp3"},
    {name: "Despacito", src:"/MUSIC/Despacito.mp3"},
    {name: "Die For You", src:"/MUSIC/Die%20For%20You.mp3"},
    {name: "Eastside", src:"/MUSIC/Eastside.mp3"},
    {name: "Fire Again", src:"/MUSIC/Fire%20Again.mp3"},
    {name: "Greater than One", src:"/MUSIC/Greater%20than%20One.mp3"},
    {name: "Love Me", src:"/MUSIC/Love%20Me.mp3"},
    {name: "One Dance", src:"/MUSIC/One%20Dance.mp3"},
    {name: "Har Funn Maula", src:"/MUSIC/Har%20Funn%20Maula.mp3"},
    {name: "PARANOIA", src:"/MUSIC/PARANOIA.mp3"},
    {name: "people", src:"/MUSIC/people.mp3"}
]

let data1 = "";
let rockSongs = document.querySelector(".rockSongs");
rock.forEach((e,index)=>{
    data1 = data1 + `<div data-value=${index} class="my-2 a text-bg-green-400 text-sm cursor-pointer border rounded-3xl font-semibold px-5 py-3">
    ${e.name} </div>`;
   rockSongs.innerHTML = data1; 
})

rockSongs.addEventListener("click",(e)=>{
    console.log(rock[e.target.dataset.value].src);
    audio.src = rock[e.target.dataset.value].src;
    audio.play();
    play.style.display = "none"
    play.style.position = "absolute"
    pause.style.display = "block"
    pause.style.position = "relative"
    Name.innerHTML = e.target.innerHTML;
    
    let durationDisplay = document.querySelector(".timing");
    let currentTimeDisplay = document.querySelector(".timing2");
    
    audio.addEventListener("timeupdate", () => {
        let currentTime = audio.currentTime;
        let totalTime = audio.duration;
        currentTimeDisplay.textContent = formatTime(currentTime) + ' / ';
        durationDisplay.textContent = formatTime(totalTime);
        document.querySelector(".circle").style.transition = "all .5s linear";
        document.querySelector(".circle").style.left = (audio.currentTime/ audio.duration)*100 +"%";
    });
    
    function formatTime(timeInSeconds) {
        let minutes = Math.floor(timeInSeconds / 60);
        let seconds = Math.floor(timeInSeconds % 60);
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    
    document.querySelector(".seekBar").addEventListener("click",(e)=>{
        let percentage = (e.offsetX/e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percentage + "%";
        audio.currentTime = ((audio.duration)*percentage)/100;
    })
    

    let counter = 0;
    forword.onclick = () => {
        counter++;
    }
    forword.addEventListener("click",()=>{
        let vari2 = rock[parseInt(e.target.dataset.value) + counter]
        console.log(vari2.name);
        audio.src = rock[parseInt(e.target.dataset.value) + counter].src;
        audio.play();
        Name.innerHTML = vari2.name;
    })

    let revCounter = 0;
    backword.onclick = () => {
        revCounter--;
    }
    backword.addEventListener("click",()=>{
        let vari2 = rock[parseInt(e.target.dataset.value) + revCounter]
        console.log(vari2.name);
        audio.src = rock[parseInt(e.target.dataset.value) + revCounter].src;
        audio.play();
        Name.innerHTML = vari2.name;
    })
    function playMenu(){
            document.querySelector(".rightBottom").style.display = "block";
            document.querySelector(".rightMid").style.height = "77vh";
    }
    playMenu()
    document.querySelector(".cross3").addEventListener("click",()=>{
        document.querySelector(".popup3").style.display = "none";
        bl.forEach(element => {
            element.style.filter = "blur(0)";
        });
        document.querySelector(".rockSongs").style.display = "none";
        });
})

document.querySelector(".rock").addEventListener("click",()=>{
    document.querySelector(".popup3").style.display = "block";
})


// let LightMusic = [
//     {name: "Senorita", src:"/MUSIC/Senorita.mp3"},
//     {name: "300 Miles", src:"/MUSIC/3000%20Miles.mp3"},
//     {name: "Shameless", src:"/MUSIC/Shameless.mp3"},
//     {name: "Alan Walker Faded", src:"/MUSIC/Alan%20Walker%20%20Faded.mp3"},
//     {name: "Deep End", src:"/MUSIC/Deep%20End.mp3"},
//     {name: "Self Love", src:"/MUSIC/Self%20Love.mp3"},
//     {name: "In the Stars", src:"/MUSIC/In%20the%20Stars.mp3"},
//     {name: "Eastside", src:"/MUSIC/Eastside.mp3"},
//     {name: "All Girls Are The Same", src:"/MUSIC/All%20Girls%20Are%20The%20Same.mp3"},
//     {name: "Happier", src:"/MUSIC/Happier.mp3"},
//     {name: "After Hours", src:"/MUSIC/After%20Hours.mp3"},
//     {name: "Heartbreak anniversary", src:"/MUSIC/Heartbreak%20anniversary.mp3"},
//     {name: "Hurts So Good", src:"/MUSIC/Hurts%20So%20Good.mp3"}
// ]


// let data2 = "";
// let Light = document.querySelector(".Light");
// LightMusic.forEach((e,index)=>{
//     data2 = data2 + `<div data-value=${index} class="my-2 a text-bg-green-400 text-sm cursor-pointer border rounded-3xl font-semibold px-5 py-3">
//     ${e.name} </div>`;
//    Light.innerHTML = data2; 
// })

// Light.addEventListener("click",(e)=>{
//     console.log(LightMusic[e.target.dataset.value].src);
//     audio.src = LightMusic[e.target.dataset.value].src;
//     audio.play();
//     play.style.display = "none"
//     play.style.position = "absolute"
//     pause.style.display = "block"
//     pause.style.position = "relative"
//     Name.innerHTML = e.target.innerHTML;
    
//     let counter = 0;
//     forword.onclick = () => {
//         counter++;
//     }
//     forword.addEventListener("click",()=>{
//         let vari2 = LightMusic[parseInt(e.target.dataset.value) + counter]
//         console.log(vari2.name);
//         audio.src = LightMusic[parseInt(e.target.dataset.value) + counter].src;
//         audio.play();
//         Name.innerHTML = vari2.name;
//     })

//     let revCounter = 0;
//     backword.onclick = () => {
//         revCounter--;
//     }
//     backword.addEventListener("click",()=>{
//         let vari2 = LightMusic[parseInt(e.target.dataset.value) + revCounter]
//         console.log(vari2.name);
//         audio.src = LightMusic[parseInt(e.target.dataset.value) + revCounter].src;
//         audio.play();
//         Name.innerHTML = vari2.name;
//     })
//     function playMenu(){
//             document.querySelector(".rightBottom").style.display = "block";
//             document.querySelector(".rightMid").style.height = "77vh";
//     }
//     playMenu()
// })

// document.querySelector(".cross3").addEventListener("click",()=>{
//     document.querySelector(".popup3").style.display = "none";
//     bl.forEach(element => {
//         element.style.filter = "blur(0)";
//     });
//     // document.querySelector(".bugg").style.display = "none";
//     });
// document.querySelector(".rock").addEventListener("click",()=>{
//     document.querySelector(".popup3").style.display = "block";
// })



// let gmaing = [
//     {name: "Gangsta", src:"/MUSIC/Gangsta.mp3"},
//     {name: "From The Embers", src:"/MUSIC/From%20The%20Embers.mp3"},
//     {name: "After Hours", src:"/MUSIC/After%20Hours.mp3"},
//     {name: "Alan Walker Faded", src:"/MUSIC/Alan%20Walker%20%20Faded.mp3"},
//     {name: "Deep End", src:"/MUSIC/Deep%20End.mp3"},
//     {name: "Despacito", src:"/MUSIC/Despacito.mp3"},
//     {name: "Die For You", src:"/MUSIC/Die%20For%20You.mp3"},
//     {name: "Natural", src:"/MUSIC/Natural.mp3"},
//     {name: "Fire Again", src:"/MUSIC/Fire%20Again.mp3"},
//     {name: "Greater than One", src:"/MUSIC/Greater%20than%20One.mp3"},
//     {name: "One more Short", src:"/MUSIC/One%20more%20Short.mp3"},
//     {name: "One Dance", src:"/MUSIC/One%20Dance.mp3"},
//     {name: "Har Funn Maula", src:"/MUSIC/Har%20Funn%20Maula.mp3"},
//     {name: "PARANOIA", src:"/MUSIC/PARANOIA.mp3"},
//     {name: "Playground", src:"/MUSIC/Playground.mp3"}
// ]


// let chillMusic = [
//     {name: "Let-Me-Love-You", src:"/MUSIC/Let-Me-Love-You.mp3"},
//     {name: "300 Miles", src:"/MUSIC/3000%20Miles.mp3"},
//     {name: "Living-Life-In-The-Night", src:"/MUSIC/Living-Life-In-The-Night.mp3"},
//     {name: "Believer", src:"/MUSIC/Believer.mp3"},
//     {name: "Deep End", src:"/MUSIC/Deep%20End.mp3"},
//     {name: "Love-Me", src:"/MUSIC/Love-Me.mp3"},
//     {name: "One Of The Girls", src:"/MUSIC/One%20Of%20The%20Girls.mp3"},
//     {name: "Roses", src:"/MUSIC/Roses.mp3"},
//     {name: "All Girls Are The Same", src:"/MUSIC/All%20Girls%20Are%20The%20Same.mp3"},
//     {name: "Happier", src:"/MUSIC/Happier.mp3"},
//     {name: "Slow motion", src:"/MUSIC/Slow%20motion.mp3"},
//     {name: "She Knows", src:"/MUSIC/She%20Knows.mp3"},
//     {name: "Sorry", src:"/MUSIC/Sorry.mp3"}
// ]



// let Kpop = [
//     {name: "JENNIE-You-Me", src:"/MUSIC/JENNIE-You-Me.mp3"},
//     {name: "Speechless", src:"/MUSIC/Speechless.mp3"},
//     {name: "STAY", src:"/MUSIC/STAY.mp3"}
// ]

// let Anime = [
//     {name: "your name_Nandemonaiya", src:"/MUSIC/your%20name_Nandemonaiya.mp3"},
//     {name: "zenzen - your name", src:"/MUSIC/zenzen%20-%20your%20name.mp3"},
//     {name: "Sparkle-Your-Name", src:"/MUSIC/Sparkle-Your-Name.mp3"},
//     {name: "Shinzou wo Sasageyo", src:"/MUSIC/Shinzou%20wo%20Sasageyo.mp3"},
//     {name: "Wannabe", src:"/MUSIC/Wannabe.mp3"}
// ]
