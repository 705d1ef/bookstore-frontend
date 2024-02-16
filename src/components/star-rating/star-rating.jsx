import React, { useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md"; //dark
import "./star-rating.css";

export const StarRating = (props) => {
    const { disable = false } = props;
    const rate = props.rating;
    const ratingInPercent = rate;
    const decimal = ratingInPercent / 10;
    const nonFraction = Math.trunc(decimal);
    const fraction = Number((decimal - nonFraction).toFixed(2));
    const fractionPercent = fraction * 100;
    //const st1 = props.rating;
    //const starPercentage = (st1 /5) * 100;
    //const starProcenteRounded = `${Math.round(starPercentage / 10) * 10}%`;
    //console.log(fractionPercent) // was 68 aft 40      rating 4.67=47; rating  1=10
    //console.log(starProcenteRounded)
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className="stars-rating" style={{ position: "relative", display: "inline-flex" }}>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <React.Fragment key={i}>
                        <label>
                            <input type="radio" value={ratingValue} onClick={() => setRating(!disable && ratingValue)} />
                            <MdOutlineStarPurple500
                                className="stars"
                                color={ratingValue <= (hover || rating) ? "ffc107" : "#fff8"}
                                onMouseEnter={() => setHover(!disable && ratingValue)}
                                onMouseLeave={() => setHover(!disable && null)}
                            />
                        </label>
                    </React.Fragment>
                );
            })}
            <div style={{ width: `${fractionPercent}%`, position: "absolute", overflow: "hidden", display: "inline-flex" }}>
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;

                    return (
                        <React.Fragment key={i}>
                            <label>
                                <input type="radio" value={ratingValue} onClick={() => setRating(!disable && ratingValue)} />
                                <MdOutlineStarPurple500
                                    className="rating-average"
                                    color={ratingValue <= (hover || rating) ? "ffc107" : "#f4c430"}
                                    onMouseEnter={() => setHover(!disable && ratingValue)}
                                    onMouseLeave={() => setHover(!disable && null)}
                                />
                            </label>
                        </React.Fragment>
                    );
                })}
            </div>
            {rate > 0 ? <span className="rate"> {rate}</span> : null}
        </div>
    );
};
// #EBC03F  main good color -> #ffc107
// good color #8B8000
//export const StarRating = () => {
//    const rates = [1, 2, 3, 4, 5];
//    const [selectedRate, setSelectedRate] = useState(null);
//    const [hoveredRate, setHoveredRate] = useState(null);
//
//    return (
//        <div className="star">
//            {rates.map((rate) => (
//                <div
//                    key={rate}
//                    className={FaStarOfLife + (rate <= selectedRate ? "in-rate" : "") + (rate <= hoveredRate ? "in-hover" : "")}
//                    onClick={() => setSelectedRate(rate)}
//                    onMouseEnter={() => {
//                        setHoveredRate(rate);
//                        setSelectedRate(null);
//                    }}
//                    onMouseLeave={() => setHoveredRate(null)}
//                ></div>
//            ))}
//        </div>
//    );
//};
//------------------------------------------------------------------ seems to be, this working

