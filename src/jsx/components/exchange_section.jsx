import React from "react";

class ExchangeSection extends React.Component{

   render() {

      return(
         <section className="exchange">
            <h2>Bieżące kursy walut obcych w jednostce PLN.</h2>
            {this.props.children}
         </section>
      );
   };
};

export {ExchangeSection};
