import React from 'react';



const Message = ({data}) => {

  function isRead (read) { return read ? 'read' : 'unread'}
  function isStarred (starred) {return starred ? 'fa-star' : 'fa-star-o'}
  function isSelected (selected) {return selected ? 'selected' : ''}

    return(
      <div className={`row message ${isRead(data.read)} ${isSelected(data.selected)}`}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" checked={`${isSelected(data.selected)}`} />
            </div>
            <div className="col-xs-2">
              <i className={`star fa ${isStarred(data.starred)}`}></i>
            </div>
          </div>
      </div>
      <div className="col-xs-11">
        <a href="#">
          {data.subject}
        </a>
      </div>
    </div>
    )
  }



export default Message
