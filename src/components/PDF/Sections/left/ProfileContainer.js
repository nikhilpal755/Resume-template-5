import { Text, View, Image } from '@react-pdf/renderer'
import styles from '../../../../styles'

const ProfileImage = ({ url, display }) => (
  <>
    {display && (
      <Image
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '90',
        }}
        src={url}
      />
    )}
  </>
)

export const ProfileContainer = ({ url, display }) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20',
        // marginBottom: display ? '20px' : '-65px',
        // height: '150',
        marginLeft: '10',
        fontFamily: 'Helvetica-Bold',
      }}
    >
      <ProfileImage url={url} display={display} />
    </View>
  )
}
