function Trend() {
    return (
        <section className="transfer-section">
        <div className="transfer-section-header">
          <h2>Latest transfers</h2>
          <div className="filter-options">
            <p>Filter selected: more than 100 $</p>
            <button className="icon-button">
              <i className="ph-funnel"></i>
            </button>
            <button className="icon-button">
              <i className="ph-plus"></i>
            </button>
          </div>
        </div>
        <div className="transfers">
          <div className="transfer">
            <div className="transfer-logo">
              <img src="https://assets.codepen.io/285131/apple.svg" />
            </div>
            <dl className="transfer-details">
              <div>
                <dt>Apple Inc.</dt>
                <dd>Apple ID Payment</dd>
              </div>
              <div>
                <dt>4012</dt>
                <dd>Last four digits</dd>
              </div>
              <div>
                <dt>28 Oct. 21</dt>
                <dd>Date payment</dd>
              </div>
            </dl>
            <div className="transfer-number">
              - $ 550
            </div>
          </div>
          <div className="transfer">
            <div className="transfer-logo">
              <img src="https://assets.codepen.io/285131/pinterest.svg" />
            </div>
            <dl className="transfer-details">
              <div>
                <dt>Pinterest</dt>
                <dd>2 year subscription</dd>
              </div>
              <div>
                <dt>5214</dt>
                <dd>Last four digits</dd>
              </div>
              <div>
                <dt>26 Oct. 21</dt>
                <dd>Date payment</dd>
              </div>
            </dl>
            <div className="transfer-number">
              - $ 120
            </div>
          </div>
          <div className="transfer">
            <div className="transfer-logo">
              <img src="https://assets.codepen.io/285131/warner-bros.svg" />
            </div>
            <dl className="transfer-details">
              <div>
                <dt>Warner Bros.</dt>
                <dd>Cinema</dd>
              </div>
              <div>
                <dt>2228</dt>
                <dd>Last four digits</dd>
              </div>
              <div>
                <dt>22 Oct. 21</dt>
                <dd>Date payment</dd>
              </div>
            </dl>
            <div className="transfer-number">
              - $ 70
            </div>
          </div>
        </div>
      </section>
    )
}

export default Trend;