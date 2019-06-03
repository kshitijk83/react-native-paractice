import React, { Component } from 'react'
import { Button, SectionList, Alert, Image, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class Blah extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datax: [
                { title: 'blah', data: ['this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section'] },
                { title: 'blah', data: ['this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section'] },
                { title: 'blah', data: ['this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section'] },
                { title: 'blah', data: ['this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section'] },
                { title: 'blah', data: ['this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section'] }
            ]
        }
    }


    render() {
        return (
            <>
                <SectionList
                    sections={
                        this.state.datax
                    }
                    renderItem={
                        ({ item }) => <Text style={styles.item}>{item}</Text>
                    }
                    renderSectionHeader={
                        ({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>
                    }
                    keyExtractor={(item, index) => index}
                >
                </SectionList>
                <Button onPress={() => this.setState({
                    datax: [
                        { title: 'blsdsdaah', data: ['this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section'] },
                        { title: 'blasddasah', data: ['this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section'] },
                        { title: 'blasddah', data: ['this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section'] },
                        { title: 'blah', data: ['this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section'] },
                        { title: 'blah', data: ['this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section', 'this is a section'] }
                    ]
                })} title='press'></Button>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    red: {
        color: 'red',
        fontSize: 50
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
});

export default Blah;