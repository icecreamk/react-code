import React, { Component } from 'react';
import CustomComponents from './Component/index';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      componentsData: [],
      currComponent: null
    }
  }

  componentDidMount () {
    const componentsData = this.getComponentsData()
    this.setState({
      componentsData
    })
    if(componentsData && componentsData.length) {
      this.getComponent(componentsData[0].key, componentsData)
    }
  }

  getComponentsData = () => {
    return Object.keys(CustomComponents).map(key => {
      return {
        key,
        component: CustomComponents[key]
      }
    })
  }

  getComponent = (key, componentsData) => {
    let currComponent
    componentsData.forEach(item => {
      if(!currComponent && item.key === key) {
        currComponent = item
      }
    })
    this.setState({
      currComponent
    })
  }

  render() {
    const {componentsData, currComponent} = this.state
    if(!currComponent) {
      return null
    }
    return (
      <div className="App">
        <ul className="component-list">
          {
            componentsData.map((item, index) => {
              return <li className={item.key === currComponent.key ? 'App-link' : ''} key={item.key} onClick={()=>{
                this.getComponent(item.key, componentsData)
              }}>{index+1+'、'+item.key}</li>
            })
          }
        </ul>
        <div>
          <currComponent.component />
        </div>
      </div>
    );
  }
}

export default App;
