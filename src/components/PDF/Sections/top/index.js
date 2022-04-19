import React,{useContext} from 'react'
import ProfileName from './ProfileName'


import { BuilderContext } from '../../../../App'


export default function Top() {
    const ctx = useContext(BuilderContext)
    const profile = ctx.getComponentData('Profile')

  return (
    <>
       
            <ProfileName 
             name={profile.name}
             profession={profile.profession}
             />
        
    </>
  )
}
