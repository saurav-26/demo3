
  const http=require('http')
  const fs=require('fs')
  home=fs.readFileSync(`index.html`)
 server=http.createServer((req,res)=>{ res.end(home)})  
  server.listen(3003,'127.0.0.1',()=>{
      console.log(`get on`);
  })

