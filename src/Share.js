import { Component } from "react";
import Button from 'react-bootstrap/Button';
import { BsFillShareFill} from "react-icons/bs";

class ShareButton extends Component {
    render (){
        return (
            <div className='Share-button'>
                
                <Button className="share_button" variant='outline-success'>Share</Button>
                <h5 className="share-icon"> <BsFillShareFill/></h5>
            </div>
        )
    }
}

export default ShareButton;