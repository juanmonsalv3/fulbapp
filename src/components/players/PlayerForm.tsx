import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  Button,
  FormControlLabel,
  Grid,
  Stack,
  Switch,
  TextField,
} from '@mui/material'
import { FormEvent, useEffect } from 'react'

const initialValues = {
  name: '',
  nickname: '',
  guest: false,
}

const validationSchema = Yup.object({
  name: Yup.string().required('El nombre es requerido'),
  nickname: Yup.string().required('El nickname es requerido'),
  guest: Yup.boolean(),
})

const formikState = {
  initialValues,
  validationSchema,
  onSubmit: () => {},
  initialErrors: {
    name: 'Required',
    nickname: 'Required',
  },
  initialTouched: {
    name: false,
    nickname: false,
  },
}

interface PlayerFormProps {
  onSave: () => void
}

export const PlayerForm = ({  onSave }: PlayerFormProps) => {
  const formik = useFormik(formikState)

  const submit = async (e: FormEvent) => {
    
  }

  return (
    <form onSubmit={submit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="name"
            name="name"
            label="Nombre"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="nickname"
            name="nickname"
            label="Alias"
            fullWidth
            value={formik.values.nickname}
            onChange={formik.handleChange}
            error={formik.touched.nickname && Boolean(formik.errors.nickname)}
            helperText={formik.touched.nickname && formik.errors.nickname}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                id="guest"
                name="guest"
                checked={formik.values.guest}
                onChange={formik.handleChange}
              />
            }
            label="Invitado"
          />
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!formik.isValid}
            >
              Guardar
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  )
}
