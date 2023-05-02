/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./NewsCard.css";
import { Card } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import moment from "moment";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  const { name, img, published_date } = author;
  const { number, badge } = rating;
  return (
    <Card className=" news-card">
      <Card.Header>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img className="news-author-image" src={img} alt="" />
            <div className="d-flex flex-column ms-2">
              <p className="mb-0">{name}</p>
              <p className="mb-0">
                {moment(published_date).format("YYYY-MM-D")}{" "}
              </p>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <Link>
                <FaRegBookmark />
              </Link>
              <Link>
                <FaShareAlt className="ms-3" />
              </Link>
            </div>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <img src={image_url} className="news-image" alt="" />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link to={`/news/${_id}`}>Read more</Link>{" "}
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <div className="d-flex justify-content-between">
          <div className="d-flex ">
            <small>
              <Rating
                style={{ maxWidth: 100 }}
                value={number} readOnly
              />
            </small>
            <p>
              <small>{number}</small>
            </p>
          </div>
          <div>
            <FaEye style={{ marginTop: "2px", marginRight: "2px" }} />{" "}
            <small>{total_view}</small>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
