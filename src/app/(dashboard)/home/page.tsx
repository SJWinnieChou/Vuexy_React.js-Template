import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import BasicDataTables from '@/views/react-table/BasicDataTables'

import input from '/@core/theme/overrides/input'

export default function Page() {
  return (
    <>
      <h1>Home page!</h1>
      <Card>{/* <CardContent></CardContent> */}</Card>
      <BasicDataTables></BasicDataTables>
    </>
  )
}
