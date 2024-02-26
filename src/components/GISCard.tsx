//eslint-disable-next-line
//@ts-nocheck
import React, { ReactNode } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

interface Props {
 title: string
 description: string
 image: ReactNode
}

const GISCard: React.FC<Props> = ({ title, description, image }) => {
 return (
  <Card sx={{ maxWidth: 345 }}>
   <CardActionArea>
    <CardMedia component="img" height="140" image={image} alt="green iguana" />
    <CardContent>
     <Typography gutterBottom variant="h5" component="div">
      {title}
     </Typography>
     <Typography variant="body2" color="text.secondary">
      {description}
     </Typography>
    </CardContent>
   </CardActionArea>
  </Card>
 )
}

export default GISCard
