import { useState, useEffect, useCallback } from "react";

export const useFetchImages = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  const petition = useCallback(async () => {
    const keyId = "client_id=fCWR5zHIvG0ChCzK64ygBpBLhNWHxzI72H1uceEKS2k";
    let route = `https://api.unsplash.com/photos/?${keyId}`;
    if (input !== "") {
      route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        input
      )}&${keyId}`;
    }

    setLoading(true);

    const request = await fetch(route);
    const data = await request.json();
    /* Otra forma de hacer el fetch
      fetch(route)
        .then((res) => res.json())
        .then((data) => setImages(data));
      */
    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }

    setLoading(false);
  }, [input]);

  useEffect(() => {
    petition();
  }, [petition]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Para evitar que recarge el componente
    const text = e.target[0].value;
    setInput(text);
  };

  console.log(images);

  // se ponen las variables que podran ser usuadas cuando se llame el hook
  return [images, loading, handleSubmit];
};
