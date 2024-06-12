

 const  ReviewsData = [
    {
    name : "Pratik Jadhav",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    replies: [ {
        name : "Pratik Jadhav",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        replies: [ {
            name : "Pratik Jadhav",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
            replies: [ ]
           }, ]
       },]
   },
    {
    name : "Pratik Jadhav",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    replies: [ ]
   },
    {
    name : "Pratik Jadhav",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    replies: [ {
        name : "Pratik Jadhav",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        replies: [ ]
       }, ]
   },
    {
    name : "Pratik Jadhav",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    replies: [{
        name : "Pratik Jadhav",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        replies: [{
            name : "Pratik Jadhav",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
            replies: [ {
                name : "Pratik Jadhav",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
                replies: [ {
                    name : "Pratik Jadhav",
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
                    replies: [ ]
                   },]
               },]
           }, ]
       }, ]
   },
    {
    name : "Pratik Jadhav",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    replies: [ ]
   },
    {
    name : "Pratik Jadhav",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    replies: [{
        name : "Pratik Jadhav",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        replies: [ ]
       }, ]
   },
]

const Review = ({data}) => {
    const {name, text , replies} = data;
    return <div className='bg-gray-300 p-2 rounded-xl '>
        <p className='font-semibold'>{name} </p>
        <p>{text} </p>
        
    </div>
}

const ReviewsList = ({Reviews}) => {
 return Reviews.map((review ,index) => ( 
     <div key={index}  className=' p-2 border-l-2 flex flex-col flex-wrap '>
    <Review data={review} />

   <div className=' ml-7 my-2 '> 
    <ReviewsList   Reviews ={review.replies} />
     </div>

   </div>

));
}


const ReviewsContainer = () => {


  return (
    <div className='p-5 '>
      <h1 className='font-bold text-xl'>Reviews: </h1>
         <ReviewsList Reviews={ReviewsData} />
    </div>
  )
}

export default ReviewsContainer
