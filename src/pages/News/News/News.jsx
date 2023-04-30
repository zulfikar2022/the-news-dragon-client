/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInside from "../EditorsInside/EditorsInside";

const News = () => {
  const newsDetails = useLoaderData();
  console.log(newsDetails);
  return (
    <div>
      <h2>Dragon news</h2>
      <div>
        <Card>
          <Card.Img
            variant="top"
            src={newsDetails?.image_url}
            className="p-3"
          />
          <Card.Body>
            <Card.Text>
              <h2>{newsDetails?.title}</h2>
              <p className="text-muted">{newsDetails?.details}</p>
              <Link to={`/categories/${newsDetails?.category_id}`}>
                <Button variant={"danger"}>
                  {" "}
                  <FaLongArrowAltLeft /> <span>All News in This Category</span>
                </Button>
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="mt-5">
        <EditorsInside></EditorsInside>
      </div>
    </div>
  );
};

export default News;