//export const StarRating = () => {
//    const rates = [1, 2, 3, 4, 5];
//    const [selectedRate, setSelectedRate] = useState(null);
//    const [hoveredRate, setHoveredRate] = useState(null);
//
//    return (
//        <div className="stars">
//            {rates.map(rate => <i
//              key={rate}
//              className={"d"
//              + ((rate <= selectedRate) ? 'in-rate' : '')
//              + ((rate <= hoveredRate) ? 'in-hover' : '')}
//              onClick={() => setSelectedRate(rate)}
//              onMouseEnter={() => {setHoveredRate(rate); setSelectedRate(null);}}
//              onMouseLeave={() => setHoveredRate(null)}> <FaStarOfLife/> </i>)}
//          </div>
//    );
//};
// this is CSS form above
// .star {
//    cursor: pointer;
//    transition: color 200ms;
//}
// ------------Eric Murphy working my current version 27/12/2023----------------------
//export const StarRating = (props) => {
//    const st1 =  props.rating;
//    const [rating, setRating] = useState(null);
//    const [hover, setHover] = useState(null);
//
//    return (
//        <div>
//             {[...Array(5)].map((star, i) => {
//                const ratingValue = i + 1;
//
//                return (
//                    <React.Fragment key={i}>
//                        <label>
//                            <input type="radio" name="just_rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
//                            <FaStarOfLife
//                                className="just_star"
//                                color={ratingValue <= (hover || rating) ? "blue" : "white"}
//                                size={25}
//                                onMouseEnter={() => setHover(ratingValue)}
//                                onMouseLeave={() => setHover(null)}
//                            />
//                        </label>
//                    </React.Fragment>
//                );
//            })}
//            {Array.from({ length: st1 }, (_, i) => {
//                const ratingValue = i + 1;
//
//                return (
//                    <React.Fragment key={i}>
//                        <label>
//                            <input type="radio" name="made_rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
//                            <FaStarOfLife
//                                className="made_star"
//
//                                size={25}
//
//
//                            />
//                        </label>
//                    </React.Fragment>
//                );
//            })}
//
//            <span className="ml-3 text-blue-500">{st1} rati</span>
//
//        </div>
//    );
//};
////--------------------- traversy media
//
//const rating_1 = {
//    sory: 4.7,
//    papasonic: 3.4
//
//}
//const starsTotal = 5;
//
//document.addEventListener("DOMContentLoaded",getRat);
//
//function getRat() {
//    for (let ra in rating_1) {
//        // get percentage
//        const starPercentage = (rating_1[ra] /
//        starsTotal) * 100;
//
//        //console.log(starPercentage) 94, 68
//
//        // round to nearest 10
//        const starProcenteRounded = `${Math.round
//        (starPercentage / 10) * 10}%`;
//
//        //console.log(starProcenteRounded) 90%, 70%
//
//        // set width of sta-inner to percentage
//        document.querySelector(`.${ra}.tstar-inner`).style.width = starProcenteRounded
//    }
//}
// this is CSS form above
//.tstar-outer {
//    position: relative;
//    display: inline-block;
//}
//
//.tstars-inner {
//    position: absolute;
//    top: 0;
//    left: 0;
//    white-space: nowrap;
//    overflow: hidden;
//    width: 0;
//}
//
//.tstar-outer::before {
//    content: "\2605, \2605, \2605, \2605, \2605", "★";
//    color: #fff8;
//}
//
//.tstar-inner::before {
//    content: "\2605, \2605, \2605, \2605, \2605";
//    color: rgba(191, 10, 10, 0.533);
//}
//----------  progress bar
// ccs progress-bar
//  width: 100%
//export const ProgressBar = () => {
//    const [progress, setProgress] = useState(0);
//    const handleButtonClick = () => {
//        if (progress < 100){
//            setProgress(progress + 20);
//        }
//    }
//
//    const handleButtonReset = () => {
//        setProgress(0);
//    };
//
//    const getColor = () => {
//        if (progress < 40){
//            return "#ffa500"
//        } else {
//            return "#2ecc71";
//        }
//    }
//    return (
//    <div className="container">
//        <div className="progress-bar">
//            <div className="progress-bar-fill" style={{ width: `${progress}%`, background: getColor() }} ></div>
//        </div>
//        <div className="progress-label">{progress}</div>
//        <button onClick={handleButtonClick}>Progress</button>
//        <button> onClick={handleButtonReset}Reset</button>
//    </div>
//    )
//};

//------------------------------------------

//-------------------------------

////export const StarRating = () => {
//    const rates = [1, 2, 3, 4, 5];
//    return (
//        <div>
//            {[...rates].map((star, i) => {
//            // get percentage
//            const starPercentage = (rating_1[star] /
//            starsTotal) * 100;
//
//            //console.log(starPercentage) 94, 68
//
//            // round to nearest 10
//            const starProcenteRounded = `${Math.round
//            (starPercentage / 10) * 10}%`;})}
//            let rating_average = (rating_based_on_stars / total_rating).toFixed(1);
//            document.querySelector("rating__average h1").innerHTML = rating_average;
//            document.querySelector("rating__average p").innerHTML = total_rating.toLocaleString();
//            document.querySelector(".star-inner").style.width = (rating_average / 5) * 100 + "%";
//        </div>
//    );
//};
// CSS for above
//.rating__average .star-outer {
//    position: relative;
//    font-size: 2rem;
//
//    display: inline-block;
//}
//
//.rating__average .star-outer::before {
//    content: "\2605";
//    color: #fff8;
//}
//
//.rating__average .star-inner {
//    position: absolute;
//    top: 0;
//    left: 0;
//
//    width: 50%;
//    overflow: hidden;
//}
//
//.rating__average .star-inner::before {
//    content: "\2605";
//    color: royalblue;
//}

