import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { adicionarItem, selectAll } from "../../store/modules/conta/ContaSlice";
import { v4 as uuidv4 } from "uuid";
import MeuPaper from "../../Shared/components/Paper";

function Home(): JSX.Element {

	const transacoes = useAppSelector(selectAll);

	const [valor, setValor] = useState("")

	const dispatch = useAppDispatch();

	const adicionarEntrada = () => {
		dispatch(
			adicionarItem({
				uid: uuidv4(),
				valor: valor,
				status: "entrada"
			})
		);
	};

	const adicionarSaida = () => {
		dispatch(
			adicionarItem({
				uid: uuidv4(),
				valor: valor,
				status: "saída"
			})
		);
	};

	return (
		<>
            <TextField
                 id="standard-basic"
                label="Digite o valor... "
                variant="standard"
                fullWidth
				onChange={(e) => setValor((e.target.value)) }
            />
            
            <Box sx={{ mt: 4 }}>
                <Button onClick={adicionarEntrada} variant="outlined" >
                    Entrada
                </Button>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Button onClick={adicionarSaida} variant="outlined" >
                    Saída
                </Button>
            </Box>

			<Box sx={{ mt: 4 }}>
				{transacoes.map((item) => (
					<MeuPaper uid={item.uid} valor={item.valor} status={item.status} key={item.uid}></MeuPaper>
				))}
			</Box>
        </>
	)
}

export default Home;