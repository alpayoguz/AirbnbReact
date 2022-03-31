// import Star from "/images/Star1.png"

export default function Card(props) {
  let badgeText;
  if(!props.openSpots){
    badgeText ="SOLD OUT"
  }else if(props.location ==="Online"){
     badgeText="ONLINE"
  }
  return (
 

    <>
      <div className="card">
        <img src={`/images/${props.coverImg}`} className="card-img-top" alt="person" />
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <div className="card-body">
         <div className="body-rating">
             <span><img src= "/images/Star1.png" alt="start"/></span>
             <span>{props.stats.rating}</span>
            <span>({props.stats.reviewCount})</span>
            <span className="rating-dot">.</span>
            <span>{props.location}</span>
         </div>
         <div className="body-desc">
             <p>{props.title}</p>
         </div>
         <div className="body-price">
             <span>From ${props.price}</span>
             <span>/</span>
             <span>person</span>
         </div>
        </div>
      </div>
    </>
    
  );
}
