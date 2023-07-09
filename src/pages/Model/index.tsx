import React, { ReactElement, useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';

import styles from './styles';
import { Header } from '../../components/Header';

import NavigationService from '../../navigation/NavigationService';
import { ModelItem } from '../../components/ModelItem';
import { calcHeight, calcWidth } from '../../config/metrics';
import { getDBConnection, getModels } from '../../sql/config';
import { FormInput } from '../../components/FormInput';
import { BarCode } from '../../icons/svgs/BarCode';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



function Model() {

    const [data, setData] = useState<Array<{
        Name: string,
        Img_Link: string
    }>>([])

    const [searchTxt, setSearchTxt] = useState("")

    const getStoredModels = async (name?: string) => {
        const db = await getDBConnection();
        const storedModels = await getModels(db, name);
        setData(storedModels)
    }


    useEffect(() => {
        getStoredModels()
    }, [])

    return (
        <View style={styles.container}>

            {/****** Header ********/}
            <Header
                title={"Model"}
                back={true}
            />

            <KeyboardAwareScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >

                {/****** Search Input ********/}
                <FormInput
                    value={searchTxt}
                    onChangeText={((value) => {
                        setSearchTxt(value)
                        getStoredModels(value)
                    })}
                    placeholder='Type to Search…'
                    style={{ width: "90%", marginTop: calcHeight(20) }}
                    justRightIcon={<BarCode />}

                />

                {/****** Model List ********/}
                <FlatList
                    data={data}
                    style={styles.list}
                    contentContainerStyle={styles.listContent}
                    numColumns={2}
                    ItemSeparatorComponent={
                        () => <View style={styles.listSeparatorContainer} >
                            <View style={styles.listSeparator} />
                        </View>

                    }
                    renderItem={(({ item, index }) => {
                        return (
                            <ModelItem
                                title={item.Name}
                                icon={item.Img_Link}
                                onPress={() => {
                                    NavigationService.navigate("ModelDetails", { item })
                                }}
                                style={index % 2 == 1 ? { marginLeft: calcWidth(19) } : {}}

                            />
                        )
                    })}

                />

            </KeyboardAwareScrollView >

        </View >
    );
}

export { Model };
