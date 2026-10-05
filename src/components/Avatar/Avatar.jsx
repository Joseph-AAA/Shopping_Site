import React, { useState } from "react";
import { UserIcon } from "lucide-react";
import {useAuth} from "../Context/AuthContext";
import "./Avatar.css";
import { useNavigate } from "react-router-dom";


const Avatar = () => {
    
     const navigate = useNavigate();
      const [isOpen, setIsOpen] = useState(false);
      const {logout} = useAuth();

        const handleLogout = () =>{
            logout();
            navigate("/signin")
            setIsOpen(false)
        }


  return (<div className="avatar-con">
            <div onClick={()=> setIsOpen(!isOpen)} className="avatar">
                <UserIcon />
            </div>

            {
              isOpen && (
                  <div className="avatar-dropdown">
                      <button onClick={handleLogout} className="logout-btn">
                         Logout
                      </button>
                  </div>
              )
            }
        </div>
)};

export default Avatar;
