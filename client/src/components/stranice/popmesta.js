import React ,{useState} from 'react';
import '../../App.css';
import Footer from '../Footer';
import './css/global.css';
import '../Cards.css';
import CardItem from '../CardItem';

 function Popmesta() {

    const dataList=[
        {"id":"1",
        "src":"images/Antiga-Gvatemala.jpg",
        "text":"If it is necessary to describe this city with just one word, then it is: magical. Tourists can explore the ruins of colonial churches and monasteries or drown in bohemian cafes, all under 3 active volcanoes that dominate the horizon.",
        "label":"Antiga Guatemala, Guatemala"},
       { "id":"2",
        "src" : "images/njujork-putovanja.jpg",
        "text" : "New York is often called the Crossroads of the World. Nowhere else in the world will you find such an amazing concentration of art, culture, cuisine and business.",
        "label" : "New York,SAD" },
       {"id":"3",
        "src": "images/lasa-tibet.jpg",
        "text":"Lhasa is the spiritual center of Tibetan Buddhism. The rugged peaks of the Himalayas with monasteries and palaces from which incense is always felt, make Lhasa one of the most impressive cities in the world.",
        "label": "Lhasa, China"
        },
        {"id":"4",
         "src" : "images/rio-de-zaneiro.jpg",
        "text" : "From the world-famous carnival to an unforgettable panorama, Rio is an experience for all 5 senses.",
        "label":"Rio de Janeiro, Brazil",
       },
        {"id":"5",
         "src" :"images/london-putovnja.jpg",
        "text" : "With its prestigious museums, famous streets and squares, this fast-paced financial capital is attracting more and more tourists.",
        "label" : "London,England"
        },
        { "id":"6",
        "src" : "images/marakec-maroko.jpg",
        "text" : "Entering the old town of Marrakech is an experience you will never forget: endless labyrinth-like streets, full of lively markets, stunning architecture and food spreading on the spot.",
        "label": "Marrakech,Morocco"
        },
        { "id":"7",
        "src":"images/bangkok.jpg",
        "text":"From peaceful temples to exotic markets and crowded nightclubs, Bangkok offers something for everyone.He became especially famous when he defeated London in 2013 and became the most visited city in the world!",
        "label":"Bangkok, Thailand"},
        {"id":"8",
        "src":"images/meskiko-siti-putovanja.jpg",
        "text":"Mexico City is a beautiful chaos of attractions, sounds and colors. It is home to more than 20 million people and offers an abundance of colonial architecture and very good food.",
        "label":"Mexico City, Mexico"},
        { "id":"9",
        "src":"images/las-vegas-putovanja.jpg",
        "text":"Sin City is a favorite destination for a large number of tourists from all over the world who stay in top hotels, have lunch in famous restaurants and spend time in the best casinos. Viva Las Vegas!",
        "label":"Las Vegas,SAD"},
       { "id":"10",
       "src":"images/lisabon-portugalija.jpg",
        "text":"Lisbon simply has it all: the sun, the sea and the enchanting atmosphere.",
        "label":"Lisbon, Portugal"},
        { "id":"11",
        "src":"images/rim.jpg",
        "text":"All roads lead to Rome, including our text. A walk through Rome is like exploring the largest open-air museum in the world..",
        "label": "Rim,Italy"
        },
        { "id":"12",
        "src":"images/prag.jpg",
        "text":"The mixture of history, incredible architecture, colorful gastronomy and top-quality beer has made Prague one of the most visited cities in the world.",
        "label":"Prague, Czech Republic"},
        { "id":"13",
        "src" : "images/venecija.jpg",
       "text" : "Venice is a unique place, like no other on earth.",
       "label" : "Veniece,Italy" },
        {"id":"14",
        "src":"images/singapur.jpg",
        "text":"Singapore is definitely a city to be experienced.",
        "label":"Singapore,Singapore"},
        {"id":"15",
        "src":"images/dubrovnik-putovanja.jpg",
        "text" : "Protected by its walls,Dubrovnik is a true jewel of the Adriatic, Old Town ..",
        "label":"Dubrovnik, Croatia"},
        { "id":"16",
        "src":"images/buenos-aires-putovanje.jpg",
        "text ":"",
        "label":"Buenos Aires, Argentina"},
        { "id":"17",
        "src":"images/santorini.jpg",
        "text ":"",
        "label":"Oia, Greece" },
        {"id":"18",
        "src":"images/budimpesta-putovanja.jpg",
        "text ":"",
       "label":"Budapest,Hungary"}
    ];

    const [searchText,setSearchText]=useState('');
    const [data,setData]=useState(dataList);
    const handleChange = value =>{
        setSearchText(value);
        filterData(value);
    }

    const filterData= value =>{
        const lowerCaseValue =value.toLowerCase().trim();
        if (!lowerCaseValue){
            setData(dataList);

        }else{
            const filteredData=dataList.filter(item =>{
                return Object.keys(item).some(key =>{
                    return item[key].toString().toLowerCase().includes(lowerCaseValue);
                } )
            });
            setData(filteredData);
        }
    }

    return ( <>
        < div className = 'cards' >
        <h1 > TOP CITIES YOU MUST TO VISIT! </h1> 
        <div className="Search">
        <span className="SearchSpan">
        <i class="fad fa-search-location"></i>
        </span>
        <input
          className="SearchInput"
          type="text"
          value={searchText}
          onChange ={e =>handleChange(e.target.value)}
        />
      </div>
        <div className = 'cards__container' >
        <div className="box-conntainer">
        {
            data.map((d,i)=>{
                return <div className="box" >
                <CardItem key={i}
                src={d.src} 
                text={d.text}
                label={d.label}
                /></div>
            }
            )
        }
    <div className="clearboth">
        {data.length ===0 && <span style={{backgroundColor: 'black', width:"200px",fontSize:"20px", color:"white"}}> No result!<i class="far fa-image"></i></span>}
    </div>
    </div>
</div>
        </div><Footer/></>
    );
}
export default Popmesta;