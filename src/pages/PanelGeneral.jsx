import ContadorVentas from "../components/ContadorVentas";
import RelojDigital from "../components/RelojDigital";

export default function PanelGeneral(){
return (
        <div>
            <h1>Panel General</h1>
            <p>Bienvenidos al sistema.</p>

            <ContadorVentas />
            <RelojDigital />
        </div>
    );
}