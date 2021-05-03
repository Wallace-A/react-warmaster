import React from 'react';
import { StrategemCard } from "../StrategemCard.js";

import * as strategemData from "../../data/strategems.json";

export const Home = () => {
  return (
    <div>
      <h1>WELCOME TO WARMASTER</h1>
      {/* display all strategems */}
      <div className="strategem-container">
            {strategemData.default.map(faction => (
              faction["strategems"].map(strategem => (
                <StrategemCard strategem={strategem} />
              ))
            ))}
          </div>
    </div>
  )
}




