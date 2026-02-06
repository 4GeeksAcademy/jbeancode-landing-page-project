import React from "react";

const buttonTitle = "Find Out More!"

const peopleCards = [{name: "Josh", about:"I like pickles and long walks on the beach",button:{buttonTitle}},
    {name: "Steve", about:"I like hiking and cooking on Sundays",button:{buttonTitle}},
{name: "Barry", about:"I like cheese and karaoke on Saturday nights",button:{buttonTitle}},
{name: "Derek", about:"I like pizza and yoga in the mornings",button:{buttonTitle}},
{name: "Lloyd", about:"I like video games and ju jitsu",button:{buttonTitle}},
{name: "Casper", about:"I like ice cream and reading books",button:{buttonTitle}},
{name: "Franny", about:"I like cats and knitting things for my friends",button:{buttonTitle}},
{name: "Murtle", about:"I like turtles and playing wordle",button:{buttonTitle}},];

export const Card = () => {
  return (
    <div className="row">
      {peopleCards.map((person, index) => (
        // do I need to add this styling back to the below className? style={{ width: "18rem" }} 
         <div className="card col-3" key={index}> 
          <img src="https://i.etsystatic.com/20553578/r/il/70f1ba/3258604881/il_fullxfull.3258604881_7i19.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{person.name}</h5>
            <p className="card-text">{person.about}</p>
            <a href="#" className="btn btn-primary">
              {person.button.buttonTitle}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};




// export const Card = ({peopleCards}) => {
// //i need to iterate through here and create these cards so they are dynamic and a col 3 width
//     return (
//         <>
//         {peopleCards.map((person, index) => (
//             <div className="card col-3" style={{width: 18+"rem"}} key={index}>
//                 <img src="..." className="card-img-top" alt="..."/>
//                 <div className="card-body">
//                     <h5 className="card-title">{person.name}</h5>
//                     <p className="card-text">{person.about}</p>
//                     <a href="#" className="btn btn-primary">{person.button}</a>
//                 </div>
//             </div>
//             ))}
//         </>
//     );
// };


