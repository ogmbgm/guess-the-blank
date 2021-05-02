import React, {Component} from 'react';
import './Form.css';

class Form extends Component{
    render(){
        const options = this.props.options.map((o,i) => {
           return( <div className="radio form-check" key={i}>
                <label className="form-check-label">
                <input className="form-check-input country-radio" type="radio" value={o}
                                checked={this.props.selectedOption === o} 
                                onChange={this.props.handleOptionChange} />
                {o}
                </label>
            </div>)
        });
        return(
            <form className="row g-3" id="question-form" onSubmit={this.props.handleGuessSubmit}>
                <div className="col-auto">
                    <div id="radio-holder">
                        {options}
                    </div>
                    
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary" type="submit">Guess!</button>
                </div>
            </form>
        )
    }
}

export default Form;