import { Component } from "react";
import Button from 'react-bootstrap/Button';
class ShareButton extends Component {
    render (){
        return (
            <div className='Share-button'>
                <Button className="share_button" variant='outline-success'>Share</Button>
            </div>
        )
    }
}

export default ShareButton;