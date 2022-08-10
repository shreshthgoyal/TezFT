import Explore from './Explore'

function Service() {
    return (
        <section className="service-section">
        <h2>Explore NFTs</h2>
        {/* <div className="service-section-header">
          <div className="search-field">
            <i className="ph-magnifying-glass"></i>
            <input type="text" placeholder="Account number" />
          </div>
          <div className="dropdown-field">
            <select>
              <option>Home</option>
              <option>Work</option>
            </select>
            <i className="ph-caret-down"></i>
          </div>
          <button className="flat-button">
            Search
          </button>
        </div>
        <div className="mobile-only">
          <button className="flat-button">
            Toggle search
          </button>
        </div> */}
        <div className="tiles">
          <article className="tile">
            <div className="tile-header">
              <i className="ph-lightning-light"></i>
              <h3>
                <span>Electricity</span>
                <span>UrkEnergo LTD.</span>
              </h3>
            </div>
            <a href="#">
              <span>Go to service</span>
              <span className="icon-button">
                <i className="ph-caret-right-bold"></i>
              </span>
            </a>
          </article>
          <article className="tile">
            <div className="tile-header">
              <i className="ph-fire-simple-light"></i>
              <h3>
                <span>Heating Gas</span>
                <span>Gazprom UA</span>
              </h3>
            </div>
            <a href="#">
              <span>Go to service</span>
              <span className="icon-button">
                <i className="ph-caret-right-bold"></i>
              </span>
            </a>
          </article>
          <article className="tile">
            <div className="tile-header">
              <i className="ph-file-light"></i>
              <h3>
                <span>Tax online</span>
                <span>Kharkov 62 str.</span>
              </h3>
            </div>
            <a href="#">
              <span>Go to service</span>
              <span className="icon-button">
                <i className="ph-caret-right-bold"></i>
              </span>
            </a>
          </article>
        </div>
        <br />
        <a href={Explore}>
        <button className="large">
            Explore NFTs here &nbsp;
          <i className="ph-arrow-circle-right"></i>
        </button>
        </a>
      </section>
    )
}

export default Service;