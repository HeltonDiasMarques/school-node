import { Request, Response, Router } from "express";
import productService from "../services/products.service";
const router = Router();


router.get('/', (req: Request, res: Response) => {
    const product = productService.getAll();
    res.send(product);
});

router.get('/:id', (req: Request, res: Response) => {
    const product = productService.getByDocument(req.params.id);
    if(!product) return res.status(400).send({ message: 'Produto não encontrado!'});
    res.status(200).send(product);
});

router.post('/', (req: Request, res: Response) => {
    productService.create(req.body);
    res.status(201).send({message : 'Produto cadastrado'});
});

router.delete('/remove/:id', (req: Request, res: Response) => {
    try {
        productService.remove(req.params.id);
        res.status(200).send({ message: "Produto removido com sucesso!"});
    } catch(error: any) {
        res.status(400).send({message: error.message});
    }
   
});

router.put('/:id', (req: Request, res:Response) => {
    try {
        productService.update(req.params.id, req.body);
        res.status(200).send({ message: "Produto atualizado com sucesso!" });
    } catch(error: any){
        res.status(400).send({message: error.message });
    }

});

export default router;
