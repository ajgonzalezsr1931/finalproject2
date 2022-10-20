let source = document.getElementById('card-template').innerHTML;
let template = Handlebars.compile(source);
let artists = [];
let item = [];

const loadItemsFromLocalStorage=()=> {
        
    for (let i = 0; i < localStorage.length; i++){
        artists.push(localStorage.key(i))
    }
    for (let i =0; i< artists.length; i++){
        item.push(JSON.parse(localStorage.getItem(artists[i])))
    }

}

// console.log(item)
loadItemsFromLocalStorage();





let content =     {
    "pieces": [
        {    
        src: "https://cdna.artstation.com/p/assets/images/images/034/485/090/large/ahmonza-kove-gwynn-dreamgod09.jpg?1612411390",
        pieceName: 'test',
        desc:"picture of the word test",
        price:"$50",
        artist:"Ahmonza"
    },
        {    
        src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        pieceName: 'nature',
        desc:"tree with sun in background",
        price:"$50",
        artist:"Iswarya"
    },
        {    
        src: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
        pieceName: 'test',
        desc:"picture of the word test",
        price:"$50",
        artist:"Yasmin"
    },
        {    
        src: "https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg",
        pieceName: 'test',
        desc:"picture of the word test",
        price:"$50",
        artist:"Yasmin"
    },
        {    
        src: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
        pieceName: 'test',
        desc:"picture of the word test",
        price:"$50",
        artist:"Yasmin"
    },
        {    
        src: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
        pieceName: 'test',
        desc:"picture of the word test",
        price:"$50",
        artist:"Yasmin"
    },
        {    
        src: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
        pieceName: 'test',
        desc:"picture of the word test",
        price:"$50",
        artist:"Yasmin"
    },
        {    
        src: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
        pieceName: 'test',
        desc:"picture of the word test",
        price:"$50",
        artist:"Yasmin"
    }
 ]
};
let cardData = template(content);
document.getElementById('cards').innerHTML= cardData;

