let titles = ["THE KLINGOZ", "GRAUZONE", "AMARANTHE", "THE HIVES", "DISFEAR", "NASUM", "CREED", "TUXEDOMOON", "I THE MIGHTY", "FAD GADGET", "SKINDERED", "LORNA SHORE", "LANA DEL RAY", "DEMON HUNTER", "MUSTARD PLUG", "NEW YEARS DAY", "MODEST MOUSE", "AMBER PACIFIC", "ASYLUM PARTY", "DYING FETUS", "MOOSE BLOOD", "SCORPIONS", "CULTURE CLUB", "BIOHAZARD", "THE BEAT", "THE KOOKS", "AUS ROTTEN", "CHAOS UK", "FEAR FACTORY", "CATCH 22", "BECK", "FINGER ELEVEN", "THE RUMJACKS", "HOWARD JONES", "WHIPLASH", "ANY GIVEN DAY", "SPIES LIKE US", "CLOSE TO HOME", "SKISYSTEM", "TURNOVER", "GUANA BTZ", "CITY LIGHTS", "SHADOWS FALL", "CHINA CRISIS", "SKRILLEX", "VOODOO ZOMBIE"];
let title = document.getElementById("Title");
let wordIndex = 0;
function changeTitle(){
    title.textContent = titles[wordIndex]
    wordIndex++
    if(wordIndex == titles.length){
        wordIndex=0
    }
}
setInterval(changeTitle,150);
