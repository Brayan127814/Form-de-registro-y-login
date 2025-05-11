import jwt from 'jsonwebtoken'


const autenticarToken =(req, res, next)=>{
    const authHeader = req.headers["authorization"]

    const token = authHeader && authHeader.split(' ')[1]

    //Validar token
    if(!token){
        return res.status(401).json({
            message:'No hay token'
        })
    }

    //Verificar token

    jwt.verify(token,process.env.keySecret, async (err, user)=>{
        if(err){
            return res.status(403).json({
                message:'Token no valido'
            })
        }

        req.user= user
        next()
    })
}


export default autenticarToken