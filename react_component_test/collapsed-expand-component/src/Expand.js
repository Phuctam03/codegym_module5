import { Component } from "react";
import Collapsed from "./Collapsed";

const tilte = "Conditional Rendering";
class Expand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: true,
    };
  }

  handleCollapsed = () => {
    this.setState({ isExpand: false });

    console.log(tilte);
  };

  handleExpand = () => {
    this.setState({ isExpand: true });
  };
  render() {
    const { isExpand } = this.state;
    if (isExpand) {
      return (
        <Collapsed
          title={tilte}
          handleExpand={this.handleCollapsed}
          text="Xem giới thiệu"
        />
      );
    } else {
      return (
        <div>
          <Collapsed
            title={tilte}
            handleExpand={this.handleExpand}
            text="Đóng giới thiệu"
          />
          <p style={{ fontWeight: "bold" }}>Giới thiệu</p>
          <p>
            Trong ReactJs, đôi khi bạn có một số component và tùy thuộc và từng
          </p>
          <p>
            điều kiện ví dụ như trạng thái của state,props,...mà bạn muốn hiển
            thị một hoặc
          </p>
          <p>
            một số component nào đó.Khi đó bạn có thể sử dụng Conditional
            Rendering để mà
          </p>
          <p>render ra component mà bạn mong muốn</p>
        </div>
      );
    }
  }
}

export default Expand;
