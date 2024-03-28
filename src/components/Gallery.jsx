import { useState } from "react";
import { productsList } from "./Data.jsx";
import "../components/style/Galery.css"
export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    if (index < productsList.length - 1) {
      setIndex(index + 1);
    }
  }

  function handlepastClick() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let product = productsList[index];
  return (
    <section className="container">
      <button onClick={handlepastClick} className="img">
        <img
          src="https://avatars.mds.yandex.net/i?id=a629de046b78864a2f8d8e102876a0b59ef9af70-5673134-images-thumbs&ref=rim&n=33&w=202&h=250"
          width={18}
        />
      </button>

      <img src={product.images} alt="" className="images" />
      <button onClick={handleNextClick} className="img">
        <img
          src="https://banner2.cleanpng.com/20180429/qwq/kisspng-gotenna-mesh-networking-computer-network-text-mess-5ae5b295b26fc7.9008408915250029017309.jpg"
          alt=""
          width={20}
        />
      </button>
      <h2 className="inline">
        <h1>{product.brand} </h1>
        <h3>${product.price}</h3>
        <h3>{product.title}</h3>

        <button onClick={handleMoreClick} className="MoreButton" >{showMore ? "Hide" : "More"}</button>
        {showMore && <p>{product.description}</p>}
        <img src={product.url} alt={product.alt} />
      </h2>
    </section>
  );
}
