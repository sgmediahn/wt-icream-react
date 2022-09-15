import { infoBusinessAddress, infoBusinessHoursClose, infoBusinessHoursOpen, infoBusinessPhone, infoCopyrightText } from "../../config/infoConfig";
import { appDisplayText } from "../../config/landingPageConfig";

export function HomeFooter() {
  return (
    <div
      className="container-fluid footer bg-light py-5"
      style={{ marginTop: 90 }}
    >
      <div className="container text-center py-5">
        <div className="row">
          <div className="col-12 mb-4">
            <a href="index.html" className="navbar-brand m-0">
              <h1 className="m-0 mt-n2 display-4 text-primary">
                {appDisplayText}
              </h1>
            </a>
          </div>
          <div className="col-12 mb-4">
            <a className="btn btn-outline-secondary btn-social mr-2" href="#">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-outline-secondary btn-social mr-2" href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-outline-secondary btn-social mr-2" href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="btn btn-outline-secondary btn-social" href="#">
              <i className="fab fa-instagram" />
            </a>
          </div>
          <div className="col-12 mt-2 mb-4">
            <div className="row">
              <div className="col-sm-6 text-center text-sm-right border-right mb-3 mb-sm-0">
                <h5 className="font-weight-bold mb-2">Get In Touch</h5>
                <p className="mb-2">{infoBusinessAddress}</p>
                <p className="mb-0">{infoBusinessPhone}</p>
              </div>
              <div className="col-sm-6 text-center text-sm-left">
                <h5 className="font-weight-bold mb-2">Opening Hours</h5>
                <p className="mb-2">{infoBusinessHoursOpen}</p>
                <p className="mb-0">{infoBusinessHoursClose}</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <p className="m-0">
              © <a href="#">Domain</a>. {infoCopyrightText}
            </p>
          </div>
        </div>
      </div>
    </div >
  );
}
