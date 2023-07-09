import React, { ReactElement, useState, useEffect } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Header } from '../../components/Header';

import NavigationService from '../../navigation/NavigationService';
import { ModelItem } from '../../components/ModelItem';
import { calcHeight, calcWidth } from '../../config/metrics';
import { getDBConnection, getModels, getNotesByModelID, insertNewNote } from '../../sql/config';
import { FormInput } from '../../components/FormInput';
import { BarCode } from '../../icons/svgs/BarCode';
import { Pencil } from '../../icons/svgs/Pencil';
import Collapsible from 'react-native-collapsible';
import { ModelDetailsButton } from '../../components/ModelDetailsButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ModelDetailsRow } from '../../components/ModelDetailsRow';
import { Save } from '../../icons/svgs/Save';



interface dataType {
    Img_Link: string
    Name: string,
    Add_Description: string,
    Category: string,
    ID: number,
    Code: string,
    Cost: number,
    Type: string

}

interface propsType {
    item: dataType,
}

interface paramsType {
    params: propsType;
}

interface routeType {
    route: paramsType;
}

function ModelDetails(props: routeType) {

    const data = props?.route?.params?.item

    const [notes, setNotes] = useState([])
    const [infoCollapsed, setInfoCollapsed] = useState(false)
    const [notesCollapsed, setnotesCollapsed] = useState(false)
    const userName = "Ehab Mostafa"

    const getStoredNotes = async (name?: string) => {
        const db = await getDBConnection();
        const storedNotes = await getNotesByModelID(db, data.ID)
        console.log("sg : ", storedNotes)
        setNotes(storedNotes)
    }


    useEffect(() => {
        getStoredNotes()
    }, [data])


    const addNote = async () => {
        const db = await getDBConnection();
        await insertNewNote(db, userName, noteInput, new Date(), data.ID)
        setNoteInput("")
        getStoredNotes()
    }


    const [noteInput, setNoteInput] = useState("")

    return (
        <View style={styles.container}>

            {/****** Header ********/}
            <Header
                title={"Model Details"}
                back={true}
                rightIcon={
                    <View style={styles.editButton}>
                        <Pencil />
                        <Text numberOfLines={1} style={styles.editButtonText}>{"Edit"}</Text>

                    </View>
                }
            />

            <KeyboardAwareScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >



                {/****** Details Container ********/}
                <View style={styles.detailsContainer}>


                    {/****** Model Image ********/}
                    <ModelItem
                        icon={data.Img_Link}
                        imageContainerStyle={styles.imageContainerStyle}
                        imageStyle={styles.imageStyle}
                    />

                    {/****** Info Section ********/}

                    {/****** Info Button ********/}
                    <ModelDetailsButton
                        title={"Image Info"}
                        opened={infoCollapsed}
                        onPress={() => {
                            setInfoCollapsed(!infoCollapsed)
                        }}
                        hideBottom={true}
                    />

                    {/****** Info Data ********/}
                    <Collapsible collapsed={!infoCollapsed} style={styles.collapse}>

                        <ModelDetailsRow
                            title='Modal'
                            value={data.Code}
                        />

                        <ModelDetailsRow
                            title='Modal Name'
                            value={data.Name}
                        />

                        <ModelDetailsRow
                            title='Modal Type'
                            value={data.Type}
                        />

                        <ModelDetailsRow
                            title='Cost'
                            value={data.Cost}
                        />

                        <ModelDetailsRow
                            title='Category'
                            value={data.Category}
                        />

                        <ModelDetailsRow
                            title='Additional Description'
                            value={data.Add_Description}
                        />

                    </Collapsible>



                    {/****** Notes Section ********/}

                    {/****** Notes Button ********/}
                    <ModelDetailsButton
                        title={"Notes"}
                        opened={notesCollapsed}
                        onPress={() => {
                            setnotesCollapsed(!notesCollapsed)
                        }}
                        hideBottom={notesCollapsed}
                    />

                    {/****** Notes Data ********/}
                    <Collapsible collapsed={!notesCollapsed}
                        style={{ height: calcHeight(130) + (calcHeight(80) * notes.length) }}
                    >

                        {/****** Notes Input ********/}
                        <View >

                            {/****** Note Input Button ********/}
                            <TouchableOpacity style={styles.saveButton}
                                onPress={() => {
                                    addNote()
                                }}
                                disabled={noteInput.trim() == ""}
                            >
                                <Save />
                                <Text numberOfLines={1} style={styles.saveButtonText}>{"Save"}</Text>

                            </TouchableOpacity>

                            {/****** Note Input text ********/}
                            <FormInput
                                value={noteInput}
                                onChangeText={((value) => {
                                    setNoteInput(value)
                                })}
                                placeholder='Add a Note...'
                                inputContainerStyle={styles.inputContainerStyle}
                                inputStyle={styles.inputStyle}
                            />

                        </View>


                        {/****** Notes History ********/}
                        {
                            notes?.length != 0 &&
                            <View style={{ marginTop: calcHeight(16) }}>

                                {/****** Notes History Title ********/}

                                <Text style={styles.historyText}>{"History Notes"}</Text>



                                {/****** Notes List ********/}

                                <FlatList
                                    data={notes}
                                    style={styles.list}
                                    contentContainerStyle={styles.listContent}
                                    ItemSeparatorComponent={
                                        () => <View style={styles.listSeparatorContainer} >
                                            <View style={styles.listSeparator} />
                                        </View>

                                    }
                                    renderItem={(({ item, index }) => {
                                        return (
                                            <View style={styles.noteContainer}>
                                                <Text style={styles.noteUserName}>{item.UserName}</Text>
                                                <Text style={styles.noteDate}>{item.Date}</Text>
                                                <Text style={styles.noteTxt}>{item.Details}</Text>
                                            </View>
                                        )
                                    })}

                                />


                            </View>}

                    </Collapsible>








                </View>

            </KeyboardAwareScrollView >


        </View >
    );
}

export { ModelDetails };
