import React from 'react';


class Toolbar extends React.Component {

  constructor(props){
    super(props)
  }


// <i class="fa fa-minus-square-o"></i> some messages selected
//  <i class="fa fa-check-square-o"></i> all messages selected
//  <i class="fa fa-square-o"></i> no messages selected


selectStatus () {
    switch(this.props.status){
      case 'all':
        return 'fa fa-check-square-o'
      case 'some':
        return  'fa fa-minus-square-o'
      case 'none':
      default:
        return 'fa fa-square-o'
    }
  }


render(){
  // console.log(this.props.status)
  return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">2</span>
            unread messages
          </p>

          <a className="btn btn-danger">
            <i className="fa fa-plus"></i>
          </a>

          <button className="btn btn-default" onClick={this.props.onSelect}>
          <i className={this.selectStatus()}/>
          </button>

          <button className="btn btn-default">Mark As Read</button>

          <button className="btn btn-default">Mark As Unread</button>

          <select className="form-control label-select">
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select">
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    )
  }
}




export default Toolbar
