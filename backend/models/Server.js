import express from "express";
import getConnectionDb from "../db/database.js";
import bielaControllers from "../router/biela.router.js";


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.bielaPath = "/api/Bielas"
        this.connection();
        this.middlewares();
        this.routes();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server inicializado en ${this.port}`);
        })
    }

    middlewares(){
        this.app.use(express.static(`public`));
    }

    routes(){
        this.app.use(this.bielaPath, bielaControllers);
        
    }

    connection(){
        getConnectionDb();
    }
}

export default Server;