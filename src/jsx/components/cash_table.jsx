import React from "react";
import {Container, Row, Col} from "reactstrap";


class CaschTable extends React.Component{

   constructor(props){
      super(props)
      this.state = {
         table: null
      };
   };

   componentDidMount(){
      this.props.caschData.then((data) => {
         this.setState({
            caschData: data
         });
      });
   };

   render() {

      let table;

      if (this.state.caschData) {

         let caschAmount, multiply, currency, flagSrc;

         table = Array.prototype.map.call(this.state.caschData, (val, index)=>{
            switch (String(val.mid).length) {
               case 5:
                  multiply = 1;
                  caschAmount = (val.mid * multiply).toFixed(4);
               break;
               case 7:
                  multiply = 10;
                  caschAmount = (val.mid * multiply).toFixed(4);
               break;
               case 8:
                  multiply = 100;
                  caschAmount = (val.mid * multiply).toFixed(4);
               break;
               case 9:
                  multiply = 1000;
                  caschAmount = (val.mid * multiply).toFixed(4);
               break;
               case 10:
                  multiply = 10000;
                  caschAmount = (val.mid * multiply).toFixed(4);
               break;
               default:
                  multiply = 1;
                  caschAmount = val.mid;
            };

            currency = val.currency.split("(")[0].charAt(0).toUpperCase() + val.currency.split("(")[0].slice(1);
            flagSrc = `dist/flags/${val.code.toLowerCase()}.png`;

            return(
               <Row key={val.code}>
                  <Col className="hide" xs="6">
                     Waluta
                  </Col>
                  <Col className="currency" sm="4" xs="6">
                     {currency}
                  </Col>
                  <Col className="hide" xs="6">
                     Region
                  </Col>
                  <Col sm="4" xs="6">
                     <img src={flagSrc} alt="" />
                     {this.props.region[index]}
                  </Col>
                  <Col className="hide" xs="6">
                     Symbol
                  </Col>
                  <Col sm="2" xs="6">
                     {`${multiply} ${val.code}`}
                  </Col>
                  <Col className="hide" xs="6">
                     Kurs
                  </Col>
                  <Col className="casch_amount" sm="2" xs="6">
                     {caschAmount}
                  </Col>
               </Row>
            )
         })
      };

      return(
         <Container>
            <Row className="tableHeader">
               <Col sm="4">Waluta</Col>
               <Col sm="4">Region</Col>
               <Col sm="2">Symbol</Col>
               <Col sm="2">Kurs</Col>
            </Row>
            {table || this.state.table}
         </Container>
      );
   };
};

export {CaschTable};
