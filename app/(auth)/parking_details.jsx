import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import Parking1 from "../../assets/images/parking1.png";
import Back from "../../assets/images/White_back.svg";
import Dark_back from "../../assets/images/White_back.svg";
import Star from "../../assets/images/Star.svg";
import Car from "../../assets/images/car.svg";
import Clock from "../../assets/images/clock.svg";
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import Share from "../../assets/images/Locate.svg";
import { tab_heading } from '../../components/Data/Data';
import Profiles from "../../assets/images/profile_img.png";
import Comment from "../../assets/images/comment.svg";
import Call from "../../assets/images/call.svg";
import Button from '../../components/Button/Button';
import { router, Link } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const Parking_details = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [activeHeading, setActiveHeading] = useState(tab_heading[0].id);

    const click = (id) => {
        setActiveHeading(id);
    };

    const slot = () => {
        router.push('book_slot');
    };
    const back = () => {
        router.push('home');
      };
    
    return (
        <View style={styles.details_page}>
            <Image source={Parking1} alt='image' style={styles.image} />
            <View style={styles.header}>
                <TouchableOpacity onPress={back}>
                <Back />
                </TouchableOpacity>
            </View>
            <View style={[styles.container, {backgroundColor: theme.background}]}>
                <View style={styles.review_row}>
                    <Text style={styles.parking}>car parking</Text>
                    <View style={styles.rating_row}>
                        <Star />
                        <Text style={styles.review}>4.9 (300 reviews) </Text>
                    </View>
                </View>
                <View style={styles.title_row}>
                    <Text style={[styles.title, {color:theme.color}]}>ParkSecure</Text>
                    <Share />
                </View>
                <Text style={styles.title_text}>1012 Ocean Avanue, New York, USA</Text>
                <View style={styles.heading_container}>
                    {tab_heading.map((d) => (
                        <TouchableOpacity
                            key={d.id}
                            style={[
                                styles.heading_box,
                                activeHeading === d.id && styles.active_heading_box,
                            ]}
                            onPress={() => click(d.id)}
                        >
                            <Text
                                style={[
                                    styles.head_text,
                                    activeHeading === d.id && styles.active_head_text,
                                ]}
                            >
                                {d.text}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
                    <View style={styles.timing_car}>
                        <View style={styles.timing_row}>
                            <Clock />
                            <Text style={[styles.timing, {color:theme.color}]}>1hour</Text>
                        </View>
                        <View style={styles.car_row}>
                            <Car />
                            <Text style={[styles.car, {color:theme.color}]}>28 Spots</Text>
                        </View>
                    </View>
                    <Text style={[styles.description, {color:theme.color}]}>Description</Text>
                    <Text style={styles.description_text}>Welcome to Park Haven, the ultimate destination for secure, convenient, and affordable car parking. Whether you need a spot<Text style={styles.read}> Read more..</Text></Text>
                    <Text style={[styles.description, {color:theme.color}]}>Operated By</Text>
                    <View style={styles.profile_row}>
                        <View style={styles.profile_left}>
                            <Image style={styles.profile} source={Profiles} alt='profile' />
                            <View style={styles.name_role}>
                                <Text style={[styles.name, {color:theme.color}]}>john mac</Text>
                                <Text style={styles.role}>Operater</Text>
                            </View>
                        </View>
                        <View style={styles.icons_row}>
                            <Comment />
                            <Call />
                        </View>
                    </View>
                    <View style={styles.price_row}>
                        <View style={styles.price_content}>
                            <Text style={[styles.price_title, {color:theme.color}]}>Total Price</Text>
                            <Text style={styles.price}>$5.00 <Text style={styles.hour}> /1hr</Text></Text>
                        </View>
                        <Button buttonText="Book Slot" onPress={slot} />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default Parking_details;

const styles = StyleSheet.create({
    details_page: {
        flex: 1,
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
    image: {
        width: '100%',
        borderRadius: 10,
        height: 300,
    },
    header: {
        position: 'absolute',
        left: 20,
        top: 50,
    },
    container: {
        paddingHorizontal: 20,
        paddingTop: 25,
        flex: 1,
    },
    review_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    parking: {
        fontSize: 10,
        lineHeight: 11,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#007BFF',
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        maxWidth: 85,
        marginVertical: 8,
    },
    rating_row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    review: {
        fontSize: 14,
        lineHeight: 17,
        fontFamily: 'Roboto_400Regular',
        color: '#BABABA',
    },
    title_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 22,
        lineHeight: 32,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#000000',
        textTransform: 'capitalize',
    },
    title_text: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Roboto_400Regular',
        color: '#757575',
    },
    heading_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    heading_box: {
        borderBottomColor: '#474747',
        borderBottomWidth: 2,
        paddingHorizontal: 10,
    },
    active_heading_box: {
        borderBottomColor: '#007BFF',
        borderBottomWidth: 5,
        marginBottom: 3,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    head_text: {
        fontSize: 14,
        lineHeight: 24,
        color: '#474747',
        paddingHorizontal: 25,
        paddingBottom: 10,
    },
    active_head_text: {
        color: '#007BFF',
    },
    timing_car: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 8,
    },
    timing_row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    car_row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    timing: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Roboto_400Regular',
        color: '#121212',
    },
    car: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Roboto_400Regular',
        color: '#121212',
    },
    description: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#121212',
        textTransform: 'capitalize',
        marginTop: 26,
        marginBottom: 16,
    },
    description_text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Roboto_400Regular',
        color: '#757575',
    },
    read: {
        color: '#FF95AE',
    },
    profile_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    profile_left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    name_role: {
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#121212',
    },
    role: {
        fontSize: 12,
        fontFamily: 'Roboto_400Regular',
        color: '#757575',
    },
    icons_row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    price_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 24,
        marginBottom: 25,
    },
    price_content: {

    },
    price_title: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Roboto_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    price: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Roboto_700Bold',
        color: '#007BFF',
    },
    hour: {
        color: '#757575',
    }
});
