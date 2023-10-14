import { Router, Request, Response } from 'express';

//export const router = Router(); //Otra forma
const router = Router();

router.get('/mensajes', (req:Request, res:Response ) => {
    res.json({
        ok:true,
        mensaje: 'Todo está bien'
    });
});

router.post('/mensajes', (req:Request, res:Response ) => {

    //La configuración del boduParse lo coloca aquí en req.body
    //si alguno de estos valores no se envia es undefined
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    
    res.json({
        ok:true,
        cuerpo,
        de        
    });
});

router.post('/mensajes/:id', (req:Request, res:Response ) => {

    //La configuración del boduParse lo coloca aquí en req.body
    //si alguno de estos valores no se envia es undefined
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;

    res.json({
        ok:true,
        cuerpo,
        de,
        id        
    });
});


//Como no parece que se vaya a exportar otra cosa desde este 
//fichero lo de así
export default router;