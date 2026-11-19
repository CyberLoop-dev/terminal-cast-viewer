import http from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.dirname(fileURLToPath(import.meta.url));
const types = {".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".svg":"image/svg+xml"};
http.createServer(async (req,res) => {
  try {
    const pathname = new URL(req.url,"http://127.0.0.1").pathname;
    const requested = pathname === "/" ? "/index.html" : decodeURIComponent(pathname);
    const target = path.resolve(root,"."+requested);
    if (!target.startsWith(root + path.sep) && target !== path.join(root,"index.html")) { res.writeHead(403); res.end("Forbidden"); return; }
    const body = await readFile(target);
    res.writeHead(200,{"Content-Type":types[path.extname(target)] || "application/octet-stream","X-Content-Type-Options":"nosniff"});
    res.end(body);
  } catch { res.writeHead(404,{"Content-Type":"text/plain; charset=utf-8"}); res.end("Not found"); }
}).listen(4173,"127.0.0.1",()=>console.log("Terminal Cast Viewer: http://127.0.0.1:4173"));
