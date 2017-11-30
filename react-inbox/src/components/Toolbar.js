import React from 'react';


class Toolbar extends React.Component {


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

  return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{this.props.unreadCount}</span>
            unread messages
          </p>

          <a className="btn btn-danger" onClick={this.props.toggleCompose}>
            <i className="fa fa-plus"></i>
          </a>

          <button className="btn btn-default" onClick={this.props.onSelect}>
          <i className={this.selectStatus()}/>
          </button>

          <button className="btn btn-default" onClick={this.props.onClickRead}>Mark As Read</button>

          <button className="btn btn-default" onClick={this.props.onClickUnread}>Mark As Unread</button>

          <select className="form-control label-select" onChange={this.props.applyLabel}>
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select" onChange={this.props.removeLabel}>
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default" onClick={this.props.deleteMessage}>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    )
  }
}


export default Toolbar
