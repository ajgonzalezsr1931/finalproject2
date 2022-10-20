let id=1;
// const imge= document.getElementById('trailimage');
// const artist = document.getElementById('trialname');
// const descrp = document.getElementById('trialpara');
 const login = (email,password) =>
        {
            fetch(`http://localhost:8080/login?email=${email}&password=${password}`,{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                }
                })
                .then(response => response.json())
                .then(data => {

                console.log('Success:', data);
                })
                .catch((error) => {
                console.error('Error:', error);
            })
            
        }

        

 export default class itemsController {
    constructor(){
        this.items=[];
        this.id;
        
    }
    addItem(pieceName,price,description,tag,image) {        
        this.items.push({
            id: id++,
            //user: user,
            "description": description,
            "tag":tag,
            "img": image,
            "price":price,
            "piecename":pieceName,
            "createdAt":new Date().toGMTString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
        })

        //this.currentId+=1;
        //this.currentId=this.currentId++;

            //add token

        add({description,tag,image,price,pieceName})
        {
            const data = {
                "description":description,
                "tag":tag,
                "image":image,
                "price":price,
                "piecename":pieceName

            };

            fetch('http://localhost:8080/api/v1/products/add',{
                method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
        }

        editById(id,description,tag,image,price,pieceName)
        {
            const data = {
                "description":description,
                "tag":tag,
                "image":image,
                "price":price,
                "piecename":pieceName
        };
        fetch(`http://localhost:8080/api/v1/products/edit/${id}`,{
            method:  'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });

        }
        deleteById(id)
        {
            fetch(`http://localhost:8080/api/v1/products/delete/${id}`,{
                method:  'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
                })
                .then(response => response.json())
                .then(data => {
                console.log('Success:', data);
                })
                .catch((error) => {
                console.error('Error:', error);
                });
        }
        findByTag(tag)
        {
            fetch(`http://localhost:8080/api/v1/products/get`,{
                method:  'GET',
                headers: {
                    'Content-Type':'application/json',
                }
                })
                .then(response => response.json())
                .then(data => {
                console.log('Success:', data);
                })
                .catch((error) => {
                console.error('Error:', error);
                });
        }
        findById(id,description,tag,image,price,pieceName)
        {
            const data = {
                "description":description,
                "tag":tag,
                "image":image,
                "price":price,
                "piecename":pieceName
        };
            fetch(`http://localhost:8080/api/v1/products/get/{id}`,{

                method:  'GET',
                headers: {
                    'Content-Type':'application/json',
                }
                })
                .then(response => response.json())
                .then(data => {

                console.log('Success:', data);
                })
                .catch((error) => {
                console.error('Error:', error);
                });
        }

        login(email,password)
        {
            fetch(`http://localhost:8080/login?email=${email}&password=${password}`,{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                }
                })
                .then(response =>{
                    console.log(...response.headers);

                console.log('Success:', data);
                })
                .catch((error) => {
                console.error('Error:', error);
            })
            
        }

        }
}
 