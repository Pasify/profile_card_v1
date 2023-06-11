import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#60DAFB"
  },
  {
    skill: "Node JS",
    level: "beginner",
    color: "#FF3B00"
  }
];
function App() {
  return (
    <div className="card">
      <Avatar imageSource="/profilePics.jpg" imageName="profile picture" />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar(props) {
  return (
    <img className="avatar" src={props.imageSource} alt={props.imageName} />
  );
}
function Intro() {
  return (
    <div>
      <h1>Paskkal.io</h1>
      <p>
        Front-End web developeper When i`m not coding or picking up a new tech
        skill, I like to make art works, read books, or just see a movie.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill key={skill.skill} SkillObj={skill} />
      ))}
    </div>
  );
}
function Skill({ SkillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: SkillObj.color }}>
      <span>{SkillObj.skill} </span>
      <span>{SkillObj.level === "advanced" ? "💪" : ""}</span>
      <span>{SkillObj.level === "intermediate" ? "👍" : ""}</span>
      <span>{SkillObj.level === "beginner" ? "😉" : ""}</span>
    </div>
  );
}

export { App };
