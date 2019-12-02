import React, {Component} from 'react';

class OpenSaleItem extends Component {
  handleAddOpenSale = (e) => {
    e.preventDefault();
    const index = this.props.itemIndex;
    const option = this.props.item;
    const error = this.props.handleAddOpenSale(option,index);
  };

  render() {
    const {item} = this.props;
    return (
      <form onSubmit={this.handleAddOpenSale} className="Rtable-row">
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
              <img className="open" src={item.imageUrl}/>
            </a>
          </div>
        </div>
        <div className="Rtable-cell controls-cell">
          <div className="Rtable-cell--heading">Controls</div>
          <div className="Rtable-cell--content controls-content">
            <button>Accept</button>
          </div>
        </div>
      </form>
    )
  }
}

export default OpenSaleItem;
