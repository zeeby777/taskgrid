import jsonData from './zadanie_grid/posts.json'

function Grid({size}){ 
    function getRandomImgId(){
        let id = Math.floor(Math.random() * 40)
        if(id == 0){
            id = 1
        }
        let stringId = "";
        if(id < 10){
            stringId = "0" + id
        } else{
            stringId = id.toString()
        }
        return stringId
    }
    let limit = size * 6
    const data = JSON.parse(JSON.stringify(jsonData))

    return(
        <div className="griddy">
            {data.slice(0, limit).map((item, index) => (
                <div key={index} className="gridItem">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <p>Użytkownik {item.userId}, id posta: {item.id}</p>
                    <img src={require('./zadanie_grid/icons/Icon14_'+ getRandomImgId() + '.png')} />
                </div>
            ))}
        </div>
    )
}

export default Grid