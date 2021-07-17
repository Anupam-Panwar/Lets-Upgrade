import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <section className="contact bg-success p-3 mb-3">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <Card
            cardTitle="Orange"
            cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            buttonText="Pear"
            src="https://source.unsplash.com/2000x1000/?pear"
          />
          <Card
            cardTitle="Guava"
            cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            buttonText="Apple"
            src="https://source.unsplash.com/2000x1000/?apple"
          />
          <Card
            cardTitle="Mango"
            cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            buttonText="Pineapple"
            src="https://source.unsplash.com/2000x1000/?pineapple"
          />
        </div>
      </div>
    </section>
  );
};
export default CardSection;
