import { Request, Response, Router } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) =>{
    const healthCheck = { message: 'Hello World!' };
    res.send(healthCheck);
});

router.get('/check', (req: Request, res: Response) => {
    const healthCheck = { message: 'Aplica'};
    res.send(healthCheck);
})

export default router;