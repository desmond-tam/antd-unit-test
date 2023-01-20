import React,{useState } from "React";


export const SearchContainer = ({url}) => {
    const [list,setList] = useState([]);

    fetch(url,{
        method:"GET"
    }).then(x => {
        setList(x);
    });



    const Bindlist = () => {
        const maplist = () => list.map(x => (<div>{x}</div>))
        return (
            <div>{maplist()}</div>
        )
    }

    return (
        <div>{list && list.length >0 && <Bindlist />}</div>
    )
}