import React, {Component} from 'react';

export default  class Timer extends Component{
    constructor(){
        super()
        this.state = {
            isSession: true,
            intervalId: 0
        }
    }
    
    play = () => {
       this.setState({
           intervalId: setInterval(this.props.countDown, 1000) 
       });
    }
    playTrigger = () => {
        if(this.state.intervalId === 0){
            this.play();
        }else{
            this.pause()
        }
        
    }
    pause = () => {
        this.setState({
            intervalId: clearInterval(this.state.intervalId)
        })
        this.setState({
            intervalId: 0
        })    
    }
    reset = () => {
        this.pause();
        this.props.resetTimer(); 
    }
    decreaseTimer = () => {
        
    }
   
    render(){

        return(
            <section>
                <section className = 'timer-wrapper'>
                    <h4 id = 'timer-label'>
                        {this.props.isSession ? 'Session' : 'Break'}
                    </h4>
                    <section>
                        <span id = 'time-left'>{(this.props.timerMinute).toString().padStart(2, '0')}:{(this.props.timerSecond).toString().padStart(2, '0')}</span>
                    </section>
                </section>
                <main className = 'timer-actions'>
                <button 
                    id = 'start_stop'
                    onClick = {this.playTrigger} 
                
                > PLAY </button>
                <button > PAUSE </button>
                <button 
                    id = 'reset' 
                    onClick = {this.reset}
                > 
                    RESET 
                </button>
            </main>
            </section>
        )
    }
}