import Card from "./Card";
import Loading from "./Loading";
import FormImgSearch from "./FormImgSearch";
import { useFetchImages } from "../hooks/useFetchImages";

const Cards = () => {
  /* Se manda a llamar el hook personalizado que contempla toda la logica para la busqueda de las imagenes */
  const [images, loading, handleSubmit] = useFetchImages();

  return (
    <div className="text-center">
      {/*Componente donde se encuentra el form para la busqueda de imagines*/}
      <FormImgSearch handleSubmit={handleSubmit} />
      <hr />
      {/* Pregunta si la variable es true para mostrar o Ocular el componente*/}
      {loading && <Loading />}{" "}
      <div className="row">
        {images.map((img) => {
          return (
            <div className="col">
              <Card key={img.key} img={img.urls.regular} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
