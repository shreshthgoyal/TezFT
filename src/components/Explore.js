// Long constants
import React from 'react';

const products = [
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Viola ×consocia House",
      "brand": "VIRT",
      "price": "$7.49"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Reseda odorata L.",
      "brand": "NAUH",
      "price": "$0.29"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Orthotrichum pusillum Mitt.",
      "brand": "PHX",
      "price": "$6.48"
    },
    {
      "media": "https://d1235ca2z646oc.cloudfront.net/videos/processed/1007/2014-12-20-02.mp4.mp4",
      "url": "#",
      "type": "video",
      "title": "Varanus salvator",
      "brand": "DIB",
      "price": "$8.64"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Phalacroseris bolanderi A. Gray var. bolanderi",
      "brand": "FCFP",
      "price": "$0.85"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Sarcobatus baileyi Coville",
      "brand": "GAB",
      "price": "$2.06"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Alectoria vancouverensis Hawksw.",
      "brand": "DK",
      "price": "$4.66"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Eleusine indica (L.) Gaertn.",
      "brand": "STAG^C",
      "price": "$7.15"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Strigula Fr.",
      "brand": "KODK.WS.A",
      "price": "$9.30"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Lantana depressa Small sanibelensis ",
      "brand": "CNNX",
      "price": "$4.39"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Juncus roemerianus Scheele",
      "brand": "HIL",
      "price": "$0.13"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Lecanora umbrina (Ach.) A. Massal.",
      "brand": "SPWH",
      "price": "$4.94"
    },
    {
      "media": "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?dpr=1&auto=format&fit=crop&w=800&h=600&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "highlight",
      "title": "Phylurus milli",
      "brand": "AAW",
      "oldPrice": "$19.55",
      "price": "$10.55"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Oonopsis wardii (A. Gray) Greene",
      "brand": "USB^M",
      "price": "$8.75"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Eriophyllum confertiflorum",
      "brand": "FTC",
      "price": "$0.76"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Diellia Brack.",
      "brand": "SHLDW",
      "price": "$6.03"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Hypnum pallescens Austin",
      "brand": "NYLD",
      "price": "$4.98"
    },
    {
      "media": "http://www.gifgifgifgifgif.com/gif/5965.gif",
      "url": "#",
      "type": "highlight",
      "title": "Zalophus californicus",
      "brand": "HTD",
      "oldPrice": "$22.99",
      "price": "$7.84"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Astragalus minthorniae Barneby",
      "brand": "ZIONZ",
      "price": "$8.09"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Eucalyptus marginata Donn ex Sm.",
      "brand": "AGEN",
      "price": "$6.11"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Oligoneuron houghtonii Nesom",
      "brand": "NEE^Q",
      "price": "$5.18"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Seseli libanotis (L.) W.D.J. Koch",
      "brand": "BFZ",
      "price": "$2.64"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Oenothera caespitosa Wagner",
      "brand": "HBIO",
      "price": "$0.51"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Eriogonum argillosum J.T. Howell",
      "brand": "ES",
      "price": "$1.18"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Ludwigia decurrens Walter",
      "brand": "DYSL",
      "price": "$2.98"
    },
    {
      "media": "https://images.unsplash.com/photo-1441014023725-517f53f8ed61?dpr=1&auto=format&fit=crop&w=800&h=600&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "highlight",
      "title": "Corvus albus",
      "brand": "VIIZ",
      "oldPrice": "$12.50",
      "price": "$8.43"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Saxifraga micranthidifolia Steud.",
      "brand": "ERIC",
      "price": "$0.08"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Acaulon triquetrum Hal",
      "brand": "SRG",
      "price": "$2.18"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Aesculus parviflora Walter",
      "brand": "IFON",
      "price": "$1.61"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Agrimonia gryposepala Wallr.",
      "brand": "STAG^C",
      "price": "$6.57"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Dracunculus Mill.",
      "brand": "INOV",
      "price": "$8.27"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Sollya heterophylla Lindl.",
      "brand": "MIME",
      "price": "$2.00"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Stylocline psilocarphoides M. Peck",
      "brand": "ISNS",
      "price": "$8.75"
    },
    {
      "media": "https://images.unsplash.com/photo-1497339100210-9e87df79c218?dpr=1&auto=format&fit=crop&w=400&h=574&q=80&cs=tinysrgb&crop=",
      "mediaHover": "https://images.unsplash.com/photo-1504615028257-b1b7492d0ea7?dpr=1&auto=format&fit=crop&w=420&h=680&q=80&cs=tinysrgb&crop=",
      "url": "#",
      "type": "image",
      "title": "Chamaesyce dioica (Kunth) Millsp.",
      "brand": "EXTR",
      "price": "$2.30"
    }
];
const compactSVG = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" className="svg"><title>Compact grid view</title><path d="M2,2V38H38V2ZM13.3,36.64h-10V26.79h10v9.85Zm0-11.16h-10V14.75h10V25.47Zm0-12h-10V3.32h10V13.43Zm12,23.21H14.62V26.79H25.34Zm0-11.16H14.62V14.75H25.34Zm0-12H14.62V3.32H25.34Zm11.3,23.21h-10V26.79h10v9.85Zm0-11.16h-10V14.75h10V25.47Zm0-12h-10V3.32h10V13.43Z"/></svg>;
const regularSVG = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" className="svg"><title>Regular grid view</title><path d="M15,12.08H25V2H15ZM16.4,3.44h7.2v7.2H16.4ZM2,12.08H12.08V2H2ZM3.44,3.44h7.2v7.2H3.44ZM27.92,2V12.08H38V2Zm8.64,8.64h-7.2V3.44h7.2ZM15,25H25V15H15ZM16.4,16.4h7.2v7.2H16.4ZM2,25H12.08V15H2ZM3.44,16.4h7.2v7.2H3.44ZM27.92,25H38V15H27.92Zm1.44-8.64h7.2v7.2h-7.2ZM15,38H25V27.92H15Zm1.44-8.64h7.2v7.2H16.4ZM2,38H12.08V27.92H2Zm1.44-8.64h7.2v7.2H3.44ZM27.92,38H38V27.92H27.92Zm1.44-8.64h7.2v7.2h-7.2Z"/></svg>;
const largeSVG = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" className="svg"><title>Large grid view</title><path d="M23,2V17H38V2ZM36.29,15.29H24.71V3.71H36.29ZM23,38H38V23H23Zm1.71-13.29H36.29V36.29H24.71ZM2,17H17V2H2ZM3.71,3.71H15.29V15.29H3.71ZM2,38H17V23H2ZM3.71,24.71H15.29V36.29H3.71Z"/></svg>;

