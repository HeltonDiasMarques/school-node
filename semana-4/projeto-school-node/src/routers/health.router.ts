import { Request, Response, Router } from "express";

const router = Router();

router.get('/check', (req: Request, res: Response) => {
    const healthCheck = { message: 'Aplicação funcionando!'};
    res.send(healthCheck);
})

export default router;