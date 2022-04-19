import styles from '../../../styles'
import About from './right/About'
import EmploymentHistory from './right/EmploymentHistory'
import { View, Text } from '@react-pdf/renderer'
import { BuilderContext } from '../../../App'
import { useContext } from 'react'
import Divider from './right/Divider'


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
const EducationText = ({ text, date }) => (
  <View style={{ paddingBottom: '10' }} key={text}>
    <Text style={{ fontSize: '12' }}>{text}</Text>
    <Text style={{ fontSize: '9', paddingTop: '3' }}>
      {date}
    </Text>
  </View>
)
export const Right = () => {
  const ctx = useContext(BuilderContext)
  const education = ctx.getComponentData('Education')
  return (
    <View style={styles.section__right}>
      <About text={ctx.getComponentData('Profile').about} />
      <Divider />
      <EmploymentHistory items={ctx.getComponentData('Employment').items} />
      <Divider />
      <Wrapper heading={education.header}>
          {education.items.map((item, index) => (
            <EducationText key={index} text={item.degree} date={item.date} />
          ))}
      </Wrapper>
      <Divider />

    
    </View>
  )
}
