function Card() {

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className= "card text-center">
                 <img src="https://placehold.jp/500x325.png" className="card-img-top" alt="..."/>
                 <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    
                </div>
                <div className = "card-footer">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>

    )

}

export default Card