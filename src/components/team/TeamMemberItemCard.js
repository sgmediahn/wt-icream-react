import "./TeamMemberItemCard.scss";

export function TeamMemberItemCard({ teamMember }) {
  const { fullName, thumbnail, position } = teamMember;
  return <div className="team-item">
    <div className="team-img mx-auto">
      <img
        className="rounded-circle w-100 h-100"
        src={thumbnail}
        style={{ objectFit: "cover" }} />
    </div>
    <div
      className="position-relative text-center bg-light rounded px-4 py-5"
      style={{ marginTop: "-100px" }}
    >
      <h6 className="text-uppercase text-muted mb-4">
        {position}
      </h6>
      <div className="d-flex justify-content-center pt-1">
        <a
          className="btn btn-outline-secondary btn-social mr-2"
          href="#"
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          className="btn btn-outline-secondary btn-social mr-2"
          href="#"
        >
          <i className="fab fa-facebook-f" />
        </a>
        <a
          className="btn btn-outline-secondary btn-social mr-2"
          href="#"
        >
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
    </div>
  </div>;
}
