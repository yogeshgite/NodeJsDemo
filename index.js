import fs from "fs"

fs.writeFile("example.txt","hello world", (err)=>{
    if(err) throw err;
    console.log("Example file created.");

    // fs.readFile("example.txt",'utf-8', (err,data)=>{
    //     if (err) throw err
    //     console.log("File contents:");
    //     console.log(data);
    // })

    fs.appendFile("example.txt","added new contents for demo", 'utf8', (err)=>{
        if (err) throw err;
        fs.readFile("example.txt",'utf-8', (err,data)=>{
            if (err) throw err;
            console.log("File contents:");
            console.log(data);

            fs.unlink("example.txt",(err)=>{
                if (err) throw err;
                console.log("File deleted successfully")
            })
         })
    })
})


// if no err in code then err value will be null
