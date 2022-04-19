import { Text, View } from '@react-pdf/renderer'
import Divider from '../right/Divider'

const KeySkills = ({ skills }) => {
  // console.log(skills)
  return (
    <View>
     
        <View style={{ paddingTop: '10px' , marginLeft: '10'}}>
          <Text
            style={{
              color: '#000',
              fontSize: '15',
            }}
            >
            {skills.header}
          </Text>
          <View style={{marginLeft: '10'}}>
            {skills.items.map((item, index) => {
             return <Text style={{ fontSize: '11', marginTop: '4' }} key={index}>{item}</Text>
            })}
          </View>
          {/* <Divider /> */}
        </View>
    
    </View>
  )
}

export default KeySkills
