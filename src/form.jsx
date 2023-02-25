function App(){
    const movielist = [
        {
            name:"RRR",
            rating: "8.9"
        },
        {
            name:"Bahubali",
            rating: "8"
        },
        {
            name:"3 idiot",
            rating: "9.0"
        },
    ];

    function onClickHandler(movieName){
        alert(`You click on ${movieName}`);
    }

    return <>
        <h1>
            my favourate movie list
            {
                movielist.map(movie => <li onClick={()=>onClickHandler(movie.name)}>{movie.name}</li> )
            }
        </h1>
    </>
        

    

    // function onSubmitHandler(e){
    //     e.preventDefault();
    //     console.log('onSubmitHandler');

    // }
    // function onChangeHandler(e){
    //     console.log(e.target.value);

    // }

    // return <form onSubmit={onSubmitHandler}>
    //     <div>
    //     <label>Name</label>
    //     <input type="text" name="name" onChange={onChangeHandler}/>
    //     </div>
    //     <button type="submit">submit</button>
    // </form>
}

export default App;