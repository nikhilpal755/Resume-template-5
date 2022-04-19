import React, { useContext } from 'react'
import { View, Text } from '@react-pdf/renderer'
import { ProfileContainer } from './left/ProfileContainer'
import { SVGItem } from './left/SVGItem'
import styles from '../../../styles'
import { SkillItem } from './left/SkillItem'
import { BuilderContext } from '../../../App'
import KeySkills from './left/KeySkills'
import Divider from './right/Divider'
import Projects from './right/Projects'
import Languages from './left/languages'

const Socials = () => {
  const ctx = useContext(BuilderContext)

  return (
    <View style={styles.socials__container}>
      {ctx.getSocials().items.map((item, index) => {
        if (item.enabled)
          return (
            <SVGItem
              key={index}
              viewBox={item.viewBox}
              path={item.path}
              url={item.url}
            />
          )
      })}
    </View>
  )
}
const Wrapper = ({ heading, ...props }) => {
  return (
    <View style={{ marginTop: '10', marginLeft:'10' }}>
      <Text
        style={{
          // color: '#FFF',
          fontSize: '15',
          paddingBottom: '10',
        }}
      >
        {heading}
      </Text>
      {props.children}
    </View>
  )
}


export const Left = () => {
  const ctx = useContext(BuilderContext)
  const profile = ctx.getComponentData('Profile')
  const contact = ctx.getComponentData('Contact')

  const achievements = ctx.getComponentData('Achievements')

  return (
    <View style={styles.section__left}>
      <ProfileContainer
        // name={profile.name}
        // profession={profile.profession}
        url={profile.profileImageURL}
        display={profile.display}
      />
      <Divider />

      <View style={{ display: 'flex', flexDirection: 'column' , justifyContent: 'center', alignItems: 'center'}}>
        {contact.items.map((item, index) => (
          <View key={index}>
            {item.name === 'Phone' && <>
            </>}
          
            <Text
              style={{ fontSize: '12', marginBottom: '8px' }}
            >
              {item.text}
            </Text>
          </View>
        ))}
      </View>


      <Divider />
      <KeySkills skills={ctx.getComponentData('KeySkills')} />
      <Divider />

      {/* Projects Section  */}

      <Projects projects={ctx.getComponentData('Projects')} />
      <Divider/>

      {/* Addtional Info  */}
      <Languages lang={ctx.getComponentData('Languages')} />
      <Divider/>

      {/* co-curricular activities  */}
      <Wrapper heading={achievements.header}>
        {achievements.items.map((item, index) => (<>
          <Text style={{ fontSize: '11', marginBottom: '8px' }} key={index} >{item}</Text>
        </>))}
      </Wrapper>
      <Divider/>


      {/* <View>
        <Wrapper heading={education.header}>
          {education.items.map((item, index) => (
            <EducationText key={index} text={item.degree} date={item.date} />
          ))}
        </Wrapper>
        {skills.display && (
          <Wrapper heading={skills.header}>
            {skills.items.map((item, index) => (
              <SkillItem key={index} name={item.text} fillSkill={item.level} />
            ))}
          </Wrapper>
        )}
        {certifications.display && (
          <Wrapper heading={certifications.header}>
            {certifications.items.map((item, index) => (
              <EducationText key={index} text={item.name} date={item.date} />
            ))}
          </Wrapper>
        )}

      </View> */}
        {/* <Socials /> */}
    </View>
  )
}
