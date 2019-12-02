import React, {Component} from "react";
import OpenSaleItem from "./OpenSaleItem";

class OpenSale extends Component {
  render () {
    const {options} = this.props;

    return (
      <div className="wrapper">
        <div className="Rtable Rtable--5cols Rtable--collapse">
          <div className="Rtable-row Rtable-row--head">
            <div className="Rtable-cell date-cell column-heading">Asking Price</div>
            <div className="Rtable-cell topic-cell column-heading">Seller Name</div>
            <div className="Rtable-cell access-link-cell column-heading">Image</div>
            <div className="Rtable-cell controls-cell column-heading">Controls</div>
          </div>
          {options.map((openSaleItem, index) => {
            if(openSaleItem.status === 'Open')
              return <OpenSaleItem key={index} itemIndex={index} item={openSaleItem} handleAddOpenSale={this.props.handleAddOpenSale}/>
          })}
        </div>
      </div>
    )
  }
};

export default OpenSale;
