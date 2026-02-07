import React from "react";
import { Card } from "./Card";

const buttonTitle = "Find Out More!"

const peopleCards = [{name: "Josh", about:"I like pickles and long walks on the beach",button:{buttonTitle}},
    {name: "Steve", about:"I like hiking and cooking on Sundays",button:{buttonTitle}},
{name: "Barry", about:"I like cheese and karaoke on Saturday nights",button:{buttonTitle}},
{name: "Derek", about:"I like pizza and yoga in the mornings",button:{buttonTitle}},
{name: "Lloyd", about:"I like video games and ju jitsu",button:{buttonTitle}},
{name: "Casper", about:"I like ice cream and reading books",button:{buttonTitle}},
{name: "Franny", about:"I like cats and knitting things for my friends",button:{buttonTitle}},
{name: "Murtle", about:"I like turtles and playing wordle",button:{buttonTitle}},];

export const CardRow = () => {
  return (
    <div className="row">
      {peopleCards.map((person, index) => (
        <div className="col-xl-3 col-sm-12" key={index}>
        <Card name={person.name} about={person.about} buttonTitle={person.button.buttonTitle} />
        </div>
      ))}
    </div>
  );
};

