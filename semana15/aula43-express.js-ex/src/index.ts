import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { countries } from './data';
import { country } from './types';
// import { Response } from 'express-serve-static-core';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.listen(3007, () => {
    console.log("Servidor Pronto!")
})

app.get("/countries", (req: Request, res: Response) => {
    res.status(209).send(countries)
})

app.get("/countries/:id", (req: Request, res: Response) =>{

    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )

    if(result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Não encontrado")
    }
})