//-------------------------------------------------------- Eric Murphy working

//export const StarRating = () => {
//    const [rating, setRating] = useState(null);
//    const [hover, setHover] = useState(null);
//    //console.log(book)    <>key={i}</>
//    return (
//        <div>
//            {[...Array(5)].map((star, i) => {
//                const ratingValue = i + 1;
//
//                return (
//                    <React.Fragment key={i}>
//                        <label>
//                            <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
//                            <FaStarOfLife
//                                className="star"
//                                color={ratingValue <= (hover || rating) ? "green" : "red"}
//                                size={25}
//                                onMouseEnter={() => setHover(ratingValue)}
//                                onMouseLeave={() => setHover(null)}
//                            />
//                        </label>
//                    </React.Fragment>
//                );
//            })}
//            <p>The rat is {rating}.</p>
//        </div>
//    );
//};
//---------------------------------------------------------
//return (
//    <div className="star">
//        {rates.map(rate => <i
//            key={rate}
//            className={FaStarOfLife
//            + ((rate <= selectedRate) ? 'in-rate ' : '')
//            + ((rate <= hoveredRate) ? 'in-hover ' : '')}
//            onClick={() => setSelectedRate(rate)}
//            onMouseEnter={() => {setHoveredRate(rate); setSelectedRate(null)}}
//            onMouseLeave={() => setHoveredRate(null)}
//        ></i>)
//        }
//    </div>
//);
//};
// ---------------- JonnyDavies Initial Amazon clone commit
//  "avgRating": 4,
//  "ratings": 24089
//import { FaSquare } from "react-icons/fa";
//
//export const StarRating = (props) => {
//    const st1 =  props.rating;
//    const st = props.avgRating;
//
//    return (
//
//        <div className="flex">
//            {Array.from({ length: st1 }, (_, i) => (
//                <FaSquare key={i} className="r" />
//            ))}
//            {Array.from({ length: 5 - st }, (_, i) => (
//                <FaSquare key={i} className="r1" />      ))}
//            <span className="ml-3 text-blue-500">{st1} rati</span>
//        </div>
//
//    );
//};

//import { StarIcon } from "@heroicons/react/24/outline";
//
//const ProductRatings = (props) => {
//  const starNumber = props.avgRating;
//  const ratingNumber = props.ratings;
//
//  return (
//    <div className="flex">
//      {Array.from({ length: starNumber }, (_, i) => (
//        <StarIcon
//          key={i}
//          className="stroke-[#F1B61F] fill-[#F1B61F] h-[20px]"
//        />
//      ))}
//      {Array.from({ length: 5 - starNumber }, (_, i) => (
//        <StarIcon key={i} className="stroke-[#F1B61F] h-[20px]" />
//      ))}
//      <span className="ml-3 text-blue-500">{ratingNumber} ratings</span>
//    </div>
//  );
//};
//
//export default ProductRatings;

