import {GetStaticProps} from 'next';
import Link from 'next/link';
import {createContext, ReactNode, useContext, useState } from 'react';

import { api } from "../services/api";

import styles from './home.module.scss';


type criptomoeda ={
  nome: string,
  id: string,
  valor_mercado: number,
  preco: string,
  sigla: string,
 
}


type HomeProps = {
   moedas: criptomoeda[];
   
} 




export default function Home({moedas}: HomeProps) {
 

  return (
    <div className={styles.homepage}> 
      <section className={styles.content}>  
        <h1> O que são Criptomoedas? </h1> 
          <p> As criptomoedas nada mais são do que moedas virtuais, 
            utilizadas para a realização de pagamentos
            em transações comerciais. 
            Ou seja, possuem a mesma função de comprar 
            mercadorias e serviços que as moedas já conhecidas por nós, 
            como o Real e o Dólar.
            
            Além do fato de serem completamente virtuais, 
            existem três características básicas que diferenciam as 
            criptomoedas das moedas regulares: a descentralização, 
            o anonimato e custo zero de transação.  
    
          </p>
      </section>

      <section className={styles.allCoins}>
        <table cellSpacing={0}>
          <thead>
             <th> Nome</th> 
             <th> Valor de Mercado</th> 
             <th> Preço R$ </th> 
             <th> sigla </th> 
          </thead> 
          <tbody>
            {moedas.map(criptomoeda => {
              return(
                <tr key={criptomoeda.id}>
                  <td>
                   
                    <Link href={`/moedas/${criptomoeda.id}`}> 
                      <a>{criptomoeda.nome}</a>
                     </Link>
                  </td>
                  <td> {criptomoeda.valor_mercado}</td>
                  <td> {criptomoeda.preco}</td>
                  <td> {criptomoeda.sigla}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () =>{
  const {data} = await api.get('moedas/listar')

  const moedas = data.map(moeda => {
    return{
      id: String(moeda.id),
      nome: moeda.nome,
      valor_mercado: moeda.valor_mercado,
      preco: moeda.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
      sigla: moeda.sigla,
      

    }
  })

  return{
    props:{
      moedas,
    },
    revalidate: 60 * 60 * 8,
  }
}