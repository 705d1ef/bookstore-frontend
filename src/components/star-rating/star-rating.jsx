import React, { useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import "./star-rating.css";

export const StarRating = (props) => {
    const { disable = false } = props;
    const rate = props.rating;
    const ratingInPercent = rate;
    const decimal = ratingInPercent / 10;
    const nonFraction = Math.trunc(decimal);
    const fraction = Number((decimal - nonFraction).toFixed(2));
    const fractionPercent = fraction * 100;
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
