import React, { useState } from 'react'
import './memder.css'
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Addbtm from '../../assets/svg/Addbtm.svg'
import profileStaff from '../../assets/images/profileStaff.png'

import Barth from '../../assets/svg/barth.png'
import Phone from '../../assets/svg/Phone.png'
import email from '../../assets/svg/email.png'
import VanIcon from '../../assets/svg/VanIcon.png'
import experience from '../../assets/svg/experience.png'
import star from '../../assets/svg/star.svg'
import LastActive from '../../assets/svg/LastActive.png'
import Pan from '../../assets/svg/PenEtat.png'

const memberInfo = [
 [Barth, "12/2/1991"],
  [Phone,'01157501306'],
  [email,'hany@gmail.com'],
 [VanIcon,'Van # 01'],
  [experience,'8 years of experience'],
  [star,'4.8 rates'],
 [LastActive,'Last activity : 2 July 2024  at  04:30 PM'],
]

function Member() {

  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
        <div className="profile">
            <div className='memberProfile'>
              <p className='MPtitle'>Staff Member Profile</p>

              <div className="profileCard">
                  <div className="img">
                      <img className='personRel' src={profileStaff} alt="" />
                  </div>
                  <div className="profileName">
                    <div className="">
                    Hany Adel Mahmoud 
                    </div>
                    <img className='edateTheName' src={Pan} alt="" />
                  </div>
                  <div className="profileTitleandJoined">
                    <div className="titlePS">Engineer</div>
                    <div className="joinedPS">Joined in Jan 13, 2022</div>
                  </div>
                  <div className="stuffprofileinfo">
                    <div className="spiTitle">Staff Member Info</div>
                    {memberInfo.map(e =>{
                      return <div className="memberInfoItem">
                        <img src={e[0]} alt="" />
                        <div className="memberInfotext">{e[1]}</div>
                      </div>
                    })}
                  </div>
              </div>
            </div>
            <div className="memberDetals">
              <div className="memberMenuBar">
                <div className="memberMenuBar_item">Orders</div>
                <div className="memberMenuBar_item">Comments</div>
                <div className="memberMenuBar_item">Experience file</div>
              </div>
              <div className="showValueMember">
                <div className="ordersValue">
                  <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                  </Paper>
                  <div className="addOrderbtm">
                    <img src={Addbtm} alt="" />
                    Add Order
                  </div>
                </div>
              </div>
            </div>
        </div> 
    </>
  )
}

export default Member