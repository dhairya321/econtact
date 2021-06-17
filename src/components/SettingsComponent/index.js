import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import Icon from '../common/Icon';

const SettingsComponent = ({ prefArr, modalVisible, setModalVisible, settingOptions }) => {
    return (
        <>

            <AppModal
                modalVisible={modalVisible}
                modalFooter={<></>}
                setModalVisible={setModalVisible}
                title="Sort by"
                modalBody={<View>

                    {prefArr.map(({ name, selected, onPress }) => (<View>
                        <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', paddingVertical: 5, alignItems: 'center' }}>
                            {selected && <Icon size={17} name="check" type="matireal" />}
                            <Text style={{ fontSize: 17, paddingLeft: selected ? 15 : 30 }}>{name}</Text>
                        </TouchableOpacity>

                    </View>
                    )
                    )}
                </View>
                }
            />



            <ScrollView style={{ backgroundColor: colors.white }}>
                {settingOptions.map(({ title, subTitle, onPress }, index) =>
                    <TouchableOpacity key={title} onPress={onPress}>
                        <View style={{
                            paddingHorizontal: 20,
                            paddingBottom: 20,
                            paddingTop: 20
                        }}>
                            <Text style={{ fontSize: 17 }}>{title}</Text>
                            {subTitle && (<Text style={{ fontSize: 14, paddingTop: 5, color: colors.grey }}>{subTitle}</Text>)}
                        </View>

                        <View style={{ height: 0.5, backgroundColor: colors.grey }} />
                    </TouchableOpacity>)
                }
            </ScrollView >
        </>
    );
}

export default SettingsComponent;