import { Router, Response, Request, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import userRepository from "../repositories/user.repository";

// get /users
// get /users/:uuid
// post /users/:uuid
// put /users/:uuid
// delete /users/:uuid  

const usersRouter = Router();

usersRouter.get('/users', async (req: Request, res: Response, next: NextFunction) => {
  const users = await userRepository.findAllUsers();
  res.status(StatusCodes.OK).json(users);
});

usersRouter.get('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  const user = await userRepository.findById(uuid);
  res.status(StatusCodes.OK).send(user);
});

usersRouter.post('/users', (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;

  console.log(req.body);
  res.status(StatusCodes.CREATED).send(newUser);
});

usersRouter.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  const modifiedUser = req.body;

  modifiedUser.uuid = uuid;

  res.status(StatusCodes.OK).send(modifiedUser);
});

usersRouter.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  res.sendStatus(StatusCodes.OK);
});

export default usersRouter;