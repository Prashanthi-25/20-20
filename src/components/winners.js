import  React,{Component} from 'react';
import img1 from './Shalini.jpg';
import img2 from './Barani.jpg';
import './image.css';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
const list=[
  {src:img1,
   name:"Shalini",
   description:"These six months in 20-20 challenge was an efficient journey for me personally. I have not heard of these challenges before. Initially, I was quite hesitant to give my name for this, but now I realize I dint miss up. I do read books, but not quite often. After taking part in this challenge, I got the opportunity to surf for the books and read them. At the beginning, I did not read according to the themes, but later in the upcoming months, started to follow them. Whenever, a theme is posted, I would search for variety of books and movies related to the theme and then I would get hold onto some of them. Personally, I love reading books than the movies part. After completing 20 books and movies, I am finding it a bit difficult to watch equal no. of movies.Another thing in this challenge is the interaction among participants and the varied genre of books & movies that is being posted. I very much enjoy seeing those posts and would note down a few interesting ones. It would have been good when this challenge was conducted when I was during my 3rd or 4th year. The juniors can very well utilize this challenge a lot, as it improves the physical and mental health. Also the batch reps are doing a fantastic job, be it the spreadsheet activity, statistics ratio, the selects and readz team, monthly meetups. Well, looking forward for the next five months of this personality building challenge!!"
},
{ src:img2,
   name:"Barani",
   description:"The 2020 challenge gave me hope that I can also read and complete a full book.l came to know about many good books and movies through this challenge. This challenge is making me to spend the quarantine period in a good and productive way.."
}
]

class Winner extends Component {
  constructor(){
    super();
    this.showModal=this.showModal.bind(this);
    this.hideModal=this.hideModal.bind(this);

  this.state={
    setIsOpen:false,
    value:""
  }}

  showModal=e=>{
    this.setState({
      setIsOpen:true,
      value:e.target.alt
    })
  };

  hideModal(){
    this.setState({
      setIsOpen:false
    })
  };
    render() {
          return(
<div>
  <h1 style={{textAlign:"center",marginTop:"10px",color :"bunting"}}>20-20 WINNERS</h1>
  {list.map((winner,index)=>
  <div key={index}>
<div className="gallery">
<button onClick={this.showModal}><img src={winner.src} alt={winner.name}/></button>
<div className="desc">{winner.name}</div></div></div>)}
{this.state.setIsOpen?(
 <div>
    {list.filter(data=>data.name===this.state.value).map((winner,index)=>(
     <div key={index}>
       <Modal show={this.state.setIsOpen} onHide={this.hideModal}  centered  size="lg" >

      <Modal.Header style={{backgroundColor:"#000080"}}>
        <Modal.Title style={{color:"white"}}>{winner.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{winner.description}</Modal.Body>
      <Modal.Footer>
        <button onClick={this.hideModal} style={{backgroundColor:"#000080",color:"white"}}>Close</button>
      </Modal.Footer>
    </Modal>
    </div>
  ))}
 </div> 
):(<div></div>)
}
</div>
 )}
 }
export default Winner;