//--------TRAVERSYMedia----------
//const rating_1 = {
//    sory: 4.7,
//    papasonic: 3.4
//
//}
//const starsTotal = 5;
//
//document.addEventListener("DOMContentLoaded",getRat);
//
//function getRat() {
//    for (let ra in rating_1) {
//        // get percentage
//        const starPercentage = (rating_1[ra] /
//        starsTotal) * 100;
//
//        //console.log(starPercentage) 94, 68
//
//        // round to nearest 10
//        const starProcenteRounded = `${Math.round
//        (starPercentage / 10) * 10}%`;
//
//        //console.log(starProcenteRounded) 90%, 70%
//
//        // set width of sta-inner to percentage
//        document.querySelector(`.${ra}.tstar-inner`).style.width = starProcenteRounded
//    }
//}
//-------------------------------------------------
//----------  progress bar
// ccs progress-bar
//  width: 100%
//export const ProgressBar = () => {
//    const [progress, setProgress] = useState(0);
//    const handleButtonClick = () => {
//        if (progress < 100){
//            setProgress(progress + 20);
//        }
//    }
//
//    const handleButtonReset = () => {
//        setProgress(0);
//    };
//
//    const getColor = () => {
//        if (progress < 40){
//            return "#ffa500"
//        } else {
//            return "#2ecc71";
//        }
//    }
//    return (
//    <div className="container">
//        <div className="progress-bar">
//            <div className="progress-bar-fill" style={{ width: `${progress}%`, background: getColor() }} ></div>
//        </div>
//        <div className="progress-label">{progress}</div>
//        <button onClick={handleButtonClick}>Progress</button>
//        <button> onClick={handleButtonReset}Reset</button>
//    </div>
//    )
//};
// ----------------don't know what this -------------------
// {totalPrice > 0 ? <span className="total-price">{totalPrice} £</span> : null}
// {rate > 0 ? <span className="rate"> {rate}</span> : null}

//export const StarRating = (props) => {
//    const st1 = props.rating;
//    const starPercentage = (st1 /5) * 100;
//    const starProcenteRounded = `${Math.round(starPercentage / 10) * 10}%`;
//
//    const precision = 1;
//    const totalStars = 5;
//    const emptyIcon = FaRegSquare;
//    const filledIcon = FaSquare;
//
//    const [activeStar, setActiveStar] = useState(-1);
//    const [hoverActiveStar, setHoverActiveStar] = useState(-1);
//    const [isHovered, setIsHovered] = useState(false);
//    const ratingContainerRef = useRef(null);
//
//    const calculateRating = (e) => {
//    const { width, left } = ratingContainerRef.current.getBoundingClientRect();
//    let percent = (e.clientX - left) / width;
//    const numberInStars = percent * totalStars;
//    const nearestNumber = Math.round((numberInStars + precision / 2) / precision) * precision;
//
//    return Number(nearestNumber.toFixed(precision.toString().split('.')[1]?.length || 0));
//    };
//
//    const handleClick = (e) => {
//    setIsHovered(false);
//    setActiveStar(calculateRating(e));
//    };
//
//    const handleMouseMove = (e) => {
//      setIsHovered(true);
//      setHoverActiveStar(calculateRating(e));
//    };
//
//    const handleMouseLeave = (e) => {
//      setHoverActiveStar(-1); // Reset to default state
//      setIsHovered(false);
//    };
//
//    const EmptyIcon = emptyIcon;
//    const FilledIcon = filledIcon;
//
//
//    return (
//         <div className="main-box">
//            {[...new Array(totalStars)].map((arr, index) => {
//                const activeState = isHovered ? hoverActiveStar : activeStar;
//
//                const showEmptyIcon = activeState === -1 || activeState < index + 1;
//
//                const isActiveRating = activeState !== 1;
//                const isRatingWithPrecision = activeState % 1 !== 0;
//                const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;
//                const showRatingWithPrecision = isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;
//
//                return (
//                    <div className="middle-box" >
//                        <div className="full-stars"> <FaSquare size={35} /> </div>
//                        <div className="emp-stars"> <FaRegSquare size={35}  style={{ width: `${st1*15}%` }}   /> </div>
//                    </div>
//                );
//            })}
//        </div>
//    );
//}

//onClick={handleClick}
//onMouseMove={handleMouseMove}
//onMouseLeave={handleMouseLeave}
//ref={ratingContainerRef}
// style={{ width: showRatingWithPrecision ? `${(activeState % 1) * 100}%` : '0%'}}

//console.log(starProcenteRounded) 90%, 70%
//
//         set width of sta-inner to percentage
//        document.querySelector(`.${ra}.tstar-inner`).style.width = starProcenteRounded
// style={{color: showEmptyIcon ? 'gray' : 'inherit'}}
//----------------------------------------------------------------------------------------------------
//import React, { useState } from "react";
//import { string, number, func, bool } from "prop-types";
//import defaultClasses from "./dot.css";

// ---------- from lazy panda----------------------

