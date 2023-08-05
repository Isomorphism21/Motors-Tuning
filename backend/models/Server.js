import express from "express";
import cors from "cors"
import getConnectionDb from "../db/database.js";
import bielaControllers from "../router/biela.router.js";
import aceiteMotorControllers from "../router/aceiteMotor.router.js";
import bandasDeFrenoControllers from "../router/bandasDeFreno.router.js";
import bujiasControllers from "../router/bujias.controllers.js";
import carburadoresControllers from "../router/carburadores.router.js";
import kitArrastreControllers from "../router/kitArrastre.router.js";
import llantasControllers from "../router/llantas.router.js";
import motorArranqueControllers from "../router/motorArranque.router.js";
import pastillasFrenoControllers from "../router/pastillasFreno.router.js";
import sistemaIgnicionControllers from "../router/sistemaIgnicion.router.js";
<<<<<<< HEAD
import usuarioControllers from "../router/usuario.router.js";

=======
import usuariosControllers from "../router/usuario.router.js";
>>>>>>> 6d78d1a513ed4e1ee715bc76825897d0ed08f4fc

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.bielaPath = "/api/Bielas";
        this.aceiteMotorPath = "/api/AceiteMotor";
        this.bandasDeFrenoPath = "/api/BandasDeFreno";
        this.bujiasPath = "/api/Bujias";
        this.carburadoresPath = "/api/Carburadores";
        this.kitArrastrePath = "/api/KitArrastre";
        this.llantasPath = "/api/Llantas";
        this.motorArranquePath = "/api/MotorArranque";
        this.pastillasFrenoPath = "/api/PastillasFreno";
        this.sistemaIgnicionPath = "/api/SistemaIgnicion";
<<<<<<< HEAD
        this.usuariosPatch = "/api/Usuarios"
=======
        this.usuariosPath = "/api/Usuarios"
>>>>>>> 6d78d1a513ed4e1ee715bc76825897d0ed08f4fc
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
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes(){
        this.app.use(this.bielaPath, bielaControllers);
        this.app.use(this.aceiteMotorPath, aceiteMotorControllers);
        this.app.use(this.bandasDeFrenoPath, bandasDeFrenoControllers);
        this.app.use(this.bujiasPath, bujiasControllers);
        this.app.use(this.carburadoresPath, carburadoresControllers);
        this.app.use(this.kitArrastrePath, kitArrastreControllers);
        this.app.use(this.llantasPath, llantasControllers);
        this.app.use(this.motorArranquePath, motorArranqueControllers);
        this.app.use(this.pastillasFrenoPath, pastillasFrenoControllers);
        this.app.use(this.sistemaIgnicionPath, sistemaIgnicionControllers);
<<<<<<< HEAD
        this.app.use(this.usuariosPatch, usuarioControllers);
=======
        this.app.use(this.usuariosPath, usuariosControllers);
>>>>>>> 6d78d1a513ed4e1ee715bc76825897d0ed08f4fc
    }

    connection(){
        getConnectionDb();
    }
}

export default Server;