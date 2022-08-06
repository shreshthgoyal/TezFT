import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';

function Landing() {
    return (
        <div className="landing">
      <GlitchSquiggly scaleNoise = {4} >
      <img src= "https://img.freepik.com/premium-photo/3d-aesthetics-with-shapes-vaporwave-style_23-2148981114.jpg" className = "landing-img" />
     </GlitchSquiggly>
     <section className="landing-section">
          <h1>nfTez</h1>
          <h3>NFT Marketplace powered by Tezos</h3>
          <p>Join the NFT revolution and explore smoky NFTs.</p>
          <button className = "mint-nft">
          <i className="ph-paint-brush"></i>
           Create
          </button>
          &nbsp;
          <button className = "explore-nft">
          <i className="ph-shopping-bag"></i>
           Explore
          </button>
        </section>
        </div>
    )
}

export default Landing;