import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export interface Transacao {
  uid: string;
  valor: string;
  status: string;
}

const adapter = createEntityAdapter<Transacao>({
  selectId: (transacao) => transacao.uid,
});

export const { selectAll } = adapter.getSelectors(
  (state: any) => state.transacao
);

const slice = createSlice({
  name: "transacao",
  initialState: adapter.getInitialState(),
  reducers: {
    adicionarItem: adapter.addOne,
    removerItem: adapter.removeOne,
  },
});

export const { adicionarItem, removerItem } = slice.actions;

export default slice.reducer;
