import $ from 'jquery';
import {renderResults} from "./RenderResults";


const Coindesk_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";

export const getCurrentRate = () => {
  //Promise .get with parameter Coindesk URL with jQuery .then that accepts params (data)
  return $.getJSON(Coindesk_URL).then((data) => {
        console.log(data);
        return data.bpi.USD.rate_float;
        //showRate();      
  });
};
export function getUserBitcoin() {
  //jQuery pull value from user amount value, in input box
  var UserBitcoin = $("#user-bitcoin-amount").val();
  console.log(UserBitcoin);
  return UserBitcoin;
}
// creates a function that multiplies users input of BTC * current rate from CoinDesk
export function convertAmountBTC(UserBitcoin, rate){
  var UserDollars = 0;
  //add IF the number is less than 21,000,000
  //if (Number(UserBitcoin)) {
    UserDollars = UserBitcoin * rate;
    console.log(rate);
    
    return UserDollars;
 // }
}
//On page load show rate of 1.0 BTC from CoindeskAPI
//function showRate() {
  //$('.rate-btc').html(1 * ${data.bpi.USD.rate_float});
//}