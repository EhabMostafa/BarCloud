import React, { ReactElement, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import styles from './styles';
import { Header } from '../../components/Header';
import { BackArrow } from '../../icons/svgs/BackArrow';
import { SuccessCycle } from '../../icons/svgs/SuccessCycle';
import { MainMenuItem } from '../../components/MainMenuItem';
import { Box } from '../../icons/svgs/Box';
import { Vendor } from '../../icons/svgs/Vendor';
import NavigationService from '../../navigation/NavigationService';



function MainMenu() {

    const [data, setData] = useState
        <
            Array<
                {
                    icon: ReactElement<any, any>,
                    title: String,
                    onPress?: Function
                }
            >
        >

        ([
            {
                icon: <Box />,
                title: "Asset Inventory",
            },
            {
                icon: <Vendor />,
                title: "Model",
                onPress: () => {
                    NavigationService.navigate("Model")
                }
            },
            {
                icon: <Vendor />,
                title: "Person",
            }
        ])

    return (
        <View style={styles.container}>

            {/****** Header ********/}
            <Header
                title={"Picture"}
                back={true}
                rightIcon={
                    <View style={styles.headerRightContainer}>
                        <SuccessCycle />
                        <Text numberOfLines={1} style={styles.headerRightText}>{"Proccess"}</Text>
                    </View>
                }
            />

            {/****** Main Menu ********/}
            <FlatList
                data={data}
                style={styles.list}
                contentContainerStyle={styles.listContent}
                ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
                renderItem={(({ item, index }) => {
                    return (
                        <MainMenuItem
                            title={item.title}
                            icon={item.icon}
                            onPress={item.onPress}

                        />
                    )
                })}

            />



        </View >
    );
}

export { MainMenu };
