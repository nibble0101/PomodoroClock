import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Break from './BreakLength';
import Session from './SessionLength';
import Timer from './Timer';
class App extends Component{
  constructor(){
      super();
      this.state = {
        breakLength: 5,
        sessionLength: 25,
        timerMinute: 25,
        timerSecond: 0,
        seconds: 25 * 60,
        isSession: true
      }
    
  }
   componentDidUpdate(){
       if(this.state.seconds === 0 && this.state.timerMinute === 0){
           this.beepingSoundTrigger();
       }
   }
   formatTime = (seconds) => {
       let min, sec
       min = Math.floor(seconds/60);
       sec = seconds % 60;
       return [min, sec];
   }
   stateUpdater = (min, sec, mill) => {
       this.setState({
           timerMinute: min,
           timerSecond: sec,
           seconds: mill   
       })
   }
   switchToBreak = () => {
     let breaklen = this.state.breakLength;
     this.setState({
        timerMinute: breaklen,
        timerSecond: 0,
        seconds: breaklen * 60,
        isSession: false 
     })
   }
   switchToSession = () => {
       let sessionLen = this.state.sessionLength;
        this.setState({
            timerMinute: sessionLen,
            timerSecond: 0,
            seconds: sessionLen * 60,
            isSession: true
     })
   }
   beepingSoundTrigger = () => {
     document.getElementById('beep').play();
   }
   resetBeepingSound = () => {
     let audio =  document.getElementById('beep');
     if(audio.play()){
       audio.pause();
       audio.currentTime = 0;
       
     }
   }
   countDown = () => {
        let seconds = this.state.seconds - 1;
        let[min, sec]  = this.formatTime(seconds);
        if(min < 0){
          if(this.state.isSession){
              this.switchToBreak(); 
          }else{
              this.switchToSession();
          }
          seconds = this.state.seconds;
          [min, sec]  = this.formatTime(seconds);
        }
        this.stateUpdater(min, sec, seconds)      
    }
   changeBreakLength = (e) => {
         const id = e.target.id;
         if(id === 'break-decrement'){
             if(this.state.breakLength > 1){
                 this.setState({ 
                     breakLength: this.state.breakLength - 1,
                    
                     })
                 
             }
         }
         else if(id === 'break-increment'){
             if(this.state.breakLength < 60){
                  this.setState({ 
                      breakLength: this.state.breakLength + 1,
                      
                  })
                 
             }
         }
     }
  changeSessionLength = (e) => {
         const id = e.target.id;
         if(id === 'session-decrement'){
             if(this.state.sessionLength > 1){
                 this.setState({ 
                     sessionLength: this.state.sessionLength - 1,
                     timerMinute: this.state.sessionLength - 1,
                     seconds: this.state.seconds - 60
                  })
                 
             }
         }
         else if(id === 'session-increment'){
             if(this.state.sessionLength < 60){
                  this.setState({ 
                      sessionLength: this.state.sessionLength + 1,
                      timerMinute: this.state.sessionLength + 1,
                      seconds: this.state.seconds + 60
                  })
                 
             }
         }
     }
  
  resetTimer = () => {
      this.setState({
        sessionLength: 25,
        timerMinute: 25,
        timerSecond: 0,
        breakLength: 5,
        seconds: 25 * 60,
        isSession: true
      })
      this.resetBeepingSound();
  }
 
  render(){
    return(
        <React.Fragment>
            <main className = 'container'>
                <h1> Pomodoro Clock </h1>
                <section className = 'break-session-wrapper'>
                    <Break  
                        breakLength = {this.state.breakLength} 
                        changeBreakLength = {this.changeBreakLength}
                        isPlay = {this.state.isPlay}
                    />
                    <Session 
                        sessionLength = {this.state.sessionLength}
                        changeSessionLength = {this.changeSessionLength}
                        isPlay = {this.state.isPlay}
                    />
                </section>
                <Timer 
                  
                    timerMinute = {this.state.timerMinute}
                    timerSecond = {this.state.timerSecond}
                    breakTimer = {this.state.breakLength}
                    updateTimerMinute = {this.updateTimerMinute}
                    resetTimer = {this.resetTimer}
                    countDown = {this.countDown}
                    isSession = {this.state.isSession}
                    
                 />
                 <audio id = 'beep'  preload = 'auto'> 
                     <source 
                     src = 'https://raw.githubusercontent.com/nibble0101/pomodoro-clock/master/BeepSound.wav'
                     type = 'audio/wav'
                     /> 
                 </audio>
            </main>
        </React.Fragment>
    )
  }
}

let element =  document.getElementById('root');
ReactDOM.render(<App />, element);