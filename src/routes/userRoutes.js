import { Router } from "express";
import userController from '../controllers/UserController';
import loginRequired from "../middlewares/loginRequired";

const routes = new Router();

routes.get("/", userController.index);
routes.get("/:id", userController.show);

routes.post("/", userController.store);
routes.put("/", loginRequired, userController.update);
routes.delete("/", loginRequired, userController.delete);

export default routes;

/*
index -> lista todos os usuários - GET
store/create -> cria um novo usuário - POST
delete -> apaga um usuário - DELETE
show -> mostra um usuário - GET
update -> atualiza um usuário - PATCH/PUT
*/
