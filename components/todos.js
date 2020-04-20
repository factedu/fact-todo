import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from './../constraints/color';
import { ScrollView } from 'react-native-gesture-handler';

export default class Todos extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const list = [
            {
                when: '10:30 AM',
                name: 'Meet Amy Farha',
                icon: 'done-all',
                subtitle: 'Send ammy farha a google meet link and fix agenda for next meeting'
            },
            {
                when: '11:45 AM',
                name: 'Create a report for Chris Jackson',
                icon: 'timer',
                subtitle: 'Chris needs a report to be created so that he can pitch new investor.'
            },
            {
                when: '10:30 AM',
                name: 'Meet Amy Farha',
                icon: 'done-all',
                subtitle: 'Send ammy farha a google meet link and fix agenda for next meeting'
            },
            {
                when: '11:45 AM',
                name: 'Create a report for Chris Jackson',
                icon: 'timer',
                subtitle: 'Chris needs a report to be created so that he can pitch new investor.'
            },
            {
                when: '10:30 AM',
                name: 'Meet Amy Farha',
                icon: 'done-all',
                subtitle: 'Send ammy farha a google meet link and fix agenda for next meeting'
            },
            {
                when: '11:45 AM',
                name: 'Create a report for Chris Jackson',
                icon: 'timer',
                subtitle: 'Chris needs a report to be created so that he can pitch new investor.'
            },
            {
                when: '10:30 AM',
                name: 'Meet Amy Farha',
                icon: 'done-all',
                subtitle: 'Send ammy farha a google meet link and fix agenda for next meeting'
            },
            {
                when: '11:45 AM',
                name: 'Create a report for Chris Jackson',
                icon: 'timer',
                subtitle: 'Chris needs a report to be created so that he can pitch new investor.'
            },
            {
                when: '10:30 AM',
                name: 'Meet Amy Farha',
                icon: 'done-all',
                subtitle: 'Send ammy farha a google meet link and fix agenda for next meeting'
            },
        ];
        return (
            <View style={styles.container}>
                <Text style={styles.dateTitle}>ToDo on : {this.props.date}</Text>
                <ScrollView>
                    {
                        list.map((l, i) => (
                            <ListItem
                                key={i}
                                leftIcon={{ name: l.icon }}
                                title={l.name}
                                rightSubtitle={l.when}
                                subtitle={l.subtitle}
                                bottomDivider
                                checkBox={
                                    {
                                        checked: true,
                                        size: 24,
                                        checkedColor: Color.primary,
                                        checkedIcon: (l.icon === 'done-all') ? 'check-square-o' : 'square-o'
                                    }
                                }
                            />
                        ))
                    }
                </ScrollView>
                <Button
                    type="clear"
                    icon={
                        <Icon
                            name="plus-circle"
                            size={50}
                            color={Color.primary}
                        />
                    }
                    buttonStyle={styles.fabButton}
                    title=""
                >
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
        // width: '100%',
        padding: 12,
        // alignItems: 'center',
        // justifyContent: 'flex-start'
    },
    dateTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.primary,
        padding: 5,
        width: '100%',
        textAlign: 'center'
    },
    fabButton: {
        backgroundColor: Color.white,
        padding:0,
        position:'absolute',
        bottom:2,
        left:2,
    }
});