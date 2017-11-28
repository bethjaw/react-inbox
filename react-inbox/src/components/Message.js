import React from 'react';


class Message extends React.Component {

  // constructor(props){
  //   super(props)
  // }

  render(){
    console.log(this.props.message.starred)

    let isRead = 'row message'
    isRead += this.props.message.read === true
      ? ' read' : ' unread'

    let isStarred = 'star fa '
    isStarred += this.props.message.starred === true
      ? 'fa-star' : 'fa-star-o'


    let isSelected = ''
    isSelected += this.props.message.selected
      ? 'selected' : ''


    // toggleStar = () => {
    //   this.props.message.starred
    // }

    return(
      <div>
        <div className={isRead}>
             <div className="col-xs-1">
               <div className="row">
                 <div className="col-xs-2">
                   <input type="checkbox" defaultChecked={isSelected}/>
                 </div>
                 <div className="col-xs-2">
                   <i className={isStarred}></i>
                 </div>
               </div>
           </div>
           <div className="col-xs-11">
             {this.props.message.labels.map(label => <span className="label label-warning">{label}</span>)}
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
