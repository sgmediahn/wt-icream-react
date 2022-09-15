import { HomeFooter } from "../components/layout/HomeFooter";
import { HomeTopMenu } from "../components/layout/HomeTopMenu";
import { HomeNav } from "../components/layout/HomeNav";
import { mockProducts } from "../data/productsData";
import { mockServices } from "../data/servicesData";
import { mockTeamMembers } from "../data/teamData";
import { mockPortfolioItems } from "../data/portfolioData";
import { TestimonialItemCard } from "../components/testimonial/TestimonialItemCard";
import { TeamMemberItemCard } from "../components/team/TeamMemberItemCard";
import { PortfolioItemCard } from "../components/porfolio/PortfolioItemCard";
import { ProductItemCard } from "../components/product/ProductItemCard";
import { ServiceItemCard } from "../components/service/ServiceItemCard";
import { mockTestimonials } from "../data/testimonialsData";
import { aboutBigText, aboutSummary, aboutDescription } from "../data/aboutData";
import { featureSummary, featureList } from "../data/featuresData";
import { moreButtonText } from "../config/landingPageConfig";
import { mockCarouselData } from "../data/carouselData";
import { promotionImageSrc, promotionVideoUrl } from "../data/promotionData";
import Carousel from 'react-bootstrap/Carousel';
import "./HomePage.scss";

export default function () {
  return (
    <>
      {HomeTopMenu()}
      {HomeNav()}
      {HomeCarousel({})}
      {IntroAboutUs({})}
      {HomePromotions()}
      {IntroVideoModal({})}
      {IntroServices({ services: mockServices })}
      {IntroPortfolio({ portfolioItems: mockPortfolioItems })}
      {IntroProducts({ products: mockProducts })}
      {IntroOurTeam({ teamMembers: mockTeamMembers })}
      {Testimonials({ testimonials: mockTestimonials })}
      {HomeFooter({})}
      {BackToTopButton()}
    </>
  );
}
function BackToTopButton() {
  return (
    <a href="#" className="btn btn-secondary px-2 back-to-top">
      <i className="fa fa-angle-double-up" />
    </a>
  );
}

export function Testimonials({ testimonials }) {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h1 className="section-title position-relative text-center mb-5">
              Clients Say About Our Famous Ice Cream
            </h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Carousel>
              {(testimonials || []).map(testimonial =>
                <Carousel.Item key={testimonial.id} >
                  <TestimonialItemCard testimonial={testimonial} />
                </Carousel.Item>)}
            </Carousel>
          </div>
        </div>
      </div>
    </div >
  );
}

function IntroAboutUs() {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <h1 className="section-title position-relative text-center mb-5">
              {aboutBigText}
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 py-5">
            <h4 className="font-weight-bold mb-3">About Us</h4>
            <h5 className="text-muted mb-3">
              {aboutSummary}
            </h5>
            <p>
              {aboutDescription}
            </p>
            <a href="" className="btn btn-secondary mt-2">
              {moreButtonText}
            </a>
          </div>
          <div className="col-lg-4" style={{ minHeight: 400 }}>
            <div className="position-relative h-100 rounded overflow-hidden">
              <img
                className="position-absolute w-100 h-100"
                src="img/about.jpg"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-4 py-5">
            <h4 className="font-weight-bold mb-3">Our Features</h4>
            <p>
              {featureSummary}
            </p>
            {featureList.map(feature =>
              <h5 key={feature.id} className="text-muted mb-3">
                <i className="fa fa-check text-secondary mr-3" />
                {feature.text}
              </h5>)}
            <a href="" className="btn btn-primary mt-2">
              {moreButtonText}
            </a>
          </div>
        </div>
      </div>
    </div >
  );
}

function HomePromotions() {
  return (
    <div className="container-fluid my-5 py-5 px-0">
      <div className="row bg-primary m-0">
        {PromotionVideoCard()}
        {PromotionProductItemCard({ product: mockProducts[0] })}
      </div>
    </div>
  );
}

function PromotionVideoCard() {
  return <div className="col-md-6 px-0" style={{ minHeight: 500 }}>
    <div className="position-relative h-100">
      <img
        className="position-absolute w-100 h-100"
        src={promotionImageSrc}
        style={{ objectFit: "cover" }} />
      <button
        type="button"
        className="btn-play"
        data-toggle="modal"
        data-src={promotionVideoUrl}
        data-target="#videoModal"
      >
        <span />
      </button>
    </div>
  </div>;
}

function PromotionProductItemCard({ product }) {
  const { name, price, thumbnail, description } = product;
  return <div className="col-md-6 py-5 py-md-0 px-0">
    <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
      <div
        className="d-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
        style={{ width: 100, height: 100 }}
      >
        <h3 className="font-weight-bold text-secondary mb-0">${price}</h3>
      </div>
      <h3 className="font-weight-bold text-white mt-3 mb-4">
        {name}
      </h3>
      <p className="text-white mb-4">
        {description}
      </p>
      <a href="" className="btn btn-secondary py-3 px-5 mt-2">
        Order Now
      </a>
    </div>
  </div>;
}

function IntroVideoModal() {
  return (
    <div
      className="modal fade"
      id="videoModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            {/* 16:9 aspect ratio */}
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src=""
                id="video"
                allowscriptaccess="always"
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function IntroServices({ services = mockServices }) {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="section-title position-relative mb-5">
              Best Services We Provide For Our Clients
            </h1>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0" />
        </div>
        <div className="row">
          <div className="col-12">
            <div className="owl-carousel service-carousel">
              {(services || []).map(service => <ServiceItemCard service={service} key={service.id} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function IntroPortfolio({ portfolioItems }) {
  return (
    <div className="container-fluid my-5 py-5 px-0">
      <div className="row justify-content-center m-0">
        <div className="col-lg-5">
          <h1 className="section-title position-relative text-center mb-5">
            Delicious Ice Cream Made From Our Very Own Organic Milk
          </h1>
        </div>
      </div>
      <div className="row m-0 portfolio-container">
        {(portfolioItems || []).map(portfolioItem => <PortfolioItemCard portfolioItem={portfolioItem} key={portfolioItem.id} />)}
      </div>
    </div>
  );
}

export function IntroProducts({ products = mockProducts }) {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="section-title position-relative mb-5">
              Best Prices We Offer For Ice Cream Lovers
            </h1>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0" />
        </div>
        <div className="row">
          <div className="col-12">
            <div className="owl-carousel product-carousel">
              {(products || []).map(product => <ProductItemCard product={product} key={product.id} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IntroOurTeam({ teamMembers = mockTeamMembers }) {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="section-title position-relative mb-5">
              Experienced &amp; Most Famous Ice Cream Chefs
            </h1>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0" />
        </div>
        <div className="row">
          <div className="col-12">
            <div className="owl-carousel team-carousel">
              {teamMembers.map(teamMember => <TeamMemberItemCard teamMember={teamMember} key={teamMember.id} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeCarousel() {
  return (
    <Carousel>
      {mockCarouselData.map(slide =>
        <Carousel.Item key={slide.id}>
          <img className="w-100" src={slide.imageSrc} alt="Image" />
          <Carousel.Caption>
            <div className="p-3" style={{ marginTop: "10rem" }}>
              <h4 className="text-white text-uppercase mb-md-3">
                {slide.text}
              </h4>
              <h1 className="display-3 text-white mb-md-4">
                {slide.title}
              </h1>
              <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">
                {moreButtonText}
              </a>
            </div></Carousel.Caption>
        </Carousel.Item>)}
    </Carousel >
  );
}


