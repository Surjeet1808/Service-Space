import "./partnercard.css"
export default function Pcard(params){
    return<>
         <div className="pcard">
             <i class="fa-solid fa-house-chimney-crack"></i>
            <img src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="" />
            <div className="info">
                 <p><b>Name:</b>{params.worker.name}</p>
                 <p><b>Proficiency:</b>{params.worker.Skill}</p>
                 <p><b>Location:</b>{params.worker.Location}</p>
                 <p><b>Contact:</b>+91{params.worker.Contact}</p>
            </div>
         </div>
    </>
}