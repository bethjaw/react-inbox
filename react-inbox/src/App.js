import React from 'react';
// import logo from './logo.svg';
import './App.css';

import MessageList from './components/MessageList';
import Toolbar from './components/Toolbar';
import Compose from './components/Compose';


class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      data: [],
      composing: false
    }
  }


  async componentDidMount(){
      const response = await fetch('https://react-inbox.herokuapp.com/api/messages')
      const json = await response.json()
      this.setState({data: json._embedded.messages})
    }


  async updateMessage(message, newData){
    const response = await fetch('https://react-inbox.herokuapp.com/api/messages', {
      method: 'PATCH',
      body: JSON.stringify(message),
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    this.setState({data: newData})
  }


  async createItem(message){
    const response = await fetch('https://react-inbox.herokuapp.com/api/messages', {
        method: 'POST',
        body: JSON.stringify(message),
        headers:{
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      this.componentDidMount()
    }



  handleStarred = (i) => {
    let newData = this.state.data
    newData[i].starred = !newData[i].starred

    const updateStar = {
      "messageIds": [],
      "command": "star",
      "star": true
      }

    updateStar.messageIds.push(newData[i].id)
    updateStar.star = newData[i].starred
    this.updateMessage(updateStar, newData)
    this.setState({data: newData})
  }


  handleSelected = (i) => {
    let newData = this.state.data
    newData[i].selected = !newData[i].selected
    this.setState({data: newData})
  }


  handleSelectAll = () => {
    let dataSelect = this.state.data
    let counter = 0

    for(var i=0; i < dataSelect.length; i++){
      if(dataSelect[i].selected === true){
        counter++
      } else if (dataSelect[i].selected === false || dataSelect[i].selected == null){
        dataSelect[i].selected = true
      }

      if(counter === dataSelect.length){
        for(var j=0; j < dataSelect.length; j++){
          dataSelect[j].selected = false
        }
      }
      this.setState({data: dataSelect})
    }
  }


  getSelectStatus () {
      const selected= this.state.data.filter((message) => !!message.selected).length
      switch(selected) {
        case 0:
          return 'none'
        case this.state.data.length:
          return 'all'
        default:
          return 'some'
      }
    }

  markRead = () => {
    let newData = this.state.data
    let messageIds = []

    for(var i=0; i < newData.length; i++){
      if(newData[i].selected === true){
        if(newData[i].read === false){
          newData[i].read = true
          messageIds.push(newData[i].id)
        }
      }
    }

      const updateRead = {
      "messageIds": messageIds,
      "command": "read",
      "read": true
      }

    this.updateMessage(updateRead, newData)
    this.setState({data: newData})
  }


  markUnread = () => {
    let messageIds = []
    let newData = this.state.data

    for(var i=0; i < newData.length; i++){
      if(newData[i].selected === true){
        if(newData[i].read === true){
          newData[i].read = false
          messageIds.push(newData[i].id)
        }
      }
    }
      const updateUnread = {
          "messageIds": messageIds,
          "command": "read",
          "read": false
          }

      this.updateMessage(updateUnread, newData)
      this.setState({data: newData})
  }


  addLabel = (e) => {
    let messageIds = []
    let newData = this.state.data
    let label = ""

    const updateLabel =  {
          "messageIds": messageIds,
          "command": "addLabel",
          "label": ""
        }

    for(var i=0; i < newData.length; i++){
        if(newData[i].selected === true){
          if(e.target.value !== 'Apply Label'){
            label = e.target.value
            let labels = newData[i].labels
            if(labels.indexOf(label) === -1){
              labels.push(label)
            }
            messageIds.push(newData[i].id)
            updateLabel.label = label
        }
      }
    }

    this.updateMessage(updateLabel, newData)
    this.setState({date: newData})

  }


  removeLabel = (e) => {
    let newData = this.state.data
    let messageIds = []
    let label = ""

    const unlabel = {
      "messageIds": messageIds,
      "command": "removeLabel",
      "label": ""
    }

    for(var i=0; i < newData.length; i++){
      if(newData[i].selected === true){
        if(e.target.value !== 'Remove Label'){
          label = e.target.value
          let labels = newData[i].labels
          if(labels.includes(label)){
            let i = labels.indexOf(label)
            labels.splice(i, 1)
          }
          messageIds.push(newData[i].id)
          unlabel.label = label
        }
      }
    }
    this.updateMessage(unlabel, newData)
    this.setState({date: newData})
  }


  deleteMessage = () => {
    let newData = this.state.data
    let messageIds = []
    let renderData = []

    const trash = {
    "messageIds": messageIds,
    "command": "delete"
    }

    for(var i=0; i < newData.length; i++){
      if(newData[i].selected === true){
        messageIds.push(newData[i].id)
      }
    }

    for(var i=0; i < newData.length; i++){
      if(newData[i].selected !== true){
        renderData.push(newData[i])
        this.setState({data: renderData})
      }
    }

    this.updateMessage(trash, renderData)

  }


renderComposeField(){
  if(this.state.composing){
    return <Compose newMessage={this.composeMessage.bind(this)}/>
  } else {
    return
  }
}


toggleCompose = () => {
  this.setState({composing: !this.state.composing})
}


  composeMessage = (e) => {
    e.preventDefault()

    const newMessage = {
      "subject": e.target.subject.value,
      "body": e.target.body.value
    }

    this.createItem(newMessage)
  }

  unreadCount(){
    let unreadData = this.state.data
    let counter = 0
    for(var i=0; i < unreadData.length; i++){
      if(unreadData[i].read === false){
        counter++
      }
    }
    return counter
  }


  render() {
    return (
      <div>
          <Toolbar
            data={this.state.data}
            status={this.getSelectStatus()}
            onSelect={this.handleSelectAll}
            onClickRead={this.markRead}
            onClickUnread={this.markUnread}
            applyLabel={this.addLabel}
            removeLabel={this.removeLabel}
            deleteMessage={this.deleteMessage}
            toggleCompose={this.toggleCompose}
            composing={this.state.composing}
            unreadCount={this.unreadCount()}
          />

          {this.renderComposeField()}

          <MessageList
            data={this.state.data}
            toggleStar={this.handleStarred}
            toggleSelected={this.handleSelected}
            onClickRead={this.markRead}
            onClickUnread={this.markUnread}
          />
      </div>
    );
  }
}



export default App;
