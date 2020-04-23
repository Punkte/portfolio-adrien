import React from 'react'
import ProjectDescription from "../../components/organisms/ProjectDescription";
import ProjectPicture from './picture.png'
import FormulaPicture from './formula.png'

export const SNCFProjectDescription = () => {
  return (
    <ProjectDescription
      title="SNCF Inoui"
      text="Web-app responsive et social game permettant aux agents de se former sur l’ensemble des applications client SNCF"
      pageLink="#"
      picture={ProjectPicture}
    />
  )
}
export const FormulaProjectDescription = () => {
  return (
    <ProjectDescription
      title="Formula 1"
      text="Refonte intégrale du site web de billeterie desktop, tablette et mobile. Parcours utilisateurs du funnel réservation du billet"
      pageLink="#"
      picture={FormulaPicture}
    />
  )
}