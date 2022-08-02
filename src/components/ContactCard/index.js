import React from "react";
import PropTypes from "prop-types";
import StyledContactCard, { Intro, Name } from "./style";
import Avatar from "components/Avatar";

function ContactCard({ contact, children, ...rest }) {
  return (
    <StyledContactCard {...rest}>
      <Avatar src={contact.avatar} status="online" />
      <Name>{contact.name}</Name>
      <Intro>{contact.intro}</Intro>
    </StyledContactCard>
  );
}

ContactCard.propTypes = {
  children: PropTypes.any,
};

export default ContactCard;
