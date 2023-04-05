const search = document.getElementById('search')
const matchList = document.getElementById('match-list')

const searchStates = async searchText =>{
    const res = await fetch('countries.json')
    const states = await res.json()
    

    let matches = states.filter(state=>{
        const regex = new RegExp(`^${searchText}`,'gi')
        return state.country.match(regex)||state.code.match(regex)
    })
    if(searchText.length===0){
        matches=[]
    }
    outPutHtml(matches)
     if(search.value===''){
            matchList.innerHTML = ''
        }
    
}

const  outPutHtml =matches=>{
    if(matches.length>0){
        const html = matches.map(match=>`
        <div class ="card card-body mb-1">
        <h4>${match.country}(${match.code})</h4>
        <small class="text-primary">Abbr: ${match.iso}</small>
        
        </div>
        `)
        .join('')
        matchList.innerHTML = html

}
       
}




search.addEventListener('input',()=>searchStates(search.value))