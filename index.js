var client_name = prompt("Enter your name")
var client = client_name.replace(client_name.charAt(0),client_name.charAt(0).toUpperCase())

function run(){
    // document.body.style.height = '100%';
    document.getElementsByTagName('div')[0].style.display = 'block';
    document.getElementById('intro').remove();
}


var params = new URLSearchParams(window.location.search)

if (client.length == 0){
    document.title = `Happy Diwali!`
    document.getElementsByTagName('h1')[0].textContent = `Happy Diwali. Press on Screen!`

}else{
    document.title = `Happy Diwali - ${client}!`
    if (params.get('n')!=null){
    document.getElementsByTagName('h1')[0].textContent = `Happy Diwali to ${client} from ${params.get('n')}. Press on Screen!`
    }else{
    document.getElementsByTagName('h1')[0].textContent = `Happy Diwali from me to ${client}. Press on Screen!`
    }
}

function diwaliTimer(){
    var date = new Date("Oct 24, 2022 00:00:00").getTime();
    var now = new Date().getTime();
    timeleft = date - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    let s1 = "s";
    let s2 = "s";
    let s3 = "s";
    let s4 = "s";

    if (seconds==0&&minutes==0&&hours==0&&days==0){
        document.getElementById("timer").textContent = `Diwali has started!!!`
    }
    if(days==1){
        s1 = ""
    }else{
        s1 = "s"
    }
    if(hours==1){
        s2 = ""
    }else{
        s2 = "s"
    }
    if(days==1){
        s3 = ""
    }else{
        s3 = "s"
    }
    if(seconds==1){
        s4 = ""
    }else{
        s4 = "s"
    }
    document.getElementById("timer").textContent = `Diwali starts in ${days} day${s1} ${hours} hour${s2} ${minutes} minute${s3} and ${seconds} second${s4}.`
}

setInterval(diwaliTimer, 1000);

function textGreet(){
    if (params.has('n') == true){
        var url = `https://wa.me/?text=Hello, ${client_name} have sent you a greeting, click ${window.location.href.replace(`n=${params.get('n')}`, '')}=${client_name} to visit.`;
        }
    else if(client_name.length == 0){
        var url = `https://wa.me/?text=Hello, I have sent you a greeting, click ${window.location.href.replace(`n=${params.get('n')}`, '')}tovisit.`;
        }
        window.open(url, '_blank')
}

function emailGreet(){
    const subject = 'Happy Diwali';
    var body = `Hello ${client} have sent you a greeting, go to ${window.location.href}?n=${client} to visit.`;
    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank')
}

function copyURL(){
    let current_url = window.location.href
    navigator.clipboard.writeText(current_url);
    alert('URL Copied!')
}

function playSong(){
    let play_song = new Audio("song.mp3");
    play_song.play();
}

document.body.addEventListener('click', e=>{
    setTimeout(playSong, 0);
    setInterval(playSong, 30000);
}, {once: true});

document.getElementsByTagName('div')[0].style.display = 'none';
setTimeout(run, 1180)