// from AP.js
//<div>
//          <h3>
//            Rating componet with <u>User Interaction enabled</u>
//          </h3>
//          <Rating
//            iconSize="l"
//            showOutOf={true}
//            enableUserInteraction={true}
//            onClick={handleRatingAction}
//          />
//import IconComponent from  "./iconComponent.js"
//
//const SIZES = {
//  SMALL: {
//    key: "s",
//    size: 10
//  },
//  MEDIUM: {
//    key: "m",
//    size: 18
//  },
//  LARGE: {
//    key: "l",
//    size: 28
//  }
//};
//
//const OUT_OF_VALUE = 5;
//
//export const Rating = (props) => {
//  const {
//    iconSize,
//    ratingInPercent,
//    showOutOf,
//    enableUserInteraction,
//    onClick
//  } = props;
//
//  const [activeStar, setActiveStar] = useState(-1);
//  const decimal = ratingInPercent / 20;
//  const nonFraction = Math.trunc(decimal);
//  const fraction = Number((decimal - nonFraction).toFixed(2));
//  const fractionPercent = fraction * 100;
//
//  //const classes = defaultClasses;
//
//  const numberOfStar = OUT_OF_VALUE;
//  const size =
//    iconSize === SIZES.SMALL.key
//      ? SIZES.SMALL.size
//      : iconSize === SIZES.MEDIUM.key
//      ? SIZES.MEDIUM.size
//      : SIZES.LARGE.size;
//
//  const RatingHighlighted = (
//    <IconComponent type={"ratingHighlighted"} width={size} height={size} />
//  );
//  const RatingDefault = (
//    <IconComponent type={"ratingDefault"} width={size} height={size} />
//  );
//
//  const handleClick = (index) => {
//    onClick(index + 1);
//    setActiveStar(index);
//  };
//
//  const showDefaultStar = (index) => {
//    return RatingDefault;
//  };
//
//  let isShow = true;
//  const getStar = (index) => {
//    if (index <= nonFraction - 1) {
//      isShow = true;
//      return "100%";
//    } else if (fractionPercent > 0 && isShow) {
//      isShow = false;
//      return `${fractionPercent}%`;
//    } else {
//      return "0%";
//    }
//  };
//
//  const isShowOutOfStar = (index) => {
//    if (showOutOf) {
//      return showOutOf;
//    }
//
//    const isLoopThrough = (fraction === 0 ? nonFraction : nonFraction + 1) - 1;
//    return index <= isLoopThrough;
//  };
//
//  const withoutUserInteraction = (index) => {
//    return isShowOutOfStar(index) ? (
//      <div style={{ position: "relative" }} key={index}>
//        <div
//          style={{
//            width: getStar(index),
//            overflow: "hidden",
//            position: "absolute"
//          }}
//        >
//          {RatingHighlighted}
//        </div>
//        {showDefaultStar(
//          showOutOf
//            ? nonFraction === 0
//              ? index < nonFraction
//              : index <= nonFraction
//            : index <= numberOfStar
//        )}
//      </div>
//    ) : null;
//  };
//
//  const withUserInteraction = (index) => {
//    return (
//      <div
//        style={{ position: "relative" }}
//        onClick={() => handleClick(index)}
//        key={index}
//      >
//        <div
//          style={{
//            width: index <= activeStar ? "100%" : "0%",
//            overflow: "hidden",
//            position: "absolute"
//          }}
//        >
//          {RatingHighlighted}
//        </div>
//        {showDefaultStar()}
//      </div>
//    );
//  };
//
//  return (
//    <div className="star-rating">
//      {[...new Array(numberOfStar)].map((arr, index) =>
//        enableUserInteraction
//          ? withUserInteraction(index)
//          : withoutUserInteraction(index)
//      )}
//    </div>
//  );
//};
//
//Rating.propTypes = {
//  ratingInPercent: number.isRequired,
//  iconSize: string,
//  showOutOf: bool.isRequired,
//  enableUserInteraction: bool.isRequired,
//  onClick: func
//};

//Rating.defaultProps = {
//  ratingInPercent: 50,
//  iconSize: SIZES.LARGE.key,
//  onClick: () => null,
//  showOutOf: false,
//  enableUserInteraction: false
//};

//export default Rating;
