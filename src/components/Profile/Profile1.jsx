export default function Profile1({data= null}) {
    return(
        <ul className="profile-info">
            <h3 className="info-title">User Information :</h3>
            <li className="profile-info-item">
                <strong className="profile-info-item-name">Unic ID </strong>
                <strong>:</strong>
                <span>{data && data.uid}</span>
            </li>
            <li className="profile-info-item">
                <strong className="profile-info-item-name">Name</strong>
                <strong>:</strong>
                <span>{data && data.name}</span>
            </li>
            <li className="profile-info-item">
                <strong className="profile-info-item-name">Phone </strong>
                <strong>:</strong>
                <span>{data && data.phone}</span>
            </li>
            <li className="profile-info-item">
                <strong className="profile-info-item-name">Email </strong>
                <strong>:</strong>
                <span>{data && data.email}</span>
            </li>
        </ul>
    )
}