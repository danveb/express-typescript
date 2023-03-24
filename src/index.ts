import express, { Express, Request, Response } from "express"; 
import "dotenv/config"; 

const app: Express = express(); 
const port = process.env.PORT || 8800; 

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server"); 
});

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello World"); 
});

app.get("/express", (req: Request, res: Response) => {
    res.send("Hello Express")
});

app.listen(port, () => {
    console.log(`🔥 Server running at port ${port}`); 
});