const testsCtrl ={};
const {Test} = require ('../database');

testsCtrl.getTest = async (req, res) =>{
    const tests =await  Test.findAll();
    res.json(tests);

};

testsCtrl.createTest =async  (req, res)=>{
    const{user,email,password} = req.body;
    const test = await Test.create(req.body);
    res.json(test)

};

testsCtrl.updateTest = async (req, res)=>{
    await  Test.update(req.body,{
        where : {id: req.params.testId}
    });
    res.json({success: 'actualizado con exito'});

};

testsCtrl.deleteTest = async (req,res)=>{
    await  Test.destroy({
        where : {id: req.params.testId}
    });
    res.json({success: 'Eliminado de manera exitosa'});

};


module.exports = testsCtrl;