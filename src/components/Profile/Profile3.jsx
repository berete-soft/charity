export default function Profile3({data}) {
    return(
        <ul className="profile-info">
        <h3 className="info-title">Personal Information :</h3>
        <li className="profile-info-item">
            <strong className="profile-info-item-name">Date of Birth </strong>
            <strong>:</strong>
            <span>{data && data.date_of_birth}</span>
        </li>
        <li className="profile-info-item">
            <strong className="profile-info-item-name">Farther Name:</strong>
            <strong>:</strong>
            <span>{data && data.father_name}</span>
        </li>
        <li className="profile-info-item">
            <strong className="profile-info-item-name">Mother Name </strong>
            <strong>:</strong>
            <span>{data && data.mother_name}</span>
        </li>
        <li className="profile-info-item">
            <strong className="profile-info-item-name">Profession  </strong>
            <strong>:</strong>
            <span>{data && data.profession}</span>
        </li>
        <li className="profile-info-item">
            <strong className="profile-info-item-name">Nationality  </strong>
            <strong>:</strong>
            <span>{data && data.nationality}</span>
        </li>
        <li className="profile-info-item">
            <strong className="profile-info-item-name">Religion  </strong>
            <strong>:</strong>
            <span>{data && data.religion}</span>
        </li>
        <li className="profile-info-item">
            <strong className="profile-info-item-name">Gender  </strong>
            <strong>:</strong>
            <span>{data && data.gender}</span>
        </li>
        <li className="profile-info-item">
            <strong className="profile-info-item-name">Marital Status  </strong>
            <strong>:</strong>
            <span>{data && data.martial_status}</span>
        </li>
    </ul>
    )
}