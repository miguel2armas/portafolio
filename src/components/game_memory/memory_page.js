import React from "react";
import Navbarweb from "../navbarweb";
import Footerweb from "../footerweb";
import {Container} from "react-bootstrap";
import GameMemory from "./game_memory";


const MemoryPage = (props) => {

  return(
      <div>
          <Navbarweb changeThemeDark={props.changeThemeDark} checkedTheme={props.checkedTheme} checkedThemecount={props.checkedThemecount}/>
          <Container>
              <GameMemory changeThemeDark={props.changeThemeDark} checkedTheme={props.checkedTheme} checkedThemecount={props.checkedThemecount}/>
          </Container>
          <Footerweb checkedTheme={props.checkedTheme}/>
      </div>
  );
}

export default MemoryPage