/*
 * ProductCard
 */
const ProductCard = ({ product: { type, url, media, mediaHover, title, brand, price, oldPrice } }) => (
    <article itemscope itemtype="http://schema.org/Product" className={ `productCard ${type}` }>
        { 
            type === 'video' ?
                <video className="videoPlayer" controls autoplay loop muted>
                    <source src={ media } type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video> :
                <a itemprop="url" href={ url }>
                    <img 
                        itemprop="image"
                        src={ media }
                        className="image"
                        alt={ title } />       
                </a>
        }
        
        {
            mediaHover &&
                <a
                    itemprop="url"
                    href={ url }
                    className="imageHover"
                    role="presentation"
                    tabIndex="-1">
                    <img 
                        src={ mediaHover }
                        alt="" />
                </a>
        }

        <div className="description">
            <div>
                <a itemprop="url" href={ url }>
                    <h1 itemprop="name" className="title">
                        { title }
                    </h1>
                </a>

                <div itemprop="brand" className="brand">
                    { brand }
                </div>
            </div>

            <span itemprop="offers" itemscope itemtype="http://schema.org/Offer" className={`price ${oldPrice ? 'hasDiscount' : ''}`}>
                <strong itemprop="price">
                    {
                        oldPrice &&
                            <s className="strike">{ oldPrice }</s>
                    }
                    { price }
                </strong>
                <meta itemprop="priceCurrency" content="USD" />
            </span>
        </div>
    </article>
);

