import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'; 

function Footer() {

    return (<div className="footer bg-dark text-white d-flex justify-content-center align-items-end" 
     style={{ minHeight: '80px', paddingBottom: '10px' }}>
                <div>Copyright
                    <FontAwesomeIcon icon={faCopyright} style={{ marginRight: '5px' }} />Your Website 2026 | by Miguel Contreras
                </div>             
            </div>

    )
}

export default Footer





