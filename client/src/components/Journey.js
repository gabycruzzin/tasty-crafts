import stickers from "../img/stickers.jpg";

export function Journey() {
  return (
    <>
      <div className="flex-container">
        <div className="flex-item-left">
          <h1>header 1</h1>
          <h2>header 2</h2>
          <p>paragraph</p>
        </div>
        <div className="flex-item-right">
          <img src={stickers} />
        </div>
      </div>
    </>
  );
}
