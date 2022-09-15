export function PortfolioItemCard({ portfolioItem }) {
  return <div className="col-lg-4 col-md-6 p-0 portfolio-item">
    <div className="position-relative overflow-hidden">
      <img className="img-fluid w-100" src={portfolioItem.thumbnail} alt="" />
      <a
        className="portfolio-btn"
        href={portfolioItem.thumbnail}
      // data-lightbox="portfolio"
      >
        <i className="fa fa-plus text-primary" style={{ fontSize: 60 }} />
      </a>
    </div>
  </div>;
}
