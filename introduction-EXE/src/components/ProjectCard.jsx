export default function ProjectCard({
    imageUrl, 
    title
}){

    return (
        <div className="item">
              <img src={imageUrl} alt=""/>
              <div className="down-content">
                <h4>{title}</h4>
                <a href="#"><i className="fa fa-link"></i></a>
              </div>
            </div>
    )
}