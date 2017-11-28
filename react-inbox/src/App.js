import React from 'react';
import logo from './logo.svg';
import './App.css';

import MessageList from './components/MessageList';
import Toolbar from './components/Toolbar';
import Compose from './components/Compose';


const data = [
  {
    id: 1,
    subject: "You can't input the protocol without calculating the mobile RSS protocol!",
    read: false,
    starred: true,
    labels: ["dev", "personal"]
  },
  {
    id: 2,
    subject: "connecting the system won't do anything, we need to input the mobile AI panel!",
    read: false,
    starred: false,
    selected: true,
    labels: []
  },
  {
    id: 3,
    subject: "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
    read: false,
    starred: true,
    labels: ["dev"]
  },
  {
    id: 4,
    subject: "We need to program the primary TCP hard drive!",
    read: true,
    starred: false,
    selected: true,
    labels: []
  },
  {
    id: 5,
    subject: "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
    read: false,
    starred: false,
    labels: ["personal"]
  },
  {
    id: 6,
    subject: "We need to back up the wireless GB driver!",
    read: true,
    starred: true,
    labels: []
  },
  {
    id: 7,
    subject: "We need to index the mobile PCI bus!",
    read: true,
    starred: false,
    labels: ["dev", "personal"]
  },
  {
    id: 8,
    subject: "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    read: true,
    starred: true,
    labels: []
  }
]


class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      data: data
    }

  }

  handleStarred = (i) => {
    let newData = this.state.data
    newData[i].starred = !newData[i].starred
    this.setState({data: newData})
  }



  handleSelected = (i) => {
    let newData = this.state.data
    newData[i].selected = !newData[i].selected
    this.setState({data: newData})
  }

  // 
  // handleSelect = () => {
  //   let selected = this.state.data.filter((message) => !!message.selected).length
  //
  //
  // }


  render() {
    // console.log(this.state.data[1].selected)
    return (
      <div>
          <Toolbar data={this.state.data} onSelect={this.handleSelect}/>
          <Compose />
          <MessageList
            data={this.state.data}
            toggleStar={this.handleStarred} toggleSelected={this.handleSelected} />
      </div>
    );
  }
}



export default App;