class Explore extends React.Component {
    constructor(props) {
        super(props);
        
        // Initialize the grid as regular
        this.state = {
            gridView: 'regular',
            isRtl: false,
        };
    }
    
    render() {
        const { gridView, isRtl } = this.state;
        
        return (
            <main className= 'ltr'>
                <header className="header">
                    <h1>
                        <a href="#" className="logo">
                            B
                            <small className="name">brand</small>
                            <span className="chevron" />
                        </a>
                    </h1>
                </header>
                
                <div className="container">
                    <div className="banner">                
                        <div className="item">
                            <img
                                src="https://images.unsplash.com/photo-1464490826362-59825a4f51df?dpr=2&auto=format&fit=crop&w=310&h=200&q=80&cs=tinysrgb&crop="
                                alt="Dresses aligned in hangers" />
                        </div>

                        <div className="item">
                            <img
                                src="https://images.unsplash.com/photo-1496153882250-348cd477af7e?dpr=2&auto=format&fit=crop&w=440&h=270&q=80&cs=tinysrgb&crop="
                                alt="Shirts hanging on a clothing pole in a home in San Diego" />
                        </div>

                        <div className="item">
                            <img
                                src="https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?dpr=2&auto=format&fit=crop&w=305&h=190&q=80&cs=tinysrgb&crop="
                                alt="Different clothing pieces hanging on a clothing pole in a store" />
                        </div>

                        <div className="item">
                            <img
                                src="https://images.unsplash.com/photo-1493455198445-863243d88564?dpr=2&auto=format&fit=crop&w=215&h=135&q=80&cs=tinysrgb&crop="
                                alt="A tailor buttoning a red shirt" />
                        </div>

                        <div className="item">
                            <img
                                src="https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?dpr=2&auto=format&fit=crop&w=215&h=70&q=80&cs=tinysrgb&crop="
                                alt="Back of a bunch of sneakers in a row" />
                        </div>

                        <h1 className="item title">
                            Our <br />
                            New <br />
                            Collection <br />
                            On fire! 🔥 
                        </h1>

                        <h2 className="item subtitle">
                            Fall 2017
                        </h2>
                    </div>
                    
                    <div className="toggleViewWrapper">
                        Change list      view
                        
                        <button
                            className={ `toggleViewButton ${gridView === 'compact' ? 'active' : ''}` }
                            onClick={ () => { this.setGridView('compact') } }
                            title="Show grid in compact view"
                            arial-label="Show grid in compact view">
                            { compactSVG }
                        </button>
                        <button
                            className={ `toggleViewButton ${gridView === 'regular' ? 'active' : ''}` }
                            onClick={ () => { this.setGridView('regular') } }
                            title="Show grid in regular view"
                            arial-label="Show grid in regular view">
                            { regularSVG }
                        </button>
                        <button
                            className={ `toggleViewButton ${gridView === 'large' ? 'active' : ''}` }
                            onClick={ () => { this.setGridView('large') } }
                            title="Show grid in large view"
                            arial-label="Show grid in large view">
                            { largeSVG }
                        </button>
                    </div>
                    
                    <section className={ `mainGrid ${gridView}` }>
                        { products.map(this.renderItem) }
                    </section>
                </div>
            </main>
        );
    }
    
    /*
     * Loop throughout the products constant to display each one.
     * 
     * @param {Object} product - Each product data
     * @param {Int} index - Cuurent loop's index
     */
    renderItem(product, index) {        
        return (
            <ProductCard
                product={ product } />
        );
    }
    
    setGridView(gridView) {
        this.setState({
            gridView,
        });
    }
}

export default Explore;