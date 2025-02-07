export const ProductCard = ({ title, sumary, price, city, category}) => {
  return (
    <>
      <div className="card">
        <h3>{title} Pavadinimas</h3>
        <p>{sumary} Aprasymas</p>
        <p>{price} kaina</p>
        <p>{city} Miestas</p>
        <p>{category} Kategorija</p>
      </div>
    </>
  );
};
