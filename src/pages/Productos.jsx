import ProductoCard from "../components/ProductoCard";

export default function Productos(){

    const datosProductos = [
        {id: 1, nombre: 'Laptop Pro 15', precio: 1200},
        {id: 2, nombre: 'Auriculares Inalambricos', precio: 150},
        {id: 3, nombre: 'Teclado Mecanico', precio: 95},
        {id: 4, nombre: 'Monitor 4K', precio: 400}
    ]

    return(
        <div>
            <h1>Gestion de Productos</h1>
            <div style={{display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr)',
                gap: '20px'}}>
                {datosProductos.map((prod)=>{
                    <ProductoCard key={prod.id} producto={prod} />
                })}
            </div>
        </div>
    );
}