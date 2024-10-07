import React, { useState } from 'react'
import Home from './components/Home'
import Card from './components/card'
import Profile from './components/profile'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

const App = () => {

  const [login, setLogin] = useState(true)
  const [posts, setPosts] = useState([
    {
      personname: "Hisham Sarwar",
      personimage: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/274144958_10159774502831420_4004969665891600709_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF7lR0xritHYQZmhaCVV7nMQoD2bFsoZhJCgPZsWyhmEvgsxTIikZytk-VLvAF4I_pULZbX_4F_mNcWSfgqV0W7&_nc_ohc=sWZOKy9PQRwAX9BGa_7&tn=7z-z_s35iJWBTSvs&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-ntaSk1g6FzFMzYxceuIUasU1ere7IIRIob4WtKQSQvw&oe=623C3FE5",
      posturl: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/276175979_10159830400401420_4492470455231649681_n.jpg?stp=dst-jpg_p180x540&_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEbf0hoPq7tIcET_j0V1WpgzCVbu21zyVrMJVu7bXPJWg5ju3DpmHKecPAT5bylzpke-kYJx-J1YU7CHMm2TBJO&_nc_ohc=TcEUX93DXpUAX_RKOac&_nc_ht=scontent.flhe13-1.fna&oh=00_AT9IsfOfyBDK77l4MzLOa9cpW0h3cQjez3h4Q5HXCj7ngg&oe=623D0F47",
      description: "Advertise, spend money for marketing your karobar…",
      date: "7-jan-2022",
      video: false,
    },
    {
      personname: "Hisham Sarwar",
      personimage: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/274144958_10159774502831420_4004969665891600709_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF7lR0xritHYQZmhaCVV7nMQoD2bFsoZhJCgPZsWyhmEvgsxTIikZytk-VLvAF4I_pULZbX_4F_mNcWSfgqV0W7&_nc_ohc=sWZOKy9PQRwAX9BGa_7&tn=7z-z_s35iJWBTSvs&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-ntaSk1g6FzFMzYxceuIUasU1ere7IIRIob4WtKQSQvw&oe=623C3FE5",
      posturl: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/275957899_10159831976811420_8254615226042065861_n.jpg?stp=dst-jpg_p180x540&_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGzKT0LU-nXJPIoM1OrXwfZDIr8m5XyUjcMivyblfJSN7qJjsvorr-beJRgYPByZCpr4DiiT1xmLKjDrs1TW-OZ&_nc_ohc=NwBHHSQpNBAAX-0RyDn&tn=7z-z_s35iJWBTSvs&_nc_ht=scontent.flhe13-1.fna&oh=00_AT8_OtjyuZ56HPZU_OL0d00fiX50yN49AsmrQxaployKjw&oe=623B4DDE",
      description: "Advertise, spend money for marketing your karobar…",
      date: "7h",
      video: false,
    },
    {
      personname: "Aftab Iqbal",
      personimage: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/275618277_522073395949127_6228975719697130802_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGzjBkmmqo7jFWS1EhGZlrvIyPO5_VTOUsjI87n9VM5S8hG88nsnt8rt_y18ErzQ2jp-E1OnSvuTw3xHlLPDSDD&_nc_ohc=OSlblqWb4JEAX8zJPhP&_nc_ht=scontent.flhe13-1.fna&oh=00_AT_S3NSXonjvIdeWdvcXVtxvzWgbXT3rvLbrMwRidTWUEQ&oe=623BF7DB",
      posturl: "https://youtu.be/nUvHPesTT78",
      description: "Mulki Halaat Munna Bahi Aur Circuit Jaisay Kab Aur Kaisay Ho Gaye?",
      date: "10h",
      video: true,
    },
    {
      personname: "PNY Trainings",
      personimage: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/238614573_1714244255445882_8769705428392722348_n.png?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG8gscXWg-xRynqDfgPPi7Ik0uJlR5eDhKTS4mVHl4OEscYDL_Z2C8T8cn3qUPMQirlOmsNE0mYPo-myZXFlNxu&_nc_ohc=PT6SNa6KuvoAX-QWcMN&tn=7z-z_s35iJWBTSvs&_nc_ht=scontent.flhe13-1.fna&oh=00_AT9V3g_9-stfX857ZhIal0qAiNumHZwTc5GnkqIS6BDXCQ&oe=623D1C41",
      posturl: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/276252674_1898151943721778_3090183092142958620_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGE7XbL8aQ-8oJVfwpekmyBy1jwm6TLuOrLWPCbpMu46k-0KtPSHbfW6VTk1mUdlsswrPd9_PC62tHO4Tmz7M3x&_nc_ohc=cUE9dWNpXEkAX_ltTTt&_nc_ht=scontent.flhe13-1.fna&oh=00_AT_WRV2PAYRzK1t_XwrDXs_lffUyYkLw3PgPZqgdCuboVA&oe=623C1B0E",
      description: "'Become a Full Stack JavaScript Developer' >> Physical + Online by Zoom >> Registration FEE will be Applicable…",
      date: "18 march at 14:28",
      video: false,
    },
    {
      personname: "OC scholarships fellowships internships and jobs portal",
      personimage: "https://scontent.flhe13-1.fna.fbcdn.net/v/t1.6435-9/118344450_2593482224247994_1311058101448318629_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8631f5&_nc_eui2=AeEPFCCQjJEk3RRroSd-W2yokf55gmAjt4-R_nmCYCO3j9p8YyusjAGyQSP7bwqzNBKIs5FuPnUaJi9OGxKEYV39&_nc_ohc=PMPtgJfzmHgAX9Kim8i&_nc_ht=scontent.flhe13-1.fna&oh=00_AT_20YV-zxiTIHikKB4zpnI4xqDGDa6VMZ3O59erugK3SQ&oe=625D67BC",
      posturl: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/275546611_1106782923382375_5557243064597055072_n.png?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEIRKHcr0RckSmJuqOkwv0k4mHqZLyzRJDiYepkvLNEkJi6SEkk5CiihyhKQkUHPlPzwQGwG3z9zkKeRoXabH0u&_nc_ohc=qAortCAuw78AX-Mz801&_nc_ht=scontent.flhe13-1.fna&oh=00_AT9uY-wNa85B97Clmg3gIcNBslR1ydrNpUfFvNzK0-PJlg&oe=623C9A00",
      description: "Apply Now: https://tinyurl.com/2s4abvfu Country: Different Countries Financial coverage: Fully Funded Eligible Regions: Pakistan, Afghanistan, Myanmar, Armenia, Nauru, Azerbaijan, Nepal, Bangladesh, Niue, Bhutan, Cambodia, Palau, Cook Island, Papua New Guinea, Georgia, Philippines, India, Samoa, Indonesia, Solomon Islands, Fiji, Sri Lanka, Kazakhstan, Tajikistan, Kiribati, Thailand, Kyrgyz Republic, Timor-Leste, Lao People’s…",
      date: "Aksa Jan 17m",
      video: false,
    },
  ])

  return (
    <>
      
      <BrowserRouter>
          <Routes>
              {login && <Route path="/" element={<Home posts={posts} login={login} />} />}
              {!login && <Route path="/" element={<Card />} />}
              
              <Route path="/page/:id" element={<Profile />} />
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
