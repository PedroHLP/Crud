import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText"
import Axios from 'axios'
import axios from "axios";

export default function FormDialog(props) {
  
    const [editValues, setEditValues] = useState({
        id: props.id,
        name: props.name,
        cost: props.category,
        category: props.category
    });

    const handleEditGame = () =>{
        axios.put("http://localhost:3001/edit",{
            id: editValues.id,
            name: editValues.name,
            cost: editValues.category,
            category: editValues.category
        })
        handleClose();
    }
    const handleDeleteGame = () => {
        axios.delete(`http://localhost:3001/delete/${editValues.id}`,{
        })
        handleClose();
    }
    const handleClickOpen = () => {
        props.setOpen(true);
    };

    const handleClose = () => {
        props.setOpen(false);
    };

    const handleChangeValues = (value) =>{
        setEditValues(prevValues =>({
                ...prevValues,
                [value.target.id]: value.target.value
        }))
    }

  return (
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="nome do jogo"
            defaultValue={props.name}
            onChange={handleChangeValues}
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="cost"
            label="preço"
            defaultValue={props.cost}
            onChange={handleChangeValues}
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="category"
            label="categoria"
            defaultValue={props.category}
            onChange={handleChangeValues}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDeleteGame}>Excluir</Button>
          <Button onClick={handleEditGame}>Salvar</Button>
        </DialogActions>
      </Dialog>
  );
}
