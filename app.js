import {parseCast} from "./cast.js";
const fileInput=document.querySelector("#file"),output=document.querySelector("#output"),status=document.querySelector("#status"),play=document.querySelector("#play"),speed=document.querySelector("#speed"),search=document.querySelector("#search"),progress=document.querySelector("#progress");
let recording=null,timer=null,eventIndex=0,startedAt=0,elapsedBeforePause=0;
function stop(){if(timer)clearTimeout(timer);timer=null;play.textContent="Play";}
function renderUntil(time){while(eventIndex<recording.events.length&&recording.events[eventIndex].time<=time){output.textContent+=recording.events[eventIndex].output;eventIndex++;}output.scrollTop=output.scrollHeight;progress.value=recording.duration?Math.min(100,time/recording.duration*100):100;}
function tick(){if(!recording)return;const elapsed=elapsedBeforePause+(performance.now()-startedAt)/1000*Number(speed.value);renderUntil(elapsed);if(eventIndex>=recording.events.length){stop();elapsedBeforePause=recording.duration;return;}timer=setTimeout(tick,30);}
function reset(){stop();eventIndex=0;elapsedBeforePause=0;output.textContent="";progress.value=0;}
fileInput.addEventListener("change",async()=>{const file=fileInput.files?.[0];if(!file)return;try{recording=parseCast(await file.text());reset();status.textContent=file.name+" · "+recording.events.length+" output events · "+recording.duration.toFixed(1)+"s";play.disabled=false;}catch(error){recording=null;status.textContent=error.message;play.disabled=true;}});
play.addEventListener("click",()=>{if(!recording)return;if(timer){elapsedBeforePause+=(performance.now()-startedAt)/1000*Number(speed.value);stop();return;}if(eventIndex>=recording.events.length)reset();startedAt=performance.now();play.textContent="Pause";tick();});
document.querySelector("#restart").addEventListener("click",reset);
search.addEventListener("input",()=>{const term=search.value.toLowerCase();if(!term)return;const index=output.textContent.toLowerCase().indexOf(term);status.textContent=index>=0?"Found at output character "+index:"No visible match";});
