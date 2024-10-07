import React from 'react'
import {useParams, Link } from 'react-router-dom'
import Navbar from './navbar'
import './profile.css'

function Profile() {
  let params = useParams();

    const profiles = {
      "1" :{
          name:"Ahmad Raza",
          picture: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/244757023_261823819181888_5277374735940992830_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHE94MNHCTeI9kp0mHc7jn1HVAbHpR5oY4dUBselHmhjj5JVmEUvFFM_p9PuHuFN9F1nLDa8zP7Z7Y1P4AdiLx5&_nc_ohc=hcdyRNSfVpkAX8Te4KL&_nc_ht=scontent.flhe13-1.fna&oh=00_AT_dJ59CHmK8j92i38yxhdkE0C3qS3bmaeveE9M_r14jpQ&oe=623C8AFB",
          coverImage: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/262548349_293243666039903_7433931192415022085_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeEBjiNDCA03P17d3lwaQvakdP429nIbd4t0_jb2cht3ixVY9KdU4H7sigqzJ629landHFecLg8NO1fpAzrxNZJV&_nc_ohc=0rUAUrXv584AX8tx9mD&_nc_ht=scontent.flhe13-1.fna&oh=00_AT9Lb0-uLxXpxSVzE3mIOx_5h5Ku2xUTCV4GPdy_a6IulQ&oe=623C3B24",
          friends: "75",
          friendsList: [
            {url: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/276004283_157047396714430_7473605623132562189_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFWBjoHdvxKIvEIxVYAFesfUcUf0tz383ZRxR_S3PfzdiTxV6MofXVo9TjscMBGJZ1afsbRHxAxgwPBu7aY7JoR&_nc_ohc=ZuEjQ3WUD80AX8R8rqJ&tn=7z-z_s35iJWBTSvs&_nc_ht=scontent.flhe13-1.fna&oh=00_AT_AktWzCk-Lv2jY42Sp2H2gDNW0aQbNpAvZ1jLAxyjelw&oe=623BC8AC",navlink: "2"},
            {url: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/232364097_144252417779822_129519247658838370_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGzkVpDq-gLCjIl4fP4FUIn6YhTCy96zKXpiFMLL3rMpe9AodG2JrsUTEQwu4js6youPgs2FUnnXl3VjoB-rqD8&_nc_ohc=wgKR7eWvuJMAX_8U-HB&_nc_ht=scontent.flhe13-1.fna&oh=00_AT9dp__oZKMS89AcLIzCHJJbDNEOR3xg78APy569FL6zOQ&oe=623CBB88",navlink: "3"},
            {url: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/274472785_353963979921295_8300991302945587518_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGh5i4pgppnQV246h5YBT5r2t9WOA_EFPza31Y4D8QU_MOfWnHxFKQOwGAuJoUzoGuxN7XkfJhOU6qHMUpVjOCx&_nc_ohc=tn_Ax7g9iGUAX-a81z0&_nc_ht=scontent.flhe13-1.fna&oh=00_AT8PV2akN5QpY709qSQ0MdyB6y-h2k7U65Q-r5XP6AEL2Q&oe=623C145D",navlink: "4"},
            {url: "https://scontent.flhe13-1.fna.fbcdn.net/v/t1.6435-9/129551454_1336372073377533_6990400226723916261_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGtFcPMP3AjfkOAyfSQ363NJQLb0qOBNFklAtvSo4E0WQYoEfVPzNw2Zbxk8ZNgBRatG8XzREcOurIYvCplEf8b&_nc_ohc=Qn3aOU9uBsgAX8m6mEp&_nc_ht=scontent.flhe13-1.fna&oh=00_AT9OSHjJbUXDAXlZY4QN2H6k_lWzfXPSFpeiJ5JHi99SFw&oe=625B688D",navlink: "5"},
            {url: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/273892499_107189235224579_1843936173779607299_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHyBpDAcsNQbC-BqF8tYF3YtvNuz9YC6ki2827P1gLqSMvoBa2KfLotflT6KqCxgdU6KaQU4wN_PkduoeSfWc_o&_nc_ohc=fHMbvQ11sCsAX9uXIzr&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-MN7KeZwPVPOKr6DXb_jba7tQ-PdT5ehd-sPb4reQFlg&oe=623C5630",navlink: "6"},
            {url: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/240858303_234598725339627_8469857100068677420_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHhRhYUJdycLuD8salssb9XTbjt_WbSqkpNuO39ZtKqSrdCzNWqthKuxb6i4bRr_75Fphi9_a7pIlCkA7zQQOz5&_nc_ohc=ECTxDb6hWv4AX-vUESz&tn=7z-z_s35iJWBTSvs&_nc_ht=scontent.flhe13-1.fna&oh=00_AT8-Xe8whdfUg257FZu5PDYqT_eq-qCrPASHLAuTpUdsAQ&oe=623C3E5B",navlink: "7"},
            {url: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/276031802_336129808489204_5350672216320319760_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGEFCz5lHt0JCnSfgs5R2xtV5KoiR3Njp1XkqiJHc2OnTkn_RApp-VaNdL6Bj_9uk6TFBkiisbaE4v9t0bPP8WV&_nc_ohc=NsbDF6bPHUEAX88hmo_&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-8-28UG-FQCRAxq1HhMjqAboUSEj5WM0lG14luhmeAMQ&oe=623C7B85",navlink: "8"},
            {url: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/269448280_327344495971850_1439174245143887994_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHpzBV2LXBi4KSEAC0qwZ4G-4-spviAzLP7j6ym-IDMs4db--r1fQsVEA5GNK1jtsvt6O_AvHnqyPLcrA0R3alC&_nc_ohc=EP22E1tAnToAX8aGYAq&tn=7z-z_s35iJWBTSvs&_nc_ht=scontent.flhe13-1.fna&oh=00_AT8YXHp1mKedZREp0Zu77zoa0JHV4EQXgum7gKJOCf0dDg&oe=623D0699",navlink: "9"},
            {url: "https://scontent.flhe13-1.fna.fbcdn.net/v/t1.6435-9/81760854_1030333307348154_6116704376410079232_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEMuFGf9gEMRRRgANgjMm_uLbn7gkWm75ktufuCRabvmaovPYWS1QtYHSW0Ijn-m-WoRmkTmh7vOONVwdK8edPC&_nc_ohc=dZXlzzNuwfYAX-CECPt&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-lX4SIofeNGb0R-o7c9s_Us1GViHRksEvGgA3s1tDLBQ&oe=625C8B21",navlink: "10"},
          ],
          photo1: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/275660326_354507223246880_6999320198968953505_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFYcrkyPUYt32QfJxLTunC3Xm6J7gj-VcZebonuCP5VxnYD5QV-7pKN_AG6hGtQ-BCzUzsWyNHW-E1x0f9P1Acn&_nc_ohc=nm5KYeS1ai8AX-lyTQr&_nc_ht=scontent.flhe13-1.fna&oh=00_AT93iysm-4oG5ZPUjZfdQWrQCfaoNY1hQibRFzl3trFMDg&oe=623BC93B",
          photo2: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/245169902_261821915848745_2501033663596049453_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEkgt6blVKTyB5CFYU_XqX5TWF6eFQflslNYXp4VB-WySS3j_XJh6ECD1iJseYqn3_gDlSmzqmQAS9XzxbgeVFI&_nc_ohc=lw665Dv1-QEAX9W78sv&_nc_ht=scontent.flhe13-1.fna&oh=00_AT8sBUn9C26LwXwpzPw2slhAdSy2FM56vCSTsq4H0HRw2A&oe=623C5AF0",
      },
      "2" :{
          name:"Aamir Ali",
          picture: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/276004283_157047396714430_7473605623132562189_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFWBjoHdvxKIvEIxVYAFesfUcUf0tz383ZRxR_S3PfzdiTxV6MofXVo9TjscMBGJZ1afsbRHxAxgwPBu7aY7JoR&_nc_ohc=ZuEjQ3WUD80AX8R8rqJ&tn=7z-z_s35iJWBTSvs&_nc_ht=scontent.flhe13-1.fna&oh=00_AT_AktWzCk-Lv2jY42Sp2H2gDNW0aQbNpAvZ1jLAxyjelw&oe=623BC8AC",
          coverImage: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/272294930_145844611168042_7155463923542300002_n.jpg?stp=dst-jpg_s960x960&_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeG1xwg4h_dSvpdD8tmBaU2l0BaGOBJsaZjQFoY4EmxpmGmWt5uhjjIsgG5G7Kj5yhfVpN2wiRz7tpiGPqx-jntO&_nc_ohc=LeD8q55oIaoAX9Ex8Ip&_nc_ht=scontent.flhe13-1.fna&oh=00_AT8DcOHLMFUOafpST7_JpOKOqQlpp0nozT_5LGt7hvX5kw&oe=623C32FF",
          friends: "96",
          friendsList: [
            {url: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/244757023_261823819181888_5277374735940992830_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHE94MNHCTeI9kp0mHc7jn1HVAbHpR5oY4dUBselHmhjj5JVmEUvFFM_p9PuHuFN9F1nLDa8zP7Z7Y1P4AdiLx5&_nc_ohc=hcdyRNSfVpkAX8Te4KL&_nc_ht=scontent.flhe13-1.fna&oh=00_AT_dJ59CHmK8j92i38yxhdkE0C3qS3bmaeveE9M_r14jpQ&oe=623C8AFB",navlink: "1"},
            {url: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/232364097_144252417779822_129519247658838370_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGzkVpDq-gLCjIl4fP4FUIn6YhTCy96zKXpiFMLL3rMpe9AodG2JrsUTEQwu4js6youPgs2FUnnXl3VjoB-rqD8&_nc_ohc=wgKR7eWvuJMAX_8U-HB&_nc_ht=scontent.flhe13-1.fna&oh=00_AT9dp__oZKMS89AcLIzCHJJbDNEOR3xg78APy569FL6zOQ&oe=623CBB88",navlink: "3"},
            {url: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/274472785_353963979921295_8300991302945587518_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGh5i4pgppnQV246h5YBT5r2t9WOA_EFPza31Y4D8QU_MOfWnHxFKQOwGAuJoUzoGuxN7XkfJhOU6qHMUpVjOCx&_nc_ohc=tn_Ax7g9iGUAX-a81z0&_nc_ht=scontent.flhe13-1.fna&oh=00_AT8PV2akN5QpY709qSQ0MdyB6y-h2k7U65Q-r5XP6AEL2Q&oe=623C145D",navlink: "4"},
            {url: "https://scontent.flhe13-1.fna.fbcdn.net/v/t1.6435-9/129551454_1336372073377533_6990400226723916261_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGtFcPMP3AjfkOAyfSQ363NJQLb0qOBNFklAtvSo4E0WQYoEfVPzNw2Zbxk8ZNgBRatG8XzREcOurIYvCplEf8b&_nc_ohc=Qn3aOU9uBsgAX8m6mEp&_nc_ht=scontent.flhe13-1.fna&oh=00_AT9OSHjJbUXDAXlZY4QN2H6k_lWzfXPSFpeiJ5JHi99SFw&oe=625B688D",navlink: "5"},
            {url: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/273892499_107189235224579_1843936173779607299_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHyBpDAcsNQbC-BqF8tYF3YtvNuz9YC6ki2827P1gLqSMvoBa2KfLotflT6KqCxgdU6KaQU4wN_PkduoeSfWc_o&_nc_ohc=fHMbvQ11sCsAX9uXIzr&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-MN7KeZwPVPOKr6DXb_jba7tQ-PdT5ehd-sPb4reQFlg&oe=623C5630",navlink: "6"},
            {url: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/240858303_234598725339627_8469857100068677420_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHhRhYUJdycLuD8salssb9XTbjt_WbSqkpNuO39ZtKqSrdCzNWqthKuxb6i4bRr_75Fphi9_a7pIlCkA7zQQOz5&_nc_ohc=ECTxDb6hWv4AX-vUESz&tn=7z-z_s35iJWBTSvs&_nc_ht=scontent.flhe13-1.fna&oh=00_AT8-Xe8whdfUg257FZu5PDYqT_eq-qCrPASHLAuTpUdsAQ&oe=623C3E5B",navlink: "7"},
            {url: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/276031802_336129808489204_5350672216320319760_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGEFCz5lHt0JCnSfgs5R2xtV5KoiR3Njp1XkqiJHc2OnTkn_RApp-VaNdL6Bj_9uk6TFBkiisbaE4v9t0bPP8WV&_nc_ohc=NsbDF6bPHUEAX88hmo_&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-8-28UG-FQCRAxq1HhMjqAboUSEj5WM0lG14luhmeAMQ&oe=623C7B85",navlink: "8"},
            {url: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/269448280_327344495971850_1439174245143887994_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHpzBV2LXBi4KSEAC0qwZ4G-4-spviAzLP7j6ym-IDMs4db--r1fQsVEA5GNK1jtsvt6O_AvHnqyPLcrA0R3alC&_nc_ohc=EP22E1tAnToAX8aGYAq&tn=7z-z_s35iJWBTSvs&_nc_ht=scontent.flhe13-1.fna&oh=00_AT8YXHp1mKedZREp0Zu77zoa0JHV4EQXgum7gKJOCf0dDg&oe=623D0699",navlink: "9"},
            {url: "https://scontent.flhe13-1.fna.fbcdn.net/v/t1.6435-9/81760854_1030333307348154_6116704376410079232_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEMuFGf9gEMRRRgANgjMm_uLbn7gkWm75ktufuCRabvmaovPYWS1QtYHSW0Ijn-m-WoRmkTmh7vOONVwdK8edPC&_nc_ohc=dZXlzzNuwfYAX-CECPt&_nc_ht=scontent.flhe13-1.fna&oh=00_AT-lX4SIofeNGb0R-o7c9s_Us1GViHRksEvGgA3s1tDLBQ&oe=625C8B21",navlink: "10"},
          ],
          photo1: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/275660326_354507223246880_6999320198968953505_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFYcrkyPUYt32QfJxLTunC3Xm6J7gj-VcZebonuCP5VxnYD5QV-7pKN_AG6hGtQ-BCzUzsWyNHW-E1x0f9P1Acn&_nc_ohc=nm5KYeS1ai8AX-lyTQr&_nc_ht=scontent.flhe13-1.fna&oh=00_AT93iysm-4oG5ZPUjZfdQWrQCfaoNY1hQibRFzl3trFMDg&oe=623BC93B",
          photo2: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/245169902_261821915848745_2501033663596049453_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEkgt6blVKTyB5CFYU_XqX5TWF6eFQflslNYXp4VB-WySS3j_XJh6ECD1iJseYqn3_gDlSmzqmQAS9XzxbgeVFI&_nc_ohc=lw665Dv1-QEAX9W78sv&_nc_ht=scontent.flhe13-1.fna&oh=00_AT8sBUn9C26LwXwpzPw2slhAdSy2FM56vCSTsq4H0HRw2A&oe=623C5AF0",
      },
  }

  const item = profiles[params.id]

  const friends = item.friendsList.map((e) => {
    return(
      <>
          <Link to={`/page/${e.navlink}`}>
            <div className='oneFriend' style={{backgroundImage: `url(${e.url})`}}></div>
          </Link>
      </>
    )    
  })

    return(
        <>

          <Navbar />
          <div className='container-fluid profile_parent position-relative' style={{height: "570px"}}>
            <div className='cover_container container mt-5' style={{backgroundImage: `url(${item.coverImage})`}}></div>
            <div className='container profile_info'>
              <div className='row h-75'>
                  <div className='col-md-8 position-relative'>
                      <div className='profile_picture' style={{backgroundImage: `url(${item.picture})`}}></div>
                      <div className='information'>
                          <h2 className='fw-bolder'>{item.name}</h2>
                          <p style={{fontSize: "20px", color: "gray"}}>{item.friends} Friends</p>
                          <div className='friends_list'>
                            {friends}
                            {/* <div className='oneFriend' style={{backgroundImage: `url(${item.friendsList[0]})`}}></div> */}
                          </div>
                      </div>
                  </div>
                  <div className='col-md-4'>
                    <button className='btn' style={{position: "absolute", bottom: "10px", backgroundColor: "rgb(228,230,235)", fontSize: "16px"}}><i class="fa-solid fa-user-check"></i> &nbsp; friends</button>
                    <button className='btn btn-primary' style={{position: "absolute", bottom: "10px", fontSize: "16px", left: "150px"}}><i class="fa-brands fa-facebook-messenger"></i> &nbsp; Messange</button>
                  </div>
              </div>
              <div className='container row mt-2 p-0 border-top' style={{height: "54px"}}>
                <div className='col-md-1 d-flex align-items-center justify-content-center' style={{borderBottom: "3px solid rgb(11,134,238)",cursor: "pointer"}}>Post</div>
                <div className='col-md-1 d-flex align-items-center justify-content-center' style={{cursor: "pointer"}}>About</div>
                <div className='col-md-1 d-flex align-items-center justify-content-center' style={{cursor: "pointer"}}>Friends</div>
                <div className='col-md-1 d-flex align-items-center justify-content-center' style={{cursor: "pointer"}}>Photos</div>
                <div className='col-md-1 d-flex align-items-center justify-content-center' style={{cursor: "pointer"}}>Videos</div>
                <div className='col-md-1.5 d-flex align-items-center justify-content-center' style={{cursor: "pointer"}}>Check-ins</div>
                <div className='col-md-2 d-flex align-items-center justify-content-center' style={{cursor: "pointer"}}>More &nbsp; <i class="fa-solid fa-caret-down"></i></div>
                <div className='col-md-1 d-flex align-items-center justify-content-center'></div>
                <div className='col-md-1 d-flex align-items-center justify-content-center'></div>
                <div className='col-md-1 d-flex align-items-center justify-content-center'></div>
                <div className='col-md-1 d-flex align-items-center justify-content-center' style={{cursor: "pointer"}}><i style={{padding: "10px 20px",borderRadius: "10px", background: "rgb(228,230,235)"}} class="fa-solid fa-ellipsis"></i></div>
              </div>

            </div>

          </div>

          <div className='conatiner row m-auto pt-4' style={{width: "68%"}}>
            <div className='col-md-5'>
                <div className='conatiner bio-info p-3'>
                  <h3>Intro</h3>
                  <button className='btn w-100 mt-2' style={{backgroundColor: "rgb(228,230,235)"}}>Add Bio</button>
                  <button className='btn w-100 mt-3' style={{backgroundColor: "rgb(228,230,235)"}}>Edit Details</button>
                  <button className='btn w-100 mt-3' style={{backgroundColor: "rgb(228,230,235)"}}>Add Hobbies</button>
                  <button className='btn w-100 mt-3' style={{backgroundColor: "rgb(228,230,235)"}}>Add Feactured</button>
                </div>
                
                <div className='conatiner bio-info p-3 mt-4'>
                  <h3>Photos <span style={{color: "rgb(46,119,221)",fontSize: "18px",padding: "8px 10px" ,float: "right"}}>See All Photos</span></h3>
                  <div className='row'>
                      <div className='col-md-4 p-2' style={{backgroundImage: `url(${item.photo1})`}}></div>
                      <div className='col-md-4 p-2' style={{backgroundImage: `url(${item.photo2})`}}></div>
                      <div className='col-md-4 p-2'></div>
                  </div>
                </div>

                

            </div>
            <div className='col-md-7'>a</div>
          </div>
             {/* Now showing post {profiles[params.id].name} */}
        </>
    ) 
  }

export default Profile
