import React from "react";
import Footerweb from "../footerweb";
import {Container} from "react-bootstrap";
import GameMemory from "./game_memory";
import Heading from "../heading";


const MemoryPage = (props) => {

  return(
      <div>
          <Heading/>
          <Container>
              <GameMemory/>
          </Container>
          <Footerweb checkedTheme={props.checkedTheme}/>
      </div>
  );
}

export default MemoryPage