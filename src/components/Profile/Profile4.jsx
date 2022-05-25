export default function Profile4({data}) {
    return(
        <>
        
        <ul className="profile-info">
        <h3 className="info-title">Address :</h3>
            <li className="profile-info-item">
                <strong className="profile-info-item-name">Country </strong>
                <strong>:</strong>
                <span>{data && data.country}</span>
            </li>
            <li className="profile-info-item">
                <strong className="profile-info-item-name">State</strong>
                <strong>:</strong>
                <span>{data && data.state}</span>
            </li>
            <li className="profile-info-item">
                <strong className="profile-info-item-name">City </strong>
                <strong>:</strong>
                <span>{data && data.city}</span>
            </li>
            <li className="profile-info-item">
                <strong className="profile-info-item-name">Postal code </strong>
                <strong>:</strong>
                <span>{data && data.postal_code}</span>
            </li>
            <li className="profile-info-item">
                <strong className="profile-info-item-name">Address </strong>
                <strong>:</strong>
                <span>{data && data.present_address}</span>
            </li>
        </ul>
        </>
    )
}