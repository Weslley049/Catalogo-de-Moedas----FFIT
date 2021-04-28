import { GetStaticPaths, GetStaticProps } from 'next';
import {useRouter} from 'next/router'
import { api } from '../../services/api';

import styles from './moeda.module.scss';

type criptomoeda ={
    nome: string,
    id: string,
    valor_mercado: number,
    preco: string,
    sigla: string,
    descricao: string,
  }
  
  
  type MoedaProps = {
     moeda: criptomoeda;
     
  } 

export default function ViewMoeda({moeda}: MoedaProps ){
    
   
    return(
       <div className={styles.moeda}>
           <div className={styles.moedaContent}>
                <h1> {moeda.nome}</h1>
                <div className={styles.moedaInfo}> 
                    <div className={styles.info}>
                        <p> {moeda.preco}</p>
                        <span> Preço em R$ </span>
                    </div>
                    <div className={styles.info}>
                        <p> {moeda.valor_mercado}</p> 
                        <span> Valor de mercado </span>
                    </div>
                    <div className={styles.info}>
                        <p> {moeda.sigla}</p>
                        <span> Sigla </span>
                    </div>
                </div>
                <div className={styles.moedaDescription}>
                    <span> Sobre {moeda.nome} </span>
                    <p>{moeda.descricao}</p>
                </div>

            </div>
           
            <button type="button"/>
       </div>
    )
}


export const getStaticPaths: GetStaticPaths = async () =>{
    return{
        paths: [],
        fallback: "blocking",
    }
} 

export const getStaticProps: GetStaticProps = async (context) => {
    
    const {slug} = (context.params || null); 
    

    const { data } = await api.get(`/moedas/listar/${slug}`)
    
  
    const moeda = {
        id: data.id || null,
        nome: data.nome || null,
        valor_mercado: data.valor_mercado || null,
        preco: data.preco || null,
        sigla: data.sigla || null,
        descricao: data.descricao || null
    };

    
    
    return{
        props:{
            moeda: moeda ?? null,
        },

        revalidate: 60 * 60 * 24,
    }

}