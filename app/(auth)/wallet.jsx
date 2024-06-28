import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import Back from "../../assets/images/Back.svg";
import { Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Wallets from "../../assets/images/pink_wallet.svg";
import Button from '../../components/Button/Button';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { wallet_tab_data } from '../../components/Data/Data';

const Wallet = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back />
        <Text style={styles.heading}>Wallet</Text>
      </View>
      <View style={styles.stack}>
        <View style={styles.stack_top}>
            <View style={styles.stack_left}>
                <Text style={styles.text}>Wallet Balance</Text>
                <Text style={styles.value}>$ 15000.00</Text>
            </View>
            <Wallets />
        </View>
        <Button buttonText="Add Money" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.today}>Today</Text>
      <View style={styles.wallet_tab_container}>
        {
            wallet_tab_data.map((d) => (
                <TouchableOpacity style={styles.tab} key={d.id}>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.value2}>{d.name}</Text>
                        <Text style={styles.text}>{d.time}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.price}>{d.price}</Text>
                        <Text style={styles.text}>{d.balance}</Text>
                    </View>
                    </View>
                </TouchableOpacity>
            ))
        }
      </View>

      </ScrollView>
    </View>
  )
}

export default Wallet;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    heading: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    stack: {
        borderRadius: 10,
        padding: 12,
        backgroundColor: '#E6F2FF',
        marginVertical: 29,
    },
    stack_top: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    stack_left: {
        gap: 5,
    },

    text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Roboto_400Regular',
        color: '#757575',
    },
    value: {
        fontSize: 16,
        lineHeight: 24, 
        fontFamily: 'Montserrat_600SemiBold',
        color: '#000000',
    },
    value2: {
        fontSize: 14,
        lineHeight: 24, 
        fontFamily: 'Montserrat_600SemiBold',
        color: '#000000',
    },
    today: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#000000',
        textTransform: 'capitalize',
    },
    wallet_tab_container: {
        gap: 10,
        marginVertical: 20,
        paddingBottom: 30,
    },
    tab: {
        borderColor: '#BABABA',
        borderWidth: 1,
        borderRadius: 5,
        
        padding: 12,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minWidth: '90%',
    },
    column: {
        gap: 4,
    },
    price: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Montserrat_700Bold',
        color: '#16C813',
        textAlign: 'right',
    }
})