import React, { Component } from 'react';
import Item from './item'
import * as _b_ from 'react-bootstrap';

 import hoc from './hoc'
const tab=[
    {title:'blade runner',
    img:'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
     rating:4},
     {title:'pirate of the caribbean',
    img:'https://www.virginmegastore.ae/medias/sys_master/root/h09/hd0/9098251141150/Pirates-of-the-Caribbean-Dead-Men-Tell-No-Tales-326289-Detail.jpg',
    rating:5},
    {title:'Beauty and the Beast ',
    img:'https://resizing.flixster.com/uiBmmvUZ4IwMWiSZOyXrBgYBJBU=/206x305/v1.bTsxMjMwMzAzMTtqOzE3OTYyOzEyMDA7MTY4ODsyNTAw',
    rating:'4'
    },
     {title:'inception',
    img:'https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png',
     rating:3},
     {title:'shawshank redemption',
     img:'https://is5-ssl.mzstatic.com/image/thumb/Video2/v4/14/3f/32/143f324a-24ed-fa7d-cbb0-25a65d12dba0/pr_source.lsr/268x0w.png',
     rating:4}
    ]

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { finalTab:tab ,
                        filtred_tab:tab,
                        eltstate:{},
                        wordstate:'',
                        ratestate:0}
                        this.tab_1=tab;
    }

   

    // filtr=(props)=>{
    //     let tab_1=this.state.filtred_tab.filter((elt,i)=>elt.title.toLocaleLowerCase().indexOf(props.word)>-1)
    //     this.setState({finalTab:tab_1})
    //     console.log('tableau:',this.state.filtred_tab)
    // }
   // this.state.filtred_tab

    componentWillReceiveProps(nextProps) {
        
        // console.log('hhhh' + (Object.getOwnPropertyNames(nextProps.element).length ))
       if((nextProps.word!==this.state.wordstate)){
        let tab_1=this.state.filtred_tab.filter((elt,i)=>elt.title.toLocaleLowerCase().startsWith(nextProps.word))
        this.setState({finalTab:tab_1,wordstate:nextProps.word})  
       }
    // else if(nextProps.word ==''){this.setState({finalTab:tab})}
    else if((nextProps.rate !==this.state.ratestate)) {
        let tab_2=this.state.filtred_tab.filter((elt,i)=>elt.rating>=nextProps.rate)
        this.setState({finalTab:tab_2,ratestate:nextProps.rate})  
    }
       else if((Object.getOwnPropertyNames((nextProps.element).length !==0))&&(nextProps.rate==this.state.ratestate))
           { let tab_3=this.state.finalTab.concat(nextProps.element)
            console.log('kkkk',this.state.filtred_tab)
            this.setState({finalTab:tab_3,eltstate:nextProps.element,filtred_tab:tab_3
                
                })  }

       
    console.log('ee'+ nextProps.rate+nextProps.rate)
    }

    render() { 
        // this.setState(prev => {filtred_tab: prev.filtred_tab.concat('d')},
        // () => console.log(this.state.filtred_tab))

       const {word}=this.props
        return ( <div>
            <_b_.Grid> 
              <_b_.Row>
                 {this.state.finalTab.map((elt,i)=><Item item={elt} key={i} rating={elt.rating} />  )}  
              </_b_.Row>
              </_b_.Grid> 
        </div>)
    }
}
// export default List;
 export default hoc(List);