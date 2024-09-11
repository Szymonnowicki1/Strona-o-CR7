
function handleClick(clubname) {

    const ha2 = document.getElementById("ha2").style.display = "none";
    const clubsContainer = document.getElementById("clubs").style.display = "none";
    const clubInfo = document.getElementById("club-info").style.display = "block";
    const clubImage = document.getElementById("club-image");
    const matchesElement = document.getElementById("matches");
    const asistsElement = document.getElementById("asists");
    const goalsElement = document.getElementById("goals");
    const trophiesElement = document.getElementById("trophies");


    
    if(clubname == "sporting lizbona"){
        clubImage.innerHTML = '<img src="img/sporting_lizbona.webp" alt="" height="400" width="400">';
        matchesElement.innerText = "Matches Played: 31"; 
        asistsElement.innerHTML="Asists : 6";
        goalsElement.innerText = "Goals Scored: 5"; 
        trophiesElement.innerText = "Trophies: 1";

    }

    else if(clubname == "manchester united"){
        clubImage.innerHTML = '<img src="img/manchesterunited.png" alt="" height="400" width="400">';
        matchesElement.innerText = "Matches Played: 346"; 
        asistsElement.innerHTML="Asists : 64";
        goalsElement.innerText = "Goals Scored: 145"; 
        trophiesElement.innerText = "Trophies: 9";
    }

    else if(clubname == "real madryt"){
        clubImage.innerHTML = '<img src="img/Logo-real-madrid-club-clipart-PNG.png" alt="" height="400" width="400">';
        matchesElement.innerText = "Matches Played: 438"; 
        asistsElement.innerHTML="Asists : 131";
        goalsElement.innerText = "Goals Scored: 450"; 
        trophiesElement.innerText = "Trophies: 15";
    }

    else if(clubname == "juventus"){
        clubImage.innerHTML = '<img src="img/juventus-logo.png" alt="" height="400" width="400">';
        matchesElement.innerText = "Matches Played: 134"; 
        asistsElement.innerHTML="Asists : 22";
        goalsElement.innerText = "Goals Scored: 101"; 
        trophiesElement.innerText = "Trophies: 5";
    }

    else if(clubname == "all nassr"){
        clubImage.innerHTML = '<img src="img/al-nassr-fc-logo-1.png" alt="" height="400" width="400">';
        matchesElement.innerText = "Matches Played: 68"; 
        asistsElement.innerHTML="Asists : 17";
        goalsElement.innerText = "Goals Scored: 62"; 
        trophiesElement.innerText = "Trophies: 1";
    }

    else if(clubname == "portugal"){
        clubImage.innerHTML = '<img src="img/Portuguese_Football_Federation.svg.png" alt="" height="400" width="400">';
        matchesElement.innerText = "Matches Played: 212"; 
        asistsElement.innerHTML="Asists : 45";
        goalsElement.innerText = "Goals Scored: 130"; 
        trophiesElement.innerText = "Trophies: 5";
    }

}

function goBack() {
    document.getElementById("clubs").style.display = "flex";
    document.getElementById("club-info").style.display = "none";
    document.getElementById("ha2").style.display = "block";

 
}

var videos = [
    "mxQOOMX4NQM", 
    "eqmOqaeL5NU", 
    "i7LWpUzoylU", 
    "Kp6v5bPtoiA", 
    "tvC2rIMjCUc"
];

var currentIndex = 0;

function updateVideo()  {
    const videoFrame = document.getElementById("videoFrame")
    videoFrame.src = `https://www.youtube.com/embed/${videos[currentIndex]}`;
}

function nextVideo() {
    if (currentIndex < videos.length - 1) { 
        currentIndex++;
        updateVideo();
    }
    else if (currentIndex >= videos.length -1){
            currentIndex = 0;
            updateVideo();
        }
    
}

function previousVideo() {
    if (currentIndex > 0) { 
        currentIndex--;
        updateVideo();
    } 
    else if (currentIndex == 0) {
        currentIndex = videos.length - 1;
        updateVideo();
    }
}

window.onload = function() {
    updateVideo();
}

function wiki() {
    window.open("https://pl.wikipedia.org/wiki/Cristiano_Ronaldo", "_blank");
}

document.addEventListener("DOMContentLoaded", function() {

    var navLinks = document.querySelectorAll('#navbar a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            var targetId = link.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
  
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
