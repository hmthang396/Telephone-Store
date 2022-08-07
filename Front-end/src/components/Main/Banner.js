import BannerItem from "./Common/BannerItem";

const Banner = (props) => {
  const ListBanner = [
    {
      imgBanner: "assets/img/banner/banner-1.jpg",
      title: "Intelligent New Touch Control",
      description: "Discount  20% On Products",
    },
    {
      imgBanner: "assets/img/banner/banner-2.jpg",
      title: "On-sale Best Prices",
      description: "Limited Time: Online Only!",
    },
    {
      imgBanner: "assets/img/banner/banner-3.jpg",
      title: "Hot Sale Super Laptops 2022",
      description: "Free Shipping All Order",
    },
  ];
  const contentBanner = ListBanner.map((banner) => {
    return (
      <BannerItem
        key={Math.random()}
        imgBanner={banner.imgBanner}
        title={banner.title}
        description={banner.description}
      />
    );
  });
  return (
    <section className="banner__area light-bg-s pb-10">
      <div className="container">
        <div className="row">{contentBanner}</div>
      </div>
    </section>
  );
};
export default Banner;
