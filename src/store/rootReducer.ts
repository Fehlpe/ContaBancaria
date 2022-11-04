import { combineReducers } from "@reduxjs/toolkit";
import transacao from "./modules/conta/ContaSlice"

// Combina todos os reducers da aplicação
export default combineReducers({
  transacao
});
