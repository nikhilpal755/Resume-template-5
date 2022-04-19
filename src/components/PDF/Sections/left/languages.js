import React from 'react'
import { View, Text } from '@react-pdf/renderer'

export default function Languages({ lang }) {
    return (
        <>
            <View style={{ marginLeft: '10' , marginTop: '4'}}>
                <Text
                    style={{
                        color: '#000',
                        fontSize: '15',
                    }}
                >
                    {lang.header}
                </Text>

                <View style={{ display: 'flex', color: 'grey' }}>

                    <Text style={{
                        fontSize: '11',
                    }}>
                        Languages:
                    </Text>
                    <Text style={{
                        fontSize: '11',
                    }}>
                        {lang.items}
                    </Text>
                </View>

            </View>
        </>
    )
}
