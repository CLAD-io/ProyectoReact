import nov1 from '../assets/novedades.png'
import { Helmet } from 'react-helmet'


export default function Novedades () {
    return(
        <div className="novedades">
            <Helmet>
            <title>Novedades | RouteTikcs!</title>
            <meta name="description" content="¡Explora todo los eventos!." />
        </Helmet>
            <div className="novedades1">
                <img src={nov1} alt=""  style={{width:"900px" , height:"180px", marginBottom:"20px"}}/>
                <img src='https://cdn.getcrowder.com/images/bd7ce760-855f-4b82-bbce-038647922c74-9d440fd2-d553-421f-8359-c70735e47917-c409f5db-acb4-4b06-9ae0-8c4204c87d23-imaginedragons-bannersaa-1920x720-min.jpg?w=1920&format=webp' alt=""  style={{width:"900px" , height:"280px", marginBottom:"20px" }}/>
                <img src='https://cdn.getcrowder.com/images/ab628a96-7099-49d8-ae84-cd8639587828-1920x720-wb-df-desktop.jpg' alt=""  style={{width:"900px" , height:"280px", marginBottom:"20px"}}/>
                 <img src='https://cdn.getcrowder.com/images/ff5b8123-4e02-468e-8431-7ba718a796f7-d1949cca-bae0-4f97-b6da-320146f03faf-1920x720.jpg?w=1920&format=webp' alt=""  style={{width:"900px" , height:"280px", marginBottom:"20px"}}/>
            </div>
        </div>
    )
}