import { Component } from "react";
import "./AboutUsStyles.css";

class AboutUsData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
          <h2 className="title">{this.props.heading2}</h2>
          <p>{this.props.text2}</p>
          <h2 className="title">{this.props.heading3}</h2>
          <p>{this.props.text3}</p>
        </div>
        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default AboutUsData;
