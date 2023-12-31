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
import usuariosControllers from "../router/usuario.router.js";
import authControllers from "../router/auth.routes.js";
import fechasControllers from "../router/fechas.router.js";
import motosControllers from "../router/motos.router.js";
import facturaControllers from "../router/facturas.router.js";

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
        this.usuariosPath = "/api/Usuarios";
        this.authPath = "/api/Auth";
        this.fechasPath = "/api/Fechas";
        this.motosPath = "/api/MotosInfo";
        this.facturasPatch = "/api/Facturas";
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
        this.app.use(this.usuariosPath, usuariosControllers);
        this.app.use(this.authPath, authControllers);
        this.app.use(this.fechasPath, fechasControllers);
        this.app.use(this.motosPath, motosControllers);
        this.app.use(this.facturasPatch, facturaControllers);
    }

    connection(){
        getConnectionDb();
    }
}

export default Server;