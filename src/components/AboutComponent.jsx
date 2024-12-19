 import UserContext from "../utils/UserContext";
import NavbarComponent from "./NavbarComponent";
// import User from "./User";
import UserClass from "./UserClass";
export default function AboutComponent(){
    return(  <div>
        <NavbarComponent/>
        <UserContext.Consumer>
            {({loggedInUser})=><h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
        <h1>About Us</h1>
        {/* <User Name={"Manas (function)"} Location={"Patna"} Contact={"987654321"}/> */}
        <UserClass Name={"Manas (class)"} Location={"Patna"} Contact={"987654321"}/>
    </div>)    
    }
