import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/Button";

function SocialIcon({ icon, bgColor, href, ...rest }) {
  return (
    <Button
      size="30px"
      bgColor={bgColor}
      onClick={() => href && window.open(href, "_blank")}
      {...rest}
    >
      <FontAwesomeIcon icon={icon} style={{ fontSize: "16px" }} />
    </Button>
  );
}

SocialIcon.propTypes = {
  icon: PropTypes.any.isRequired,
  bgColor: PropTypes.string,
  href: PropTypes.string,
};

export default SocialIcon;
