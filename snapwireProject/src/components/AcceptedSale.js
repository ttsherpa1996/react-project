import React, {Component} from "react";
import AcceptedSaleItem from "./AcceptedSaleItem";

class AcceptedSale extends Component {
  render () {
    const {options} = this.props;
    return (
      <div className="wrapper">
        <div className="Rtable Rtable--5cols Rtable--collapse">
          <div className="Rtable-row Rtable-row--head">
            <div className="Rtable-cell date-cell column-heading">Asking Price</div>
            <div className="Rtable-cell topic-cell column-heading">Seller Name</div>
            <div className="Rtable-cell access-link-cell column-heading">Image</div>
            <div className="Rtable-cell replay-link-cell column-heading">Sell To</div>
            <div className="Rtable-cell pdf-cell column-heading">Sale Price</div>
            <div className="Rtable-cell controls-cell column-heading">Controls</div>
          </div>
          {options.map((acceptedSaleItem, index) => {
            if(acceptedSaleItem.status === 'Accepted')
              return <AcceptedSaleItem key={index} itemIndex={index} item={acceptedSaleItem} handleAddAcceptedSale={this.props.handleAddAcceptedSale}/>
          })}
        </div>
      </div>
    )
  }
};

export default AcceptedSale;
