import './featured.css';

const Featured = () => {
    return (
      <div className="featured">
        <div className="featuredItem">
          <img
            src="https://escales.ponant.com/wp-content/uploads/2021/02/une-irlande.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
          </div>
        </div>
        
        <div className="featuredItem">
          <img
            src="https://www.fivestaralliance.com/files/fivestaralliance.com/field/image/nodes/2009/11064/11064_0_majestichotelandspabarcelona_fsa-xl.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Barcelona</h1>
            <h2>533 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/66/cd/04/caption.jpg?w=700&h=-1&s=1&cx=1440&cy=949&chk=v1_1dc18af01397ba07dac9"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Austin</h1>
            <h2>532 properties</h2>
          </div>
        </div>
      </div>
    );
  };
  
  export default Featured;