import "../scss/main.scss";
import React from "react";
import ReactDOM from "react-dom";
import {caschData} from "./modules/cash_API.jsx";
import {additionalData} from "./modules/additional_data.jsx";
import {CaschTable} from "./components/cash_table.jsx";
import {ExchangeSection} from "./components/exchange_section.jsx";


class App extends React.Component{
 render() {
   return(
      <div>
         <ExchangeSection>
            <CaschTable caschData={caschData} region={additionalData} />
         </ExchangeSection>
      </div>
   )
 };
};




document.addEventListener("DOMContentLoaded", function(){
   ReactDOM.render(
      <App />,
      document.getElementById("app")
   );
});
