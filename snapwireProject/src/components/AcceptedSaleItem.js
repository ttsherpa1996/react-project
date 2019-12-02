import React, {Component} from 'react';

class AcceptedSaleItem extends Component {
  state = {
    buyerName: '',
    salePrice: '',
    errors: {
      buyerName: '',
      salePrice: ''
    }
  }
  handleAddAcceptedSale = (e) => {
    e.preventDefault();
    const buyerName = e.target.elements.buyerName.value.trim();
    const salePrice = e.target.elements.salePrice.value.trim();
    const index = this.props.itemIndex;
    const option = this.props.item;
    const errors = this.props.handleAddAcceptedSale(option,index,buyerName,salePrice);
    this.setState(() => ({ errors: {
      buyerName: errors.buyerName,
      salePrice: errors.salePrice
    } }));
  };

  //validation
  handleChange = (event) => {
  event.preventDefault();
  const { name, value } = event.target;
  const validEmailRegex = RegExp(/^[0-9]+(\.[0-9]{1,2})?$/gm);
  const validNameRegex = RegExp(/^[A-Z a-z]*$/);
  let errors = this.state.errors;

  switch (name) {
    case 'buyerName':
      errors.buyerName =
        value.length < 2 || !validNameRegex.test(value)
          ? 'Buyer Name length must be greater than 1 and contains only letters'
          : '';
      break;
    case 'salePrice':
      errors.salePrice =
        validEmailRegex.test(value)
          ? ''
          : 'Sale Price needs to be formatted correctly';
      break;
    default:
      break;
  }

  this.setState({errors, [name]: value}, ()=> {
      console.log(errors)
  })
}

  render() {
    const {item} = this.props;
    let {errors} = this.state;
    return (
      <form onSubmit={this.handleAddAcceptedSale} className="Rtable-row">
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
              <img className="accepted" src={item.imageUrl}/>
            </a>
          </div>
        </div>
        <div className="Rtable-cell replay-link-cell">
          <div className="Rtable-cell--heading">Buyer Name</div>
          <div className="Rtable-cell--content replay-link-content">
            <input className ="Rtable-cell--input" type="text"  placeholder="Name" name="buyerName" value={this.state.buyerName} onChange={this.handleChange}>
            </input>
            <div className='error'>{errors.buyerName}</div>
          </div>
        </div>
        <div className="Rtable-cell Rtable-cell--foot pdf-cell">
          <div className="Rtable-cell--heading">Sale Price</div>
          <div className="Rtable-cell--content pdf-content">
            <input className ="Rtable-cell--input" type="text" placeholder="Price" name="salePrice" value={this.state.salePrice} onChange={this.handleChange}>
            </input>
            <div className='error'>{errors.salePrice}</div>
          </div>
        </div>
        <div className="Rtable-cell controls-cell">
          <div className="Rtable-cell--heading">Controls</div>
          <div className="Rtable-cell--content controls-content">
            <button disabled={this.state.errors.buyerName || this.state.errors.salePrice || !this.state.buyerName || !this.state.salePrice}>Sell</button>
          </div>
        </div>
      </form>
    )
  }
}

export default AcceptedSaleItem;
