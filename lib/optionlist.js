import PropTypes from "prop-types";
import React, { Component } from "react";
import {
    StyleSheet,
    ScrollView,
    View,
    TouchableWithoutFeedback,
    ViewPropTypes,
    Text
} from "react-native";

export default class OptionList extends Component {
    static defaultProps = {
        onSelect: () => {}
    };
    static propTypes = {
        style: ViewPropTypes.style,
        onSelect: PropTypes.func,
        titleStyle: PropTypes.object,
        title: PropTypes.string
    };

    render() {
        const { style, children, onSelect, selectedStyle, selected, title, titleStyle } = this.props;
        const renderedItems = React.Children.map(children, (item, key) => {
            if (!item) return null
            return <TouchableWithoutFeedback
                key={key}
                style={{ borderWidth: 0 }}
                onPress={() => onSelect(item.props.children, item.props.value)}
            >
                <View
                    style={[
                        { borderWidth: 0 },
                        item.props.value === selected ? selectedStyle : null
                    ]}
                >
                    {item}
                </View>
            </TouchableWithoutFeedback>
        });

        return (
            <View style={[styles.scrollView, style]}>
                <Text style={[titleStyle]}>{title}</Text>
                <ScrollView automaticallyAdjustContentInsets={false} bounces={false}>
                    {renderedItems}
                </ScrollView>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    scrollView: {
        height: 280,
        width: 300,
        borderWidth: 1,
        borderColor: '#909090'
    }
});
