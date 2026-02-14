function Card(props) {

     const {image, title, description} = props.cards;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className= "card text-center">
                 <img src={image} className="card-img-top" alt={title} />
                 <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p> 
                </div>
                    <div className = "card-footer">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
            </div>
        </div>

    )

}

export default Card