import React, {Component} from 'react';

export default class Session extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <section>
                    <h4 id = 'session-label'> Session Length </h4>
                    <section id = 'session'>
                        <button 
                            id = 'session-decrement' 
                            onClick = {this.props.changeSessionLength}
                           
                        > 
                            DOWN 
                        </button>
                        <p id = 'session-length'> {this.props.sessionLength} </p>
                        <button 
                            id = 'session-increment'
                            onClick = {this.props.changeSessionLength}   
                        > 
                            UP 
                        </button>
                    </section>
                </section>
                
            </React.Fragment>
        )
    }
}