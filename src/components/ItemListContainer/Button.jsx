import React from 'react'

const BotonExterno = () => {
  const manejarClick = () => {
    window.location.href = 'https://minamaberepo.netlify.app'
  }

  return (
    <button onClick={manejarClick}>
      Ir a página de Inicio
    </button>
  )
}

export default BotonExterno;

