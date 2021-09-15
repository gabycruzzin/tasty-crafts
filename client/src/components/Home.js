import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div className="flex-container">
        <div className="flex-item-left">
          <p>
            <Link to="/journey">link example</Link>
          </p>
        </div>
        <div className="flex-item-right"></div>
      </div>
    </>
  );
}
