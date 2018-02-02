import React, {Component} from 'react';
import scrolldownButton from '../img/scrolldown.svg';
import scrollToComponent from 'react-scroll-to-component';

class Scrolldown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      offset: -52,
      scrollTarget: document.getElementById(this.props.targetId)
    }
  }


  componentDidMount() {
    const scrollTarget = document.getElementById(this.props.targetId);
    const offsetHeight = document.querySelector(".navbar") // Shame, should probably pass down the offset instead of searching for it.
    const offset = offsetHeight.clientHeight
    this.setState({
      offset: -offset,
      scrollTarget: scrollTarget
    });
  }

  render() {   
    return (
      <div className="level">
        <div className="level-item">
          <button className="button" onClick={() => scrollToComponent(this.state.scrollTarget, {align:'top', ease:'inOutExpo', offset:this.state.offset})}>
            <img src={scrolldownButton} />
          </button>
        </div>
      </div>
    )
  }
}

export default Scrolldown;