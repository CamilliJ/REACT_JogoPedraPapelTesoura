import { useState, Component } from 'react'

import './App.css'
import './Animation.css'

import papel from './assets/Papel.png'
import tesoura from './assets/Tesoura.png'
import pedra from './assets/Pedra.png'
import interroga from './assets/Duvida.png'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tipo_jogador: "",
      icone_jogador: interroga,
      tipo_bot: "",
      icone_bot: interroga,
      loading: false,
      escolheu: false,
      ponto_player: 0,
      ponto_bot: 0,
      empates: 0,
    }


    this.handlePapel = this.handlePapel.bind(this)
    this.handlePedra = this.handlePedra.bind(this)
    this.handleTesoura = this.handleTesoura.bind(this)

  }

  handlePedra = () => {
    this.setState({ tipo_jogador: "PEDRA", icone_jogador: pedra, escolheu: true })
    document.getElementById("mensage").innerHTML = ""
    console.log(this.state.tipo)
    console.log(this.state.icone)
  }

  handlePapel = () => {
    this.setState({ tipo_jogador: "PAPEL", icone_jogador: papel, escolheu: true })
    document.getElementById("mensage").innerHTML = ""
    console.log(this.state.tipo)
    console.log(this.state.icone)
  }

  handleTesoura = () => {
    this.setState({ tipo_jogador: "TESOURA", icone_jogador: tesoura, escolheu: true })
    document.getElementById("mensage").innerHTML = ""
    console.log(this.state.tipo)
    console.log(this.state.icone)

  }




  handleJogar = () => {

    if (this.state.escolheu == false) {
      alert("Escolha uma das opções para jogar!")
      return
    }

    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000);

    var random = Math.floor(Math.random() * 3);
    console.log(random)

    setTimeout(() => {
      if (random == 0) {
        this.setState({ tipo_bot: "PEDRA", icone_bot: pedra })
        if (this.state.tipo_jogador == "PAPEL") {
          var ganhou = this.state.ponto_player += 1
          this.setState({ ponto_player: ganhou })
          document.getElementById("mensage").innerHTML = "VOCÊ GANHOU!"
          document.getElementById("playagain").innerHTML = "JOGAR NOVAMENTE"
        }
        if (this.state.tipo_jogador == "PEDRA") {
          var empate = this.state.empates += 1
          this.setState({ empates: empate })
          document.getElementById("mensage").innerHTML = "JOGO EMPATADO!"
          document.getElementById("playagain").innerHTML = "JOGAR NOVAMENTE"
        }
        if (this.state.tipo_jogador == "TESOURA") {
          var perdeu = this.state.ponto_bot  += 1
          this.setState({ ponto_bot: perdeu })
          document.getElementById("mensage").innerHTML = "VOCÊ PERDEU!"
          document.getElementById("playagain").innerHTML = "JOGAR NOVAMENTE"
        }

      } else if (random == 1) {
        this.setState({ tipo_bot: "PAPEL", icone_bot: papel })
        if (this.state.tipo_jogador == "PAPEL") {
          var empate = this.state.empates += 1
          this.setState({ empates: empate })
          document.getElementById("mensage").innerHTML = "JOGO EMPATADO!"
          document.getElementById("playagain").innerHTML = "JOGAR NOVAMENTE"
        }
        if (this.state.tipo_jogador == "PEDRA") {
          var perdeu = this.state.ponto_bot  += 1
          this.setState({ ponto_bot: perdeu })
          document.getElementById("mensage").innerHTML = "VOCÊ PERDEU!"
          document.getElementById("playagain").innerHTML = "JOGAR NOVAMENTE"
        }
        if (this.state.tipo_jogador == "TESOURA") {
          var ganhou = this.state.ponto_player += 1
          this.setState({ ponto_player: ganhou })
          document.getElementById("mensage").innerHTML = "VOCÊ GANHOU!"
          document.getElementById("playagain").innerHTML = "JOGAR NOVAMENTE"
        }
      } else {
        this.setState({ tipo_bot: "TESOURA", icone_bot: tesoura })
        if (this.state.tipo_jogador == "PAPEL") {
          var perdeu = this.state.ponto_bot  += 1
          this.setState({ ponto_bot: perdeu })
          document.getElementById("mensage").innerHTML = "VOCÊ PERDEU!"
          document.getElementById("playagain").innerHTML = "JOGAR NOVAMENTE"
        }
        if (this.state.tipo_jogador == "PEDRA") {
          var ganhou = this.state.ponto_player += 1
          this.setState({ ponto_player: ganhou })
          document.getElementById("mensage").innerHTML = "VOCÊ GANHOU!"
          document.getElementById("playagain").innerHTML = "JOGAR NOVAMENTE"
        }
        if (this.state.tipo_jogador == "TESOURA") {
          var empate = this.state.empates += 1
          this.setState({ empates: empate })
          document.getElementById("mensage").innerHTML = "JOGO EMPATADO!"
          document.getElementById("playagain").innerHTML = "JOGAR NOVAMENTE"
        }
      }
    }, 1000);

    if (this.state.tipo_jogador == this.state.tipo_bot) {

    }

  }





  render() {
    return (
      <div className="App">
        {
          this.state.loading ? (
            <div className="loading">
              <div className="escolhendo">
                O computador está escolhendo...
              </div>
              <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : false
        }

        <div className="box-choose">
          <div className="picks">
            <div className="option" id='pedra' onClick={this.handlePedra}> PEDRA </div>
            <div className="option" id='papel' onClick={this.handlePapel}> PAPEL </div>
            <div className="option botom" id='tesoura' onClick={this.handleTesoura}> TESOURA </div>
          </div>
          <div className="score">
            <div className="text">SCORE</div>
            <div className="placar">
              <div className="score-number">{this.state.ponto_player}</div>
              <div className="text-x"> x </div>
              <div className="score-number">{this.state.ponto_bot}</div>
            </div>
            <p className="empates">Empates: {this.state.empates}</p>

          </div>
        </div>
        <div className="main">
          <div className="yourchoose-box">
            <div className="youchoose-text" id='choose-text'>
              VOCÊ ESCOLHEU {this.state.tipo_jogador}
            </div>
            <div className="decision">
              <div className="imagem" >
                <img src={this.state.icone_jogador} alt="" className='imagem-choose' id='choose-player' />
              </div>
            </div>
          </div>
          <div className="yourloose-box">
            <div className='box-alinhamento'>
              <div className="mensage" id='mensage'> </div>
              <div className="play" onClick={this.handleJogar} id='playagain'> JOGAR</div>
            </div>

          </div>
          <div className="botchoose-box">
            <div className="youchoose-text">
              O COMPUTADOR ESCOLHEU {this.state.tipo_bot}
            </div>
            <div className="decision">
              <div className="imagem">
                <img src={this.state.icone_bot} alt="" className='imagem-choose' />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Game
