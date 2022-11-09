import React from 'react'
import { useParams } from 'react-router-dom';
import ProdutoDetalhes from './ProdutoDetalhes';


const Detalhes = () => {
    const { codigo } = useParams();

    return (
        <div>
            <ProdutoDetalhes codigo = {codigo ? Number.parseInt(codigo, 10) : null} />
        </div>
    )
}

export default Detalhes;