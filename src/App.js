import React from 'react'
import './App.css'
import 'rbx/index.css'
import { Content, Title, Container, Button, Column, Notification } from 'rbx'
import { getDayOfYear } from 'date-fns'

// opciones para el formato de la fecha
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

// Devuelve la serie de números con los días disponibles del año
// la serie parte en 4
const getNextAvailableDay = (n = 4) => {
  const sum = n % 2 ? 7 : 1
  return n + sum
}

const getFormatDate = (day) => {
  const date = new Date('2020', 0, day).toLocaleDateString('es-MX', options)
  return `${date[0].toUpperCase()}${date.slice(1)}`
}
 
function App() {

  let availablesDays = [4]
  let day = 4
  while (day < 365) {
    day = getNextAvailableDay(day)
    availablesDays.push(day)
  }

  const currentDay = getDayOfYear(new Date())
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
              <Title size={4} className="has-text-white has-text-centered">Próxima Última fiesta de los Romanes</Title>
              <p className="has-text-centered">Lunes 13, de enero de 2020</p>
              <p className="has-text-centered">No Agendada aún!</p>
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

              <Column className="has-text-centered">
                <p className="has-text-centered">EN:</p>
                <a 
                  href="https://www.google.com/maps/place/REDROOM+PRODUCCIONES/@-33.4456043,-70.6244121,15z/data=!4m5!3m4!1s0x0:0xb739d02294dd4a25!8m2!3d-33.4456043!4d-70.6244121?hl=en-US"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="http://redroomproducciones.cl/images/logo.png"></img>
                </a>
              </Column>
            </Notification>
          </Column>

          <p>
            A continuación un listado de los días disponibles de los romanes Miguel y Jaime. Click para agendar, OH YEAH!:
          </p>
          <ul className="grid-days">
          {
            availablesDays.map((day, i) => {

              const formatDate = getFormatDate(day)

              return <Column key={i} className="has-text-centered">
                <a 
                  href={`https://wa.me/56956269654?text=Hola%20cabros!!%20tienen%20hora%20para%20el%20${formatDate}%20a%20las%2020??`}
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <Button color="dark">
                    {
                      formatDate
                    }
                  </Button>
                </a>
              </Column>
            })
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
