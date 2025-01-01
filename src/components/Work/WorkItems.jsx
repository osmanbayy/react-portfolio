/* eslint-disable react/prop-types */
export default function WorksItems({ item }) {
  return (
    <div className="work-card" key={item.id}>
      <img src={item.image} alt="project" className="work-img" />
      <h3 className="work-title">{item.title}</h3>
      <a href={item.link} target="_blank" className="work-button">
        Source Code <i className="bx bx-right-arrow-alt work-button-icon"></i>
      </a>
    </div>
  );
}
