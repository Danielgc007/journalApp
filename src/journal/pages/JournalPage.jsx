import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView, NoteWiev } from "../views"

export const JournalPage = () => {

  const dispatch = useDispatch();

  const { isSaving, active } = useSelector( state => state.journal );

  const onclickNewNote = () => {
    dispatch( startNewNote() );


  }

  return (
    <JournalLayout>


      {
        (!!active) // se coloca doble !! porque como es un objeto y al inicio es nulo entonces de esta manera se convierte en un booleano
         ? <NoteWiev />
         : <NothingSelectedView /> 
          
      }


      <IconButton
        onClick={ onclickNewNote }
        size='large'
        disabled={ isSaving }
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50

        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />

      </IconButton>

    </JournalLayout>
  )
}
