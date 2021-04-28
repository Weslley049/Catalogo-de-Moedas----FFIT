import {Request, Response} from 'express';
import db from '../database/connection';


export default class CriptoMoedaController{

    async index(request: Request, response: Response){
          
        const criptoMoedas = await db('moedas').select('*');
        return response.json(criptoMoedas);
    }

    

    async findByName(request: Request, response: Response){
        const {name} = request.params


        const filterResult = await db('moedas')
        .select('*')
        .where('nome', '=', String(name))
        
        if(filterResult.length == 0){
            return response.status(400).json({
                error:"A CriptoMoeda com o nome citado não existe."
            });
        }  

        
        return response.json(filterResult);
    }



    async findById(request: Request, response: Response){
        const {id} = request.params


        const filterResult = await db('moedas')
        .select('*')
        .where('id', '=', Number(id))
       
        if(filterResult.length == 0){
            return response.status(400).json({
                error:"A CriptoMoeda com o id citado não existe."
            });
        }  
     
        return response.json(filterResult[0]);
    }



    async create(request: Request, response: Response){
        const {
            nome, 
            valor_mercado, 
            preco, 
            sigla, 
            descricao } = request.body;
        
        await db('moedas').insert({
            nome, 
            valor_mercado, 
            preco, 
            sigla, 
            descricao
        });    

        return response.status(201).send();
    }

}