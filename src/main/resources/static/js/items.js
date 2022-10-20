import itemsController from './itemsController.js';
import login from './item-form.js';


    let artists=[];
    //let userName = document.getElementById('userName').value;
    // let pieceName = document.getElementById('namePiece').value;
    // let price = document.getElementById('add-price').value;
    // let description=document.getElementById('description').value;
    // let image=document.getElementById('img').value;
    // let tag = document.getElementById('tags').value;
    let addbtn= document.getElementById('itemSubmit');
    let loginBtn= document.getElementById('loginSubmit');
    let refreshbtn= document.getElementById('refresh');


    const addItems=()=>{
        let pieceName = document.getElementById('namePiece').value;
        let price = document.getElementById('add-price').value;
        let description=document.getElementById('description').value;
        let image=document.getElementById('img').value;
        let tag = document.getElementById('tags').value;
        //let addbtn= document.getElementById('itemSubmit');
        //let refreshbtn= document.getElementById('refresh');

        const userNameobj = new itemsController;
        userNameobj.addItem(pieceName,price,description,tag,image);
        //artist.push(userNameobj);
        
        localStorage.setItem(`${pieceName}`,JSON.stringify(userNameobj));
       
    }
    
    const loadItemsFromLocalStorage=()=> {
        
        for (let i = 0; i < localStorage.length; i++){
            //const storageItems = localStorage.getItem("items")
            let artist=localStorage.getItem(localStorage.key(i));
            if (artist) {
                artists.push(JSON.parse(artist))
            
        }
        
    }
}
    // addbtn.addEventListener('click',add);
    const submitLogin = () => {
        // let username= document.getElementById("userName").value;
        login("test16@test.com","12345abcde");
    }
    loginBtn.addEventListener('click', onload = submitLogin);

    // const reset=()=>{
    //     document.getElementById('namePiece').value='';
    //     document.getElementById('add-price').value='';
    //     document.getElementById('description').value='';
    //     document.getElementById('img').value='';
    //     document.getElementById('tags').value='';
        
    // }
    // refreshbtn.addEventListener("click",reset);
    // //loadItemsFromLocalStorage();
    // console.log(artists);