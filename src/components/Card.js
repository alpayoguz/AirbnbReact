// import Star from "/images/Star1.png"

export default function Card({elem}) {
  let badgeText;
  if(!elem.openSpots){
    badgeText ="SOLD OUT"
  }else if(elem.location ==="Online"){
     badgeText="ONLINE"
  }
  return (
 

    <>
      <div className="card">
        <img src={`/images/${elem.coverImg}`} className="card-img-top" alt="person" />
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <div className="card-body">
         <div className="body-rating">
             <span><img src= "/images/Star1.png" alt="start"/></span>
             <span>{elem.stats.rating}</span>
            <span>({elem.stats.reviewCount})</span>
            <span className="rating-dot">.</span>
            <span>{elem.location}</span>
         </div>
         <div className="body-desc">
             <p>{elem.title}</p>
         </div>
         <div className="body-price">
             <span>From ${elem.price}</span>
             <span>/</span>
             <span>person</span>
         </div>
        </div>
      </div>
    </>
    
  );
}
