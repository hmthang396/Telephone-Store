const Breadcrumb = (props) => {
  return (
    <section className="breadcrumb__area box-plr-75">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__wrapper">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {props.title}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Breadcrumb;
