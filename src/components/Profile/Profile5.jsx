export default function Profile2({data}) {
    return(
        <ul className="profile-info">
            <h3 className="info-title">Donation :</h3>
            <li className="profile-info-item">
                <strong className="profile-info-item-name">Total Donation Paid</strong>
                <strong>:</strong>
                <span>${data && data.paid.donation.completed}</span>
            </li>
            {/* <li className="profile-info-item">
                <strong className="profile-info-item-name">Pending</strong>
                <strong>:</strong>
                <span>${data.paid.due.pending}</span>
            </li>
            <li className="profile-info-item">
                <strong className="profile-info-item-name">Total Paid</strong>
                <strong>:</strong>
                <span>${data && data.paid.due.completed}</span>
            </li>
               <li className="profile-info-item">
                <strong className="profile-info-item-name">Canceled </strong>
                <strong>:</strong>
                <span>{data && data.paid.due.canceled}</span>
            </li>    */}
        </ul>
    )
}