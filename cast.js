export function stripAnsi(value) {
  return String(value).replace(/\u001b\[[0-?]*[ -/]*[@-~]/g,"").replace(/\u001b\][^\u0007]*(?:\u0007|\u001b\\)/g,"");
}
export function parseCast(source) {
  const lines=String(source).split(/\r?\n/).filter(line=>line.trim());
  if(!lines.length) throw new Error("The recording is empty.");
  let header;
  try { header=JSON.parse(lines[0]); } catch { throw new Error("The first line is not a valid asciinema header."); }
  if(header.version!==2) throw new Error("Only asciinema v2 recordings are supported.");
  const events=[];
  for(let i=1;i<lines.length;i++){
    let event;
    try { event=JSON.parse(lines[i]); } catch { throw new Error("Invalid event on line "+(i+1)+"."); }
    if(!Array.isArray(event)||event.length<3||typeof event[0]!=="number") continue;
    if(event[1]==="o"&&typeof event[2]==="string") events.push({time:event[0],output:stripAnsi(event[2])});
  }
  return {header,events,duration:events.length?events[events.length-1].time:0};
}
