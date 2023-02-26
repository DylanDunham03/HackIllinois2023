import React from "react";
import { Animate } from "react-move";

class AnimatedProgressProvider extends React.Component {
  interval = undefined;

  state = {
    isAnimated: false
  };

  static defaultProps = {
    valueStart: 0
  };

  componentDidMount() {
    if (this.props) {
      this.interval = window.setInterval(() => {
        this.setState({
          isAnimated: !this.state.isAnimated
        });
      }, this.props.duration * 10000);
    } else {
      this.setState({
        isAnimated: false
      });
    }
  }

  // componentWillUnmount() {
  //   window.clearInterval(this.interval);
  // }

  render() {
    return (
      <Animate
        start={() => ({
          value: this.props.valueEnd
        })}
        update={() => ({
          value: [
            // this.state.isAnimated ? this.props.valueEnd : this.props.valueStart
            this.props.valueEnd
          ],
          timing: {
            duration: this.props.duration * 10000,
            ease: this.props.easingFunction
          }
        })}
      >
        {({ value }) => this.props.children(value)}
      </Animate>
    );
  }
}

export default AnimatedProgressProvider;
