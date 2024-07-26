import { useState } from "react";
import PropTypes from "prop-types";
import Star from "./Star";

const containerStyles = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyles = {
  display: "flex",
  gap: "4px",
};

const StarRating = ({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  defaultRating = 0,
  messages = [],
  onSetRating,
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (val) => {
    setRating(val);
    onSetRating(val);
  };

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={containerStyles} className={className}>
      <div style={starContainerStyles}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={hoverRating ? hoverRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setHoverRating(i + 1)}
            onHoverOut={() => setHoverRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      {messages.length === maxRating
        ? messages[hoverRating ? hoverRating - 1 : rating - 1]
        : hoverRating || rating || ""}
    </div>
  );
};

StarRating.propTypes = {
  maxRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  defaultRating: PropTypes.number,
  messages: PropTypes.array,
  onSetRating: PropTypes.func,
};

export default StarRating;
