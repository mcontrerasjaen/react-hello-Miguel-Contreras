import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'; 

function Footer() {

    return (<div className="footer py-4 bg-dark text-white d-flex justify-content-center align-items-end">
                <div>Copyright
                    <FontAwesomeIcon icon={faCopyright} style={{ marginRight: '5px' }} />Your Website 2026 | by Miguel Contreras
                </div>             
            </div>

    )
}

export default Footer





