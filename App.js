import React ,{ Component }from 'react';
import{ View, Text,TouchableOpacity, StyleSheet,Image} from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      phrase: '',
      img: require('./assets/cookie.png')
    }

    this.openCookie = this.openCookie.bind(this)

    this.phrases = [
      'No matter how thin you slice it, there will always be two sides.',
      'Everything excellent is as difficult as it is rare.',
      'Do not weep. Do not wax indignant. Understand.',
      'The endeavor to understand is the first and only basis of virtue.',
      'No to laugh, not to lament, not to detest, but to understand.'
    ];
  }

  openCookie(){
    let number =  Math.floor(Math.random() * this.phrases.length)

    this.setState({
      phrase: '" '+this.phrases[number]+' "',
      img:  require('./assets/cookie_open.png')
    })
    
    setInterval(() => {
      this.setState({
        phrase: '',
        img:  require('./assets/cookie.png')
      });
    }, 4000);
  }

  render(){
    return(
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img}/>
        <Text style={styles.text}>{this.state.phrase}</Text>
        <TouchableOpacity style={styles.btn} onPress={this.openCookie}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>Open Cookie</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width: 250,
    height: 250
  },
  text:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  btn:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText:{
    fontSize: 18,
    fontWeight: 'bold',
    color:'#dd7b22',
  }
});

export default App;