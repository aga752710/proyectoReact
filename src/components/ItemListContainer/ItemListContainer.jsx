import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h1>{greeting}</h1>
            {/* Aquí puedes agregar tu lista de ítems */}
            <ul>
                <li>Totas personalizadas</li>
                <li>Totas para toda ocasión</li>
                <li>Totas sabrosas</li>
            </ul>
        </div>
    );
};

export default ItemListContainer;