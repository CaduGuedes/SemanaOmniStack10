import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {

  return (
    <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <form>
            <div class="input-block">
              <label htmlFor="github_username">Usuário do Github</label>
              <input name="github_username" id="github_username" required/>
            </div>

            <div class="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs" id="techs" required/>
            </div>

            <div className="input-group">
              <div class="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input name="latitude" id="techs" required/>
              </div>

              <div class="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required/>
              </div>

            </div>

            <button type="submit">Salvar</button>
          </form>
        </aside>

        <main>
          <ul>
            <li className="dev-item">
              <header>
                <img src="https://avatars3.githubusercontent.com/u/16464080?s=460&u=5393e0d4639c8bc5062f28679c8ba6ce4069d363&v=4" alt="Cadu Guedes"/>
                <div className="user-info">
                  <strong>Cadu Guedes</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>
              </header>
              <p>Biografia do usuario Biografia do usuario Biografia do usuario Biografia do usuario </p>
              <a href="https://github.com/CaduGuedes">Acessar Perfil no Github</a>
            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars3.githubusercontent.com/u/16464080?s=460&u=5393e0d4639c8bc5062f28679c8ba6ce4069d363&v=4" alt="Cadu Guedes"/>
                <div className="user-info">
                  <strong>Cadu Guedes</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>
              </header>
              <p>Biografia do usuario Biografia do usuario Biografia do usuario Biografia do usuario </p>
              <a href="https://github.com/CaduGuedes">Acessar Perfil no Github</a>
            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars3.githubusercontent.com/u/16464080?s=460&u=5393e0d4639c8bc5062f28679c8ba6ce4069d363&v=4" alt="Cadu Guedes"/>
                <div className="user-info">
                  <strong>Cadu Guedes</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>
              </header>
              <p>Biografia do usuario Biografia do usuario Biografia do usuario Biografia do usuario </p>
              <a href="https://github.com/CaduGuedes">Acessar Perfil no Github</a>
            </li>
            <li className="dev-item">
              <header>
                <img src="https://avatars3.githubusercontent.com/u/16464080?s=460&u=5393e0d4639c8bc5062f28679c8ba6ce4069d363&v=4" alt="Cadu Guedes"/>
                <div className="user-info">
                  <strong>Cadu Guedes</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>
              </header>
              <p>Biografia do usuario Biografia do usuario Biografia do usuario Biografia do usuario </p>
              <a href="https://github.com/CaduGuedes">Acessar Perfil no Github</a>
            </li>
          </ul>



        </main>
    </div>
  );
}

export default App;
