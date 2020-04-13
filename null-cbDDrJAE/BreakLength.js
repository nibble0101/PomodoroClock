import React, {Component} from 'react';

export default class Break extends Component{
     constructor(){
         super()
     }
    
     render(){
         return(
             <React.Fragment>
                 <main >
                    <h4 id = 'break-label'> Break Length </h4>
                    <section id ='break' >
                        <button 
                            id = 'break-decrement' 
                            onClick = {this.props.changeBreakLength}
                        > 
                            DOWN 
                       </button>
                        <p id = 'break-length'>{this.props.breakLength}</p>
                        <button 
                            id = 'break-increment'
                            onClick = {this.props.changeBreakLength}
                        > 
                            UP 
                        </button>
                    </section>
                 </main>
             </React.Fragment>
         )
     }
}