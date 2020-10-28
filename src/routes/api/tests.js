const router =require('express').Router();
const {Test}= require('../../db');




//Functions
router.get('/',async (req, res) =>{
    
    const tests =await  Test.findAll();
    res.json(tests);
});

router.post('/', async (req, res) => {
    const test = await Test.create(req.body);
    res.json(test);
});

router.put('/:testId', async (req, res) => {
    await  Test.update(req.body,{
        where : {id: req.params.testId}
    });
    res.json({success: 'actualizado con exito'});
});

router.delete('/:testId', async (req, res) => {
    await  Test.destroy({
        where : {id: req.params.testId}
    });
    res.json({success: 'Eliminado de manera exitosa'});
});


//exports
module.exports =router;