import "./ProductItemCard.scss";

export function ProductItemCard({ product }) {
  return <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
    <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
      <h4 className="font-weight-bold text-white mb-0">$99</h4>
    </div>
    <div
      className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3"
      style={{ width: 150, height: 150 }}
    >
      <img
        className="rounded-circle w-100 h-100"
        src="img/product-1.jpg"
        style={{ objectFit: "cover" }} />
    </div>
    <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
    <a href="" className="btn btn-sm btn-secondary">
      Order Now
    </a>
  </div>;
}
