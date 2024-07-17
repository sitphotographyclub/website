import React from "react";
import "./TeamCard.css";

const TeamCard = (props) => {
  return (
    <div className="card p-3 pt-4 h-100">
      <img
        src={props.member.profile_img}
        className="card-img-top"
        alt="profile_img"
        style={{ borderRadius: "50%" }}
      />
      <hr className="text-secondary" />
      <div className="card-body text-center">
        <h5 className="card-title fs-4">
          {props.member.first_name} {props.member.last_name}
        </h5>
        <h6 className="card-title text-warning">{props.member.desg}</h6>
        <p className="card-text mt-3">
          {props.member.desc.length > 120
            ? `${props.member.desc.substring(0, 121)}...`
            : props.member.desc}
        </p>

        <div className="social-link-container w-100 d-flex justify-content-center gap-3">
          <a href={props.member.social_links.fb} target="_blank">
            <i className="bi bi-facebook"></i>
          </a>
          <a href={props.member.social_links.twitter} target="_blank">
            <i className="bi bi-twitter"></i>
          </a>
          <a href={props.member.social_links.linkedin} target="_blank">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href={props.member.social_links.instagram} target="_blank">
            <i className="bi bi-instagram"></i>
          </a>
          <a href={props.member.social_links.github} target="_blank">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
