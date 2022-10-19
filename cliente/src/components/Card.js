import React from 'react'
import '../../src/App.css'
import FormDialog from './FormDialog';
export const Card = (props) =>{

    const [open, setOpen] = React.useState(false);

    const handleClickCard = () =>{
        setOpen(true)
    }
    return(
        <>
        <FormDialog
         open={open}
         setOpen={setOpen} 
         name={props.name} 
         cost={props.cost} 
         category={props.category}
         listCard={props.listCard}
         setListCard={props.setListCard}
         id={props.id}
         />
        <div className='Card' onClick={handleClickCard}>
            <div>
                <h1 className='titulo'>
                    {props.name}
                </h1>
                <div className='description'>{props.cost}</div>
                <div className='description'>{props.category}</div>
            </div>
            
        </div>
        
        </>
    )
}