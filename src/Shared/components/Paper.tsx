import { Grid, Paper, Typography } from "@mui/material";
import { Transacao } from "../../store/modules/conta/ContaSlice";

const TransacaoItem: React.FC<Transacao> = ({ uid, valor, status }) => {
  return (
    <Paper elevation={2} sx={{ p: 3, mb: 2 }}>
      <Grid container>
        <Grid item xs={11}>
          {status === "entrada" && (
            <Typography variant="h4">Entrada {valor}</Typography>
          )}
          {status === "saída" && (
            <Typography variant="h4">Saída {valor}</Typography>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TransacaoItem;
