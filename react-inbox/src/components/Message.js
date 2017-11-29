import React from 'react';


class Message extends React.Component {

  // constructor(props){
  //   super(props)
  // }

  render(){

    let isRead = 'row message'
    isRead += this.props.message.read === true
      ? ' read' : ' unread'

    let isSelected = ''
    isSelected += this.props.message.selected
      ? 'selected' : ''

    if(isSelected) {isRead += ' selected'}

    let isStarred = 'star fa '
    isStarred += this.props.message.starred === true
      ? 'fa-star' : 'fa-star-o'


    return(
      <div>
        <div className={isRead}>
             <div className="col-xs-1">
               <div className="row">
                 <div className="col-xs-2">
                   <input type="checkbox" onChange={this.props.onSelect}
                    //  checked={this.props.isSelected}
                    //  checked={this.props.message.selected}
                   />
                 </div>
                 <div className="col-xs-2">
                   <i className={isStarred} onClick={this.props.onStar}></i>
                 </div>
               </div>
           </div>
           <div className="col-xs-11">
             {this.props.message.labels.map((label) => <span key={label.toString()} value={label} className="label label-warning">{label}</span>)}
                <a href="#">
                 {this.props.message.subject}
               </a>
              </div>
            </div>
      </div>
    )
  }

}


export default Message
