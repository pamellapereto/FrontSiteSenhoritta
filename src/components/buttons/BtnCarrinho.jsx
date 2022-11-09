import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const BtnCarrinho = () => {

    const state = useSelector((state)=> state.addItem)
    return (
        <>
            <NavLink to="/carrinho" className="btn btn-outline-dark btnMenu">
                <span className="fa fa-shopping-cart me-1"></span> Carrinho ({state.length})
            </NavLink>
        </>
    )
}

export default BtnCarrinho;