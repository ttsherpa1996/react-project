import React, {Component} from 'react';

class SoldSaleItem extends Component {
  render() {
    const {item} = this.props;
    return (
      <div className="Rtable-row">
        <div className="Rtable-cell date-cell">
          <div className="Rtable-cell--heading">Asking Price</div>
          <div className="Rtable-cell--content date-content">
            <span className="webinar-date">{item.price}</span>
          </div>
        </div>

        <div className="Rtable-cell topic-cell">
          <div className="Rtable-cell--content title-content">{item.name}</div>
        </div>

        <div className="Rtable-cell access-link-cell">
          <div className="Rtable-cell--heading">Image</div>
          <div className="Rtable-cell--content access-link-content">
            <a href="#0">
              <img className="sold" src={item.imageUrl}/>
            </a>
          </div>
        </div>
        <div className="Rtable-cell replay-link-cell">
          <div className="Rtable-cell--heading">Buyer Name</div>
          <div className="Rtable-cell--content replay-link-content">{item.transaction.buyerName}</div>
        </div>
        <div className="Rtable-cell Rtable-cell--foot pdf-cell">
          <div className="Rtable-cell--heading">Sale Price</div>
          <div className="Rtable-cell--content pdf-content">{item.transaction.salePrice}</div>
        </div>
      </div>
    )
  }
}

export default SoldSaleItem;
