import React, { Component } from 'react';
import './estilos.css'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = { numero: 0,nomebtn: 'Vai' }

        this.timer = null
        this.vai = this.vai.bind(this)
        this.limpar = this.limpar.bind(this) 
     }
  
      vai(){
        let state = this.state

        if(this.timer !== null){
            clearInterval(this.timer)
            this.timer = null
            state.nomebtn = 'Vai'
        } else{
        this.timer = setInterval(() => {
            let state = this.state  
            state.numero += 1
            this.setState(state) 
        }, 100)
        state.nomebtn = 'Pausar'
      }
      this.setState(state) 
    }


    limpar(){
        if(this.timer !== null){
          clearInterval(this.timer)
          this.timer = null
      } else{
         let state = this.state
         state.numero = 0
         state.nomebtn = 'Vai'
         this.setState(state)   

      }
   }
 render(){
  return (
    <div className='conteiner'>
       
       <h1>Projeto cronometro</h1>
        <img className="img"src={require('./assets/cronometro.png')}/>
        <a className='timer'>{this.state.numero.toFixed(1)}</a>
       
       <div className='areaBtn'>
        <a className='btn' onClick={() => this.vai()}>{this.state.nomebtn}</a>
        <a className='btn' onClick={() => this.limpar()}>Limpar</a>
       </div>
    </div>
   );
 }
}