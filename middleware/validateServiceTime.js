
function  validateServiceTime(req, res, next) {
    const currentHour = req.time.getHours(); 

    if (currentHour < 8 || currentHour >= 21) {
        return res.status(403).send({ message: 'Serviço disponivel entre 8 e 18 horas' });
    }
    else{
        console.log('Serviço ativo!');
    }
    
  next();
}

module.exports = validateServiceTime;