import React, {Component} from "react";
import SoldSaleItem from "./SoldSaleItem";

class SoldSale extends Component {
  render () {
    const {options} = this.props;
    return (
      <div className="wrapper">
        <div className="Rtable Rtable--5cols Rtable--collapse">
          <div className="Rtable-row Rtable-row--head">
            <div className="Rtable-cell date-cell column-heading">Asking Price</div>
            <div className="Rtable-cell topic-cell column-heading">Seller Name</div>
            <div className="Rtable-cell access-link-cell column-heading">Image</div>
            <div className="Rtable-cell replay-link-cell column-heading">Buyer Name</div>
            <div className="Rtable-cell pdf-cell column-heading">Price</div>
          </div>
          {options.map((soldSaleItem, index) => {
            if(soldSaleItem.status === 'Sold')
              return <SoldSaleItem key={index} item={soldSaleItem}/>
          })}
        </div>
      </div>
    )
  }
};

export default SoldSale;
