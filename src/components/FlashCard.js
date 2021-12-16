import { Component } from "react"
// import RegularCard from "./RegularCard"
// import RandomWeighted from "./RandomWeighted"
import MultiCard from "./MultiCard"

class FlashCard extends Component {
  constructor() {
    super()
    this.state = {
      flipClass: "",
    }
  }
  flip = (e) => {
    let newFlip = this.state.flipClass === "" ? "flip" : ""
    this.setState({
      flipClass: newFlip,
    })
  }
  render() {
    return (
      <>
        <div className='row align-items-center card-holder'>
          <div
            onClick={this.flip}
            className={`col-sm-6 offset-sm-3 card mb-3 ${this.state.flipClass}`}
          >
            {/* <RandomWeighted /> */}
            {/* <RegularCard /> */}
            <MultiCard />
          </div>
        </div>
      </>
    )
  }
}

export default FlashCard
