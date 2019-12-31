import React from 'react'
import './App.css'
import "rbx/index.css"
import { Content, Title, Container, Button, Column, Notification } from "rbx"
const { getDayOfYear } = require('date-fns')
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

// Devuelve la serie de numeros con los dias disponibles del año
// la serie parte en 4
const getNextAvailableDay = (n = 4) => {
  const sum = n % 2 ? 7 : 1
  return n + sum
}
 
function App() {

  let availablesDays = [4]
  let day = 4
  while (day < 365) {
    day = getNextAvailableDay(day)
    availablesDays.push(day)
  }

  const currentDay = 1
  // const currentDay = getDayOfYear(new Date())
  availablesDays = availablesDays.filter(day => day >= currentDay)

  return (
    <div className="App has-text-white">
      <Container>
        <Content>
          <Column className="has-text-centered">
            <span role="img" aria-label="hallowen">🎃</span>
          </Column>
          <Title className="has-text-white has-text-centered">El Calendario de los Romanes</Title>

          <Column size="half" offset="one-quarter">
            <Notification color="danger">
              <Title size={4} className="has-text-white has-text-centered">Proxima ultima fiesta de los romanes</Title>
              <p className="has-text-centered">Viernes 3, de enero de 2020</p>
              <p className="has-text-centered">Agendada!</p>
              <Column className="has-text-centered">
                <iframe 
                  title="devil"
                  src="https://giphy.com/embed/RHHRiuo1Q79IULEMO8" 
                  width="480" 
                  height="480" 
                  frameBorder="0" 
                  className="giphy-embed"
                  allowFullScreen
                ></iframe>
              </Column>
            </Notification>
          </Column>

          <p>
            A continuación un listado de los días disponibles de los romanes Miguel y Jaime. Click para agendar, OH YEAH!:
          </p>
          <ul className="grid-days">
          {
            availablesDays.map((day, i) => 
                <Column key={i} className="has-text-centered">
                  <a 
                    href={`https://wa.me/56956269654?text=Hola%20cabros!!%20tienen%20hora%20para%20el%20${new Date('2020', 0, day).toLocaleDateString('es-MX', options)[0].toUpperCase()}${new Date('2020', 0, day).toLocaleDateString('es-MX', options).slice(1)}%20a%20las%2020??`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <Button color="dark">
                      {
                        `${new Date('2020', 0, day).toLocaleDateString('es-MX', options)[0].toUpperCase()}${new Date('2020', 0, day).toLocaleDateString('es-MX', options).slice(1)}`
                      }
                    </Button>
                  </a>
                </Column>
            )
          }
          </ul>
          <Column className="has-text-centered">
            <iframe 
              title="spaceship"
              src="https://giphy.com/embed/3oEdv2B4bcxkW71AQM" 
              width="480" 
              height="480" 
              frameBorder="0" 
              className="giphy-embed" 
              allowFullScreen
            ></iframe>
          </Column>
        </Content>
      </Container>
      
    </div>
  )
}

export default App
