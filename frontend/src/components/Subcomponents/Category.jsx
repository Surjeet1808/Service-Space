import Service from "./Service"
export default function Category(props){
    
    return<>
    <h1>{props.data.category}</h1>
    
    <div className="group">
        {props.data.services.map((service)=>{
            return <Service service={service}/>
        })}
    </div>
    </>
}