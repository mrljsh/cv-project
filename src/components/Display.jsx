import { Component } from "react";
import "../styles/Display.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

class Display extends Component {
  PersonalInfo = () => (
    <div>
      <h1 className="full-name">
        {this.props.data.firstName} {this.props.data.lastName}
      </h1>
      <h2 className="position">{this.props.data.position}</h2>
      <div className="small-info">
        <p>
          <FontAwesomeIcon icon={faEnvelope} />
          {this.props.data.mail}
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} />
          {this.props.data.phone}
        </p>
        <p>
          <FontAwesomeIcon icon={faLocationDot} />
          {this.props.data.address}
        </p>
      </div>
    </div>
  );

  EducationData = () => (
    <div>
      <h1>Education</h1>
      {this.props.data.education.map((education) => (
        <div className="education-item">
          <h1>{education.schoolName}</h1>
          <h2>{education.title}</h2>
          <p>
            ({education.dateStarted} - {education.dateFinished})
          </p>
        </div>
      ))}
    </div>
  );

  render() {
    if (this.props.data.firstName === "") {
      return <div className="cv-container"></div>;
    } else {
      return (
        <div className="cv-container">
          <this.PersonalInfo />
          <hr />
          <this.EducationData />
        </div>
      );
    }
  }
}

export default Display;
