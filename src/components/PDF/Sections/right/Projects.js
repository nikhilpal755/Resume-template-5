import { Text, View } from '@react-pdf/renderer'
import Divider from './Divider'

const Projects = ({ projects }) => {
  return (
    <div>
      {projects.display && (
        <View  style={{marginLeft: '10', marginTop: '4'}}>
          <Text
            style={{
              color: '#000',
              fontSize: '15',
            }}
          >
            {projects.header}
          </Text>
          {/* <Divider /> */}
          {projects.items.map((project, index) => (
            <View key={index}>
              <Text style={{ fontSize: '12', marginVertical: '4' }}>
                {project.name}
              </Text>
              <Text
                style={{ fontSize: '11', marginTop: '4', marginLeft: '2' }}
              >
                {project.description}
              </Text>
            </View>
          ))}
        </View>
      )}
    </div>
  )
}

export default Projects
